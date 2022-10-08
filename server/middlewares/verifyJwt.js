const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  const authHeader = req.headers["Authorization"];

  if (!authHeader) return res.status(401).json({msg: "You are not authorized"});

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); /// Invalid
    req.username = decoded.username;
    next();
  });
};

module.exports = verifyJwt;
