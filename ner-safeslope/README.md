# NER SafeSlope 🏔️🛡️

**AI-Powered Early Warning & Monitoring Platform for Landslides, Flash Floods, and Road Blockages in India's North Eastern Region**

> ⚠️ **Prototype / Demo Build** — All sensor data, risk scores, and alerts are simulated mock data for demonstration purposes only.

---

## 🚀 Quick Start

```bash
# 1. Navigate to the project folder
cd ner-safeslope

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

---

## 📁 Project Structure

```
ner-safeslope/
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Navbar.jsx      # Sticky glassmorphic navbar
│   │       └── Footer.jsx      # Footer with links & emergency contacts
│   ├── data/
│   │   ├── locations.js        # 40+ NER locations with mock sensor data
│   │   ├── alerts.js           # Mock alert history + multilingual translations
│   │   ├── weather.js          # 72-hr forecast & analytics mock data
│   │   └── reports.js          # Mock field reports & form dropdown options
│   ├── hooks/
│   │   ├── useCountUp.js       # Animated count-up number hook
│   │   └── useInView.js        # Intersection observer for scroll animations
│   ├── pages/
│   │   ├── Home.jsx            # Landing page (Hero + Stats + How It Works)
│   │   ├── Dashboard.jsx       # Interactive GIS map + risk panels
│   │   ├── Analytics.jsx       # Predictive analytics + radar/gauge charts
│   │   ├── Reporting.jsx       # Field report form + live reports list
│   │   ├── Alerts.jsx          # Alert center + multilingual + offline mode
│   │   └── About.jsx           # Platform info + user types + contacts
│   ├── App.jsx                 # Router setup
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles + Tailwind directives
├── tailwind.config.js          # Color system (brand teal + risk colors)
├── postcss.config.js
├── vite.config.js
└── index.html
```

---

## 🗺️ Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero section, animated stat counters, How It Works steps |
| **Dashboard** | `/dashboard` | Interactive Leaflet map with 40+ NER markers, filters, charts |
| **Analytics** | `/analytics` | AI risk gauge, radar chart, factor breakdown bar chart |
| **Reporting** | `/reporting` | Submit field reports with map pin picker & photo upload |
| **Alerts** | `/alerts` | Alert list, multilingual preview, offline mode simulator |
| **About** | `/about` | Platform info, user types, partner agencies, contacts |

---

## 🎨 Design System

### Risk Colors
| Level | Color | Score Range |
|-------|-------|-------------|
| 🟢 Low | `#22c55e` | < 30 |
| 🟡 Moderate | `#f59e0b` | 30–60 |
| 🟠 High | `#f97316` | 60–80 |
| 🔴 Severe | `#ef4444` | > 80 |

### Brand Color
- **Primary**: Deep Teal `#0d9488` (Tailwind `brand-600`)
- **Background**: White / `#F8F9FA`
- **Typography**: Inter (body) + Poppins (headings)

---

## 📊 Mock Data

All data is in `src/data/`:

- **`locations.js`** — 40 NER locations across 8 states with: coordinates, risk score, rainfall (mm), soil moisture (%), slope angle (°), road status, population, elevation
- **`alerts.js`** — 8 mock alerts with multilingual translations (English, Assamese, Bengali, Hindi)
- **`weather.js`** — 72-hour forecast data for 7 high-risk zones + predictive analytics factor breakdowns
- **`reports.js`** — 5 initial field reports + dropdown options for the reporting form

---

## ✅ Functional Checklist

- [x] Interactive Leaflet map with clickable color-coded markers
- [x] Filters: state, risk level, category, search
- [x] Animated count-up stats on home page
- [x] Scroll-triggered section animations
- [x] 72-hr rainfall vs. risk line chart (switchable zones)
- [x] Risk severity donut chart
- [x] Predictive analytics SVG gauge + radar chart + bar chart
- [x] Field report form with validation, map pin picker, photo upload/preview
- [x] Report submission → toast notification → prepended to report list
- [x] Multilingual alert preview (EN / AS / BN / HI)
- [x] Offline mode simulator with queued sync UI
- [x] Skeleton loading states on dashboard
- [x] Fully responsive (mobile, tablet, desktop)
- [x] Sticky glassmorphic navbar
- [x] Road status table with color-coded badges

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| React + Vite | Frontend framework & build tool |
| Tailwind CSS | Styling |
| React Router v6 | Client-side routing |
| Leaflet + React-Leaflet | Interactive GIS map |
| Recharts | Line, donut, radar, bar charts |
| Lucide React | Icons |
| react-hot-toast | Toast notifications |

---

## 📝 Notes

- The map uses **OpenStreetMap** free tile layers — no API key required
- Photo uploads are previewed client-side only; no server storage occurs
- The offline mode toggle is a **UI simulation** for demo purposes
- All translations are human-curated samples, not machine-translated

---

*Built for hackathon demonstration. Not for production or emergency use.*
