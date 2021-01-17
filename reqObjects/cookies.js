const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
    console.log(req.query);
    res.send('We are in admin Dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => {
    console.log(req.cookies);
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
