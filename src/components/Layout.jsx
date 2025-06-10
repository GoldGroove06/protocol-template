"use client"
import React from 'react';
import DesktopSidebar from './DesktopSidebar';
import Navbar from './Navbar';
import PageFooter from './PageFooter';

function Layout({children, theme, setTheme}) {
    return (
        <div className='flex flex-row'>
            <div className=' hidden lg:block'>
            <DesktopSidebar/>
            </div>
            <div className='flex flex-col flex-1  h-screen overflow-y-scroll'>
                <Navbar theme={theme} setTheme={setTheme}/>
                <div className='flex flex-col max-w-[1080px] w-full mx-auto pl-8 pr-8'>
                    {children}
                   
                </div>
            </div>
        </div>
    );
}

export default Layout;