"use client"

import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion';


const services = [
  {
    num: "01",
    title: "Full Stack Web App Development",
    description: "As a full-stack web developer I'm expert in creating high-quality, custom web applications. I handle front-end (user interface) and back-end (server-side logic) development, ensuring seamless and efficient solutions for your business needs.",
    href: ""
  },
  {
    num: "02",
    title: "Frontend Development",
    description: "I craft visually stunning and user-friendly websites that attract your audience and drive conversions. I specialize in clean, modern design and intuitive user interfaces that make your brand stand out. My expertise includes Next.js + React.js, Tailwind css and many other frontend libraries. Let's build a website that not only looks amazing but also delivers an exceptional user experience.",
    href: ""
  },
  {
    num: "03",
    title: "Backend Development",
    description: "As a backend web developer, I specialize in building scalable server-side applications. I have experties in Node.js and express.js. I'm proficient in implementing RESTful APIs, working with databases (SQL and NoSQL). I can help you build a solid foundation for your web application ",
    href: ""
  },
  {
    num: "04",
    title: "Full Website SEO",
    description: "I am an Experienced freelance SEO specialist with a proven record of improving websites visibility and search engine rankings. Successfully drive organic traffic growth and enhance userengagement for clients across various industries. Let's work together to scale your business.",
    href: ""
  },

];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >

      {services.map((services, index)=>{
        return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group ">
          <div className="w-full flex justify-between items-center ">
            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{services.num}</div>
            {/* link */}
            <Link href="/contact" className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
            <BsArrowDownRight className="text-primary text-3xl "/>
            </Link>
          </div>
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{services.title}</h2>
          <p className="text-white/60">{services.description}</p>
          <div className="border-b border-white/20 w-full "></div>
        </div>

      })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

// export const metadata = {
//   title: "Services - Shamiun Shadid",
//   description: "Here is the service that shamiun shadid is providing. "
// }
