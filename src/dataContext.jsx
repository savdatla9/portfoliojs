import React, { useContext, createContext, useState } from 'react';

const userLogin = createContext();

const DataContext = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [userArr, setUArr] = useState([]);
    const [mode, setMode] = useState('ar');
    const [theme, setTheme] = useState(true);

    return <userLogin.Provider value={{user, setUser, mode, setMode, theme, setTheme}}>
        {children}
    </userLogin.Provider>
};

export default DataContext;

export const UserState = () => {
   return useContext(userLogin);
};


// https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html