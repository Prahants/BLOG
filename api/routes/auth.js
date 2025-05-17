// posts.js
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Posts data');
});

export default router;
