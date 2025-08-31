# 프로젝트 디자인 컨셉

## GitHub 다크모드 컨셉 준수

이 프로젝트는 **GitHub 다크모드의 디자인 컨셉을 준수**합니다.

### 핵심 디자인 원칙

- **어두운 배경색 계열**: 검은색과 회색 톤 위주
- **미니멀한 UI**: 깔끔하고 직관적인 인터페이스
- **일관된 색상 시스템**: GitHub의 색상 팔레트와 유사한 톤 사용
- **모던하고 전문적인 느낌**: 개발자 친화적 디자인

### 적용 영역

- 전체 컴포넌트 디자인
- 색상 선택 및 배경
- 타이포그래피 스타일
- 버튼 및 상호작용 요소

---

# Project Page Routing Structure

## Dashboard

- Path: `/`
- Description: Home page of the application

## Authentication

### Login

- Path: `/auth`
- Description: User login page

### Sign Up

- Path: `/auth/sign-up`
- Description: User registration page

### Password Recovery

- Path: `/auth/find-pw`
- Description: Password recovery/reset page

## Routine Management

### Routine List

- Path: `/routine`
- Description: List of user's routines

### Routine Details

- Path: `/routine/:id`
- Description: Detailed view of a specific routine
- Dynamic routing with routine ID parameter

## Implementation Notes

- Implement GitHub-like menu navigation
- Ensure smooth client-side routing
- Create corresponding route components for each path

---

# CSS 및 레이아웃 가이드라인

## 반응형 디자인 제약사항

### 최대 너비 제한

- **전체 앱 최대 너비**: `600px`
- **컨테이너들은 이 제약 내에서 동작**해야 함

### 미디어 쿼리 사용 원칙

- **미디어 쿼리는 아주 예외적인 경우에만 사용**
- 600px 이하에서 모든 레이아웃이 완성되어야 함
- 불필요한 브레이크포인트 (768px, 1200px 등) **절대 금지**

### 권장 레이아웃 방식

- **무조건 Flex Column 사용**: `display: flex; flex-direction: column;`
- Grid 레이아웃 사용 금지
- 세로 스택 형태로 카드들을 배치
- 단순하고 일관된 레이아웃 유지

### 예외적 미디어 쿼리 사용 사례

- SummaryChart처럼 데이터 밀도 조정이 필요한 경우에만
- 480px, 540px 등 특정 기능에 필요한 경우에만

---

# Import Path 가이드라인

## 절대경로 사용 원칙

### 필수 사용: @ 경로 Alias

```typescript
// ✅ 올바른 방법 - @ alias 사용
import Badge from '@/components/common/Badge/Badge';
import { theme } from '@/styles/theme';
import Header from '@/components/Header/Header';

// ❌ 잘못된 방법 - 상대경로 사용 금지
import Badge from '../../components/common/Badge/Badge';
import { theme } from '../../../styles/theme';
import Header from '../Header/Header';
```

### 설정

- **TypeScript Config**: `tsconfig.app.json`에서 `@/*: src/*` 경로 설정됨
- **모든 컴포넌트, 스타일, 유틸리티 import시 @ 사용 필수**

### 예외 케이스

- 같은 디렉토리 내 파일: `import * as S from './Component.style'`
- 직계 하위 컴포넌트: 상대경로 허용하되 @ 경로 권장

---

# 코드 형식 가이드라인 (ESLint/Prettier)

## Import 문 정렬 규칙

### simple-import-sort 순서

```typescript
// 1. Side effect imports (빈 줄로 구분)
import './global.css';

// 2. Node modules - expo
import { StatusBar } from 'expo-status-bar';

// 3. Node modules - react
import React from 'react';
import { useState, useEffect } from 'react';

// 4. Node modules - @ scoped packages
import styled from '@emotion/styled';

// 5. Node modules - 일반 패키지
import axios from 'axios';

// 6. @ alias imports (프로젝트 내부)
import Badge from '@/components/common/Badge/Badge';
import { theme } from '@/styles/theme';

// 7. 상대경로 imports (같은 디렉토리 또는 상위)
import * as S from './Component.style';
import ChildComponent from './ChildComponent';
```

## Prettier 설정

```json
{
	"printWidth": 160,
	"useTabs": true,
	"tabWidth": 2,
	"singleQuote": true,
	"trailingComma": "es5",
	"bracketSpacing": true,
	"semi": true,
	"arrowParens": "always"
}
```

## 필수 규칙

- **Tab 사용**: 들여쓰기는 탭 2칸
- **세미콜론**: 필수 사용
- **Single Quote**: 작은따옴표 사용
- **Import 정렬**: simple-import-sort 플러그인 순서 준수
- **Line Width**: 160자 제한

---

# 라이브러리 스택 정의

## 핵심 라이브러리 선택

### 폼 관리 및 유효성 검사

- **React Hook Form**: 고성능 폼 상태 관리
- **Zod**: TypeScript-first 스키마 검증
- **@hookform/resolvers**: React Hook Form과 Zod 연동

