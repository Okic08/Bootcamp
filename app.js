const express = require('express');
const userRoutes = require('./routes/userRoutes'); // harus benar

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/users', userRoutes); // middleware function dari `router`

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
