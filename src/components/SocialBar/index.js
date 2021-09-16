/*
 * /TS/INTERNAL/CODE/CONFIDENTIAL
 * File: index.js
 * Project: parcel-react-tailwindcss-template
 * File Created: Sunday, 16th May 2021 1:44:51 pm
 * Author: Mark Kennard (mark.kennard@threatstatus.com)
 * -----
 * Last Modified: Sunday, 16th May 2021 1:44:51 pm
 * Modified By: Mark Kennard (mark.kennard@threatstatus.com>)
 * -----
 * Copyright 2018 - 2021 Threat Status Limited
 */
import React from 'react';
import { TiSocialInstagram, TiSocialLinkedin, TiSocialGithub,TiSocialTwitter } from 'react-icons/ti'
import { DiBitbucket, DiCodepen } from 'react-icons/di';
import { RiMailSendLine } from 'react-icons/ri';

export default function SocialBar() {
  return (
    <div className=" mt-4  flex flex-wrap content-center justify-center">
    
    <a className="mx-3" target="_blank" rel="noopener noreferrer" href="https://twitter.com/snowy2007"><TiSocialTwitter className="w-8 h-8  text-snowmeister-700 currentColor" /></a>
    <a className="mx-3" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mark-kennard-0480592b/"><TiSocialLinkedin className="w-8 h-8  text-snowmeister-700 currentColor" /></a>
    <a className="mx-3" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/snowyandpixel/"><TiSocialInstagram className="w-8 h-8  text-snowmeister-700 currentColor" /></a>
    {/* <a className="mx-3" target="_blank" rel="noopener noreferrer" href="https://github.com/snowmeister"><TiSocialGithub className="w-8 h-8  text-snowmeister-700 currentColor" /></a> */}
    {/* <a className="mx-3" target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/snowmeister/"><TiSocialFlickr className="w-8 h-8  text-snowmeister-400 currentColor" /></a>
    <a className="mx-3" target="_blank" rel="noopener noreferrer" href="https://bitbucket.org/snowmeister/"><DiBitbucket className="w-8 h-8  text-snowmeister-400 currentColor" /></a> */}
    {/* <a className="mx-3" target="_blank" rel="noopener noreferrer" href="https://codepen.io/snowmeister"><DiCodepen className="w-8 h-8  text-snowmeister-700 currentColor" /></a> */}
    
  </div>
  )
}
