# API 연동 가이드

## 개요

이 문서는 outdo.fe(프론트엔드)와 outdo.be(백엔드) 간의 API 연동 방법과 현재 상태를 정리합니다.

---

## 1. API 기본 설정

### 환경 변수

```env
VITE_BASE_URL=http://localhost:3000        # 메인 API
VITE_BASE_URL_AUTH=http://localhost:3000   # 인증 API (동일 서버)
VITE_ACCEPT=application/json
```

### Axios 인스턴스

| 인스턴스 | 용도 | 파일 위치 |
|---------|------|----------|
| `mainApi` | 인증된 API 호출 (토큰 자동 첨부) | `src/api/index.ts` |
| `authApi` | 인증 관련 API (로그인, 회원가입) | `src/api/index.ts` |

---

## 2. 인증 흐름

### 2.1 로그인/회원가입

```
[FE] POST /auth/signin or /auth/signup
  ↓
[BE] 검증 후 토큰 발급
  ↓
[FE] access_token, refresh_token 저장 (useTokenStore)
```

### 2.2 인증된 요청

```
[FE] API 호출
  ↓
[Request Interceptor] Authorization: Bearer <access_token> 헤더 추가
  ↓
[BE] JWT 검증
  ↓
[Response] 성공 또는 401 에러
```

### 2.3 토큰 갱신

```
[BE] 401 Unauthorized 응답
  ↓
[FE] POST /auth/renewalToken { refresh_token }
  ↓
[BE] 새 access_token 발급
  ↓
[FE] 토큰 저장 후 원래 요청 재시도
```

---

## 3. API 엔드포인트 목록

### 3.1 인증 (Auth)

| Method | Endpoint | 인증 | 설명 |
|--------|----------|:----:|------|
| POST | `/auth/signup` | X | 회원가입 |
| POST | `/auth/signin` | X | 로그인 |
| GET | `/auth/google` | X | Google OAuth 시작 |
| GET | `/auth/google/callback` | X | Google OAuth 콜백 |
| POST | `/auth/renewalToken` | X | 토큰 갱신 |
| POST | `/auth/changePassword` | O | 비밀번호 변경 |

### 3.2 사용자 (Users)

| Method | Endpoint | 인증 | 설명 |
|--------|----------|:----:|------|
| GET | `/users/profile` | O | 프로필 조회 |
| PATCH | `/users/profile` | O | 프로필 수정 |

### 3.3 루틴 (Routines)

| Method | Endpoint | 인증 | 설명 |
|--------|----------|:----:|------|
| POST | `/routines` | O | 루틴 생성 |
| GET | `/routines` | O | 루틴 목록 조회 |
| GET | `/routines/:routine_pk/today` | O | 오늘의 루틴 세션 조회 |
| GET | `/routines/by-date?routine_pk=&date=` | O | 특정 날짜 루틴 조회 |
| POST | `/routines/:routine_pk/days/today` | O | 오늘의 루틴 저장 |
| POST | `/routines/:routine_pk/days` | O | 특정 날짜 루틴 저장 |
| PATCH | `/routines/:routine_pk` | O | 루틴 이름 수정 |
| DELETE | `/routines/:routine_pk` | O | 루틴 삭제 |

### 3.4 대시보드 (Dashboard)

| Method | Endpoint | 인증 | 설명 |
|--------|----------|:----:|------|
| GET | `/dashboard/activities?startDate=&endDate=` | O | 기간별 활동 조회 |
| GET | `/dashboard/achievements` | O | 최근 성과 조회 |

---

## 4. Request/Response 형식

### 4.1 공통 응답 형식

**성공**
```json
{
  "success": true,
  "data": { ... }
}
```

**실패**
```json
{
  "success": false,
  "message": "에러 메시지",
  "extras": {
    "rs_code": "ERROR_CODE"  // 선택적
  }
}
```

### 4.2 인증 API

#### 회원가입 - POST /auth/signup

```typescript
// Request
{
  email: string;      // 이메일 형식
  password: string;   // 최소 6자
  name: string;       // 필수
}

// Response
{
  success: true,
  data: {
    access_token: string;
    refresh_token: string;
  }
}
```

#### 로그인 - POST /auth/signin

