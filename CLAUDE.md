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
- 19열 (기본): `repeat(19, minmax(0, 1fr))`
- 23열 (480px+): `repeat(23, minmax(0, 1fr))`
- 26열 (540px+): `repeat(26, minmax(0, 1fr))`

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
