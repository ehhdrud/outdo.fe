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
