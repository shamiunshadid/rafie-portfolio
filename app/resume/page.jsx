"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs} from "react-icons/si"

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';


//about data
const about = {
  title: "About me",
  description: "I’m Shamiun Shadid, a full-stack web app developer with 5 years of experience. I’m passionate about crafting elegant and efficient web applications. My expertise lies in both front-end and back-end development, allowing me to deliver comprehensive solutions.",
  info: [
    {
      fieldnName: "Name :",
      fieldValue: "Shamiun Shadid"
    },
    {
      fieldnName: "Phone :",
      fieldValue: "+8801837599622"
    },
    {
      fieldnName: "Experience :",
      fieldValue: "5+ Years"
    },
    {
      fieldnName: "Nationality :",
      fieldValue: "Bangladeshi"
    },
    {
      fieldnName: "Adress :",
      fieldValue: "Jessore, Khulna"
    },
    
    {
      fieldnName: "Email :",
      fieldValue: "shamiunshadid@gmail.com"
    },
    {
      fieldnName: "Freelance :",
      fieldValue: "Available"
    },
    {
      fieldnName: "Language :",
      fieldValue: "English, Bangla"
    },
  ]
}


//experience data
const experience = {
  //icon:
  title: "My experience",
  description: "Here are the experience that I gained in the last five years of my ciding journy. It's very pleasure for me to share with you.",
  items: [
    {
      company:"Syntactics Inc.",
      position:"Full Stack Web Developer",
      duration: "2024 - Present"
    },
    {
      company:"Freelancing",
      position:"Frontend Developer",
      duration: "2022 - 2024"
    },
    {
      company:"webdew",
      position:"Backend Developer",
      duration: "2023 - 2024"
    },
    {
      company:"Web Help Agency",
      position:"Frontend Assistant",
      duration: "2022 - 2023"
    },
    {
      company:"Freelance SEO Specialist",
      position:"Full Stack SEO Expert",
      duration: "2022 - 2023"
    },
    {
      company:"Tech Academy",
      position:"SEO Assistant",
      duration: "2022 - 2022"
    },
  ]
}

//education data
const education = {
  //icon: 
  title: "My education",
  description: "Explore my educational foundation. Learn more about my achievements and areas of expertise below.",
  items: [
    {
      institution:"Sigma Web Dev Course",
      degree:"Full Stack Web Development Bootcamp",
      duration: "2022-2023"
    },
    {
      institution:"Online Course Platform",
      degree:"Frontend Development Bootcamp",
      duration: "2022-2023"
    },
    {
      institution:"Online Course Platform",
      degree:"Backend Development",
      duration: "2022-2024"
    },
    {
      institution:"Online Course Platform",
      degree:"Full Figma Basics",
      duration: "2023-2023"
    },
    {
      institution:"Online Course Platform",
      degree:"Full Stack SEO Expert Bootcamp",
      duration: "2022-2022"
    },
    {
      institution:"National University",
      degree:"BBA",
      duration: "2024-2027"
    },
    {
      institution:"Dr. Abdur Rajjak Municipal College",
      degree:"Higher Secondary Certificate",
      duration: "2021 - 2023"
    },
    {
      institution:"Talbaria High School",
      degree:"Secondary School Certificate",
      duration: "2019 - 2021"
    },
   
  ]
}

//skill data 
const skill = {
  title: "My skills",
  description: "I am proficient in a range of in-demand web development skills. See a detailed overview of my expertise below.",
  
  skillList: [
    { icon: <FaHtml5/>,
      name:"HTML 5",
    },
    { icon: <FaCss3/>,
      name:"CSS 3",
    },
    { icon: <FaJs/>,
      name:"JavaScript",
    },
    { icon: <FaReact/>,
      name:"React.js",
    },
    { icon: <SiNextdotjs/>,
      name: "Next.js",
    },
    { icon: <SiTailwindcss/>,
      name:"TailWind.css",
    },
    { icon: <FaNodeJs/>,
      name:"Node.js",
    },
    { icon: <FaFigma/>,
      name:"Figma",
    },
  ]
}



const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration: 0.4, ease:"easeIn"}}} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 ">
      <div className="container mx-auto ">
        <Tabs defaultValue="experience" className='flex flex-col xl:flex-row gap-[60px] '>
          {/* Rounded not working */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          
        {/* content */}
        <div className='min-h-[70vh] w-full'>
          {/* experience */}
          <TabsContent value="experience" className="w-full">
          <div className='flex flex-col gap-[30px] text-center xl:text-left '>
            <h3 className='text-4xl font-bold'>{experience.title}</h3>
            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
            <ScrollArea className="h-[400px]">
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] '>
                {experience.items.map((item, index)=>{
                  return( <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                    <span className='text-accent'>{item.duration}</span>
                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                    <div className='flex items-center gap-3'>
                      <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                      <p className='text-white/60 '>{item.company}</p>
                    </div>
                  </li>
                  );
                })}
              </ul>
            </ScrollArea>
          </div>
          </TabsContent>




          {/* educstion */}
          <TabsContent value="education" className="w-full">
          <div className='flex flex-col gap-[30px] text-center xl:text-left '>
            <h3 className='text-4xl font-bold'>{education.title}</h3>
            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
            <ScrollArea className="h-[400px]">
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] '>
                {education.items.map((item, index)=>{
                  return( <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                    <span className='text-accent'>{item.duration}</span>
                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                    <div className='flex items-center gap-3'>
                      <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                      <p className='text-white/60 '>{item.institution}</p>
                    </div>
                  </li>
                  );
                })}
              </ul>
            </ScrollArea>
          </div>
          </TabsContent>




          {/* skills */}
          <TabsContent value="skills" className="w-full h-full" >
          <div className="flex flex-col gap-[30px]">
            <div className='flex flex-col gap-[30px] text-center xl:text-left '>
              <h3 className='text-4xl font-bold'>{skill.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skill.description}</p>
            </div>
            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
              {skill.skillList.map((skill, index)=>{
                return( <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group '>
                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                    
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                    </TooltipProvider>
                </li>

                )
              })}
            </ul>
          </div>
          </TabsContent>




          {/* about me */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
          <div className='flex flex-col gap-[30px]'>
            <h3 className='text-4xl font-bold'>{about.title}</h3>
            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 gap-x-6'>
              {about.info.map((item, index)=>{
                return <li key={index} className='flex items-center justify-center xl:justify-start gap-2'>
                  <span className='text-white/60'>{item.fieldnName}</span>
                  <span className='text-xl'>{item.fieldValue}</span>
                </li>
              })}
            </ul>
          </div>
          </TabsContent>
        </div>


        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume

// export const metadata = {
//   title: "Resume - Shamiun Shadid",
//   description: "Here is the resume of shamiun shadid. "
// }
