"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextProps {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    return (
        <AppContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
