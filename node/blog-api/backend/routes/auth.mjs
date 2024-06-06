import { Router } from "express";
import authController from "../controllers/authControllers.mjs";
import { verifyAccessToken } from "../middlewares/auth/authMiddleware.mjs";

const router = Router();

router.post("/login", authController.login_post);

router.post("/signup", authController.signup_post);

router.post("/refresh", authController.refresh_access);

// require users to be logged in to access these routes
router.use(verifyAccessToken);

router.post("/logout", authController.logout_get);

export default router;
