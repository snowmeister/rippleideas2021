import React from "react";
import { ImProfile } from 'react-icons/im'
import Me from './components/Me';
import TextRegion from './components/TextRegion';
import TextLink from './components/TextLink';

export function App() {
  return (
    <div id="app" className="font-nunito max-w-4xl flex items-center h-auto h-screen flex-wrap mx-auto my-12 leading-7 ">
      <div className="w-full mt-32 mx-8  ">
        <div className="rounded-lg  p-4 md:p-12 text-center bg-gradient-to-t via-snowmeister-100 via-snowmeister-100 from-snowmeister-100 shadow-xl">
          
            <Me />
        
          <h1 className="text-3xl  leading-8 font-bold pt-8 font-nunito text-snowmeister-400 text-shadow-white">Mark Kennard <br /><small className="text-md opacity-80 text-shadow-white">AKA Snowmeister</small></h1>
          <p className="pt-4 text-base font-bold flex items-center justify-center ">
          <ImProfile className="h-4 fill-current opacity-80 text-snowmeister-400 pr-4" />
            Software Engineer / Foodie / Conure Sidekick</p>
          <p className="pt-2 text-snowmeister-600 text-xs lg:text-sm flex items-center justify-center  text-center"><svg className="h-4 fill-current text-snowmeister-400 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"></path></svg> Located in: <strong className="ml-1">Fareham, Hants, UK</strong></p>
          <div className="pt-4 text-left mx-8 text-snowmeister-400 font-light " >
            <p className="pt-4 text-left text-xl leading-8 ">Hi. I'm Mark, also known as Snowmeister. I'm a full-stack software engineer with over 25 yrs experience across a wide range of industries, from recruitment, streaming media and online gaming to travel, digital signage and most recently cyber-security. </p>
            <TextRegion>Based in Fareham in the UK, by day I'm a software engineer at <TextLink text="Threat Status" link="https://www.threatstatus.com/" />, with a main focus on UI/UX, building sophisticated front-ends with ReactJS for a range of award-winning and innovative cyber-security products. </TextRegion>
            <TextRegion>
            I also enjoy coding on side projects, usually just for fun, to keep my claws sharp and to keep up with emerging technolgies and techniques.
            </TextRegion>
            <TextRegion>
            When I'm not coding, I love to cook. As an ex-chef, raised in a family of caterers, I just can't help myself. Some people eat to live. I live to eat!
            </TextRegion>
            <TextRegion>
            On the rare occasions I have the time, I'll be console gaming, I particularly enjoy RPGs like Mass Effect and Fallout, although these days I'm often distracted by my pineapple conure Pixel. She's quite demanding. I've had more than a few "game over" moments thanks to her refusal to be ignored!
            </TextRegion>
            <TextRegion>
            I'm not currently available for opportunities, hence no examples of my work or "hire me" pitch. If you are interested in reading more about my work, please checkout my <TextLink link="https://www.linkedin.com/in/mark-kennard-0480592b/" text="LinkedIn profile"/>
            </TextRegion>
          </div>
        </div>
      </div>
    </div>
  )
}
