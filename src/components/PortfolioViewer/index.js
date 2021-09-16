/*
 * /TS/INTERNAL/CODE/CONFIDENTIAL
 * File: index.js
 * Project: parcel-react-tailwindcss-template
 * File Created: Thursday, 16th September 2021 12:31:46 pm
 * Author: Mark Kennard (mark.kennard@threatstatus.com)
 * -----
 * Last Modified: Thursday, 16th September 2021 12:31:46 pm
 * Modified By: Mark Kennard (mark.kennard@threatstatus.com>)
 * -----
 * Copyright 2018 - 2021 Threat Status Limited
 */

import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import * as data from '../../data.json';
import { PortfolioItem } from '../PortfolioItem';

import uuid from 'react-uuid';

export const PortfolioViewer = () => {

  const portfolio = data;
  console.clear();
  console.dir(portfolio.data);

  const loading = false;

  return (
    <React.Fragment>
      <h1 className="text-3xl leading-8 font-bold pt-8 font-nunito text-snowmeister-700 text-shadow-white">Portfolio</h1>
      <div className="flex flex-wrap content-center justify-center divide-snowmeister-200 ">

        {loading && <div className=" block w-full"><p className="pt-4 text-base font-bold flex items-center justify-center text-snowmeister-700 text-shadow-white"><FaSpinner className="spin mr-1" /> Loading portfolio data, one moment...</p></div>}

        {!loading && portfolio.data.map((item, index) => {
          console.log('we have an item....')
          return <PortfolioItem item={item} index={index} key={uuid()} />
        })}
      </div>
    </React.Fragment>
  )
}
