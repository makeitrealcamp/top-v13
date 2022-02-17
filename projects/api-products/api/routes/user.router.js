import express from "express";

import { userCtrl } from "../controllers/index.js";

const { login, createUser } = userCtrl;

const router = express.Router();

const userRoutes = {
  LOGIN: "/login",
  CREATE: "/users/create",
};

router.post(userRoutes.LOGIN, login);
router.post(userRoutes.CREATE, createUser);

export default router;
