const app = require('./app');
require('dotenv').config();

// não altere esse arquivo

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
