import React from "react";
import Me from './components/Me';


export function App() {
  return (
    <div id="app" className="font-nunito max-w-4xl flex items-center h-auto h-screen flex-wrap mx-auto my-12 leading-7 ">
    <div className="w-full rounded-lg  shadow-2xl bg-snowmeister-100 mx-8 lg:mx-0">
      <div className="p-4 md:p-12 text-center">
      <div className="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
      <Me />
      </div>
      <h1 className="text-3xl font-bold pt-8 font-nunito text-snowmeister-400">Mark Kennard <br /><small className="text-md opacity-50">AKA Snowmeister</small></h1>
      {/* <div class="mx-auto w-4/5 pt-3 my-3 border-b-2 border-snowmeister-500 opacity-25"></div> */}
      <p class="pt-4 text-base font-bold flex items-center justify-center "><svg class="h-4 fill-current text-snowmeister-400 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"></path></svg> Software Engineer / Foodie / Conure Sidekick</p>
            <p class="pt-2 text-snowmeister-600 text-xs lg:text-sm flex items-center justify-center  text-center"><svg class="h-4 fill-current text-snowmeister-400 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"></path></svg> Located at: <strong className="ml-1">Fareham, Hants, UK</strong></p>
            {/* <div class="mx-auto w-4/5 pt-3 border-b-2 border-snowmeister-500 opacity-25"></div> */}
            <div class="pt-4 text-left mx-8 text-snowmeister-400 font-light " >
            <p class="pt-4 text-left text-xl ">Hi. I'm Mark, also known as Snowmeister. I'm a software engineer with over 25 yrs experience, based in Fareham in the UK. By day I'm a software engineer at Threat Status, with a main focus on UI/UX, building sophisticated front-ends with ReactJS for a range of award-winning and innovative cyber-security products. </p>
                     <div class="mx-auto mt-4 mb-3 w-3/5 pt-3 border-b-2 border-snowmeister-200 border-opacity-10"></div>
            <p class="pt-4 text-left font-light text-snowmeister-400">I also love to code on side projects, often just for fun, to keep my claws sharp and to keep up with emerging technolgies and techniques.</p>

            <p className="pt-4 text-left font-light text-snowmeister-400 ">When I'm not coding, I love to cook. As an ex-chef, raised in a family of caterers, I just can't help myself. Some people eat to live. I live to eat!</p>

            <p className="pt-4 text-left font-light text-snowmeister-400">On the rare occasions I have the time, I love console gaming, particularly RPGs like Mass Effect and Fallout, although these days I'm often distracted by my pineapple conure Pixel. She's quite demanding. I've had more than a few "game over" moments thanks to her refusal to be ignored!</p>
            </div>
      </div>
    </div>
    </div>
  )
}
