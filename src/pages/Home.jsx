import React from 'react'
import Video from '../component/home/Video.jsx';
import HomeBottom from '../component/home/HomeBottom.jsx';
import HomeHero from '../component/home/HomeHero.jsx';

function Home(){
    return(
        <div>

        
        <div className='h-screen w-screen fixed'>
             <Video/>
        </div>
        <div className='h-screen w-1/2 relative flex flex-col justify-between '>
        <HomeHero/>
        <HomeBottom/>
        
        </div>
    
        </div>
    )


}
export default Home;
