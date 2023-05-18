const express = require('express');
const sesssion = require('express-session');
const cookieParser = require('cookie-parser');
const groceriesRoute = require('./src/routes/groceries');
const marketsRoute = require('./src/routes/markets');
const authRoute = require('./src/routes/auth')

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());

app.use(cookieParser());
app.use(sesssion({
  secret: "asdasdasd",
  resave: false,
  saveUninitialized: false,
}))

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});

app.use('/api/v1/groceries', groceriesRoute);
app.use('/api/v1/markets', marketsRoute);
app.use('/api/v1/auth', authRoute);

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));