"use client"
import React from 'react';
import Text from '@radui/ui/Text';
import Heading from '@radui/ui/Heading';
import Seperator from '@radui/ui/Separator';

const LogoIcon = () => {
    return(
        <svg viewBox="0 0 25 50" aria-hidden="true" className="h-12 w-12"><path className="fill-emerald-400" d="M16 8a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v13.927a1 1 0 0 0 1.623.782l3.684-2.93a4 4 0 0 1 2.49-.87H11a5 5 0 0 0 5-5V8Z"></path></svg>
    )
}

function DesktopSidebar({visibleSection}) {
    return (
        <div  className='flex flex-row h-screen lg:w-80  p-4 overflow-y-scroll'  >
            <div className='h-[110%] space-y-6 w-full'>
               <div className='flex flex-row items-start justify-start'><LogoIcon/> <Text className='!text-xl font-semibold text-slate-1000'>Protocol</Text></div>
                <div className='space-y-4 '>
                    <Text as="h6" className="text-slate-1000 !text-sm font-medium">Guides</Text>
                    <div className='space-y-3 border border-r-0 border-b-0  border-t-0 border-l-slate-300 relative'>
                     
                        <div className='pl-4 '>
                            <span className='absolute top-1 left-0 h-6 w-0.5 border border-l-teal-950'></span>
                            <div className={` py-2 pl-2 text-slate-1000 ${visibleSection.intro ? "bg-slate-300 rounded-t-lg" : ""}`}>Introduction</div>
                            <div className=''>
                                <div className={`py-1 ${visibleSection.guides  ? "bg-slate-300" : ""} pl-8 ${ visibleSection.guides && !visibleSection.intro && visibleSection.resources ? "rounded-t-lg" : ""}${visibleSection.guides && visibleSection.intro && !visibleSection.resources? "rounded-b-lg" : ""}` }>Guides</div>
                                <div className={` pl-8 py-1  ${visibleSection.resources ? "bg-slate-300 rounded-b-lg" : ""} ${visibleSection.resources && !visibleSection.guides ? "rounded-lg" : ""}`}>Resources</div>
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