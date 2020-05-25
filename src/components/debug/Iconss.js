import React from 'react';
import {otherIcons} from "../../data/icons";

const Iconss = () => {

  return (
    Object.keys(otherIcons).map(section => (
      <div key={section} className='border border-info m-2 d-inline-block'>
        <b>{section}</b>
        {otherIcons[section].map(i => (
          <img
            key={i}
            alt=''
            src={i}
            className='i40'
            title={i.replace(/^.*[\\/]/, '').replace('.png', '')}
          />
        ))}
      </div>
    ))
  )
}

export default Iconss