"use client"
import React from 'react';
import Button from '@radui/ui/Button';
import Seperator from '@radui/ui/Separator';
import Button2 from './Button2';
import Text from '@radui/ui/Text';

function PageFooter({prevText, nextText}) {
    return (
       <footer className='flex flex-col space-y-16 pt-4 pb-16 w-full'>
        <div >Was this page helpful? <Button className="ml-4 !rounded-l-full !mr-0 border border-slate-500  px-3 py-1 hover:bg-slate-200 hover:text-slate-1000" customRootClass='no'>Yes</Button><Button customRootClass='no' className=" border border-slate-500  py-1 hover:bg-slate-200 hover:text-slate-1000 px-3 !rounded-r-full !ml-0">No</Button></div>
        <div className={`flex flex-row  ${prevText && 'justify-start'} ${nextText && 'justify-end'} ${prevText && nextText && 'justify-between'} `}>
            
            {prevText && <div className="space-y-4">
                <Button2 arrowL>Previous</Button2>
                <Text className="text-slate-1000 text-medium">{prevText}</Text>
            </div>}
            {nextText && <div className="space-y-4">
                <Button2 arrowR>Next</Button2>
                <Text className="text-slate-1000 text-medium">{nextText}</Text>
                
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