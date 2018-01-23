var express = require('express');
var router = express.Router();
var UserController = require('./userController');

// Authentication and Authorization Middleware
// var auth = function(req, res, next) {
//     if (req.session && req.session.loggedIn === true)
//         return next();
//     else
//         return res.sendStatus(401);
// };

router.get('/users', function(req, res) {
    UserController.getUsers(
        (code)=>{
            res.sendStatus(status);
        },
        (users)=>{
            res.send(users);
        });
});


router.get("/orders", function (req, res) {
    setTimeout(()=> {
        let data = [{ "id": 1, "order_name": "order1zzz" },
            { "id": 2, "order_name": "order2" },
            { "id": 3, "order_name": "order3" },
            { "id": 4, "order_name": "order4" }
        ];
        res.send(data);
    }, 1000);
});

module.exports = router;
