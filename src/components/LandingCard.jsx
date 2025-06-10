"use client"
import React from 'react';
import Avatar from '@radui/ui/Avatar';
import Text from '@radui/ui/Text';

function LandingCard({title, children}) {
    return (
        <div className='space-y-4 py-12 border border-slate-200 rounded-2xl p-4'>
            <span>
            <Avatar.Root>
                <Avatar.Image
                src="https://i.pravatar.cc/1000"
            
                />
                
            </Avatar.Root>
            </span>
            <Text className='!text-slate-1000 font-semibold '>{title}</Text>
            <Text className='!text-sm'>{children}</Text>
        </div>
    );
}

export default LandingCard;