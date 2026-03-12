# Deployment Guide for News Dashboard with Auth

## Pre-Deployment Checklist

- [ ] Build succeeds locally (`npm run build`)
- [ ] All tests pass (if applicable)
- [ ] `.env.local` is NOT in version control
- [ ] JWT_SECRET is changed from default
- [ ] Database is set up and tested
- [ ] All environment variables are documented

## Vercel (Recommended)

Vercel is the easiest option as it's made by the Next.js team.

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Add auth system"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Framework should auto-detect Next.js

### Step 3: Add Environment Variables
1. In Vercel Project Settings → Environment Variables
2. Add:
   ```
   JWT_SECRET=your_very_secure_random_key_here
   ```
3. Click "Save"

### Step 4: Deploy
Click "Deploy" - Vercel will automatically:
- Run `npm install`
- Run `npm run build`
- Deploy to their CDN

### Step 5: Test
Visit your Vercel URL and test login with:
- Email: demo@example.com
- Password: demo123

### Adding a Database (Vercel + Supabase)

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Get your Database URL
4. In Vercel, add environment variable:
   ```
   DATABASE_URL=postgresql://user:password@host:5432/db
   ```
5. Update `lib/auth.js` to use your database

## Netlify

### Step 1: Connect Repository
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select GitHub repository

### Step 2: Configure Build Settings
- **Base directory**: Leave empty
- **Build command**: `npm run build`
- **Publish directory**: `.next`

### Step 3: Add Environment Variables
1. Go to Site Settings → Build & deploy → Environment
2. Add:
   ```
   JWT_SECRET=your_very_secure_random_key_here
   ```

### Step 4: Deploy
Click "Deploy" and wait for build to complete.

**Note**: Netlify requires the app to be serverless function compatible (it is with Next.js).

## Railway.app

### Step 1: Connect GitHub
1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository

### Step 2: Add Environment Variables
1. Click on your project
2. Go to "Variables"
3. Add:
   ```
   JWT_SECRET=your_very_secure_random_key_here
   NODE_ENV=production
   ```

### Step 3: Configure
Railway auto-detects Node.js and installs dependencies.

## Self-Hosted (VPS/Dedicated Server)

### Prerequisites
- Node.js 18+ installed
- npm installed
- Nginx or Apache (optional, for reverse proxy)
- PostgreSQL or MySQL (optional)

### Step 1: Upload Code
```bash
# On your server
git clone <your-repo-url>
cd news-dashboard
npm install
npm run build
```

### Step 2: Create Environment File
```bash
cat > .env.local << EOF
JWT_SECRET=your_very_secure_random_key_here
NODE_ENV=production
EOF
```

### Step 3: Start Application
```bash
npm start
# Or use PM2 for production:
# npm install -g pm2
# pm2 start "npm start" --name "news-dashboard"
```

### Step 4: Setup Reverse Proxy (Optional)

#### Nginx Example
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 5: Enable SSL
```bash
# Using Certbot for Let's Encrypt
sudo certbot certonly --standalone -d yourdomain.com
```

## Docker Deployment

### Step 1: Create Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
```

### Step 2: Create .dockerignore
```
node_modules
npm-debug.log
.next
.git
```

### Step 3: Build and Run
```bash
# Build
docker build -t news-dashboard .

# Run
docker run -p 3000:3000 \
  -e JWT_SECRET=your_secret \
  news-dashboard
```

### Step 4: Docker Compose (Optional)
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      JWT_SECRET: ${JWT_SECRET}
      DATABASE_URL: ${DATABASE_URL}
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: news_dashboard
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## Environment Variables by Platform

### Vercel
Dashboard → Settings → Environment Variables

### Netlify
Site Settings → Build & deploy → Environment

### Railway
Project → Variables

### Self-Hosted
Create `.env.local` file

### Docker
Use `-e` flag or `.env` file

## SSL/HTTPS

### Auto (Recommended)
- **Vercel**: Automatic
- **Netlify**: Automatic
- **Railway**: Automatic
- **Self-Hosted**: Use Let's Encrypt with Certbot

### Manual
```bash
# Generate self-signed certificate (testing only)
openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365
```

## Database Setup by Platform

### Vercel + Supabase
1. Create Supabase project
2. Get connection string
3. Add `DATABASE_URL` to Vercel environment

### Netlify + MongoDB Atlas
1. Create MongoDB Atlas cluster
2. Get connection string
3. Add `DATABASE_URL` to Netlify environment

### Self-Hosted + PostgreSQL
```bash
sudo apt install postgresql
psql -U postgres
CREATE USER app_user WITH PASSWORD 'secure_password';
CREATE DATABASE news_dashboard OWNER app_user;
```

Then add to `.env.local`:
```
DATABASE_URL=postgresql://app_user:secure_password@localhost:5432/news_dashboard
```

## Post-Deployment

1. ✅ Test login page
2. ✅ Test registration
3. ✅ Test protected pages
4. ✅ Check error logs
5. ✅ Monitor performance
6. ✅ Set up backups
7. ✅ Configure CDN (optional)
8. ✅ Set up SSL certificate

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Loading
- Verify variable names match
- Check for typos
- Redeploy after adding variables
- Some platforms require redeploy after adding env vars

### Authentication Works Locally but Not in Production
- Check `JWT_SECRET` is set in production
- Verify `NODE_ENV=production`
- Check cookie settings (HTTPS required)
- Clear browser cookies

### Database Connection Fails
- Verify DATABASE_URL format
- Check IP whitelist (some services require it)
- Test connection string locally first
- Check firewall rules

## Maintenance

### Regular Tasks
- Monitor error logs
- Update dependencies: `npm update`
- Backup database
- Review authentication logs

### Security Updates
```bash
npm audit
npm audit fix
```

## Performance Tips

1. Use Vercel's Analytics
2. Enable caching headers
3. Use CDN for static files
4. Optimize database queries
5. Monitor Core Web Vitals

## Support Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Railway Documentation](https://docs.railway.app)

---

**Your application is ready to deploy! Choose your platform above and follow the steps.**
