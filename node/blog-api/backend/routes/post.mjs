import { Router } from "express";
import { requireAdminStatus } from "../middlewares/auth/authMiddleware.mjs";

const router = Router();

router.get("/", (req, res) => res.json({ content: "All posts" }));

router.get("/:id", (req, res) =>
    res.json({ content: `post with id: ${req.params.id}` })
);

router.use(requireAdminStatus);

router.delete("/:id", (req, res) =>
    res.json({ content: `post with id: ${req.params.id} is deleted` })
);

router.post("/create", (req, res) =>
    res.json({ content: "you created a new post" })
);

export default router;
