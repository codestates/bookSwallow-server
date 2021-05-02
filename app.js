const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  }),
);

app.use(
  session({
    cookie: {
      domain: 'localhost',
      path: '/',
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: 'none',
      httpOnly: true,
    },
  }),
);

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
