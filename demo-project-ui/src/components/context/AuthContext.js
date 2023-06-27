import React, { createContext, useState, useEffect, useContext } from 'react';


export const AuthContext = createContext();
// const AuthContext = React.createContext()
function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        setUser(JSON.parse(storedUser));
    }, []);

    const getUser = () => {
        return JSON.parse(localStorage.getItem('user'));
    };

    const userIsAuthenticated = () => {
        let user = localStorage.getItem('user');
        if (!user) {
            return false;
        }
        user = JSON.parse(user);

        // if user has token expired, logout user
        if (Date.now() > user.data.exp * 1000) {
            userLogout();
            return false;
        }
        return true;
    };

    const userLogin = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    };

    const userLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    const authValues = {
        user,
        getUser,
        userIsAuthenticated,
        userLogin,
        userLogout,
    };

    return <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>;
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };
