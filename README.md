# MARKA

> **Humanize craft, honor the imperfect.** A phygital digital passport connecting Indonesian high craftsmanship to the world.

[![Deployed with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/titusherd/MARKA)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌟 Overview

MARKA is a phygital platform that bridges the gap between Indonesian artisans and global collectors through QR codes and NFC tags. Every crafted piece gets a digital identity that tells its story—from the artisan's journey to the hours invested, enabling direct support and verified authenticity.

### Key Features

- **📱 Scan & Discover** - Scan QR codes or NFC tags to unlock the story behind each craft
- **🎨 Authentic Storytelling** - Meet the artisan, watch their process, understand their journey
- **✅ Verified Authenticity** - Digital certificates and blockchain-backed provenance
- **❤️ Direct Support** - Send tips directly to artisans—100% goes to them
- **🌏 Global Reach** - Connect Indonesian craftsmanship with collectors worldwide
- **📊 Impact Tracking** - See the measurable impact of your support

## 🚀 Tech Stack

### Core Technologies

- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### UI Components

- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Additional Libraries

- **[TanStack Query](https://tanstack.com/query)** - Server state management
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation
- **[QRCode](https://www.npmjs.com/package/qrcode)** - QR code generation
- **[Recharts](https://recharts.org/)** - Data visualization
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **npm** 9.x or higher (or **pnpm** / **yarn**)

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/titusherd/MARKA.git
cd MARKA
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
MARKA/
├── public/                 # Static assets
│   ├── images/            # Product images
│   └── data/              # JSON data files
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Hero.tsx
│   │   ├── HomePage.tsx
│   │   └── ...
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── index.html
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind configuration
└── package.json
```

## 🎨 Features in Detail

### 1. Product Scanning

- Scan QR codes or NFC tags on MARKA-tagged products
- Instant connection to the digital story
- Works seamlessly across devices

### 2. Artisan Stories

- Watch artisans at work through embedded videos
- Learn about their journey and expertise
- See the exact hours invested in each piece

### 3. Authenticity Verification

- Digital certificates for each product
- Blockchain-backed provenance tracking
- Protection against counterfeits

### 4. Direct Support

- Send tips directly to artisans
- 100% of tips go to the creator
- Track your impact in real-time

### 5. Product Showcase

Featured Indonesian crafts including:
- **Songket Minangkabau** - Handwoven textiles from West Sumatra
- **Batik Mega Mendung** - Traditional batik from Cirebon
- **Tenun Ikat Sumba** - Ikat weaving from Sumba
- **Ukiran Jepara** - Wood carvings from Jepara
- And more...

## 🌐 Deployment

This project is configured for deployment on [Vercel](https://vercel.com/).

### Deploy to Vercel

1. **Using Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

2. **Using Vercel Dashboard**

- Push your code to GitHub
- Import the project in [Vercel Dashboard](https://vercel.com/dashboard)
- Vercel will auto-detect the Vite framework and configure build settings

### Deployment Configuration

The project includes a `vercel.json` file with optimized settings:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite
- **SPA Routing**: Configured for React Router

**Live Site**: [https://marka-dazjq7zab-titusherds-projects.vercel.app](https://marka-dazjq7zab-titusherds-projects.vercel.app)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development (if needed):

```env
VITE_API_URL=your_api_url
VITE_APP_NAME=MARKA
```

### Vite Configuration

The project uses Vite with React SWC plugin for fast builds. Configuration can be found in `vite.config.ts`.

### Tailwind Configuration

Tailwind CSS is configured with custom theme colors and animations. See `tailwind.config.ts` for details.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Indonesian Artisans** - For preserving and continuing the beautiful tradition of craftsmanship
- **shadcn/ui** - For the amazing component library
- **Vercel** - For seamless deployment

## 📞 Contact & Support

- **GitHub**: [titusherd/MARKA](https://github.com/titusherd/MARKA)
- **Project Link**: [https://github.com/titusherd/MARKA](https://github.com/titusherd/MARKA)

## 🌟 Mission

> *"Setiap noda adalah kisah."* (Every imperfection is a story)

MARKA exists to humanize craft and honor the imperfect. We believe that real luxury is honest—that behind every piece is a story worth telling, an artisan worth supporting, and a process worth celebrating.

---

**Made with ❤️ for Indonesian artisans**