```typescript
// Request
{
  email: string;
  password: string;
}

// Response
{
  success: true,
  data: {
    access_token: string;
    refresh_token: string;
  }
}
```

#### 토큰 갱신 - POST /auth/renewalToken

```typescript
// Request
{
  refresh_token: string;
}

// Response
{
  success: true,
  data: {
    access_token: string;
  }
}
```

#### 비밀번호 변경 - POST /auth/changePassword

```typescript
// Request
{
  current_password: string;  // 현재 비밀번호
  new_password: string;      // 새 비밀번호 (최소 6자)
}

// Response
{
  success: true,
  data: { ... }
}
```

### 4.3 사용자 API

#### 프로필 조회 - GET /users/profile

```typescript
// Response
{
  success: true,
  data: {
    user_pk: number;
    email: string;
    name: string;
    bio: string | null;
    google_id: string | null;
  }
}
```

#### 프로필 수정 - PATCH /users/profile

```typescript
// Request
{
  name?: string;    // 1-100자
  bio?: string;     // 선택
}

// Response
{
  success: true,
  data: { ... }  // 수정된 프로필
}
```

### 4.4 루틴 API

#### 루틴 생성 - POST /routines

```typescript
// Request
{
  routine_name: string;  // 1-100자
  workouts: [
    {
      workout_name: string;
      order?: number;        // 기본값 0
      notes?: string | null;
      sets: [
        {
          weight?: number | null;
          reps: number;      // 최소 1
        }
      ]
    }
  ]
}

// Response
{
  success: true,
  data: { ... }  // 생성된 루틴
}
```

#### 루틴 목록 - GET /routines

```typescript
// Response
{
  success: true,
  data: [
    {
      routine_pk: number;
      routine_name: string;
      created_at: string;
      updated_at: string;
      latest_session?: {
        routine_day_pk: number;
        session_date: string;
        workouts: [ ... ]
      }
    }
  ]
}
```

#### 오늘의 루틴 세션 - GET /routines/:routine_pk/today

```typescript
// Response
{
  success: true,
  data: {
    routine_day_pk: number;
    session_date: string;
    workouts: [
      {
        routine_day_workout_pk: number;
        workout_name: string;
        order: number;
        notes: string | null;
        sets: [
          {
            routine_day_set_pk: number;
            set_order: number;
            weight: number | null;
            reps: number;
          }
        ]
      }
    ]
  }
}
```

#### 특정 날짜 루틴 조회 - GET /routines/by-date

```typescript
// Query Params
routine_pk: number;
date: string;  // YYYY-MM-DD

// Response - 동일 형식 (RoutineDay)
```

#### 오늘의 루틴 저장 - POST /routines/:routine_pk/days/today

```typescript
// Request
{
  workouts?: [
    {
      workout_name: string;
      order?: number;
      notes?: string | null;
      sets: [{ weight?: number | null; reps: number; }]
    }
  ]
}

// Response
{
  success: true,
  data: { ... }  // 저장된 RoutineDay
}
```

#### 특정 날짜 루틴 저장 - POST /routines/:routine_pk/days

```typescript
// Request
{
  session_date: string;  // YYYY-MM-DD (필수)
  workouts?: [ ... ]     // 위와 동일
}

// Response
{
  success: true,
  data: { ... }
}
```

#### 루틴 이름 수정 - PATCH /routines/:routine_pk

```typescript
// Request
{
  routine_name: string;  // 1-100자
}

// Response
{
  success: true,
  data: { ... }
}
```

#### 루틴 삭제 - DELETE /routines/:routine_pk

```typescript
// Response
{
  success: true,
  data: { ... }
}
```

### 4.5 대시보드 API

#### 활동 조회 - GET /dashboard/activities

```typescript
// Query Params
startDate: string;  // YYYY-MM-DD
endDate: string;    // YYYY-MM-DD

// Response
{
  success: true,
  data: [
    {
      date: string;
      activity: 0 | 1 | 2;        // 0: 없음, 1: 일반, 2: 성과
      routine_name: string | null;
      routine_pk: number | null;
      routine_day_pk: number | null;
      achievement: number | null;  // 볼륨 증가량
      has_max_weight_achieved: boolean;
      max_weight_records: [
        {
          workout_name: string;
          order: number;
          max_weight: number;
        }
      ] | null;
      is_new_routine: boolean;
    }
  ]
}
```

