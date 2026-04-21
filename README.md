# GigStream | Full-Stack Freelance Marketplace

GigStream is a high-performance, multi-role online marketplace that connects freelancers with clients. Built with a focus on scalability and secure transactions, it features a complete order lifecycle, real-time communication, and integrated payments.

## 🚀 Live Demo
**Frontend:** [Insert Vercel/Netlify Link]  
**Backend API:** [Insert Render/Railway Link]

---

## 🛠️ Tech Stack

### Frontend
- **React.js / Next.js**: Component-based UI and Server Side Rendering.
- **Tailwind CSS**: Utility-first styling for a modern, responsive interface.
- **Zod & React Hook Form**: Type-safe form validation and management.

### Backend
- **Node.js & Express**: High-performance RESTful API architecture.
- **MongoDB & Mongoose**: Flexible NoSQL data modeling for complex relationships.
- **JWT & Bcrypt**: Secure authentication and industry-standard password hashing.

### Third-Party Integrations
- **Stripe API**: Secure payment processing and checkout flows.
- **Cloudinary**: Optimized cloud storage for gig images and profile photos.

---

## ✨ Key Features

- **Multi-Role System**: Distinct workflows for Buyers (Clients) and Sellers (Freelancers).
- **Gig Management**: Full CRUD operations for service listings with tiered pricing packages.
- **Real-Time Chat**: Direct buyer-seller communication channel for project requirements.
- **Order Tracking**: Visual status updates from "Order Placed" to "Final Delivery."
- **Review System**: Five-star rating and feedback loop for verified purchases.
- **Secure Payments**: Integrated Stripe checkout with automated success/cancel handling.

---

## 📂 Project Structure

```text
├── client/                 # Frontend Application
│   ├── src/components/     # Atomic UI components
│   ├── src/pages/          # Routing and page logic
│   └── src/context/        # Global state management
└── server/                 # Backend API
    ├── controllers/        # Business logic
    ├── models/             # Database schemas
    ├── routes/             # API endpoints
    └── middleware/         # Auth & error handling
