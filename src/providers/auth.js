import React, { createContext, useState } from "react";

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = (props) => {
    const [click, setClick] = useState(false);

    return (
        <AuthContext.Provider value={[click, setClick]}>
            {props.children}
        </AuthContext.Provider>
    );
};

