"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import PageTransition from "@/components/PageTransition";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "College",
    value: "Georgia Institute of Technology",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "aryan.bhatia@gatech.edu",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    value: "Atlanta, GA",
  },
];

const Contact = () => {
  return (
    <PageTransition>
      <section className="py-6">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">Let&apos;s work together!</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="Firstname" />
                  <Input type="lastname" placeholder="Lastname" />
                  <Input type="email" placeholder="Email address" />
                  <Input type="phone" placeholder="Phone number" />
                </div>
                {/* select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select project type"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select project type</SelectLabel>
                      <SelectItem value="est">FullStack development</SelectItem>
                      <SelectItem value="cst">Backend development</SelectItem>
                      <SelectItem value="mst">Frontend development</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* text-area */}
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here"
                />
                {/* Button */}
                <Button size="md" className="max-w-40">
                  Send message
                </Button>
              </form>
            </div>
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6 mb-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.value}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;


