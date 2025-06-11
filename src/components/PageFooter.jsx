"use client"
import React from 'react';
import Button from '@radui/ui/Button';
import Seperator from '@radui/ui/Separator';
import Button2 from './Button2';
import Text from '@radui/ui/Text';
import Link from 'next/link';
import ButtonGreen from './ButtonGreen';



function PageFooter({prevText, nextText, nextLink, prevLink}) {
    const [clicked, setClicked] = React.useState(false);

    return (
       <footer className='flex flex-col space-y-16 pt-4 pb-16 w-full'>
        {!clicked ? (<div >Was this page helpful? <Button onClick={() => setClicked(true)} className="ml-4 !rounded-l-full !mr-0 border border-slate-500  px-3 py-1 hover:bg-slate-200 hover:text-slate-1000" customRootClass='no'>Yes</Button><Button customRootClass='no' onClick={() => setClicked(true)} className=" border border-slate-500  py-1 hover:bg-slate-200 hover:text-slate-1000 px-3 !rounded-r-full !ml-0">No</Button></div>): (<div className='w-80'><ButtonGreen tick>Thanks for your feedback!</ButtonGreen></div>)}
        <div className={`flex flex-row  ${prevText && 'justify-start'} ${nextText && 'justify-end'} ${prevText && nextText && 'justify-between'} `}>
            
            {prevText && <div className="space-y-4">
                <div><Link href={prevLink}><Button2 arrowL>Previous</Button2></Link></div>
                <div><Link href={prevLink}><Text className="text-slate-1000 text-medium">{prevText}</Text></Link></div>
            </div>}
            {nextText && <div className="space-y-4">
                <div><Link href={nextLink}><Button2 arrowR>Next</Button2></Link></div>
                <div><Link href={nextLink}><Text className="text-slate-1000 text-medium">{nextText}</Text></Link></div>
                
            </div>}
            
        </div>
        <Seperator/>
        <div className='flex flex-row justify-between'>
                <div>
                    © Copyright 2025. All rights reserved.
                </div>
                <div>
                    X
                </div>
        </div>
       </footer>
    );
}

export default PageFooter;