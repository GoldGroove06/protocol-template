"use client"

import React from 'react';
import Theme from "@radui/ui/Theme";


function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState("dark");
    return (
        <Theme appearance={theme} accentColor="teal">
            {children}
        </Theme>
    );
}

export default ThemeProvider;