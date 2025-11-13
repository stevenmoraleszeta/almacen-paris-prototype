# 🏪 Almacén Paris - E-commerce Prototype

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)

A modern, full-stack e-commerce prototype built with Next.js 15, featuring a complete shopping cart system, product catalog, and responsive design.

[Features](#-features) • [Technologies](#-technologies-used) • [Installation](#-installation) • [Project Structure](#-project-structure) • [Deployment](#-deployment) • [License](#-license)

</div>

---

## ✨ Introduction

**Almacén Paris** is a professional e-commerce prototype showcasing modern web development practices. This project demonstrates a complete shopping experience with product browsing, cart management, category filtering, and a responsive user interface built with cutting-edge technologies.

### Key Features

- 🛒 **Shopping Cart System** - Full cart functionality with add, remove, and quantity management
- 📦 **Product Catalog** - Dynamic product listing with detailed views
- 🔍 **Search Functionality** - Real-time product search
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎨 **Modern UI/UX** - Smooth animations with Framer Motion
- 🏷️ **Category Filtering** - Organized product categories
- ⚡ **Performance Optimized** - Built on Next.js 15 with App Router
- 🔒 **Type-Safe** - Full TypeScript implementation

## 🚀 Technologies Used

### Core Framework
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19.0.0](https://react.dev/)** - UI library
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 12.6.3](https://www.framer.com/motion/)** - Animation library
- **[React Icons 5.5.0](https://react-icons.github.io/react-icons/)** - Icon library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## ⚙️ Installation

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/almacen-paris-prototype.git
   cd almacen-paris-prototype
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🧩 Project Structure

```
almacen-paris-prototype/
├── public/                 # Static assets
│   └── products/          # Product images
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/           # API routes
│   │   │   └── products/  # Products API endpoint
│   │   ├── cart/          # Shopping cart page
│   │   ├── categorias/    # Categories page
│   │   ├── productos/     # Products pages
│   │   │   └── [id]/      # Dynamic product detail
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   ├── components/        # React components
│   │   ├── AnimatedButton.tsx
│   │   ├── Cart.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductoCard.tsx
│   │   └── ProductoDetalle.tsx
│   ├── context/           # React Context
│   │   ├── CartContext.tsx
│   │   └── CarritoProvider.tsx
│   ├── hooks/             # Custom React hooks
│   │   └── useCarrito.tsx
│   ├── lib/               # Utility functions
│   │   └── productos.ts   # Product data/helpers
│   └── types/             # TypeScript types
│       └── producto.ts    # Product interface
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── LICENSE                # License file
```

## 🚢 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/almacen-paris-prototype)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Other Platforms

- **Netlify** - Connect your GitHub repo and deploy
- **Render** - Use the Next.js blueprint
- **AWS Amplify** - Full-stack deployment option
- **Railway** - Simple deployment with database support
- **DigitalOcean App Platform** - Managed hosting solution

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Development Notes

- The project uses Next.js App Router for routing
- Cart state is managed via React Context API
- Product data is currently static but structured for easy database integration
- API routes are available at `/api/products`
- All components are TypeScript-typed for better developer experience

## 🤝 Contributing

This is a proprietary project. For collaboration inquiries, please contact the repository owner.

## 📜 License

**Copyright (c) 2025 Steven Morales Fallas**

All rights reserved. Redistribution, modification, reproduction, sublicensing, or any form of transaction (including commercial, educational, or promotional use) involving this repository, its source code, or derived works is strictly prohibited without the explicit and personal written authorization of the Lead Developer, Steven Morales Fallas.

Unauthorized commercial use, resale, or licensing of this repository or its contents is strictly forbidden and will be subject to applicable legal action.

For licensing inquiries, please contact: [Your Contact Information]

---

<div align="center">

**Built with ❤️ by Steven Morales Fallas**

[Portfolio](#) • [LinkedIn](#) • [GitHub](#)

</div>
