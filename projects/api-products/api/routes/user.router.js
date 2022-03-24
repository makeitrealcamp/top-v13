import express from "express";

import { userCtrl } from "../controllers/index.js";

const { login, createUser, registerByGoogle, loginWithGoogle } = userCtrl;

const router = express.Router();

const userRoutes = {
  LOGIN: "/login",
  CREATE: "/users/create",
  REGISTER_BY_GOOGLE: "/users/google/register",
};

router.post(userRoutes.LOGIN, loginWithGoogle, login);
router.post(userRoutes.CREATE, createUser);
router.post(userRoutes.REGISTER_BY_GOOGLE, registerByGoogle);

export default router;
