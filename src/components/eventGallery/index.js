'use client'

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";

export default function EventGallery({ eventData }) {
    const [activeLightboxIndex, setActiveLigtboxIndex] = useState(-1)
    const gallery = eventData?.data[0]?.attributes?.photos?.data

    return (
        <>
            {
                gallery?.length > 0 && (
                    <Lightbox
                        open={activeLightboxIndex >= 0}
                        close={() => setActiveLigtboxIndex(-1)}
                        index={activeLightboxIndex}
                        plugins={[Fullscreen]}
                        slides={
                            gallery.map((item, index) => {
                                return { src: process.env.NEXT_PUBLIC_UPLOADS_URL + item?.attributes?.image?.data?.attributes?.url }
                            })
                        }
                    />
                )
            }
            <div className="instafeed-col">
                <div className="galleryDetailPage instagram_gallery">
                    {
                        gallery.map((item, index) => (
                            <div onClick={() => setActiveLigtboxIndex(index)} key={index} className="instagram-image">
                                <Image fill={true} alt="" src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}${item?.attributes?.image?.data?.attributes?.url}`} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}