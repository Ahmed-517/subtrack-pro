# SubTrack Pro

A production-ready subscription management system built with Node.js, Express, and MongoDB. This system provides a robust backend for managing user subscriptions, handling payments, and automating subscription workflows.

## 🌟 Features

- **User Authentication & Authorization**
  - JWT-based authentication
  - Secure password hashing with bcrypt
  - Role-based access control

- **Subscription Management**
  - Create and manage subscription plans
  - Track subscription status and history
  - Automated subscription renewals
  - Payment processing integration

- **Security**
  - Secure password handling
  - JWT token-based authentication
  - Protected API endpoints
  - Environment variable configuration

- **Email Notifications**
  - Automated email notifications for subscription events
  - Customizable email templates
  - Transaction receipts

## 🛠️ Tech Stack

- **Backend Framework**: Node.js with Express
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Email Service**: Nodemailer
- **Security**: bcryptjs for password hashing
- **Date Handling**: Day.js
- **Development**: ESLint for code quality

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/subtrack-pro.git
   cd subtrack-pro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_SERVICE=your_email_service
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
subtrack-pro/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── database/       # Database connection and models
├── middlewares/    # Custom middlewares
├── models/         # Mongoose models
├── routes/         # API routes
├── utils/          # Utility functions
├── app.js          # Application entry point
└── package.json    # Project dependencies
```

## 🔒 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Subscriptions
- `GET /api/subscriptions` - Get all subscriptions
- `POST /api/subscriptions` - Create a new subscription
- `GET /api/subscriptions/:id` - Get subscription details
- `PUT /api/subscriptions/:id` - Update subscription
- `DELETE /api/subscriptions/:id` - Cancel subscription

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built following a comprehensive backend crash course
- Special thanks to the open-source community for the amazing tools and libraries 