#### 성과 조회 - GET /dashboard/achievements

```typescript
// Response
{
  success: true,
  data: [
    {
      date: string;
      routine_name: string;
      routine_pk: number;
      routine_day_pk: number;
      achievement: number;  // 총 무게 증가량
      workouts: [
        {
          workout_name: string;
          order: number;
          weight_increase: number;
          previous_max_weight: number;
          current_max_weight: number;
        }
      ]
    }
  ]
}
```

---

## 5. FE/BE 불일치 사항 및 수정 필요 항목

### 5.1 Authorization 헤더 형식 ⚠️

| 구분 | 현재 상태 | 수정 필요 |
|------|----------|----------|
| FE | `Authorization: <token>` | `Authorization: Bearer <token>` |
| BE | `Bearer <token>` 기대 | - |

**수정 위치:** `src/api/index.ts`

```typescript
// Before
config.headers['Authorization'] = useTokenStore.getState().getAccessToken();

// After
const token = useTokenStore.getState().getAccessToken();
config.headers['Authorization'] = token ? `Bearer ${token}` : null;
```

### 5.2 토큰 만료 에러 처리 ⚠️

| 구분 | 현재 상태 | 수정 필요 |
|------|----------|----------|
| FE | `DOE3000` 코드 체크 | HTTP 401 상태 코드로 변경 |
| BE | 401 Unauthorized 반환 | - |

**수정 위치:** `src/api/index.ts`

```typescript
// Before
if (data.extras?.rs_code === 'DOE3000') {
  // 토큰 갱신
}

// After
if (error.response?.status === 401) {
  // 토큰 갱신 시도
}
```

### 5.3 Google OAuth 콜백 페이지 ⚠️

| 구분 | 현재 상태 | 수정 필요 |
|------|----------|----------|
| FE | 콜백 페이지 없음 | `/auth/callback` 라우트 추가 |
| BE | redirect_url이 `/auth/callback`으로 리다이렉트 | - |

**추가 필요:**
1. `src/pages/Auth/Callback/Callback.tsx` 페이지 생성
2. URL 파라미터에서 토큰 추출 및 저장 (`?access_token=...&refresh_token=...`)
3. 라우터에 `/auth/callback` 추가

### 5.4 비밀번호 찾기 API 미구현 ⚠️

| 구분 | 현재 상태 | 수정 필요 |
|------|----------|----------|
| FE | `FindPassword.tsx` 페이지 존재 | - |
| BE | 비밀번호 찾기/재설정 API 없음 | API 구현 필요 |

**BE 추가 필요:**
1. `POST /auth/find-password` - 비밀번호 재설정 이메일 발송
2. `POST /auth/reset-password` - 새 비밀번호 설정 (토큰 검증)

---

## 6. React Query 사용 가이드

### 6.1 설정 (이미 완료)

```typescript
// App.tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: false,
    },
  },
});
```

### 6.2 사용 예시

```typescript
// hooks/useProfile.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/api';

// 프로필 조회
export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => api.get('/users/profile'),
  });
};

// 프로필 수정
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { name?: string; bio?: string }) =>
      api.patch('/users/profile', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};
```

---

## 7. 에러 처리

### 7.1 HTTP 상태 코드

| 코드 | 의미 | 처리 |
|------|------|------|
| 400 | Bad Request | 입력값 검증 실패 |
| 401 | Unauthorized | 토큰 갱신 시도 → 실패시 로그아웃 |
| 403 | Forbidden | 권한 없음 |
| 404 | Not Found | 리소스 없음 |
| 500 | Server Error | 서버 에러 토스트 표시 |

### 7.2 네트워크 에러

| 에러 코드 | 의미 | 처리 |
|----------|------|------|
| ERR_NETWORK | 네트워크 연결 실패 | "네트워크 연결을 확인해주세요" |
| ERR_BAD_RESPONSE | 서버 응답 없음 | "서버가 응답하지 않습니다" |
| ECONNABORTED | 요청 시간 초과 | "요청 시간이 초과되었습니다" |

---

## 8. 타입 정의 (추가 필요)

