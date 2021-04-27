const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { authToken } = require('../middleware/token');
const db = require('../db/connection');

const routeUsers = require('../routes/users');
const routeBooks = require('../routes/books');
const routeComments = require('../routes/comments');
const routeZzims = require('../routes/zzims');

const app = express();

app.use('/users', routeUsers);
app.use('/books', routeBooks);
app.use('/comments', routeComments);
app.use('/zzims', routeZzims);

// users
// books
// comments
// zzims

const port = 4000;
module.exports = app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
