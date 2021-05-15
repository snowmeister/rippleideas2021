import React from 'react'
import me from './me.jpeg';

export default function Me() {
  return (
    <div className="block rounded-full shadow-xl mx-auto -mt-32 h-48 w-48 bg-cover bg-center">
    <img className="rounded-full shadow-xl border-snowmeister-100 border-opacity-60 border-8" src={me} />
    </div>
  )
}




