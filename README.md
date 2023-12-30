# Brand_wick_full-stack

BrandWick is a full-stack web application that allows users to register, login, and access a personalized dashboard.

## Features

- **User Authentication:** Register and login securely using JWT tokens.
- **Signup:** Users can sign up by providing their name, username, email, phone, and password.
- **Login:** Secure login functionality for registered users.

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB (using Mongoose)
- JWT for authentication
- bcrypt for password hashing

### Frontend

- React.js
- React Router for routing
- Fetch API for making HTTP requests
- react-toastify for displaying signup success/error notifications
- CSS for styling

## Getting Started

### Prerequisites

- Node.js and npm/yarn installed
- MongoDB installed and running

### Installation

1. **Backend Setup:**

   ```bash
   # Navigate to the backend folder
   cd Brand_wick/Backend

   # Install dependencies
   npm install

   # Start the server
   npm start

   Frontend Setup:

   # Navigate to the frontend folder
   cd Brand_wick/Frontend
   ```

# Install dependencies

npm install

# Start the React development server

npm start

Folder Structure

Brand_wick/
├── Backend/
│ ├── models/ # Database models (Mongoose)
│ ├── routes/ # Express routes (User authentication, etc.)
│ ├── index.js # Entry point for the backend server
│ └── ...
├── Frontend/
│ ├── src/
│ │ ├── components/ # React components (Navbar, Login, Signup, etc.)
│ │ ├── pages/ # Page components (Dashboard, Login Page, Signup Page, etc.)
│ │ ├── App.js # Main App component
│ │ ├── index.js # Entry point for the frontend
│ │ └── ...
│ └── ...
└── ...

Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.

License

This project is licensed under the MIT License - see the LICENSE file for details.

Adjust the details according to your project structure, additional features, and any specific instructions for setting up or using the application.
