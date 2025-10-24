import React from 'react'
import { Link } from 'react-router';

function HomeBottom (){
    return(
<div className='font-[font2] flex w-screen overflow-y-hidden items-center justify-center gap-2'>
  <Link
    to='/Project'
    className='
      text-[7vw] uppercase leading-[5vw]
      border-1 border-white rounded-full 
      px-6 pt-4 mb-2
      hover:text-[#D3FD50] hover:border-[#D3FD50] 
    '
  >
    Work
  </Link>

  <Link
    to='/agences'
    className='
      text-[7vw] uppercase leading-[5vw]
      border-1 border-white rounded-full 
      px-6 pt-4 mb-2
      hover:text-[#D3FD50] hover:border-[#D3FD50] 
    '
  >
    Agence
  </Link>
</div>

    )
}
export default HomeBottom;