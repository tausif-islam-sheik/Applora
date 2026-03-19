# 🚀 Applora

Applora is a fully responsive App Store web application where users can explore apps, view details, install apps, and manage their installations with persistent storage.

---

## 🌐 Live Demo
🔗 https://beamish-fudge-5f4fb8.netlify.app

---

## 📌 Features

### 🧭 Navigation & Layout
- Responsive header with active route highlighting
- Footer with custom design
- Smooth page navigation

### 🏠 Home Page
- Hero banner with CTA buttons (App Store & Play Store)
- Stats section
- Top Apps showcase (8 apps)
- “Show All” navigation

### 📱 All Apps Page
- Display all apps dynamically
- 🔍 Live search (case-insensitive)
- ❌ “No App Found” handling
- 📊 Total apps count display

### 📊 App Details Page
- Detailed app information
- 📈 Review chart (Recharts)
- ⬇️ Install button with toast notification
- Installed state handling

### 💾 Installation System
- Save installed apps in LocalStorage
- Prevent duplicate installations
- ❌ Uninstall functionality
- 🔔 Toast feedback

### 📂 My Installation Page
- View all installed apps
- Remove apps dynamically

### 🔽 Sorting
- Sort apps by downloads:
  - High → Low
  - Low → High

### ⚠️ Error & UX Handling
- Custom 404 error page
- Loading animations (navigation + search)
- App not found handling

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- DaisyUI

### Libraries
- React Router
- React Toastify
- Recharts

### Storage
- LocalStorage (for installation persistence)

### Deployment
- Netlify

---

## 📦 Data Structure

Each app follows this structure:

```ts
{
  id: number;
  title: string;
  image: string;
  companyName: string;
  description: string;
  size: number;
  downloads: number;
  reviews: number;
  ratingAvg: number;
  ratings: [
    { name: "1 star", count: number },
    { name: "2 star", count: number },
    { name: "3 star", count: number },
    { name: "4 star", count: number },
    { name: "5 star", count: number }
  ];
}