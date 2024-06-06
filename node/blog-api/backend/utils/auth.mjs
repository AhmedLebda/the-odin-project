import jwt from "jsonwebtoken";

// ## Access Token (exp: 15 mins) ## //

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN, {
        expiresIn: 15 * 60 * 1000,
    });
};

const isValidAccessToken = (token) => {
    return jwt.verify(token, process.env.ACCESS_TOKEN);
};

// ## Refresh Token (exp: 1 day) ##//

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN, {
        expiresIn: 24 * 60 * 60 * 1000,
    });
};

const isValidRefreshToken = (token) => {
    return jwt.verify(token, process.env.REFRESH_TOKEN);
};

export {
    createAccessToken,
    createRefreshToken,
    isValidAccessToken,
    isValidRefreshToken,
};
