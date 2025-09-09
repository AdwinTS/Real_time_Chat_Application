# 🚀 Real-Time Chat Application

A modern, real-time chat application that allows users to sign in, join specific chat rooms, and exchange messages instantly. This project demonstrates the power of **Firebase Firestore** for real-time data synchronization and **React** for building a dynamic user interface.

---

## ✨ Features

- ✅ **Google Authentication** – Secure sign in using your Google account  
- 💬 **Real-Time Messaging** – Messages appear instantly for all users in the same room  
- 📚 **Room-Based Chat** – Join or create new chat rooms for focused conversations  
- 🎨 **Intuitive UI** – Clean, modern interface designed with **Tailwind CSS**  
- 📱 **Responsive Design** – Works seamlessly on desktop and mobile devices  

---

## 📸 Screenshots

| Sign-In Page | Room Selection Page | Chat Page |
|-------------|---------------------|-----------|
| ![Sign-In Page](path/to/signin-image.png) | <img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/9477122a-e47d-4241-84a6-fe3ca1bef440" /> | ![Chat Page](path/to/chat-page-image.png) |

> Replace `path/to/...` with your image URLs or relative paths in your repo (e.g., `./screenshots/signin.png`).

---

## 💻 Technologies Used

- **Frontend:** React.js  
- **Styling:** Tailwind CSS  
- **State Management:** React Hooks (`useState`, `useRef`)  
- **Authentication & Database:** Firebase (Authentication & Firestore)  
- **Bundler:** Vite  
- **Package Manager:** npm  
- **Cookies Management:** universal-cookie  

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js (LTS version)](https://nodejs.org/)  
- npm (comes with Node.js)

### Local Setup

1. Clone the repository  
    ```bash
    git clone [repository-url]
    cd [repository-name]
    ```

2. Install dependencies  
    ```bash
    npm install
    ```

3. Firebase Configuration  
    - Create a new project in [Firebase Console](https://console.firebase.google.com/)  
    - Enable **Google Sign-in Provider** under Authentication  
    - Create a **Firestore Database** and configure security rules  
    - Copy Firebase SDK config from Project Settings  

4. Create a `.env.local` file in the root and add your Firebase credentials:
    ```env
    VITE_FIREBASE_API_KEY="YOUR_API_KEY"
    VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
    VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
    VITE_FIREBASE_APP_ID="YOUR_APP_ID"
    ```

5. Start development server  
    ```bash
    npm run dev
    ```
    App will run at [http://localhost:5173](http://localhost:5173)

---

## 🚀 Deployment

Deploy your app easily using **Vercel**:

1. Push your code to a new GitHub repository  
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)  
3. Click **New Project → Import Git Repository**  
4. Select your repository and click **Deploy**  
5. Add Firebase config as **Environment Variables** in project settings  
6. Trigger deployment, and your app will be live!

---

## 🎉 Enjoy your real-time chat experience!

---

## 📜 License

MIT License © [Your Name]
