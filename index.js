/*
 * Title:Learning Express
 * Description:Here i practice all express().Like json(),raw(),text(),urlencoded(),static(),Router()
 * Author:Mks Tamin
 * Date: 05.01.2021
 *
 */

const express = require('express');

const app = express();

// @TODO: express.json()
// app.use(express.json());
// @TODO: express.raw()
// app.use(express.raw());
// @TODO: express.text()
// app.use(express.text());
// @TODO: express.urlencoded()
// app.use(express.urlencoded());
// @TODO: express.static()
// app.use(
//     express.static(`${__dirname}/public/`, {
//         index: 'home.html',
//     }),
// );

// @TODO: this is for express.Router()
const router = express.Router({
    caseSensitive: true,
});

app.use(router);

router.get('/about', (req, res) => {
    res.send('This is home page');
});

router.post('/', (req, res) => {
    res.send('This is home page with post request');
});

// @TODO: this is for app
// app.get('/', (req, res) => {
//     res.send('This is home page');
// });

// app.post('/', (req, res) => {
//     // @TODO: req.body
//     console.log(req.body);
//     res.send('This is home page with post request');
// });

app.listen(3000, () => {
    console.log('Listening on PORT 3000');
});
