import { jwtDecode } from "jwt-decode";

const fetchProtectedRoute_post = async (url, accessToken) => {
    let result = null;

    // Function to check token expiry
    const isTokenExpired = (token) => {
        const expirationTime = jwtDecode(token).exp;
        const currentTime = Date.now() / 1000; // Convert to seconds
        return currentTime > expirationTime;
    };
    try {
        // Check if access token is expired or not available
        if (!accessToken || isTokenExpired(accessToken)) {
            // Access token is expired or not available, initiate token refresh
            const response = await fetch(
                "http://localhost:3000/api/auth/refresh",
                {
                    method: "POST",
                    mode: "cors",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            const newAccessToken = data.token;

            // Retry original request to protected route with the new access token
            const refreshedResponse = await fetch(url, {
                method: "POST",
                mode: "cors",
                credentials: "include",

                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${newAccessToken}`,
                },
            });
            const refreshedData = await refreshedResponse.json();
            result = refreshedData;
        } else {
            // Access token is still valid, make request to protected route
            const response = await fetch(url, {
                method: "POST",
                mode: "cors",
                credentials: "include",

                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const fetchedData = await response.json();
            result = fetchedData;
        }
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
    return result;
};

export { fetchProtectedRoute_post };
