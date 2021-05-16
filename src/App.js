import React from "react";
import { ImProfile } from 'react-icons/im'
import { RiMailSendLine } from 'react-icons/ri' 
import Me from './components/Me';

import Footer from './components/Footer';
import HorizontalRule from './components/HorizontalRule';
import SocialBar from './components/SocialBar';



export function App() {
  return (
    <div id="app" className="font-nunito max-w-4xl flex items-center h-auto h-screen flex-wrap mx-auto my-8 leading-7 ">
      <div className="w-full mt-24 mx-8  ">
        <div className="rounded-xl  p-4 md:p-12 text-center bg-snowmeister-100 bg-opacity-75  shadow-xl">
            <Me />
          <h1 className="text-3xl leading-8 font-bold pt-8 font-nunito text-snowmeister-400 text-shadow-white">Mark Kennard <br /><small className="text-md opacity-80 text-shadow-white">AKA Snowmeister</small></h1>
          <p className="pt-4 text-base font-bold flex items-center justify-center text-snowmeister-400 text-shadow-white">Software Engineer / Foodie / Conure Sidekick</p>
          <p className="pt-2 text-snowmeister-400 text-xs lg:text-sm flex items-center justify-center  text-center"> Located in: <strong className="ml-1">Fareham, Hants, UK</strong></p>
           <SocialBar />
           <a className="bg-snowmeister-400 hover:bg-snowmeister-600  text-snowmeister-50 shadow font-bold py-2 px-4 mt-8 rounded inline-flex items-center " target="_blank" rel="noopener noreferrer" href="mailto:hello@snowmeister.co.uk?subject=Hello from snowmeister site..."><RiMailSendLine className="w-4 h-4 mr-2 currentColor" /><span>Get in touch</span></a>
          <Footer />
        </div>
      </div>
    </div>
  )
}
