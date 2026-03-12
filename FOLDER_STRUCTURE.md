# Project Structure Guide

## Directory Organization

Your News Dashboard project is now properly organized following Next.js best practices.

```
news-dashboard/
├── 📁 app/                           # Next.js App Router
│   ├── 📁 api/
│   │   └── 📁 auth/                  # Authentication API routes
│   │       ├── login/
│   │       ├── register/
│   │       ├── logout/
│   │       └── me/
│   ├── 📁 auth/                      # Authentication pages
│   │   ├── login/page.jsx
│   │   └── register/page.jsx
│   ├── 📁 analytics/                 # Analytics pages
│   ├── 📁 articles/                  # Articles management
│   ├── 📁 categories/                # Categories management
│   ├── 📁 comments/                  # Comments moderation
│   ├── 📁 media/                     # Media library
│   ├── 📁 monetization/              # Monetization features
│   ├── 📁 social/                    # Social publishing
│   ├── 📁 users/                     # User management
│   ├── 📁 workflow/                  # Workflow system
│   ├── 📁 pending-approvals/         # Pending approvals
│   ├── 📁 quick-stats/               # Quick stats page
│   ├── 📁 recent-activity/           # Recent activity page
│   ├── layout.jsx                    # Root layout with providers
│   └── page.jsx                      # Home page
│
├── 📁 components/                    # Reusable React components
│   ├── 📁 auth/                      # Authentication components
│   │   ├── AuthProvider.jsx          # Auth context & hooks
│   │   └── README.md
│   ├── 📁 ui/                        # UI component library
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.js
│   │   ├── ... (Other UI components)
│   ├── 📁 figma/                     # Figma components
│   │   └── ImageWithFallback.jsx
│   ├── Layout.jsx                    # Dashboard layout
│   ├── PageHeader.jsx                # Page header component
│   ├── StatsCard.jsx                 # Stats card component
│   └── theme-provider.jsx            # Theme provider
│
├── 📁 lib/                           # Utility functions & helpers
│   ├── auth.js                       # Authentication utilities
│   ├── utils.js                      # General utilities
│   └── withAuth.jsx                  # HOC for protected components
│
├── 📁 styles/                        # Global styles
│   ├── globals.css
│   ├── tailwind.css
│   └── theme.css
│
├── 📁 public/                        # Static assets (served directly)
│   ├── .gitkeep
│   └── README.md
│
├── 📁 docs/                          # Project documentation
│   ├── README.md
│   ├── README_AUTH.md                # Auth implementation summary
│   ├── AUTH_DOCUMENTATION.md         # Detailed auth docs
│   ├── QUICK_START.md                # Quick start guide
│   └── DEPLOYMENT_GUIDE.md           # Deployment instructions
│
├── 📁 .git/                          # Git repository
├── 📁 .next/                         # Next.js build output (git ignored)
├── 📁 node_modules/                  # Dependencies (git ignored)
│
├── Configuration Files (Root Level)
│   ├── .env.local                    # Environment variables
│   ├── .eslintrc.json                # ESLint config
│   ├── .gitignore                    # Git ignore rules
│   ├── jsconfig.json                 # JS config & path aliases
│   ├── next.config.js                # Next.js configuration
│   ├── package.json                  # Project dependencies
│   ├── package-lock.json             # Dependency lock file
│   ├── postcss.config.js             # PostCSS config
│   ├── tailwind.config.js            # Tailwind CSS config
│   ├── middleware.js                 # Next.js middleware (auth protection)
│   └── tsconfig.json (if using TS)
│
└── Git Files
    ├── .git/
    ├── .gitignore
    └── .gitkeep files for empty directories
```

## Key Directories Explained

### `/app` - Next.js App Router
Contains all pages, layouts, and API routes organized by feature.
- Pages are automatically routed based on folder structure
- `page.jsx` files are the route endpoints
- `layout.jsx` wraps child routes

### `/components` - Reusable Components
Organized by feature or type:
- `auth/` - Authentication-specific components
- `ui/` - Reusable UI component library
- `figma/` - Components from design system

### `/lib` - Utilities & Helpers
Logic and utilities used throughout the app:
- `auth.js` - JWT, password hashing, user management
- `withAuth.jsx` - Component protection HOC
- `utils.js` - General utility functions

### `/styles` - Global Styles
Centralized stylesheet directory:
- `globals.css` - Global styles
- `tailwind.css` - Tailwind CSS imports
- `theme.css` - Theme variables

### `/public` - Static Assets
Files served directly by Next.js:
- Images, icons, fonts
- CSS files, favicons
- Downloadable resources

### `/docs` - Documentation
All project documentation:
- Setup and configuration guides
- API documentation
- Deployment instructions
- Feature documentation

## Import Path Aliases

Defined in `jsconfig.json`:
```javascript
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]  // Import from root with @/
    }
  }
}
```

### Usage Examples
```javascript
// Instead of: ../../../lib/auth
import { useAuth } from '@/lib/auth';

// Instead of: ../../../components/auth/AuthProvider
import { AuthProvider } from '@/components/auth/AuthProvider';

// Instead of: ../../../app/page
import HomePage from '@/app/page';
```

## File Naming Conventions

- **Pages**: `page.jsx` or `page.js`
- **Layouts**: `layout.jsx`
- **API Routes**: `route.js`
- **Components**: `ComponentName.jsx` (PascalCase)
- **Utilities**: `utility-name.js` (kebab-case)
- **Hooks**: `useHookName.js`
- **Styles**: `styles.css` or `styles.module.css`

## Best Practices Applied

✅ **Feature-based organization** - Grouped by functionality
✅ **Separation of concerns** - Components, logic, styles separate
✅ **Reusable components** - UI library in components/ui
✅ **Clear documentation** - docs/ folder with guides
✅ **Environment config** - .env.local for secrets
✅ **Public assets** - Separate public/ folder
✅ **Utilities isolated** - lib/ folder for shared logic

## Adding New Features

When adding a new feature:

1. **Create feature folder in `/app`**
   ```
   app/feature-name/
   ├── page.jsx
   ├── layout.jsx
   └── components/
   ```

2. **Create components in `/components`**
   ```
   components/feature-name/
   ├── Component1.jsx
   └── Component2.jsx
   ```

3. **Add utilities if needed in `/lib`**
   ```
   lib/feature-name.js
   ```

4. **Document in `/docs`**
   ```
   docs/FEATURE_NAME.md
   ```

## Git Ignored Directories

These directories are ignored and won't be committed:
- `node_modules/` - Dependencies
- `.next/` - Build output
- `.env.local` - Secrets (add to .gitignore)

## Next.js Special Files

- `layout.jsx` - Persistent layout wrapper for routes
- `page.jsx` - Route component (required for pages)
- `route.js` - API endpoint handler
- `middleware.js` - Global middleware

## What's Where

| Task | Location |
|------|----------|
| Add new page | `app/feature/page.jsx` |
| Create component | `components/feature/Component.jsx` |
| Add API endpoint | `app/api/feature/route.js` |
| Add utility | `lib/utility-name.js` |
| Add style | `styles/style-name.css` |
| Add image/asset | `public/asset-name` |
| Add documentation | `docs/DOC_NAME.md` |
| Set environment variable | `.env.local` |
| Configure build | `next.config.js` |

## Need Help?

Check documentation in `/docs/`:
- `QUICK_START.md` - Get started fast
- `AUTH_DOCUMENTATION.md` - Authentication details
- `DEPLOYMENT_GUIDE.md` - Deploy to production

Enjoy your well-organized News Dashboard! 🚀
