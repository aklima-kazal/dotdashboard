# Authentication System Documentation

## Overview

A complete JWT-based authentication system has been implemented for your News Dashboard. This system includes:

- **Login Page**: `/auth/login`
- **Registration Page**: `/auth/register`
- **Protected Routes**: All dashboard pages require authentication
- **User Context**: Global user state management with React Context
- **JWT Tokens**: Secure token-based authentication
- **HTTP-only Cookies**: Secure token storage

## Features

### 1. **User Authentication**
- Email/password based login
- User registration with validation
- Automatic token generation and storage
- Session management with 7-day expiration

### 2. **Protected Pages**
- Middleware automatically redirects unauthenticated users to login
- All dashboard pages require valid authentication
- Auth pages (login/register) are publicly accessible

### 3. **User Management**
- User profile stored in context
- Role-based system (admin, user)
- Logout functionality with token cleanup

### 4. **Demo Account**
- Email: `demo@example.com`
- Password: `demo123`
- Role: admin

## Project Structure

```
app/
├── auth/
│   ├── login/
│   │   └── page.jsx          # Login page
│   └── register/
│       └── page.jsx          # Registration page
├── api/
│   └── auth/
│       ├── login/
│       │   └── route.js      # Login API endpoint
│       ├── register/
│       │   └── route.js      # Registration API endpoint
│       ├── logout/
│       │   └── route.js      # Logout API endpoint
│       └── me/
│           └── route.js      # Get current user endpoint
└── layout.jsx                # Root layout with AuthProvider

components/
├── AuthProvider.jsx          # Auth context and provider

lib/
├── auth.js                   # Auth utilities (JWT, password hashing)
├── withAuth.jsx              # withAuth HOC for protected components

.env.local                      # Environment variables (JWT_SECRET)
middleware.js                   # Route protection middleware
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_2026
```

**⚠️ IMPORTANT FOR PRODUCTION:**
- Change `JWT_SECRET` to a strong, unique value
- Never commit `.env.local` to version control
- Use environment-specific secrets for each deployment

## How It Works

### Authentication Flow

1. **Login Process**:
   - User enters email/password on login page
   - Password is sent to `/api/auth/login`
   - Server validates credentials against user database
   - JWT token is generated and returned
   - Token is stored in localStorage and HTTP-only cookie
   - User is redirected to dashboard

2. **Protected Routes**:
   - Middleware checks for valid token on every request
   - If no token, user is redirected to login
   - Valid token allows access to protected pages

3. **Logout Process**:
   - User clicks logout button
   - `/api/auth/logout` is called
   - Token is cleared from browser and cookie
   - User is redirected to login page

### API Endpoints

#### POST `/api/auth/login`
Login with email and password.

Request:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Response (Success - 200):
```json
{
  "message": "Login successful",
  "user": {
    "id": "123",
    "email": "user@example.com",
    "name": "User Name",
    "role": "user"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Response (Error - 401):
```json
{
  "error": "Invalid email or password"
}
```

#### POST `/api/auth/register`
Create a new user account.

Request:
```json
{
  "email": "newuser@example.com",
  "password": "password123",
  "name": "New User"
}
```

Response (Success - 201):
```json
{
  "message": "User created successfully",
  "user": {
    "id": "456",
    "email": "newuser@example.com",
    "name": "New User",
    "role": "user"
  }
}
```

Response (Error - 400):
```json
{
  "error": "User already exists"
}
```

#### POST `/api/auth/logout`
Logout current user.

Response (Success - 200):
```json
{
  "message": "Logout successful"
}
```

#### GET `/api/auth/me`
Get current user information.

Headers:
```
Authorization: Bearer {token}
```

Response (Success - 200):
```json
{
  "user": {
    "id": "123",
    "email": "user@example.com",
    "name": "User Name",
    "role": "user"
  }
}
```

## Using Auth in Components

### Using the useAuth Hook

```jsx
'use client';

import { useAuth } from '@/components/auth/AuthProvider';

export default function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}
```

### Protecting Routes with withAuth HOC

```jsx
'use client';

