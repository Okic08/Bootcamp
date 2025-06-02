const bcrypt = require('bcryptjs');

// Simulasi data user dummy (biasanya berasal dari database)
const users = [
  {
    id: 1,
    name: 'Ciko Nanda',
    username: 'cikonanda',
    password: bcrypt.hashSync('cikonanda', 10), 
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// GET /users handler
const getUsers = (req, res) => {
  const safeUsers = users.map(u => {
    const { password, ...rest } = u;
    return rest;
  });
  res.json(safeUsers);
};

module.exports = {
  getUsers,
  users
};
