/*
 * /TS/INTERNAL/CODE/CONFIDENTIAL
 * File: PortfolioItemTitle.js
 * Project: parcel-react-tailwindcss-template
 * File Created: Thursday, 16th September 2021 1:47:32 pm
 * Author: Mark Kennard (mark.kennard@threatstatus.com)
 * -----
 * Last Modified: Thursday, 16th September 2021 1:47:32 pm
 * Modified By: Mark Kennard (mark.kennard@threatstatus.com>)
 * -----
 * Copyright 2018 - 2021 Threat Status Limited
 */
import React from 'react'

export const PortfolioItemTitle = ({title}) => {
  return (
    <h1 className="w-full block text-left text-3xl mt-2 leading-8 font-bold pt-2 font-nunito text-snowmeister-700 text-shadow-white">{title}</h1>
  )
}
