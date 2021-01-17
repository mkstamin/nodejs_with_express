const express = require('express');

const app = express();

const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
    console.log(req.hostname);
    res.send('We are in admin Dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => {
    console.log(req.path);
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
