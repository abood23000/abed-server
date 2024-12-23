const express = require('express');
const app = express();

app.get('/name', (req, res) => {
  res.send('Abed Al-Rahman Froukh'); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});