/*
 * /TS/INTERNAL/CODE/CONFIDENTIAL
 * File: index.js
 * Project: parcel-react-tailwindcss-template
 * File Created: Sunday, 16th May 2021 2:41:47 pm
 * Author: Mark Kennard (mark.kennard@threatstatus.com)
 * -----
 * Last Modified: Sunday, 16th May 2021 2:41:47 pm
 * Modified By: Mark Kennard (mark.kennard@threatstatus.com>)
 * -----
 * Copyright 2018 - 2021 Threat Status Limited
 */
import React from 'react';
import TextRegion from './components/TextRegion';
import TextLink from './components/TextLink';

export default function MainTextContent() {
  return (
    <div className="pt-4 text-left mx-4 px-4 text-snowmeister-700 font-light " >
    <p className="pt-4 text-left text-xl leading-8 "><strong className="font-bold">Hello! </strong> I'm Mark, also known as Snowmeister. I'm a full-stack software engineer with over 25 yrs experience across a wide range of industries, from recruitment, streaming media and online gaming to travel, digital signage and most recently cybersecurity. </p>
    <HorizontalRule />
    <TextRegion>Based in Fareham in the UK, by day I'm a software engineer at <TextLink text="Threat Status" link="https://www.threatstatus.com/" />, with a main focus on UI/UX, building sophisticated front-ends with ReactJS for a range of award-winning and innovative cybersecurity products. </TextRegion>
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
    I'm not currently available for opportunities, hence no examples of my work or "hire me" pitch. If you are interested in reading more about my work, please check out my <TextLink link="https://www.linkedin.com/in/mark-kennard-0480592b/" text="LinkedIn profile"/>
    </TextRegion>
  </div>
  )
}
