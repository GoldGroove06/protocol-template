"use client"
import Image from "next/image";
import React, { useRef, useState, useEffect, useContext, use } from "react";
import PageFooter from "@/components/PageFooter";
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";
import Button from "@radui/ui/Button";
import Seperator from "@radui/ui/Separator";
import LandingCard from "@/components/LandingCard";
import ButtonGreen from "@/components/ButtonGreen";
import Button2 from "@/components/Button2";
import ButtonArrow from "@/components/ButtonArrow";
import { ChildContext } from "@/components/Context";

const sections = [
  { id: 'intro', label: 'intro' },
  { id: 'guides', label: 'guides' },
  { id: 'resources', label: 'resources' },
];

export default function Home() {
  const tempSectionRefs = useRef({});
  const {setSectionRefs, setSections} = useContext(ChildContext);
  useEffect(() => {
    setSectionRefs(tempSectionRefs)
  }, [setSectionRefs]);

  useEffect(() => {
    setSections(sections)
  }, [setSections]);
  // useEffect(() => {
  //   console.log(visibleSection);
  // }, [visibleSection]);
  
  return (
    <div className="pt-16 space-y-16 flex flex-col items-start">
      <section className="space-y-16 flex flex-col items-start" id="intro" ref={(el) => (tempSectionRefs.current["intro"] = el)} >
        <section className="space-y-4">
          <Heading as="h4" className="text-slate-1000">API Documentation</Heading>
          <Text className="max-w-3xl">Use the Protocol API to access contacts, conversations, group messages, and more and seamlessly integrate your product into the workflows of dozens of devoted Protocol users.</Text>
          <div className="flex flex-row pt-4 space-x-4">
            <ButtonGreen arrow>Quickstart </ButtonGreen>
            <Button2>Explore SDKs</Button2>
          </div>
        </section>

        <section className="space-y-4">
          <Heading as="h5" className="text-slate-1000">Getting started</Heading>
          <Text className="max-w-3xl">To get started, create a new application in your <span className="!text-teal-950">developer settings</span>, then read about how to make requests for the resources you need to access using our HTTP APIs or dedicated client SDKs. When your integration is ready to go live, publish it to our <span className="!text-teal-950"> integrations directory </span>to reach the Protocol community.</Text>
          <ButtonArrow arrow>Get your Api key</ButtonArrow>
        </section>
        </section>
        <section className="space-y-4" id="guides" ref={(el) => (tempSectionRefs.current["guides"] = el)}>
          <Heading as="h5" className="text-slate-1000 ">Guides</Heading>
          <Seperator />
          <div className=" mt-2 grid grid-cols-1 gap-8 pt-10 sm:grid-cols-2 xl:grid-cols-4">
            <div className="space-y-2">

              <Heading as="h6" className="text-slate-1000">Authentication</Heading>
              <Text>Learn how to authenticate your API requests.</Text>
              <ButtonArrow arrow className="pt-2">Read more</ButtonArrow>
            </div>
            <div className="space-y-2">

              <Heading as="h6" className="text-slate-1000">Authentication</Heading>
              <Text>Learn how to authenticate your API requests.</Text>
              <ButtonArrow arrow className="pt-2">Read more</ButtonArrow>
            </div>
            <div className="space-y-2">

              <Heading as="h6" className="text-slate-1000">Authentication</Heading>
              <Text>Learn how to authenticate your API requests.</Text>
              <ButtonArrow arrow className="pt-2">Read more</ButtonArrow>
            </div>
            <div className="space-y-2">

              <Heading as="h6" className="text-slate-1000">Authentication</Heading>
              <Text>Learn how to authenticate your API requests.</Text>
              <ButtonArrow arrow className="pt-2">Read more</ButtonArrow>
            </div>

          </div>

        </section>
      
      <section className="space-y-2" id="resources" ref={(el) => (tempSectionRefs.current["resources"] = el)}>
        <Heading as="h5" className="text-slate-1000 pb-2">Resources</Heading>
        <Seperator />
        <div className="  grid grid-cols-1 gap-8 pt-10 sm:grid-cols-2 xl:grid-cols-4">
          <LandingCard title='Contacts' >
            Learn about the contact model and how to create, retrieve, update, delete, and list contacts.
          </LandingCard>

          <LandingCard title='Contacts' >
            Learn about the contact model and how to create, retrieve, update, delete, and list contacts.
          </LandingCard>
          <LandingCard title='Contacts' >
            Learn about the contact model and how to create, retrieve, update, delete, and list contacts.
          </LandingCard>
          <LandingCard title='Contacts' >
            Learn about the contact model and how to create, retrieve, update, delete, and list contacts.
          </LandingCard>

        </div>

      </section>
      <PageFooter
        nextText='Quickstart'
        nextLink='/quickstart'
      />
    </div>
  );
}
