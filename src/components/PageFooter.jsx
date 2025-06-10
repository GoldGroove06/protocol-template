"use client"
import React from 'react';
import Button from '@radui/ui/Button';
import Seperator from '@radui/ui/Separator';

function PageFooter() {
    return (
       <footer className='flex flex-col space-y-16 pt-4 pb-16'>
        <div >Was this page helpful? <Button className="ml-4 !rounded-l-full !mr-0 border border-slate-500  px-3 py-0.5" customRootClass='no'>Yes</Button><Button customRootClass='no' className=" border border-slate-500  py-0.5 px-3 !rounded-r-full !ml-0">No</Button></div>
        <div className='flex flex-row justify-between'>
            <Button className=''>Previous</Button>
            <Button>Next</Button>
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