# 📱 Hero IO - App Store Web Application

A modern React-based web application where users can explore apps, view details, install apps, and manage installed applications.

---

## 🚀 Live Site

👉 https://cute-conkies-f4502f.netlify.app/

---

## 📌 Features

### 🔹 App Details Page

* View app information (title, company, downloads, rating)
* Ratings chart using Recharts
* Install button with toast notification
* Prevent duplicate installation

### 🔹 Install System

* Save installed apps in **localStorage**
* Show "Installed" state after install
* Navigate to Installation page after install

### 🔹 My Installation Page

* View all installed apps
* Uninstall apps
* Remove from UI + localStorage
* Toast notification on uninstall

### 🔹 Sorting System

* Sort apps by downloads:

  * High → Low
  * Low → High

### 🔹 UI Features

* Responsive design
* Icons for downloads, reviews, ratings
* Clean card layout
* Loading animation

---

## 🛠️ Technologies Used

* React.js
* React Router
* Tailwind CSS
* Recharts
* React Icons
* React Toastify


---

## ⚙️ Installation (Local Setup)

```bash
npm install
npm run dev
```

---

## 🌐 Deployment

This project is deployed using **Vercel**

```bash
vercel --prod
```

---

## ⚠️ Important Config (React Router Fix)

Create a `vercel.json` file:

```json
{
  "routes": [
    { "src": "/.*", "dest": "/" }
  ]
}
```
