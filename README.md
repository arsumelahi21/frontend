# Job Matcher Frontend

This is the frontend application for the Job Matcher technical test, built with **Next.js** and deployed on **Vercel**. It interacts with a NestJS backend and uses Supabase-hosted PostgreSQL with `pgvector` for similarity-based matching.

---

## 🌐 Live Demo

👉 [https://frontend-one-snowy-46.vercel.app](https://frontend-one-snowy-46.vercel.app)

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Axios** for API calls
- **Tailwind CSS** for styling
- **React Hot Toast** for notifications
- **Deployed on Vercel**

---

## 📦 Setup

### 1. Clone the Repository

git clone https://github.com/arsumelahi21/frontend.git

cd frontend

---

### 2. Install Dependencies

npm install

---

### 3. Environment Variables

NEXT_PUBLIC_API_URL=https://srn-backend-production.up.railway.app/api (in my case this is url or replace with your localhost)

---

### 4. Run the Development Server

npm run dev

---

### 🧭 Features

Add Job – Submit job title & description.

Add Candidate – Submit candidate name & skill summary.

Match Candidates – Paste a job description and find top 3 candidate matches based on vector similarity.

Modern UI – Clean and responsive interface using Tailwind CSS.

Toast Notifications – Smooth success/error feedback without native alert()s.


