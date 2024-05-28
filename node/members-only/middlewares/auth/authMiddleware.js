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

module.exports = { checkUser };
