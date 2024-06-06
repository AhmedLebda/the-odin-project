import { Router } from "express";
import commentController from "../controllers/commentControllers.mjs";
import { verifyAccessToken } from "../middlewares/auth/authMiddleware.mjs";

const router = Router();

router.use(verifyAccessToken);

router.post("/create", commentController.comment_create);

router.delete("/:id", commentController.comment_delete);

export default router;
