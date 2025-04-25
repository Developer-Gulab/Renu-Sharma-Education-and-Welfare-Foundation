import React from 'react'
import RecentEvents from "../../components/Gallery_Components/RecentEvents";
import GalleryHeader from "../../components/Gallery_Components/GalleryHeader";
import GalleryMid from "../../components/Gallery_Components/GalleryMid";
import { useRef } from 'react';

function Gallery() {
  const recentRef=useRef(null);

  return (
    <>
      <div className='bg-[#001f3f]'>
        <div>
          <GalleryHeader scrollToRef={recentRef}/>
        </div>
        <div ref={recentRef}>
          <RecentEvents />
        </div>
        <div className=''>
          <GalleryMid />
        </div>


      </div>


    </>
  )
}

export default Gallery
