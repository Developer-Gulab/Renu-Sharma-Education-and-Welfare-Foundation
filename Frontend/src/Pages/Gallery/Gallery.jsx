import React from "react";

import GalleryHeader from "./GalleryHeader";
import GalleryMid from "./GalleryMid";
export default function Gallery() {
    return (
        <>
            <div className=" py-10">
                <GalleryHeader />
            </div>
            <div>

                <GalleryMid />
            </div>


        </>
    )
} 