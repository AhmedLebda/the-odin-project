import { Router } from "express";
import { requireAdminStatus } from "../middlewares/auth/authMiddleware.mjs";
import postController from "../controllers/postControllers.mjs";

const router = Router();

router.get("/", postController.posts_list);

router.post("/create", requireAdminStatus, postController.post_create);

router.get("/:id", postController.post_detail);

router.delete("/:id", requireAdminStatus, postController.post_delete);

export default router;
