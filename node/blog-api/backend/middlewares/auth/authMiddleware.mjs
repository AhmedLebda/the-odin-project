import { isValidAccessToken } from "../../utils/auth.mjs";

// protect routes that require users to be logged in
const verifyAccessToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader === "undefined") {
        res.sendStatus(401);
    }
    const bearerToken = bearerHeader.split(" ")[1];

    try {
        const decoded = isValidAccessToken(bearerToken);
        req.user = { id: decoded.id, status: decoded.status };
        next();
    } catch (error) {
        res.sendStatus(401);
    }
};

// protect routes with admin status only privileges
const requireAdminStatus = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader === "undefined") {
        res.sendStatus(401);
    }
    const bearerToken = bearerHeader.split(" ")[1];
    try {
        const decoded = isValidAccessToken(bearerToken);

        if (decoded.status !== "admin") throw new Error("Forbidden");

        req.user = { id: decoded.id, status: decoded.status };

        next();
    } catch (err) {
        res.status(401).json({ error: "Not Authorized" });
    }
};

export { verifyAccessToken, requireAdminStatus };
