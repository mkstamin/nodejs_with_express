const express = require('express');

const app = express();

const adminRoute = express.Router();

adminRoute.get('/dashboard', (req, res) => {
    console.log(req.route);
    res.send('We are in admin Dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/', (req, res) => {
    console.log(req.route);
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
