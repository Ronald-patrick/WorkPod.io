import { ChipIcon } from '@heroicons/react/solid'
import React from 'react'

const MobileView = () => {
  return (
    <div className='md:hidden flex flex-col justify-center items-center h-screen w-screen'>

        <ChipIcon className='text-lred w-16 h-16'/>
        <h1 className='text-4xl font-bold text-lred mb-2 '>Desktop only</h1>
        <h1 className='text-gray-600 text-xl'>Coming Soon to mobile Devices</h1>
    </div>
  )
}

export default MobileView