/*
 * /TS/INTERNAL/CODE/CONFIDENTIAL
 * File: PortfolioItemSubject
 * Project: parcel-react-tailwindcss-template
 * File Created: Thursday, 16th September 2021 1:48:53 pm
 * Author: Mark Kennard (mark.kennard@threatstatus.com)
 * -----
 * Last Modified: Thursday, 16th September 2021 1:48:54 pm
 * Modified By: Mark Kennard (mark.kennard@threatstatus.com>)
 * -----
 * Copyright 2018 - 2021 Threat Status Limited
 */

import React from 'react';

export const PortfolioItemSubject = ({subject}) => {
  return (
    <h3 className="w-full block text-left text-2xl leading-8 font-bold pt-2 font-nunito text-snowmeister-700 text-shadow-white">Subject: {subject}</h3>
  )
}