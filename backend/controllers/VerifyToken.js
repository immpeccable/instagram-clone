var jwt = require('jsonwebtoken');

async function verifyToken(req, res, next) {
    console.log("hello amk")
    console.log(req.cookies);
  var token = await req.cookies['x-access-token'];
  
  
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
    
console.log(token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
    console.log(decoded)
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;