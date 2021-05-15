import React from 'react'

export default function TextRegion(props) {
  const { children } = props;
  return (
    <p className="pt-4 text-left font-light text-snowmeister-400">
      {children}
    </p>
  )
}

