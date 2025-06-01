const express = require('express');
const bcrypt = require('bcryptjs');
const { getUsers, users } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user) return res.status(404).json({ message: 'User not found' });

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password' });

  const { password: _, ...userWithoutPassword } = user;
  res.json({
    message: 'Login berhasil',
    user: userWithoutPassword
  });
});

module.exports = router; // ✅ PENTING: harus langsung `router`, bukan `{ router }`
