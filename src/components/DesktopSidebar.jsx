"use client"
import React from 'react';
import Text from '@radui/ui/Text';
import Heading from '@radui/ui/Heading';

const LogoIcon = () => {
    return(
        <svg viewBox="0 0 25 50" aria-hidden="true" className="h-12 w-12"><path className="fill-emerald-400" d="M16 8a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v13.927a1 1 0 0 0 1.623.782l3.684-2.93a4 4 0 0 1 2.49-.87H11a5 5 0 0 0 5-5V8Z"></path></svg>
    )
}

function DesktopSidebar({visibleSection}) {
    return (
        <div  className='flex flex-row h-screen lg:w-80  p-4 overflow-y-scroll'  >
            <div className='h-[110%] space-y-6'>
               <div className='flex flex-row items-start justify-start'><LogoIcon/> <Text className='!text-xl font-semibold text-slate-1000'>Protocol</Text></div>
                <div className='space-y-4'>
                    <Text as="h6" className="text-slate-1000 !text-sm font-medium">Guides</Text>
                    <div className='space-y-3'>
                        <div className='pl-4 space-y-2'>
                            <div className={`${visibleSection.intro ? "bg-slate-300" : ""}`}>Introduction</div>
                            <div className='pl-8'>
                                <div className={`${visibleSection.guides ? "bg-slate-300" : ""}`}>Guides</div>
                                <div className={`${visibleSection.resources ? "bg-slate-300" : ""}`}>Resources</div>
                            </div>
                        </div>

                         <div className='pl-4 space-y-2'>
                            <div>Quickstart</div>
                           
                        </div>


                         <div className='pl-4 space-y-2'>
                            <div>SDKs</div>
                           
                        </div>


                         <div className='pl-4 space-y-2'>
                            <div>Authentication</div>
                            
                        </div>
                        
                        
                    </div>              
                </div>
                </div>
        </div>
    );
}

export default DesktopSidebar;