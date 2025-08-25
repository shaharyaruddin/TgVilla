import clsx from 'clsx'
import React from 'react'

const HomeSliderPera = ({children,className}) => {
  return (
    <p className={clsx("text-xl font-playfair",className)}>
          {children}
        </p>
  )
}

export default HomeSliderPera