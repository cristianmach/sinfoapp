import React, { Children } from 'react'

interface LabelProps {
    children: string;
}

export const TitleExp = ({children}) => {
  return (
    <div className='fixed text-white top-5 right-5 text-xs lg:text-base  font-mono italic'>
        <label>{children}</label>
    </div>
  )
}
