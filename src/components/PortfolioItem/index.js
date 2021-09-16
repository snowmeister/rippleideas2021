/*
 * /TS/INTERNAL/CODE/CONFIDENTIAL
 * File: index.js
 * Project: parcel-react-tailwindcss-template
 * File Created: Thursday, 16th September 2021 12:53:18 pm
 * Author: Mark Kennard (mark.kennard@threatstatus.com)
 * -----
 * Last Modified: Thursday, 16th September 2021 12:53:19 pm
 * Modified By: Mark Kennard (mark.kennard@threatstatus.com>)
 * -----
 * Copyright 2018 - 2021 Threat Status Limited
 */
import React from 'react'
import { PortfolioItemTitle } from './PortfolioItemTitle';
import { PortfolioItemSubject } from './PortfolioItemSubject';
import PortfolioItemImage from './PortfolioItemImage';
import PortfolioItemDownloadButton from './PortfolioItemDownloadButton';

export const PortfolioItem = ({ item, index }) => {
  return (
    <div className=" background-opacity-50 mb-4 mt-2">
      <PortfolioItemTitle title={item.title} />
      <PortfolioItemSubject subject={item.subject} />
      <div className="flex">
        {index % 2 &&
          <React.Fragment>
            <div className="flex-1">
              <p className="text-left mt-4 mr-8">{item.description}</p>
            </div>
            <div className="flex-none text-center pt-2 ">
              <PortfolioItemImage preview={item.preview} />
              <PortfolioItemDownloadButton download={item.download} />
            </div>

          </React.Fragment>  ||<React.Fragment>
            <div className="flex-none text-center mr-4 pt-2">
              <PortfolioItemImage preview={item.preview} />
              <PortfolioItemDownloadButton download={item.download} />
            </div>
            <div className="flex-1">
              <p className="text-left mr-4 mt-3 ml-4">{item.description}</p>
            </div>
          </React.Fragment>
           
           
           
           
           
        }



      </div>
      <hr />
    </div>
  )
}
