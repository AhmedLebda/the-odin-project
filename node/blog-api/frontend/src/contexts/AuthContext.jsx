import { createContext, useReducer } from "react";

export const AuthContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...action.payload };

        case "LOGOUT":
            return { user: null };

        case "REFRESH_TOKEN":
            return { user: { ...state.user, ...action.payload } };
        default:
            return state;
    }
};

const AuthContextProvider = ({ children }) => {
    const [userState, dispatch] = useReducer(reducer, { user: null });

    console.log(`Auth context state:`, userState);

    return (
        <AuthContext.Provider value={{ ...userState, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
