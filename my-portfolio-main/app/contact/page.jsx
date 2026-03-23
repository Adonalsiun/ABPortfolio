"use client";

import { useState } from "react";
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
  const [result, setResult] = useState("");
  const [projectType, setProjectType] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Append the access key for Web3Forms
    formData.append("access_key", "83851888-4904-4191-b1a5-90869046bfcd");
    
    // Append the custom Select component value
    if (projectType) {
      formData.append("project_type", projectType);
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
      setProjectType(""); // Reset the select state
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <PageTransition>
      <section className="py-6">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form onSubmit={onSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl relative">
                <h3 className="text-4xl text-accent">Let&apos;s work together!</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="text" name="firstname" placeholder="Firstname" required />
                  <Input type="text" name="lastname" placeholder="Lastname" required />
                  <Input type="email" name="email" placeholder="Email address" required />
                  <Input type="tel" name="phone" placeholder="Phone number" />
                </div>
                {/* select */}
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select project type"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select project type</SelectLabel>
                      <SelectItem value="FullStack development">FullStack development</SelectItem>
                      <SelectItem value="Backend development">Backend development</SelectItem>
                      <SelectItem value="Frontend development">Frontend development</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* text-area */}
                <Textarea
                  name="message"
                  className="h-[200px]"
                  placeholder="Type your message here"
                  required
                />
                
                {/* Status Message */}
                {result && (
                  <p className={`text-sm ${result.includes("success") ? "text-accent" : "text-red-500"}`}>
                    {result}
                  </p>
                )}

                {/* Button */}
                <Button size="md" className="max-w-40" type="submit" disabled={result === "Sending...."}>
                  {result === "Sending...." ? "Sending..." : "Send message"}
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


