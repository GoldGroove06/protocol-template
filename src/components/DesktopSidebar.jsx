"use client"
import React from 'react';
import Text from '@radui/ui/Text';

function DesktopSidebar(props) {
    return (
        <div  className='flex flex-row h-screen lg:w-80  p-4 overflow-y-scroll'  >
            <div className='h-[110%]'>
                <svg viewBox="0 0 25 50" aria-hidden="true" class="h-12 w-12"><path class="fill-emerald-400" d="M16 8a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v13.927a1 1 0 0 0 1.623.782l3.684-2.93a4 4 0 0 1 2.49-.87H11a5 5 0 0 0 5-5V8Z"></path></svg><Text>Protocol</Text>
                </div>
        </div>
    );
}

export default DesktopSidebar;