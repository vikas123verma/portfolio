# Vikas Verma — Backend Engineer Portfolio

A modern, high-performance personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features dark theme glassmorphism UI inspired by Linear, Vercel, and Stripe.

## 🚀 Tech Stack

- **React 19** + **TypeScript** — Type-safe component architecture
- **Tailwind CSS v4** — Utility-first styling with custom design system
- **Framer Motion** — Smooth scroll-triggered animations
- **Vite** — Lightning-fast dev server and optimized builds
- **React Router** — Client-side routing ready

## 📦 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Sticky nav with active section tracking
│   │   └── Footer.tsx         # Minimal footer with social links
│   ├── sections/
│   │   ├── Hero.tsx           # Hero with floating code decorations
│   │   ├── About.tsx          # About + animated stats
│   │   ├── Skills.tsx         # Categorized tech stack grid
│   │   ├── Experience.tsx     # Animated career timeline
│   │   ├── Projects.tsx       # Featured project cards
│   │   ├── Architecture.tsx   # System design showcase
│   │   └── Contact.tsx        # Contact form + info cards
│   └── ui/
│       ├── GlassCard.tsx      # Reusable glass-morphism card
│       ├── Badge.tsx          # Themed badge component
│       ├── Button.tsx         # Multi-variant button
│       ├── SectionHeading.tsx # Section header with label
│       └── AnimatedCounter.tsx # Scroll-triggered counter
├── data/
│   ├── skills.ts              # Skills categorization
│   ├── experience.ts          # Work experience data
│   ├── projects.ts            # Project details
│   └── architecture.ts        # Architecture card data
├── App.tsx                    # Root with lazy-loaded sections
├── main.tsx                   # Entry point with Router
└── index.css                  # Design system + Tailwind config
```

## 🌐 AWS Deployment

### Option 1: S3 + CloudFront (Static Hosting)

#### Step 1: Build the project
```bash
npm run build
```

#### Step 2: Create S3 Bucket
```bash
# Create bucket
aws s3 mb s3://vikasverma-portfolio --region us-east-1

# Enable static website hosting
aws s3 website s3://vikasverma-portfolio \
  --index-document index.html \
  --error-document index.html
```

#### Step 3: Upload build artifacts
```bash
# Sync dist folder to S3
aws s3 sync dist/ s3://vikasverma-portfolio \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "index.html"

# Upload index.html with no-cache
aws s3 cp dist/index.html s3://vikasverma-portfolio/index.html \
  --cache-control "no-cache, no-store, must-revalidate"
```

#### Step 4: Create CloudFront Distribution
```bash
aws cloudfront create-distribution \
  --origin-domain-name vikasverma-portfolio.s3.amazonaws.com \
  --default-root-object index.html \
  --query 'Distribution.DomainName'
```

Configure the distribution:
- **Origin**: S3 bucket with OAC (Origin Access Control)
- **Viewer Protocol Policy**: Redirect HTTP to HTTPS
- **Cache Policy**: CachingOptimized for assets, CachingDisabled for index.html
- **Error Pages**: 403 & 404 → /index.html (200) for SPA routing
- **Compression**: Enable Brotli and Gzip
- **Price Class**: Use all edge locations or US/Europe only

#### Step 5: Configure Route53 (Custom Domain)
```bash
# Create hosted zone (if not exists)
aws route53 create-hosted-zone --name vikasverma.dev --caller-reference $(date +%s)

# Create A record pointing to CloudFront
# Use the Route53 console or CLI to create an Alias A record:
#   Name: vikasverma.dev
#   Type: A - Alias
#   Target: CloudFront distribution domain name
```

#### Step 6: SSL Certificate (ACM)
```bash
# Request certificate (must be in us-east-1 for CloudFront)
aws acm request-certificate \
  --domain-name vikasverma.dev \
  --subject-alternative-names "*.vikasverma.dev" \
  --validation-method DNS \
  --region us-east-1

# Add the CNAME validation records to Route53
# Then attach the certificate to your CloudFront distribution
```

### Option 2: AWS Amplify (Managed Hosting)

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting
# Select: Hosting with Amplify Console
# Select: Continuous deployment

# Push to deploy
amplify publish
```

Or connect directly via the Amplify Console:
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New App" → "Host web app"
3. Connect your GitHub repository
4. Amplify auto-detects Vite build settings
5. Deploy!

### CI/CD with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to S3 + CloudFront

on:
  push:
    branches: [main]

permissions:
  id-token: write
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: ${{ secrets.AWS_ROLE_ARN }}
          aws-region: us-east-1

      - name: Deploy to S3
        run: |
          aws s3 sync dist/ s3://${{ secrets.S3_BUCKET }} \
            --delete \
            --cache-control "public, max-age=31536000, immutable" \
            --exclude "index.html"
          aws s3 cp dist/index.html s3://${{ secrets.S3_BUCKET }}/index.html \
            --cache-control "no-cache, no-store, must-revalidate"

      - name: Invalidate CloudFront
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
            --paths "/*"
```

**Required GitHub Secrets:**
| Secret | Description |
|--------|-------------|
| `AWS_ROLE_ARN` | IAM role ARN with S3 and CloudFront permissions |
| `S3_BUCKET` | S3 bucket name (e.g., `vikasverma-portfolio`) |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID |

## ⚡ Performance Optimizations

- **Code Splitting**: Vendor, motion, and router chunks separated
- **Lazy Loading**: Below-fold sections loaded on demand
- **Image Optimization**: SVG-based graphics, no heavy images
- **CSS**: Tailwind v4 purges unused styles automatically
- **Fonts**: Preconnected Google Fonts with `display=swap`
- **Caching**: Immutable asset caching with hashed filenames

## 📝 Customization

### Update Personal Info
- Edit data files in `src/data/` for skills, experience, projects
- Update contact info in `src/components/sections/Contact.tsx`
- Update footer links in `src/components/layout/Footer.tsx`
- Replace `public/resume.pdf` with your actual resume

### Update SEO
- Edit `index.html` meta tags for Open Graph, Twitter, and description
- Update `og:url` to your actual domain

## 📄 License

MIT — Feel free to use this as a template for your own portfolio.
