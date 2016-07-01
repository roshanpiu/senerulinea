module.exports = function(app) {

    function isAuthenticated (req, res, next) {
        if(req.method === "GET"){
            return next();
        }
        if (req.isAuthenticated()){
            return next();
        }

        return res.redirect('/login');
    };

    //Register the authentication middleware
    //app.use(isAuthenticated);

    app.post('/brandixData', function (req, res) {
        // var newUser = new User(req.body);
        // newUser.save(function(err, obj) {
        //     if (err) {
        //         return res.json({info: 'error during user create', error: err});
        //     };
        //     return res.json({info: 'user created successfully', obj: obj});
        // });
        //console.log(JSON.stringify(req.body));
        res.json({requestBody : req.body});

    });

    
    app.get('/brandixData', function (req, res) {
        // User.find(function(err, users) {
        //     if (err) {
        //         return res.json({info: 'error during find users', error: err});
        //     };
        //     return res.json({info: 'users found successfully', data: users});
        // });
        res.json({msg: "get all"});
    });
    
    app.get('/brandixData/:id', function (req, res) {
        // User.findById(req.params.id, function(err, user) {
        //     if (err) {
        //         return res.json({info: 'error during find user', error: err});
        //     };
        //     if (user) {
        //         return res.json({info: 'user found successfully', data: user});
        //     } else {
        //         return res.json({info: 'user not found'});
        //     }
        // });
        res.json({msg: "get one"});
    });

};