```typescript
// types/api.ts

// 공통 응답
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

interface ApiError {
  success: false;
  message: string;
  extras?: {
    rs_code?: string;
  };
}

// 인증
interface AuthTokens {
  access_token: string;
  refresh_token: string;
}

// 사용자
interface User {
  user_pk: number;
  email: string;
  name: string;
  bio: string | null;
  google_id: string | null;
}

// 루틴
interface RoutineSet {
  routine_day_set_pk?: number;
  set_order: number;
  weight: number | null;
  reps: number;
}

interface RoutineWorkout {
  routine_day_workout_pk?: number;
  workout_name: string;
  order: number;
  notes: string | null;
  sets: RoutineSet[];
}

interface RoutineDay {
  routine_day_pk: number;
  session_date: string;
  workouts: RoutineWorkout[];
}

interface Routine {
  routine_pk: number;
  routine_name: string;
  created_at: string;
  updated_at: string;
  latest_session?: RoutineDay;
}

// 대시보드
interface DayActivity {
  date: string;
  activity: 0 | 1 | 2;
  routine_name: string | null;
  routine_pk: number | null;
  routine_day_pk: number | null;
  achievement: number | null;
  has_max_weight_achieved: boolean;
  max_weight_records: {
    workout_name: string;
    order: number;
    max_weight: number;
  }[] | null;
  is_new_routine: boolean;
}

interface AchievementDetail {
  date: string;
  routine_name: string;
  routine_pk: number;
  routine_day_pk: number;
  achievement: number;
  workouts: {
    workout_name: string;
    order: number;
    weight_increase: number;
    previous_max_weight: number;
    current_max_weight: number;
  }[];
}

// Request DTOs
interface ChangePasswordRequest {
  current_password: string;
  new_password: string;
}

interface CreateRoutineRequest {
  routine_name: string;
  workouts: {
    workout_name: string;
    order?: number;
    notes?: string | null;
    sets: { weight?: number | null; reps: number }[];
  }[];
}

interface SaveRoutineDayRequest {
  session_date?: string;  // 특정 날짜 저장시 필수
  workouts?: {
    workout_name: string;
    order?: number;
    notes?: string | null;
    sets: { weight?: number | null; reps: number }[];
  }[];
}
```

---

## 9. 체크리스트

### 연동 전 필수 수정

- [ ] Authorization 헤더에 `Bearer` 접두사 추가
- [ ] 토큰 만료 처리를 HTTP 401로 변경
- [ ] Google OAuth 콜백 페이지 구현
- [ ] API 타입 정의 추가

### 페이지별 연동 작업

| FE 페이지 | 라우트 | BE 엔드포인트 | 상태 |
|----------|--------|--------------|------|
| 로그인 | `/auth` | `POST /auth/signin` | 연동 필요 |
| 회원가입 | `/auth/sign-up` | `POST /auth/signup` | 연동 필요 |
| Google OAuth 콜백 | `/auth/callback` | `GET /auth/google/callback` | ⚠️ FE 페이지 생성 필요 |
| 비밀번호 찾기 | `/auth/find-pw` | - | ⚠️ BE API 미구현 |
| 대시보드 | `/` | `GET /dashboard/activities`, `GET /dashboard/achievements` | 연동 필요 |
| 루틴 목록 | `/routines` | `GET /routines` | 연동 필요 |
| 루틴 상세 | `/routines/:id` | `GET /routines/:id/today`, `POST /routines/:id/days/today` | 연동 필요 |
| 프로필 | `/profile` | `GET /users/profile`, `PATCH /users/profile` | 연동 필요 |
| 비밀번호 변경 | `/profile/change-password` | `POST /auth/changePassword` | 연동 필요 |

### 연동 체크리스트

- [ ] 로그인 페이지 - `POST /auth/signin` 연동
- [ ] 회원가입 페이지 - `POST /auth/signup` 연동
- [ ] Google OAuth 콜백 페이지 생성 및 연동
- [ ] 프로필 페이지 - `GET/PATCH /users/profile` 연동
- [ ] 루틴 목록 페이지 - `GET /routines` 연동
- [ ] 루틴 상세 페이지 - `GET /routines/:id/today`, `POST /routines/:id/days/today` 연동
- [ ] 대시보드 페이지 - `GET /dashboard/activities`, `GET /dashboard/achievements` 연동
- [ ] 비밀번호 변경 - `POST /auth/changePassword` 연동
- [ ] (BE) 비밀번호 찾기 API 구현
