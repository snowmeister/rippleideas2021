import React, { useState, useEffect } from "react";
import { ImProfile } from 'react-icons/im'
import { RiMailSendLine } from 'react-icons/ri'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Me from './components/Me';

import Footer from './components/Footer';
import HorizontalRule from './components/HorizontalRule';
import SocialBar from './components/SocialBar';
import { PortfolioViewer } from './components/PortfolioViewer';



export function App() {

  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(()=>{

  }, [showPortfolio]);

  return (
    <div id="app" className="font-nunito max-w-4xl flex items-center h-auto h-screen flex-wrap mx-auto leading-7 ">
      <div className="w-full mt-24 mx-8  ">
        <div className="rounded-xl  p-4 md:p-12 text-center bg-snowmeister-100 bg-opacity-90 shadow-lg">
          <Me />
          <h1 className="text-3xl leading-8 font-bold pt-8 font-nunito text-snowmeister-700 text-shadow-white">Claire Quinn <br />
          {/* <small className="text-md opacity-80 text-shadow-white">AKA RippleIdeas</small> */}
          </h1>
          <p className="pt-4 text-base font-bold flex items-center justify-center text-snowmeister-700 text-shadow-white">Journalism. Writing. Editing.</p>
          <p className="pt-2 text-snowmeister-700 text-xs lg:text-sm flex items-center justify-center  text-center"> Located in: <strong className="ml-1">London, UK</strong></p>
          <SocialBar />
          <div className="flex justify-center">
            <a onClick={(evt)=>{
              evt.preventDefault()
              setShowPortfolio(!showPortfolio);
              
              return false;
            }} className="bg-snowmeister-700 hover:bg-snowmeister-600  text-snowmeister-50 shadow-lg font-bold py-2 px-4 mr-1 mt-8 rounded  items-center hidden md:inline-flex" target="_blank" rel="noopener noreferrer">
            
            {showPortfolio && <FaEyeSlash className="w-4 h-4 mr-2 currentColor" />} 
            {!showPortfolio && <FaEye className="w-4 h-4 mr-2 currentColor" />} 
            
            <span>{!showPortfolio ? ' View ' : ' Hide '}
            my portfolio</span></a>
            <a className="bg-snowmeister-700 hover:bg-snowmeister-600  text-snowmeister-50 shadow-lg font-bold py-2 px-4 ml-1 mt-8 rounded inline-flex items-center " target="_blank" rel="noopener noreferrer" href="mailto:claireq@hotmail.com?subject=Message from RippleIdeas site visitor.."><RiMailSendLine className="w-4 h-4 mr-2 currentColor" /><span>Get in touch</span></a>
          </div>
          {showPortfolio && <div className="animate-fade-in-down hidden md:block"><PortfolioViewer /></div>}
          {showPortfolio && <div className="flex flex-wrap content-center justify-center"><button className="mt-4 hidden md:block place-self-center" onClick={()=>{
            window.scrollTo({top: 0, behavior: 'smooth'});
          }}>Back to top</button></div>}
          <Footer />
        </div>
      </div>
    </div>
  )
}
