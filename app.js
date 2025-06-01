const express = require('express');
const userRoutes = require('./routes/userRoutes'); // ← ini akan error jika hasil ekspor bukan router

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/users', userRoutes); // ✅ Harus router function, bukan object

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