import { withAuth } from '@/lib/withAuth';

function ProtectedPage() {
  return <div>This page requires authentication</div>;
}

export default withAuth(ProtectedPage);
```

## Customization

### Adding a Database

The current implementation uses in-memory storage. For production, replace it with a database:

1. Update `lib/auth.js`:
   - Replace the `users` Map with database queries
   - Update `getUserByEmail()` to query the database
   - Update `createUser()` to insert into the database
   - Update `validateUserCredentials()` to query the database

2. Example with Prisma:
```javascript
import prisma from '@/lib/prisma';

export async function getUserByEmail(email) {
  return await prisma.user.findUnique({
    where: { email }
  });
}

export async function createUser(email, password, name) {
  const hashedPassword = await hashPassword(password);
  return await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role: 'user'
    }
  });
}
```

### Customizing User Roles

Modify the user role assignment in `lib/auth.js`:

```javascript
export async function createUser(email, password, name) {
  // ... existing code ...
  const user = {
    // ... other fields ...
    role: email === 'admin@example.com' ? 'admin' : 'user'
  };
}
```

### Token Expiration

Change the JWT expiration in `lib/auth.js`:

```javascript
export function generateToken(user) {
  return jwt.sign(
    { /* ... */ },
    JWT_SECRET,
    { expiresIn: '30d' }  // Change to desired duration
  );
}
```

## Deployment

### 1. **Environment Setup**
- Set `JWT_SECRET` environment variable on your hosting platform
- Ensure `NODE_ENV` is set to `production`

### 2. **Database Setup**
- Set up your production database
- Run migrations if using Prisma or similar ORM
- Update connection strings in environment variables

### 3. **Security Checklist**
- ✅ Change `JWT_SECRET` to a strong value
- ✅ Enable HTTPS (required for secure cookies)
- ✅ Set `secure: true` in cookie options (already configured for production)
- ✅ Configure CORS if needed for API access
- ✅ Set up rate limiting for auth endpoints
- ✅ Implement email verification for new registrations
- ✅ Add passwor strength requirements
- ✅ Enable 2FA for admin accounts

### 4. **Hosting Platforms**

#### Vercel (Recommended)
```bash
vercel env add JWT_SECRET
vercel deploy
```

#### Netlify
- Add environment variables in Site Settings → Build & deploy → Environment
- Deploy with `npm run build && exit 0`

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Troubleshooting

### Issue: "Invalid email or password"
- Ensure user exists in the database
- Verify password is correct
- Check that email matches exactly (case-sensitive)

### Issue: Token expires immediately
- Check `JWT_SECRET` is set correctly
- Verify token expiration time in `lib/auth.js`
- Clear browser cache and localStorage

### Issue: Redirects to login on every page load
- Check if JWT_SECRET has changed between requests
- Verify token is being stored properly in localStorage
- Check browser console for errors

### Issue: CORS errors on API calls
- Ensure API endpoints are on same domain
- Configuration for external API calls may be needed

## Security Notes

1. **Passwords**: Never store plain text passwords. Always use `bcryptjs.hash()`
2. **Tokens**: Keep JWT tokens short-lived (7 days or less)
3. **Cookies**: Use HTTP-only cookies to prevent XSS attacks
4. **HTTPS**: Always use HTTPS in production
5. **Database**: Use environment variables for database credentials
6. **Rate Limiting**: Implement rate limiting on login endpoint to prevent brute force
7. **Email Verification**: Verify emails before activating accounts

## Next Steps

1. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000/auth/login`

2. **Test Login**:
   - Use demo credentials: `demo@example.com` / `demo123`

3. **Test Registration**:
   - Visit `/auth/register` and create a new account

4. **Customize**:
   - Update user model in `lib/auth.js`
   - Add database integration
   - Implement email verification
   - Add additional user fields

5. **Deploy**:
   - Set up production environment variables
   - Configure database
   - Deploy to your hosting platform

## Support

For issues or questions:
- Check the troubleshooting section above
- Review Next.js authentication documentation
- Consult your hosting platform's docs for environment setup
