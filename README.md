# Pranay Jain - Cyber Security Portfolio

A modern, terminal-inspired portfolio website for a cyber security expert with a hacker aesthetic.

## 🎯 Features

- **Hacker/Terminal Aesthetic**: Dark theme with neon green accents and monospaced fonts
- **Custom Cursor**: Unique terminal-style cursor for authentic hacker feel
- **Scan Line Effect**: Subtle CRT monitor scan line overlay
- **Terminal Animations**: Typing effects, blinking cursors, and glowing elements
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features
- **Production Ready**: Clean, commented code ready for deployment

## 🛠️ Technologies Used

- **React 18.3+** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library
- **Fira Code** - Monospaced font for terminal aesthetic

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed ([Install with nvm](https://github.com/nvm-sh/nvm))

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deployment

### Deploy with Lovable (Recommended)

1. Open your [Lovable Project](https://lovable.dev/projects/5040340d-6fe1-470a-ae7b-24af586a0122)
2. Click **Share** → **Publish**
3. Your site will be live at `yoursite.lovable.app`

### Deploy to Netlify

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Build the project: `npm run build`
3. Deploy: `netlify deploy --prod --dir=dist`

### Deploy to Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Deploy: `vercel --prod`

### Deploy to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🎨 Customization

### Update Personal Information

Edit `src/pages/Index.tsx`:
- Line 41-136: Update project information
- Line 138-157: Update skills and certifications
- Line 323-345: Update contact links

### Modify Colors

Edit `src/index.css`:
- Lines 11-50: Update color scheme (HSL format)
- Primary green: `--primary: 120 100% 50%`
- Background: `--background: 120 5% 5%`

### Change Fonts

Edit `index.html`:
- Replace Fira Code with your preferred monospace font
- Update font-family in `src/index.css`

## 📁 Project Structure

```
├── src/
│   ├── components/ui/      # Reusable UI components
│   ├── pages/
│   │   └── Index.tsx       # Main portfolio page
│   ├── index.css           # Global styles & design system
│   └── main.tsx            # App entry point
├── index.html              # HTML template
├── tailwind.config.ts      # Tailwind configuration
└── vite.config.ts          # Vite configuration
```

## 🔒 Security Features Highlighted

The portfolio showcases:
- Penetration Testing projects
- Vulnerability Assessment tools
- Network Security implementations
- Cryptography & Encryption systems
- Malware Analysis toolkits
- Security Audit platforms

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast ratios (WCAG AA compliant)
- Screen reader friendly

## 🎭 Custom Effects

### Terminal Cursor
Custom SVG cursor with blinking animation creates an authentic terminal experience.

### Scan Lines
Subtle CRT monitor effect overlay adds to the retro-hacker aesthetic.

### Neon Glow
Box-shadow based glow effects on interactive elements for that neon sign look.

### Matrix Background
Radial gradient mesh creates a subtle "digital rain" background effect.

## 🐛 Troubleshooting

**Fonts not loading?**
- Check your internet connection (Google Fonts CDN)
- Verify the font link in `index.html`

**Cursor not showing?**
- Some browsers may not support custom SVG cursors
- Fallback cursor is automatically provided

**Build errors?**
- Clear node_modules: `rm -rf node_modules package-lock.json`
- Reinstall: `npm install`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Connect

- **Email**: pranay.jain@security.com
- **GitHub**: [github.com/pranayjain](https://github.com/pranayjain)
- **LinkedIn**: [linkedin.com/in/pranayjain](https://linkedin.com/in/pranayjain)

## 🙏 Credits

- UI Components: [shadcn/ui](https://ui.shadcn.com/)
- Icons: [Lucide](https://lucide.dev/)
- Font: [Fira Code](https://github.com/tonsky/FiraCode)

---

**Built with 💚 and ⌨️ by Pranay Jain**

`[root@security]# exit`
