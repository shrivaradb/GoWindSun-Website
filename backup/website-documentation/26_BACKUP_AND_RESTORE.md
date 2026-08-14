Document: Backup and Restore Guide
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Complete Backup & Restoration Manual

> **IMPORTANT DISCLAIMER:**
> **Documentation protects the knowledge and configuration of the website, but documentation alone is not a backup of the actual website. An independent physical/digital backup package containing source code, assets, datasets, and configurations must be maintained in a secure location.**

---

## 1. Physical Backup Package Contents

Before launch, a complete backup folder [`/backup`](file:///c:/Website/GoWindSun-Website/backup) must be verified containing:

1. **Complete Application Source Code:** `src/`, `public/`, `index.html`.
2. **Package Configuration Files:** `package.json`, `package-lock.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `vite.config.ts`.
3. **Public Media Assets & Logos:** All images, logos, emblem icons, hero backgrounds, map assets, and infographics in `/public`.
4. **Master Datasets & Excel Files:** All static data TypeScript files in `src/data/` and master Excel files (`1. Potential Wind and Solar Project Investment Options copy 2.xlsx`, `check wind solar hybrid (1).xlsx`).
5. **Environment Variable Template:** `.env.example` (containing variable names without sensitive secret tokens).
6. **Documentation & Changelog Archive:** Complete `/website-documentation` directory.

---

## 2. Step-by-Step Restoration Procedure

In the event of server failure, accidental deletion, domain migration, or developer handoff, follow this exact step-by-step restoration procedure to rebuild the website from scratch:

### Step 1: Environment Prerequisites
Ensure the host machine or server has Node.js and npm installed:
* **Node.js:** `v18.0.0` or higher (Recommended: `v20.x LTS` or `v22.x`).
* **npm:** `v9.0.0` or higher.
* Verify via shell:
  ```bash
  node -v
  npm -v
  ```

### Step 2: Extract Backup / Clone Repository
Extract the backup archive or clone the project repository into the target workspace:
```bash
git clone https://github.com/gowindsun/gowindsun-website.git
# Or extract backup folder into target directory: C:\Website\GoWindSun-Website
```

### Step 3: Install Dependencies
Navigate to the project root directory and execute:
```bash
npm install
```
This restores all 28 exact production and dev dependencies specified in `package-lock.json`.

### Step 4: Verify Environment Template
Copy `.env.example` to `.env.local` if custom environment variables are required:
```bash
cp .env.example .env.local
```

### Step 5: Verify Static Assets & Datasets
Check that the following key files exist in the project directory:
* [`public/logo.png`](file:///c:/Website/GoWindSun-Website/public/logo.png)
* [`public/images/logo_text.png`](file:///c:/Website/GoWindSun-Website/public/images/logo_text.png)
* [`public/hero-bg.png`](file:///c:/Website/GoWindSun-Website/public/hero-bg.png)
* [`src/data/newsData.ts`](file:///c:/Website/GoWindSun-Website/src/data/newsData.ts)
* `1. Potential Wind and Solar Project Investment Options copy 2.xlsx`

### Step 6: Test Local Development Build
Launch the local Vite development server to verify compilation:
```bash
npm run dev
```
Open `http://localhost:5173` in a web browser and confirm navigation, interactive map zoom, news feed rendering, and forms.

### Step 7: Execute Production Build Verification
Verify that the production bundle compiles without TypeScript or Vite errors:
```bash
npm run build
```
Confirm that the compiled output directory `dist/` is generated containing `index.html` and `404.html`.

### Step 8: Deploy to Production
To deploy to GitHub Pages static hosting:
```bash
npm run deploy
```
For VPS / Nginx / Apache / SFTP hosting, upload the contents of the generated `dist/` folder directly to the web root directory.
