import React from 'react';

export default function TextLink(props) {
  const {text, link} = props;
  return (
    <a className="font-bold underline" href={link} target="_blank" rel="noopener noreferrer">{text}</a>
  )
}
