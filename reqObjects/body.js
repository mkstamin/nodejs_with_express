const express = require('express');

const app = express();
app.use(express.json());

const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
    console.log(req.query);
    res.send('We are in admin Dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => {
    console.log(req.query);
    res.send('Hello World');
});

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('Hello World Post');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
