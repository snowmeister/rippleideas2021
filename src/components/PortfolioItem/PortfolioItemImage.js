/*
 * /TS/INTERNAL/CODE/CONFIDENTIAL
 * File: PortfolioItemImage.js
 * Project: parcel-react-tailwindcss-template
 * File Created: Thursday, 16th September 2021 2:05:26 pm
 * Author: Mark Kennard (mark.kennard@threatstatus.com)
 * -----
 * Last Modified: Thursday, 16th September 2021 2:05:26 pm
 * Modified By: Mark Kennard (mark.kennard@threatstatus.com>)
 * -----
 * Copyright 2018 - 2021 Threat Status Limited
 */


import React from 'react'

export default function PortfolioItemImage({preview}) {
  return (
    <img className="mr-2 mt-4 portfolio-img rounded shadow-xl border-snowmeister-800 border-opacity-90 border-8" src={'assets/media/'+preview} />
  )
}
