"use client"

import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import {FiDownload} from 'react-icons/fi'
// import fetch from 'node-fetch';


const Home = () => {

  const handleClick = async () => {
    const response = await fetch('/assets/Resume-Shadid.pdf');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Resume-Shadid.pdf';
    link.click();
    window.URL.revokeObjectURL(url);
  };
  
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Full Stack Website Developer</span>
          <h1 className="h1 mb-6">Hello I am <br /><span className="text-accent">Md Rafie Raihan</span></h1>
          <p className="mx-w-[500px] mb-9 text-white/80">I design and develop effective web applications.  My expertise lies in both front-end and back end development, allowing me to deliver comprehensive solutions. Lets build something amazing together!</p>

          <div className="flex flex-col xl:flex-row items-center gap-8 ">

          {/* <Button onClick={handleClick} variant="outline" size="lg" className="uppercase flex items-center gap-2">
            <span>Download CV</span>
            <FiDownload className="text-xl "/>
          </Button> */}

          <div className="mb-8 xl:mb-0">
            <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
          </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />

        </div>
      </div>
      </div>
      <Stats />

    </section>
  )
}

export default Home

//"react": "19.0.0-rc-66855b96-20241106",