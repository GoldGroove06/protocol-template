"use client"
import React from 'react';
import Button from '@radui/ui/Button';
import Seperator from '@radui/ui/Separator';

function PageFooter() {
    return (
       <footer className='flex flex-col space-y-8'>
        <div>Was this page helpful? <Button>Yes</Button><Button>No</Button></div>
        <div className='flex flex-row justify-between'>
            <Button>Previous</Button>
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