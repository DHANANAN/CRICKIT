# 🏏 Crickit Kit Arena - Cricket Equipment Showcase

A professional cricket equipment showcase built with **Vite**, featuring 13 premium cricket products with real images, interactive features, and deployment-ready optimizations.

## 🚀 Live Demo
**[Visit Crickit on Vercel →](https://crickit-xi.vercel.app)**

Production URL: `https://crickitin-gvcx20wgb-dhananjays-projects-3fde8196.vercel.app`
Alias: `https://crickit-xi.vercel.app`

## ✨ Key Features

### Visual Features
- 🎯 **13 Real Cricket Products** - High-quality images from 13 different cricket items
- 🌀 **Spinning Animations** - Rotating logo and cricket bounce effects
- 🎪 **Custom Cricket Cursor** - Themed cursor experience
- 🌙 **Dual Themes** - Premium light mode (sand-blue) & polished dark mode (navy)
- 📊 **Image Zoom Effects** - Smooth hover animations on all products
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile

### Functional Features
- 🔍 **Smart Search** - Filter by name, brand, or category
- 🏷️ **Brand Filtering** - Quick category-based filters
- 📈 **Product Comparison** - Compare up to 10 items side-by-side
- 💾 **LocalStorage** - Persists theme and comparison selections
- 🔗 **Direct Purchase Links** - Buy buttons for each product
- 🎯 **SEO Optimized** - Meta tags, sitemap, and robots.txt included

### Cricket Equipment Categories
- **Batting**: Elite cricket bats & strikes
- **Protective Gear**: Pads, gloves, guards
- **Safety**: Helmets and head protection
- **Accessories**: Balls, bags, gear
- **Footwear**: Cricket-specific shoes
- **Apparel**: Professional whites
- **Bundles**: Complete starter and premium sets

## 📦 Production Build Status
```
✅ Build: dist/index.html (29.24 kB)
✅ Gzip: 6.56 kB compressed
✅ Images: External hosted (ibb.co)
✅ Ready: Deploy immediately
```

## 🚀 Deployment

### Quick Deploy (Vercel - Recommended)
```bash
npm install -g vercel
vercel
```

### Other Hosting Options
- **GitHub Pages** - Free, perfect for portfolios
- **Netlify** - Connect repository, auto-deploys
- **AWS S3 + CloudFront** - Enterprise-grade hosting
- **Docker** - Container-based deployment

**See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.**

## 🛠️ Development

### Install & Run
```bash
npm install
npm run dev -- --host 0.0.0.0
```

### Build for Production
```bash
npm run build
# Output: dist/index.html (production-ready)
```

### Preview Production Build
```bash
npm run preview
```

## 📊 Performance

| Metric | Value |
|--------|-------|
| HTML Size | 29.24 kB |
| Gzipped | 6.56 kB |
| Build Time | ~365ms |
| Products | 13 items |
| Brands | 9 brands |
| Categories | 7 categories |
| Mobile Ready | ✅ |
| Dark Mode | ✅ |
| GPU Animated | ✅ |

## 📚 Documentation

- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Complete deployment instructions
- [PRODUCT_CATALOG.md](PRODUCT_CATALOG.md) - All 13 products detailed list
- [LICENSE](LICENSE) - MIT License

## 🎨 Customization

### Change Brand Colors
Edit CSS variables in `index.html`:
```css
:root {
    --accent: #0055cc;      /* Primary color */
    --cricket-green: #1b5e20; /* Accent color */
}
```

### Add More Products
Add to the `KITS` array in `index.html`:
```javascript
{
    id: 14,
    brand: "YourBrand",
    name: "New Product",
    category: "Category",
    price: 9999,
    level: "Professional",
    material: "Your Material",
    highlights: ["Feature 1", "Feature 2"],
    image: "https://your-image-url.jpg",
    buyUrl: "https://your-link.com"
}
```

## 📱 Browser Support
- Chrome/Edge: Latest 2 versions ✅
- Firefox: Latest 2 versions ✅
- Safari: Latest 2 versions ✅
- Mobile: All modern browsers ✅

## 🔗 Product Data

All 13 cricket equipment products include:
- High-quality images (external hosted)
- Detailed specifications
- Purchase links
- Brand information
- Category classification
- Price points
- Highlight features

See [PRODUCT_CATALOG.md](PRODUCT_CATALOG.md) for complete product list.

## 📄 License
MIT License - Feel free to use, modify, and deploy!

---

**🏏 Status: PRODUCTION READY ✅**

Built with ❤️ for cricket enthusiasts. Deploy now to showcase your cricket equipment collection!

