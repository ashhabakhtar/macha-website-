# 🍵 MATON | Premium Organic Ceremonial Matcha Storefront

Welcome to **MATON**, an ultra-premium, interactive, and high-conversion e-commerce storefront dedicated to organic ceremonial matcha sourced directly from **Uji, Kyoto, Japan**. 

Featuring a modern glassmorphic aesthetic, custom-engineered visual assets, fluid hover states, and smooth GSAP-driven scroll-triggered parallax depth, this storefront delivers an upscale experience that reflects the ancient artistry and premium quality of artisanal matcha.

---

## ✨ Features Spotlight

### 🚀 1. Premium 3D Visual Engine
* **Dynamic Hover Tilt**: Hovering over the central ceremonial bowl triggers a smooth 3D scale zoom and subtle rotation.
* **Organic Floating Micro-Animation**: Constant, smooth micro-floating keeps the main visual looking responsive and suspended in the air.
* **Parallax Scroll Scrub**: Utilizing GSAP `ScrollTrigger` with smooth scrubbing, the matcha elements float and rotate organically at different scroll speeds to create depth.
* **Vibrant HDR Glows**: Enhanced color contrast, HSL tailored variables, and glowing drop-shadows create a lush organic feeling.

### 🛒 2. High-Conversion E-Commerce Systems
* **Sliding Cart Drawer**: A glassmorphic drawer that slides in seamlessly from the right, letting users check subtotals, adjust quantities, or remove items.
* **Interactive Free Shipping Bar**: A dynamic visual progress bar tracking the user's progress toward a `$50.00` free shipping threshold.
* **Custom Toast Alerts**: Responsive, forest green-bordered alert banners slide in from the bottom right to give instant visual feedback on cart additions.
* **State Persistence**: The entire shopping cart state is saved automatically and persists across visits using `localStorage`.
* **Simulated Checkout Flow**: Complete checkout animation sequence, demonstrating real-world transaction handling.

### 🔍 3. Live Product Grid & Filtering
* **Category Tabs**: Filter between *All, Matcha Powder, Teaware, and Blends & Sweets* instantly with smooth transitions.
* **Instant Text Search**: Real-time matching filter searches names and detailed descriptions with zero latency.
* **Quick-View Details Modal**: Click any card to open a glassmorphic details card showcasing detailed description, health benefits, packaging details, and quantity selectors.

---

## 🛠️ Technology Stack

* **Structure & Markup**: HTML5 (Semantic elements, metadata optimization)
* **Styling & Layout**: CSS3 (Vanilla variables, Flexbox/Grid, Glassmorphic overlays)
* **Animations**: GSAP (GreenSock Animation Platform) + GSAP ScrollTrigger
* **State Management**: JavaScript ES6 (Pure Vanilla logic, LocalStorage persistence)
* **Bundler & Build Tool**: Vite (Lightning-fast HMR and building)

---

## 💻 Installation & Setup

Get MATON running locally on your computer in just a few quick steps:

### 1. Clone the Repository
```bash
git clone https://github.com/ashhabakhtar/macha-website-.git
cd macha-website-
```

### 2. Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open **http://localhost:5173/** in your browser to experience the active storefront!

---

## 📂 Project Structure

```text
matcha-website/
├── public/                 # Static assets (images, hojicha, kits)
├── src/                    # Source assets and setup
├── index.html              # Core template, dialogs, drawers, and footer
├── style.css               # Styling system, glassmorphism, responsive grid
├── main.js                # State machine, animations, catalog rendering
├── package.json            # Vite, GSAP, and project configs
└── README.md               # Dynamic documentation
```

---

## 🌸 Brand Integrity & Design System

* **Primary Background**: Deep forest green (`#0b1a12`)
* **Secondary Background**: Soft creamy white (`#f4f1e8`)
* **Brand Accent Glow**: Neon key-lime green (`#b9ff3d`)
* **Body Font**: Inter (Clean, modern readability)
* **Heading Font**: Outfit (Premium, artisanal brand voice)

---

## 📧 Contact & Sourcing
* **Direct Line**: `+81 (75) 123-4567`
* **Direct Email**: [akhtarashhab@gmail.com](mailto:akhtarashhab@gmail.com)
* **Location**: Sourced from Uji, Kyoto, Japan

Designed, Engineered, and Developed with ❤️ by **Ashhab Akhtar**.
