import React from 'react'

export default function TextRegion(props) {
  const { children } = props;
  return (
    <p className="hidden sm:block pt-4 sm:p-1 text-left font-light text-snowmeister-400">
      {children}
    </p>
  )
}

