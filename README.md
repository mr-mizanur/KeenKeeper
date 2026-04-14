# 🔗 KeenKeeper (Friendship Management App)

## 📌 Project Overview
KeenKeeper is a modern friendship tracking web app built with React. It helps users manage, track, and improve their relationships by logging interactions like calls, texts, and video chats. The app also provides analytics and a timeline of all interactions in a clean, responsive UI.

---

## 🚀 Live Demo
https://keen-keeper-pro.vercel.app/

---

## 🛠️ Technologies Used
- React.js
- React Router DOM
- Tailwind CSS
- Recharts
- React Icons
- Toast Notifications (React Hot Toast / similar)

---

## ✨ Key Features

### 1. 👥 Friend Management
- Display friends from a JSON dataset
- Beautiful responsive cards with status indicators
- Click to view detailed friend profile

### 2. ⚡ Interaction Tracking
- Log Call, Text, and Video interactions
- Automatically update timeline with new entries
- Toast notifications on every interaction

### 3. 📊 Analytics & Timeline
- Timeline page showing full interaction history
- Filter timeline by Call, Text, or Video
- Analytics page with pie chart visualization of interactions

---

## 📱 Pages Overview

- **Home Page**
  - Navbar with active link highlighting
  - Banner section with summary cards
  - Friends grid layout

- **Friend Details Page**
  - Profile info and relationship details
  - Quick action buttons (Call, Text, Video)
  - Stats and goal tracking cards

- **Timeline Page**
  - Interaction history list
  - Filter options for interaction types

- **Stats Page**
  - Friendship analytics chart (Recharts)

- **404 Page**
  - Friendly error page for invalid routes

---

## 🎯 Additional Features
- Loading spinner while fetching data
- Fully responsive design (mobile, tablet, desktop)
- Persistent routing (no reload errors on refresh)
- Clean UI based on Figma design

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/mr-mizanur/keenkeeper.git

# Go to project folder
cd keenkeeper

# Install dependencies
npm install

# Start development server
npm run dev