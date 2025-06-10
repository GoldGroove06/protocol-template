"use client"
import Image from "next/image";
import PageFooter from "@/components/PageFooter";
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";
import Button from "@radui/ui/Button";
import Seperator from "@radui/ui/Separator";

export default function Home() {
  return (
   <div className="pt-16 space-y-16">
      <section className="space-y-4">
      <Heading as="h4" className="text-slate-1000">API Documentation</Heading>
      <Text>Use the Protocol API to access contacts, conversations, group messages, and more and seamlessly integrate your product into the workflows of dozens of devoted Protocol users.</Text>
      <div className="flex flex-row">
        <Button >Quick Start</Button>
        <Button>Explore SDK</Button>
      </div>
      </section>
      
      <section className="space-y-4">
      <Heading as="h5" className="text-slate-1000">Getting started</Heading>
      <Text>To get started, create a new application in your developer settings, then read about how to make requests for the resources you need to access using our HTTP APIs or dedicated client SDKs. When your integration is ready to go live, publish it to our integrations directory to reach the Protocol community.</Text>
      <Button customRootClass='no'>Get your Api key</Button>
      </section>

      <section className="space-y-4">
      <Heading as="h5" className="text-slate-1000">Guides</Heading>
      <Seperator />
      <div className="flex flex-row justify-between">
          <div>
            
      <Heading as="h6" className="text-slate-1000">Authentication</Heading>
      <Text>Learn how to authenticate your API requests.</Text>
        <Button customRootClass='no'>Read more</Button>
          </div>
          <div>
            
      <Heading as="h6" className="text-slate-1000">Authentication</Heading>
      <Text>Learn how to authenticate your API requests.</Text>
        <Button customRootClass='no'>Read more</Button>
          </div>
          <div>
            
      <Heading as="h6" className="text-slate-1000">Authentication</Heading>
      <Text>Learn how to authenticate your API requests.</Text>
        <Button customRootClass='no'>Read more</Button>
          </div>
          <div>
            
      <Heading as="h6" className="text-slate-1000">Authentication</Heading>
      <Text>Learn how to authenticate your API requests.</Text>
        <Button customRootClass='no'>Read more</Button>
          </div>

      </div>
     
      </section>

      <section className="space-y-4">
      <Heading as="h5" className="text-slate-1000">Resources</Heading>
      <Seperator />
      <div className="flex flex-row justify-between">
          <div>
            
      <Heading as="h6" className="text-slate-1000">Authentication</Heading>
      <Text>Learn how to authenticate your API requests.</Text>
        <Button customRootClass='no'>Read more</Button>
          </div>
          <div>
            
      <Heading as="h6" className="text-slate-1000">Authentication</Heading>
      <Text>Learn how to authenticate your API requests.</Text>
        <Button customRootClass='no'>Read more</Button>
          </div>
          <div>
            
      <Heading as="h6" className="text-slate-1000">Authentication</Heading>
      <Text>Learn how to authenticate your API requests.</Text>
        <Button customRootClass='no'>Read more</Button>
          </div>
          <div>
            
      <Heading as="h6" className="text-slate-1000">Authentication</Heading>
      <Text>Learn how to authenticate your API requests.</Text>
        <Button customRootClass='no'>Read more</Button>
          </div>

      </div>
     
      </section>
       <PageFooter/>
   </div>
  );
}
