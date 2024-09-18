import { resolve } from "path";

const jwt = require("jsonwebtoken");

export const generateJWT = (
  uid: string,
  login: string,
  expiresIn: string = process.env.EXPIRES_IN || "12h",
  jwtSecret = process.env.JWT_SECRET
) => {
  return new Promise((resolve, reject) => {
    const payload = {
      uid,
      login,
    };
    jwt.sing(
      payload,
      jwtSecret,
      {
        expiresIn: expiresIn,
      },
      (err: string, token: string) => {
        if (err) {
          console.error(err);
          reject("Cannot generate the JWT");
        } else {
          resolve(token);
        }
      }
    );
  });
};
