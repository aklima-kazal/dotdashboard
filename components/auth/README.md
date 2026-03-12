# Auth Components

This folder contains all authentication-related React components.

## Components

- **AuthProvider.jsx** - React Context provider for global authentication state
  - Manages user data, login, register, logout
  - Provides `useAuth()` hook for accessing auth state

## Usage

```jsx
// In layout or root component
import { AuthProvider } from '@/components/auth/AuthProvider';

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
```

```jsx
// In any component
'use client';
import { useAuth } from '@/components/auth/AuthProvider';

export default function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();
  // ...
}
```

## Related Files

- `lib/auth.js` - Authentication utilities (JWT, password hashing, etc.)
- `lib/withAuth.jsx` - HOC for protecting components
- `app/auth/` - Login and registration pages
- `app/api/auth/` - Authentication API endpoints
