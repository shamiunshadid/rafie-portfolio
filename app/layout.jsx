import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Analytics } from "@vercel/analytics/react"

const jetbrainsMono = JetBrains_Mono({subsets:["latin"], weight: ["100","200","300","400","500","600","700","800"],variable:'---font-jetbrainsMono'})

export const metadata = {
  title: {
    default: "MD Rafie Raihan",
    template: "%s - MD Rafie Raihan" 
  },
  description: "I'm MD Rafie Raihan a fullstack web developer with 5 years of experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="Y-W2He9dTOloFJPqlppQqBGfrFj8-EXj1dJVQBbQ5Zw" />
      </head>
      <body className={jetbrainsMono.variable}>       
        <Header/>
        <StairTransition/>
        <PageTransition>{children}
        <Analytics />
        </PageTransition>
      </body>
    </html>
  );
}
