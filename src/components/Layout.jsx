"use client"
import React, { useContext, createContext, useEffect, useRef, useState } from 'react';
import DesktopSidebar from './DesktopSidebar';
import Navbar from './Navbar';
import PageFooter from './PageFooter';
import { ChildContext } from './Context';
import ScrollArea from '@radui/ui/ScrollArea';

function Layout({ children, theme, setTheme }) {
    const [sectionRefs, setSectionRefs] = useState({});
    const [sections, setSections] = useState([]);
    const [visibleSection, setVisibleSection] = useState({});
    // console.log(sectionRefs)
    useEffect(() => {
       const observer = new IntersectionObserver((entries) => {
  setVisibleSection((prevVisibleSections) => {
    const newVisibleSections = { ...prevVisibleSections };

    entries.forEach((entry) => {
      const id = entry.target.id;

      if (entry.isIntersecting) {
        newVisibleSections[id] = true;
      } else {
        delete newVisibleSections[id];
      }
    });

    return newVisibleSections;
  });
},

            {
                root: null,
                rootMargin: '0px',
                threshold: 0.2,
            }
        );

        sections.forEach((section) => {
            const el = sectionRefs.current[section.id];
            if (el) observer.observe(el);
            console.log(el);
        });

        return () => {
            sections.forEach((section) => {
                const el = sectionRefs.current[section.id];
                if (el) observer.unobserve(el);
            });
        };
    }, [sectionRefs, sections]);

    useEffect(() => {
        console.log(visibleSection);
    }, [visibleSection]);

    return (
        <div className='flex flex-row'>
            <div className=' hidden lg:block'>
                <DesktopSidebar visibleSection={visibleSection}/>
            </div>
             
                    <div className='flex flex-col flex-1  h-screen'>
                        <Navbar theme={theme} setTheme={setTheme} />
                        <ScrollArea.Root>
                <ScrollArea.Viewport>
                        <div className='flex flex-col max-w-[1080px] w-full mx-auto pl-8 pr-8'>
                            <ChildContext.Provider value={{ setSectionRefs, setSections }}>
                                {children}
                            </ChildContext.Provider>
                        </div>
                    
                </ScrollArea.Viewport>

                <ScrollArea.Scrollbar orientation='vertical'>
                    <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </div>
        </div>
    );
}

export default Layout;