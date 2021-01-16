/*
 * Title:Application Object
 * Description: Application Object - Express JS
 * Author:Mks Tamin
 * Date: 16.01.2021
 *
 */

const express = require('express');
// const handle = require('./handel');

const app = express();
// const admin = express();

// TODO:
// app.locals.title = 'My App';
// TODO:
// admin.on('mount', (parent) => {
//     console.log('Admin Mounted');
//     console.log(parent); // refers to the parent app
// });
// TODO:
// admin.get('/dashbord', (req, res) => {
//     console.log(admin.mountpath);
//     res.send('Welcome to admin dashboard');
// });
// TODO:
// app.enable('case sensitive routing');
// TODO:
// app.param('id', (req, res, next, id) => {
//     const user = {
//         userId: id,
//         name: 'Bangladesh',
//     };
//     req.userDetails = user;
//     next();
// });
// app.get('/user/:id', (req, res) => {
//     // TODO:
//     // console.log(req.userDetails);
//     res.send('Hello from Home Page');
// });

// TODO:
// app.use('/admin', admin);

// TODO: app.route()
app.set('view engine', 'ejs');

app.route('/about/user')
    .get((req, res) => {
        res.render('pages/about');
    })
    .post((req, res) => {
        res.send('Welcome to application home post');
    })
    .put((req, res) => {
        res.send('Welcome to application home put');
    });

app.listen(3000, () => {
    console.log('Listening on PORT 3000');
});
