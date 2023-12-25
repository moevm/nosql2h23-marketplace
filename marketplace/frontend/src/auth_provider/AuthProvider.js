import React, { useState, createContext, useContext } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = userData => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const get_user_info = () => {
        console.log(localStorage.getItem("user"))
        return localStorage.getItem("user")
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, get_user_info}}>
            {children}
        </AuthContext.Provider>
    );
};