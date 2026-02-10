"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BsWhatsapp } from "react-icons/bs";

// export const metadata = {
//   title: "Contact - Shamiun Shadid"
// }

const info = [
  {
    icon: <BsWhatsapp />,
    title: "Phone",
    description: "+8801739438187",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "rafies.idp@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adress",
    description: "Jessore, Khulna Bangladesh",
  },
];

const Contact = () => {
  // state
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  
  // const selectRef = useRef(null);
  const handleServiceChange = (value) => {
    setService(value);
    // console.log('Selected Service:', value);
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    // const selectedValue = SelectItem.value;
    console.log("service:", service)


    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        phone,
        service,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    // console.log(error);
    setSuccess(success);

    if (success) {
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div onSubmit={handleSubmit} className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent">Lets work together</h3>
              <p className="text-white/60 ">
              Ready to collaborate? I am curious to hear about your project ideas. Please fill out the contact form below to get in touch.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                  type="firstname"
                  placeholder="Firstname"
                />
                <Input
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                  type="lastname"
                  placeholder="Lastname"
                />
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email Adress"
                />
                <Input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="phone"
                  placeholder="Phone Number"
                />
              </div>

              {/* select */}
              {/* onChange={(e) => ( value=> setService(value))} */}

              <Select onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem  value="Full Stack Web Development" > 
                      Full Stack Web App Development
                    </SelectItem>
                    <SelectItem value="Frontend Development">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="Backend Development">
                      Backend Development
                    </SelectItem>
                    <SelectItem value="Full Website SEO">
                      Full Website SEO
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="h-[200px]"
                placeholder="Type your message here.."
              />

              <div className="xl:flex xl:gap-[100px] xl:items-center ">
                {/* btn */}
                <Button size="md" className="max-w-40">
                  Send message
                </Button>

                {/* errors */}
                <div className="xl:grid xl:grid-cols-2 xl:gap-4 xl:gap-x-10 p-3">
                  {error &&
                    error.map((e, index) => (
                      <div key={error.id || index}>
                        <div
                          className={`${
                            success ? "text-accent" : "text-red-600"
                          }`}
                        >
                          {e}
                        </div>
                      </div>
                    ))}

                  {/* <div className=" text-red-600">error</div> */}
                </div>
              </div>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded flex items-center justify-center ">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

// export const metadata = {
//   title: "Contact - Shamiun Shadid",
//   description: "Contact with shamiun shadid any time."
// }
