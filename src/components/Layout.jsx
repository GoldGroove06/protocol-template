import React from 'react';
import DesktopSidebar from './DesktopSidebar';
import Navbar from './Navbar';

function Layout({children}) {
    return (
        <div className='flex flex-row'>
            <div className='w-[25%] hidden lg:block'>
            <DesktopSidebar/>
            </div>
            <div className='flex flex-col w-full lg:w-[75%] h-[99vh] overflow-y-scroll'>
                <Navbar/>
                <div className='flex flex-col  max-w-[1080px] w-full mx-auto'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;