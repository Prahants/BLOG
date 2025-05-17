import express from 'express';
import { db } from '../db.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json('User already exists!');

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user into the database
    const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(insertQuery, [username, email, hashedPassword], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json('User registered successfully');
    });
  });
});

export default router;