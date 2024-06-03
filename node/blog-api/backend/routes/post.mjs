import { Router } from "express";
import { requireAdminStatus } from "../middlewares/auth/authMiddleware.mjs";
import postController from "../controllers/postControllers.mjs";

const router = Router();

router.get("/", postController.posts_list);

router.get("/:id", postController.post_detail);

router.use(requireAdminStatus);

router.delete("/:id", postController.post_delete);

router.post("/create", postController.post_create);

export default router;
