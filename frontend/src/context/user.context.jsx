import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

;

    return (
        <UserContext.Provider value={{ user,setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components

export default UserContext;