const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// 🔥 BACKEND CONFIG ROUTE (Dashboard isi se Firebase config uthayega)
app.get('/api/config', (req, res) => {
  res.json({
    success: true,
    data: {
      siteName: "Quick Pay",
      firebaseConfig: {
        apiKey: "AIzaSyA9L0Ff4nuAHsS-bC6K4Qf0RUYLR-BLSQo",
        authDomain: "quickpay-761bf.firebaseapp.com",
        projectId: "quickpay-761bf",
        storageBucket: "quickpay-761bf.firebasestorage.app",
        messagingSenderId: "756705256503",
        appId: "1:756705256503:web:8d31b15a680002c5464bb2",
        measurementId: "G-R0T6RC3XK6"
      },
      vapidKey: "",
      maintenanceMode: false
    }
  });
});

// 🔥 DUMMY AUTH (Taaki Login button click karne par app crash na ho)
app.post('/api/auth/google', (req, res) => {
  res.json({
    success: true,
    data: {
      token: "dummy_jwt_token_123",
      user: { displayName: "Test User", email: "test@example.com", isNewUser: false }
    }
  });
});

// 🔥 VERIFIED USER ROUTE
app.get('/api/auth/me', (req, res) => {
  res.json({ success: true, data: { displayName: "Test User", email: "test@example.com" } });
});

// 🔥 WALLET BALANCE ROUTE
app.get('/api/wallet/balance', (req, res) => {
  res.json({ success: true, data: { balance: 500.00, bonusBalance: 10.00 } });
});

// 🔥 ZAROORI: Vercel ke liye export line
module.exports = app;
