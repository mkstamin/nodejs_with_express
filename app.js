/*
 * Title:Response express
 * Description:All about Response
 * Author:Mks Tamin
 * Date: 17.01.2021
 *
 */

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
    // res.render('about', {
    //     name: 'World',
    // });

    // @TODO:
    // res.send('Hello');

    // @TODO:
    // res.end();

    // @TODO:
    // res.json({
    //     name: 'Bangladesh',
    // });

    // @TODO:
    // res.status(200);
    // res.end();
    // OR
    // res.sendStatus(400);

    // @TODO:
    // res.format({
    //     'text/plain': () => {
    //         res.send('hi');
    //     },
    //     'text/html': () => {
    //         res.render('about', {
    //             name: 'Bangladesh',
    //         });
    //     },
    //     'application/json': () => {
    //         res.json({
    //             message: 'About',
    //         });
    //     },
    //     default: () => {
    //         res.status(406).send('Not acceptable');
    //     },
    // });

    // @TODO:
    // res.cookie('name', 'Mks Tamin');
    // res.end();

    // @TODO:
    // res.location('/test');
    // res.end();

    // @TODO:
    res.set('name', 'Mks Tamin');
    console.log(res.get('name'));
    res.end();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
