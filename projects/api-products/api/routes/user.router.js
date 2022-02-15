import express from "express";

import { userCtrl } from "../controllers/index.js";

const { login } = userCtrl;

const router = express.Router();

const userRoutes = {
  LOGIN: "/login",
};

router.post(userRoutes.LOGIN, login);

export default router;
