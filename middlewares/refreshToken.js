const jwt = require('jsonwebtoken');
require('dotenv').config();


const refreshToken = (req, res, next) => {
    const cookies = req.headers.cookie;
    let prevToken;
    if(cookies) {prevToken = cookies.split("=")[1];}
    if(!prevToken) {
      return res.status(400).json({ message: "Couldn't find token" });
    }
    jwt.verify(String(prevToken), process.env.JWT_KEY, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(403).json({ message: "Authentication failed" });
      }
      res.clearCookie(`${user.id}`);

  
      const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, {
        expiresIn: "1hr",
      });
      console.log("Regenerated Token\n", token);
  
      res.cookie(String(user.id), token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 60 * 60), 
        httpOnly: true,
        sameSite: "lax",
      });

      req.id = user.id;
      next();
    });
  };

module.exports = refreshToken;