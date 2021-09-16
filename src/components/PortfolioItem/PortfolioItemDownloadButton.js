/*
 * /TS/INTERNAL/CODE/CONFIDENTIAL
 * File: PortfolioItemDownloadButton
 * Project: parcel-react-tailwindcss-template
 * File Created: Thursday, 16th September 2021 2:07:17 pm
 * Author: Mark Kennard (mark.kennard@threatstatus.com)
 * -----
 * Last Modified: Thursday, 16th September 2021 2:07:17 pm
 * Modified By: Mark Kennard (mark.kennard@threatstatus.com>)
 * -----
 * Copyright 2018 - 2021 Threat Status Limited
 */

import React from 'react'

export default function PortfolioItemDownloadButton({download}) {
  return (
    <a href={'/assets/media/'+ download} className="bg-snowmeister-700 hover:bg-snowmeister-600 text-sm text-snowmeister-50 shadow font-bold py-1 px-4 mt-4 rounded inline-flex items-center ">Download {download.split('.').pop()}</a>
  )
}
