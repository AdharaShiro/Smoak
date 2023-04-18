import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {

    // State de login
    const [userLogged, setUserLogged] = useState(false);

    // State del id del usuario
    const [user, setUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            setUserLogged(true);
        }

        const user = localStorage.getItem('user');
        setUser(JSON.parse(user));
    }, [])
    
    return (
        <AuthContext.Provider
            value={{
                userLogged,
                setUserLogged,
                user,
                setUser
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;