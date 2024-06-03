import { Router } from "express";

import { requireAuth } from "../middlewares/auth/authMiddleware.mjs";

const router = Router();

router.get("/:id", (req, res) =>
    res.json({ content: `comment with id: ${req.params.id}` })
);

router.use(requireAuth);

router.delete("/:id", (req, res) =>
    res.json({ content: `comment with id: ${req.params.id} is deleted` })
);

router.post("/create", (req, res) =>
    res.json({ content: "you created a new comment for a post" })
);

export default router;
