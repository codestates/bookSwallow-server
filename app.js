const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
// const { authToken } = require('../middleware/token');

const app = express();
app.use(express.json());

const zzimRouter = require('./routes/zzim');
const userRouter = require('./routes/user');
const bookRouter = require('./routes/book');
const commentRouter = require('./routes/comment');

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.use('/zzims', zzimRouter);
app.use('/users', userRouter);
app.use('/books', bookRouter);
app.use('/comments', commentRouter);

const port = 4000;
module.exports = app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
