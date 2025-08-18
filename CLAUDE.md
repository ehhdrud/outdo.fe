# SummaryChart CSS Grid Overflow 디버깅 요약

## 문제
SummaryChart의 DaySquare들이 GridContainer 너비를 미묘하게 초과하여 overflow 발생

## 원인 분석
1. **Border 문제**: `box-sizing: border-box` 추가했지만 해결 안됨
2. **Width 계산 문제**: `width: calc(100% - 24px)` 올바른 계산이었음
3. **실제 원인**: CSS Grid `1fr` 사용 시 Grid item이 내용에 따라 자동 확장

## 해결책
```css
/* Before - 문제 있음 */
grid-template-columns: repeat(19, 1fr);

/* After - 해결됨 */
grid-template-columns: repeat(19, minmax(0, 1fr));
```

## 원리
- `1fr`: Grid item이 내용 크기에 따라 확장 가능
- `minmax(0, 1fr)`: 최소 크기를 0으로 제한하여 컨테이너 크기 절대 초과 방지

## 적용 위치
- 19열 (~479px): `repeat(19, minmax(0, 1fr))` - 133일 표시
- 23열 (480-539px): `repeat(23, minmax(0, 1fr))` - 161일 표시  
- 26열 (540px+): `repeat(26, minmax(0, 1fr))` - 182일 표시

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
