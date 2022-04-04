let User = require("../models/User")

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.log_in = function(req, res, next){
    console.log(req.body)
    User.findOne({e_mail: req.body.email}, function(err, user){
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');



        //console.log("error occured 1 elkwgşjlgjlrkegjr")
        let isPasswordValid = bcrypt.compareSync(req.body.password, user.password, function(err){
            if(err) res.send(err);
        });
        //console.log("error occured 2 elkwgşjlgjlrkegjr")
        if(!isPasswordValid) return res.status(401).send({ auth: false, token: null });
        //console.log("error occured  3 elkwgşjlgjlrkegjr")
        let token = jwt.sign({id: user._id}, process.env.ACCESS_TOKEN_SECRET , {
            expiresIn: 7200
        })

        res.cookie('x-access-token',token);

        res.redirect("http://localhost:3000")

    })
}

exports.main_page = function(req, res, next){
    //console.log(req.user);
    var token = req.cookies['x-access-token'];
    if(!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    res.send({auth: true, token: token});
    
}

exports.sign_up = function(req, res, next){
    
    const {email, fullname, username, password} = req.body;
    let hashedpassword = bcrypt.hashSync(password, 8);
    User.create({
        e_mail: email,
        full_name: fullname,
        user_name: username,
        password: hashedpassword
    },
    function(err, user){
        if(err){
            console.log(err);
            return res.status(500).send("There was a problem registering the user.")
        }
        /*let token = jwt.sign({id: user._id}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: 7200
        })*/
        res.redirect("http://localhost:3001");
    }
    
    )
    
}