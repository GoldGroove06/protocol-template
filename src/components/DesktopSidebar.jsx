"use client"
import React from 'react';
import Text from '@radui/ui/Text';
import Heading from '@radui/ui/Heading';
import Seperator from '@radui/ui/Separator';
import ScrollArea from '@radui/ui/ScrollArea';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const LogoIcon = () => {
    return(
        <svg viewBox="0 0 25 40" aria-hidden="true" className="h-12 w-12"><path className="fill-emerald-400" d="M16 8a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v13.927a1 1 0 0 0 1.623.782l3.684-2.93a4 4 0 0 1 2.49-.87H11a5 5 0 0 0 5-5V8Z"></path></svg>
    )
}

function DesktopSidebar({visibleSection}) {
    const pathname = usePathname();

    return (
         <ScrollArea.Root>
                <ScrollArea.Viewport>
        <div  className='flex flex-row h-screen lg:w-80  p-4'  >
            <div className=' space-y-6 w-full'>
               <div className='flex flex-row items-start justify-start'><div><LogoIcon/></div><div> <Text className='!text-xl font-semibold text-slate-1000'>Protocol</Text></div></div>
                <div className='space-y-4 '>
                    <Text as="h6" className="text-slate-1000 !text-sm font-medium">Guides</Text>
                    <div className='space-y-3 border border-r-0 border-b-0  border-t-0 border-l-slate-300 relative'>
                     
                        <div className='pl-2 '>
                            {pathname==="/" && (<span className='absolute top-1 left-0 h-6 w-0.5 border border-l-teal-950'></span>)}
                            <div className={` pl-2 ${pathname==="/" && " py-2 text-slate-1000"} transition-all duration-300 ease-in-out will-change-transform ${visibleSection.intro ? "bg-slate-300 rounded-t-lg" : ""}`} ><Link href="/">Introduction</Link></div>
                            {pathname==="/" && (<div className=''>
                                <div className={`py-1 ${visibleSection.guides  ? "bg-slate-300" : ""}  transition-all duration-300 ease-in-out will-change-transform pl-8 ${ visibleSection.guides && !visibleSection.intro && visibleSection.resources ? "rounded-t-lg" : ""}${visibleSection.guides && visibleSection.intro && !visibleSection.resources? "rounded-b-lg" : ""}` }><Link href="#guides">Guides</Link></div>
                                <div className={` pl-8 py-1  ${visibleSection.resources ? "bg-slate-300 rounded-b-lg" : ""}  transition-all duration-300 ease-in-out will-change-transform ${visibleSection.resources && !visibleSection.guides ? "rounded-lg" : ""}`}><Link href="#resources">Resources</Link></div>
                            </div>)}
                        </div>

                         <div className='pl-2 space-y-2'>
                            {pathname==="/quickstart" && <span className='absolute top-10 left-0 h-6 w-0.5 border border-l-teal-950'></span>}
                            <div className={`pl-2 ${pathname==="/quickstart" && " py-2 text-slate-1000"}`}><Link href="/quickstart">Quickstart</Link></div>
                            {pathname==="/quickstart" && (<div>
                                <div className='pl-8 py-1'>Choose your client</div>
                                <div className='pl-8 py-1'>Choose your client</div>
                                <div className='pl-8 py-1'>Choose your client</div>
                            </div>)}
                           
                        </div>


                         <div className='pl-2 space-y-2'>
                            <div className='pl-2'>SDKs</div>
                           
                        </div>


                         <div className='pl-2 space-y-2'>
                            <div className='pl-2'>Authentication</div>
                            
                        </div>
                        
                    </div>              
                </div>
                </div>
        </div>
        </ScrollArea.Viewport>
   
                <ScrollArea.Scrollbar orientation='vertical'>
                    <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
        </ScrollArea.Root>
    );
}

export default DesktopSidebar;