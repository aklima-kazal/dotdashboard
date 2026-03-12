# Auth System Quick Start Guide

## Getting Started in 3 Steps

### Step 1: Start the Development Server
```bash
npm run dev
```

### Step 2: Open in Browser
Navigate to: `http://localhost:3000/auth/login`

### Step 3: Login with Demo Account
- **Email**: demo@example.com
- **Password**: demo123

## Key Files

| File | Purpose |
|------|---------|
| `lib/auth.js` | Authentication utilities (passwords, tokens) |
| `components/AuthProvider.jsx` | Global auth state management |
| `app/auth/login/page.jsx` | Login page |
| `app/auth/register/page.jsx` | Registration page |
| `app/api/auth/login/route.js` | Login API |
| `app/api/auth/register/route.js` | Registration API |
| `middleware.js` | Route protection |
| `.env.local` | Environment variables |

## Common Tasks

### Task 1: Use User Info in a Component
```jsx
'use client';
import { useAuth } from '@/components/auth/AuthProvider';

export default function Component() {
  const { user } = useAuth();
  return <p>Hello, {user?.name}!</p>;
}
```

### Task 2: Protect a Page
```jsx
'use client';
import { withAuth } from '@/lib/withAuth';

function MyPage() {
  return <div>Only logged-in users see this</div>;
}

export default withAuth(MyPage);
```

### Task 3: Add Custom User Fields
1. Update user object in `lib/auth.js`
2. Modify registration form in `app/auth/register/page.jsx`
3. Add fields to API endpoint `app/api/auth/register/route.js`

### Task 4: Change JWT Expiration
In `lib/auth.js`, change:
```javascript
{ expiresIn: '7d' }  // Change to '14d', '30d', etc.
```

### Task 5: Deploy to Production
1. Update `.env.local` with production `JWT_SECRET`
2. Set up database (replace in-memory storage)
3. Upload `.env.local` to your hosting platform
4. Run `npm run build && npm start`

## Full Documentation

See `AUTH_DOCUMENTATION.md` for detailed information about:
- API endpoints
- Database integration
- Role-based access control
- Deployment guides
- Troubleshooting

## UI Features

- ✅ Clean, modern login/register forms
- ✅ Error messages
- ✅ Loading states
- ✅ User menu with logout in header
- ✅ Responsive design
- ✅ Dark/light theme support

## What's Included

✅ JWT-based authentication
✅ Password hashing with bcryptjs
✅ Protected routes with middleware
✅ User context and hooks
✅ Login/Register pages
✅ User profile display
✅ Demo credentials
✅ Production-ready setup
✅ Comprehensive documentation

Start building!
