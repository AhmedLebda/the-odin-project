const { isValidJWT } = require("../../controllers/utils");

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
        res.redirect("/user/login");
    }
};

module.exports = { checkUser, requireAuth };
