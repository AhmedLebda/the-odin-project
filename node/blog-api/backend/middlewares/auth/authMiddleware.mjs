import { isValidJWT } from "../../utils/auth.mjs";

const checkUser = (req, res, next) => {
    try {
        const decoded = isValidJWT(req.cookies.jwt);
        res.locals.user = decoded;
    } catch (error) {
        res.locals.user = null;
    } finally {
        next();
    }
};

// Protect routes
const requireAuth = (req, res, next) => {
    try {
        isValidJWT(req.cookies.jwt);
        next();
    } catch (error) {
        res.json({ redirect: "/user/login" });
    }
};

const requireAdminStatus = (req, res, next) => {
    try {
        const decoded = isValidJWT(req.cookies.jwt);
        if (decoded.status !== "admin") throw new Error("Forbidden");
        next();
    } catch (err) {
        res.json({ error: err.message });
    }
};

export { checkUser, requireAuth, requireAdminStatus };
