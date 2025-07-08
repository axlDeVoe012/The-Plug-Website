# 🌿 The Plug Website

**The Plug** is a modern, responsive multi-page business website built with React, Vite, and Bootstrap. It showcases cannabis products, sneaker care services, educational content, and more. With integrated contact features and clean design, it's a one-stop-shop for lifestyle and wellness.

---

## 🚀 Features

- ⚛️ Built with **React + Vite** for fast performance and modularity
- 🎨 **Bootstrap 5** for responsive, mobile-first styling
- 📱 Fully **responsive** design for all screen sizes
- ✉️ **EmailJS** contact form with auto-reply support
- 🧭 **React Router** for smooth multi-page navigation
- 🎥 Cannabis-themed animated landing page
- 🌐 Social media links: Instagram, WhatsApp, Facebook

---

## 🛠️ Tech Stack

| Technology         | Purpose                                  |
|--------------------|-------------------------------------------|
| React + Vite       | Frontend framework & development server   |
| Bootstrap 5        | Styling and layout                        |
| React Router DOM   | Routing and navigation                    |
| EmailJS            | Sending emails directly from the frontend |

---

## 📁 Project Structure

the-plug-website/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images and icons
│   ├── components/          # Reusable UI components (Navbar, Footer)
│   ├── pages/               # Each route/page (Home, Contact, etc.)
│   ├── App.jsx              # Main routing logic
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── .env                     # API keys (ignored by Git)
├── .gitignore
├── package.json
└── README.md



---

## ✉️ Contact Form Setup (EmailJS)

This project uses [EmailJS](https://emailjs.com) to handle form submissions without a backend.

### 1. Create an EmailJS account

- Go to [https://emailjs.com](https://emailjs.com)
- Create a **service**, **email template**, and **public key**
- Add **auto-reply** using a second template

### 2. Configure `.env`

Create a file called `.env` in the project root and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_auto_reply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

---

## ✉️ Contact Form Setup (EmailJS)

This project uses [EmailJS](https://emailjs.com) to handle form submissions without a backend.

### 1. Create an EmailJS account

- Go to [https://emailjs.com](https://emailjs.com)
- Create a **service**, **email template**, and **public key**
- Add **auto-reply** using a second template

### 2. Configure `.env`

Create a file called `.env` in the project root and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_auto_reply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key


---

## ✉️ Contact Form Setup (EmailJS)

This project uses [EmailJS](https://emailjs.com) to handle form submissions without a backend.

### 1. Create an EmailJS account

- Go to [https://emailjs.com](https://emailjs.com)
- Create a **service**, **email template**, and **public key**
- Add **auto-reply** using a second template

### 2. Configure `.env`

Create a file called `.env` in the project root and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_auto_reply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

---

## ✉️ Contact Form Setup (EmailJS)

This project uses [EmailJS](https://emailjs.com) to handle form submissions without a backend.

### 1. Create an EmailJS account

- Go to [https://emailjs.com](https://emailjs.com)
- Create a **service**, **email template**, and **public key**
- Add **auto-reply** using a second template

### 2. Configure `.env`

Create a file called `.env` in the project root and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_auto_reply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

🚫 Make sure this file is NOT committed to Git — it's already in .gitignore.

# Install dependencies
npm install

# Start development server
npm run dev

Then open http://localhost:5173 in your browser.

npm run build

🌐 Deployment
You can deploy the built version of this site to platforms like:

Netlify

Vercel

GitHub Pages (requires additional config)

Make sure to set your EmailJS env vars in the platform’s settings panel.

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first.


🧑‍💻 Author
Kulani Shaun Mabasa And Donald Hlungwane
Your one-stop dev for lifestyle platforms and cannabis tech.

Developed with 💚 by The Plug Team

---

Let me know if you want me to generate a matching `LICENSE.md`, add screenshots, or prep this for Vercel/Netlify deployment.

