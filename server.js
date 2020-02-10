const express = require('express');
const path = require('path');
const app = express();
const db = require('./db')

//middleware
// app.use((req,res, next)
// )
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/users', async (req, res, next) => {
  try {
    res.send(await db.getUsers());
  }
  catch (ex) {
    next(ex)
  }
});

db.createUser({ name: "Shem" })
  .then(user => console.log(user))
app.listen(3000, () => console.log('listening on port 3000'));
