import React, { useState } from 'react'
import Bugs from '../components/Bugs';
import Sidebar from '../components/Sidebar'

const ProjectHome = () => {
  const [isActive, setisActive] = useState(1);

  return (
    <div className='flex'>
      <Sidebar isActive={isActive} setisActive={setisActive} />
      <div className='flex-1'>
        {(isActive == 1) && <Bugs/>  }
      </div>

    </div>
  )
}

export default ProjectHome