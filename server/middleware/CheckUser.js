const jwt = require("jsonwebtoken");
const CheckUser = (req, res, next) => {
  let header = req.header("auth-token");
  let privateKey = "YOUR_PRIVATE_KEY";
  jwt.verify(header, privateKey, function (err, decoded) {
    if (err) {
      console.log(err)
      req.checker = 0;
      return;
    }
    console.log(decoded);
    req.user_id = decoded;
    req.checker = 1;
    return;
  });
  next();
};
module.exports = CheckUser;
