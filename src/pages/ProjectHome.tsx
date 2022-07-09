import React, { useState } from 'react'
import Bugs from '../components/Bugs';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar'

const ProjectHome = () => {
  const [isActive, setisActive] = useState(3);

  return (
    <div className='flex'>
      <Sidebar isActive={isActive} setisActive={setisActive} />
      <div className='flex-1'>
        {(isActive == 1) && <Bugs/>  }
        {(isActive == 3) && <Feed/>  }
      </div>

    </div>
  )
}

export default ProjectHome