### 상태 관리

- **Zustand**: 초경량 상태 관리 라이브러리

## 설치 명령어

```bash
npm install react-hook-form zod @hookform/resolvers zustand
```

## 특징 및 장점

### React Hook Form

- 최소한의 리렌더링으로 뛰어난 성능
- React Native 완벽 지원
- 직관적인 API와 TypeScript 지원
- Controller를 통한 커스텀 컴포넌트 연동

### Zod

- 런타임 및 컴파일 타임 타입 안전성
- 직관적인 스키마 정의
- React Native 환경 지원
- 상세한 에러 메시지 제공

### Zustand

- 보일러플레이트 코드 최소화 (2KB)
- React Native 완벽 지원
- TypeScript 친화적
- 간단한 API로 빠른 개발 가능

## 사용 패턴

### 폼 검증 예시

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
	email: z.string().email('올바른 이메일 형식이 아닙니다'),
	password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다'),
});

type FormData = z.infer<typeof schema>;

const {
	register,
	handleSubmit,
	formState: { errors },
} = useForm<FormData>({
	resolver: zodResolver(schema),
});
```

### 상태 관리 예시

```typescript
import { create } from 'zustand';

interface AuthState {
	user: User | null;
	isLoading: boolean;
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
	user: null,
	isLoading: false,
	login: async (email, password) => {
		set({ isLoading: true });
		// 로그인 로직
		set({ isLoading: false });
	},
	logout: () => set({ user: null }),
}));
```

---

# 폰트 시스템 가이드라인

## 폰트 패밀리 규칙

### 단일 폰트 사용 원칙

- **필수**: `'Inter'` 폰트만 사용
- **금지**: 다른 폰트 패밀리 추가 사용 금지

### 적용 위치

- **global.ts**: `font-family: 'Inter', sans-serif;`로 전역 설정
- **모든 컴포넌트**: 별도 폰트 지정 금지, global 상속 사용

### 예외 사항

- **아이콘 폰트**: 아이콘 전용 폰트는 허용
- **브랜딩**: 로고나 특별한 브랜딩 요소에만 예외 적용 가능

### 규칙 준수

```css
/* ✅ 올바른 방법 */
font-family: 'Inter', sans-serif;

/* ❌ 금지된 방법 */
font-family: 'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
font-family: 'Pretendard', 'Inter', sans-serif;
```

---

# 코드 작성 규칙

## 주석 사용 금지

### 기본 원칙

- **모든 주석 사용 금지**: 한줄 주석(//) 및 블록 주석(/* */) 사용 금지
- **자명한 코드 작성**: 주석 없이도 이해할 수 있는 코드 작성
- **의미있는 변수명과 함수명**: 설명이 필요 없는 명확한 네이밍

### 금지 사항

```typescript
// ❌ 금지된 방법 - 주석 사용
// 사용자 정보를 가져오는 함수
const getUserInfo = () => {
  // API 호출
  return fetch('/api/user');
};

/* 
 * 다중 줄 주석도 금지
 */
const multiLineExample = () => {};

// TODO: 나중에 구현 - 이런 주석도 금지
```

### 올바른 방법

```typescript
// ✅ 올바른 방법 - 의미 있는 네이밍으로 주석 대체
const fetchUserInfo = async () => {
  return fetch('/api/user');
};

const validateEmailFormat = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
```

### 예외 사항

- **TypeScript 참조 지시문**: `/// <reference types="..." />` 허용 (vite-env.d.ts만)
- **빌드 설정 파일**: vite.config.ts의 설정 관련 주석만 예외적 허용
- **절대 금지**: TODO, FIXME, HACK, NOTE 등 모든 개발 주석

---

# 트러블슈팅

## SummaryChart CSS Grid Overflow 디버깅 요약

### 문제

SummaryChart의 DaySquare들이 GridContainer 너비를 미묘하게 초과하여 overflow 발생

### 원인 분석

1. **Border 문제**: `box-sizing: border-box` 추가했지만 해결 안됨
2. **Width 계산 문제**: `width: calc(100% - 24px)` 올바른 계산이었음
3. **실제 원인**: CSS Grid `1fr` 사용 시 Grid item이 내용에 따라 자동 확장

### 해결책

```css
/* Before - 문제 있음 */
grid-template-columns: repeat(19, 1fr);

/* After - 해결됨 */
grid-template-columns: repeat(19, minmax(0, 1fr));
```

### 원리

- `1fr`: Grid item이 내용 크기에 따라 확장 가능
- `minmax(0, 1fr)`: 최소 크기를 0으로 제한하여 컨테이너 크기 절대 초과 방지

### 적용 위치

- 19열 (~479px): `repeat(19, minmax(0, 1fr))` - 133일 표시
- 23열 (480-539px): `repeat(23, minmax(0, 1fr))` - 161일 표시
- 26열 (540px+): `repeat(26, minmax(0, 1fr))` - 182일 표시
