import React from "react";
import RecentEvents from "../../components/Gallery_Components/RecentEvents";
import GalleryHeader from "../../components/Gallery_Components/GalleryHeader";
import GalleryMid from "../../components/Gallery_Components/GalleryMid";
export default function Gallery() {
    return (
        <>
            <div className=" py-10">
                <GalleryHeader />
            </div>
            <div>
                 <RecentEvents />
            </div>
            <div>
                <GalleryMid />
            </div>


        </>
    )
} 