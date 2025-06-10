"use client"

import React from 'react';
import Theme from "@radui/ui/Theme";
import Layout from "./Layout";


function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState("dark");
    return (
        <Theme appearance={theme} accentColor="teal">
            <Layout>
            {children}
            </Layout>
        </Theme>
    );
}

export default ThemeProvider;