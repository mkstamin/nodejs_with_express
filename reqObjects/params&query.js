const express = require('express');

const app = express();

const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
    console.log(req.params);
    res.send('We are in admin Dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.query);
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
