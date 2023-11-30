const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/config");
const UserModel = require("../models/userModel");
const { httpStatus } = require("../config/constants");
const verifyToken = (req, res, next) => {
  //1. provjera da li postoji authorization property u req.headers
  if (req.headers.hasOwnProperty("authorization")) {
    let token = req.headers.authorization
    //2. provjera validnosti tokena, da li je istekao i dekodiranje
    jwt.verify(token, JWT_KEY, async (error, decode) => {
      //console.log(decode);
      if (error) {
        //ako ima greske il je token istekao
        res.status(httpStatus.TOKEN_EXPIRESS.status).send(httpStatus.TOKEN_EXPIRESS.send)
      } else {
        // ako je token validan
        try {
          //provjera da li postoji user sa id iz tokena kod nas u bazi
          const user = await UserModel.findOne({ _id: decode._id })
          if (user) {
            req.locals = {
              firstName: user.firstName,
              lastName: user.lastName,
              role: user.role,
              _id: decode._id
            }
            next()
          } else {
            res.status(httpStatus.TOKEN_EXPIRESS.status).send({ msg: "Token is invalid." })
          }

        } catch (error) {
          res.status(httpStatus.SERVICE_ERROR.status)
            .send(httpStatus.SERVICE_ERROR.send)
        }
      }
    })

  } else {
    res.status(httpStatus.TOKEN_EXPIRESS.status).send({ msg: "You not logged" })
  }

  //console.log(req.headers.authorization);
}

module.exports = verifyToken;