<h1 align="center">⚡ Custom Vanilla JS UI Components</h1>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Performance-Optimized-4CAF50?style=for-the-badge" />
</p>

### 📌 About This Showcase
This repository demonstrates my ability to build complex, interactive, and high-performance User Interfaces **without relying on heavy external libraries** (like jQuery, Swiper.js, or Bootstrap). 

In modern web development, performance is key. By utilizing native Browser APIs (Vanilla JS), I ensure that the applications I build are lightweight, fast, and fully customized to the business logic.

> **⚠️ Note:** These components are extracted from live commercial projects (Lavira Agency). The full HTML/CSS structures and business assets are kept private. These snippets focus purely on the JavaScript logic.

---

### 🚀 Highlighted Components

#### 1. Smart State-Based Carousel (`01-smart-carousel-slider`)
A fully custom slider algorithm built for a restaurant chain.
* **Logic:** Uses array index tracking (`currentIndex`) to calculate previous, active, and next states dynamically.
* **Features:** Synchronized text fading, dynamic rotation calculations for UI elements (helm icon), and seamless CSS class transitions.

#### 2. Intersection Observer Counters (`02-intersection-observer-counters`)
A performance-friendly viewport animation script for an industrial oven manufacturer.
* **Logic:** Utilizes the native `IntersectionObserver` API to detect when elements enter the user's screen.
* **Features:** Prevents unnecessary DOM reflows by animating counters (`setInterval` / `requestAnimationFrame` logic) *only* when visible, saving CPU cycles.

#### 3. Dynamic Scroll Navbar (`03-dynamic-scroll-navbar`)
A responsive navigation controller.
* **Logic:** Tracks `window.pageYOffset` to determine scroll direction and position.
* **Features:** Applies glass-morphism effects dynamically, hides/shows based on scroll direction (smart UX), and handles complex nested mobile submenu toggles.

---
<p align="center">
  <i>Copyright &copy; 2026 Furkan. All Rights Reserved.</i><br>
  <i>Code snippets provided for portfolio evaluation. Unauthorized commercial use is strictly prohibited.</i>
</p>
