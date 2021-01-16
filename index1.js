/*
 * Title:Express Js
 * Description:Introduction to Express JS
 * Author:Mks Tamin
 * Date: 14.01.2021
 *
 */

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('This is home page');
});

app.post('/', (req, res) => {
    res.send('This is home page with post request');
});

app.listen(3000, () => {
    console.log('Listening on PORT 3000');
});
