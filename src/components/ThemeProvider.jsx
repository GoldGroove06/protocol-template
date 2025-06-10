"use client"

import React from 'react';
import Theme from "@radui/ui/Theme";
import Layout from "./Layout";


function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState("dark");
    return (
        <Theme appearance={theme} accentColor="teal" className="text-slate-900 bg-slate-100 text-sm">
            <Layout theme={theme} setTheme={setTheme}>
            {children}
            </Layout>
        </Theme>
    );
}

export default ThemeProvider;