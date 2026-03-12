# Public Assets

This folder is served directly by Next.js and contains public static files.

## Usage

Place any static assets here that should be publicly accessible:

- **Images**: logos, favicons, brand assets
- **Icons**: SVG icons, favicon files
- **Documents**: PDFs, downloads
- **Fonts**: Custom web fonts
- **Videos**: Static video files

## Examples

```
public/
├── favicon.ico
├── logo.png
├── images/
│   ├── hero.jpg
│   └── banner.png
├── icons/
│   ├── github.svg
│   └── twitter.svg
└── fonts/
    └── custom-font.woff2
```

## Referencing

Access files from the public folder with absolute paths:

```jsx
// Image
<img src="/logo.png" alt="Logo" />

// CSS
<link rel="stylesheet" href="/fonts/custom.css" />

// Favicon in HTML
<link rel="icon" href="/favicon.ico" />
```

## Build

The public folder is copied as-is to the build output.
