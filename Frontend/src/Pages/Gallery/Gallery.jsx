import React from "react";

import GalleryHeader from "./GalleryHeader";
import GalleryMid from "./GalleryMid";
export default function Gallery() {
    return (
        <>
            <div className="bg-blue-950 py-10">
                <GalleryHeader />
            </div>
            <div>

                <GalleryMid />
            </div>


        </>
    )
} 