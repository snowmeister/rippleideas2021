import React from "react";
import { ImProfile } from 'react-icons/im'

import Me from './components/Me';

import Footer from './components/Footer';
import HorizontalRule from './components/HorizontalRule';
import SocialBar from './components/SocialBar';







export function App() {
  return (
    <div id="app" className="font-nunito max-w-4xl flex items-center h-auto h-screen flex-wrap mx-auto my-8 leading-7 ">
      <div className="w-full mt-18 mx-8  ">
        <div className="rounded-xl  p-4 md:p-12 text-center bg-snowmeister-100 bg-opacity-75  shadow-xl">
            <Me />
          <h1 className="text-3xl leading-8 font-bold pt-8 font-nunito text-snowmeister-400 text-shadow-white">Mark Kennard <br /><small className="text-md opacity-80 text-shadow-white">AKA Snowmeister</small></h1>
          
          <HorizontalRule />
          <p className="pt-4 text-base font-bold flex items-center justify-center text-snowmeister-400 text-shadow-white">
          <ImProfile className="h-4 w-4 fill-current opacity-80 text-snowmeister-400 pr-4" />Software Engineer / Foodie / Conure Sidekick</p>
          <p className="pt-2 text-snowmeister-400 text-xs lg:text-sm flex items-center justify-center  text-center"> Located in: <strong className="ml-1">Fareham, Hants, UK</strong></p>
           <SocialBar />
           <HorizontalRule />
          <Footer />
        </div>
      </div>
    </div>
  )
}
