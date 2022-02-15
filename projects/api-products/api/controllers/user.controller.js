//TODO: When create CRUD of users
//import { User } from "../models/index.js";

import jwt from "jsonwebtoken";

const username = "maria";
const passwd = "123";

export const login = (req, res) => {
  const { username: userLog, password: passLog } = req.body;

  // Mocked user database
  const userDb = {
    id: "2138901274-120950-1",
    name: "Maria Giraldo",
  };

  if (username === userLog && passwd === passLog) {
    // JWT
    jwt.sign(userDb, process.env.SECRET_KEY, (error, token) => {
      if (!error) {
        res.status(200).json({
          token,
        });
      } else {
        res.status(403).send();
      }
    });
  } else {
    res.status(403).send();
  }
};
