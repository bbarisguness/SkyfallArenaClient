'use client'

import { useEffect, useRef, useState } from "react"
import ReactPlayer from 'react-player/youtube'
import Link from "next/link"
import { parseDateWithDayName } from "@/utils"

export default function GalleryNav({ events }) {
    const [isPageReady, setReady] = useState(false)
    const [activeTab, setActiveTab] = useState(0)
    const [videoUrl, setVideoUrl] = useState("")
    const lineRef = useRef()

    // const galleryData = [
    //     {
    //         id: 0,
    //         name: "E-Rock",
    //         time: "friday, dec 7, 2020",
    //         slug: "e-rock"
    //     },
    //     {
    //         id: 1,
    //         name: "DJ Quiz",
    //         time: "Saturday, FEB 8, 2020",
    //         slug: "dj-quiz"
    //     },
    //     {
    //         id: 2,
    //         name: "Kid Funk",
    //         time: "Wednesday, Dec 12, 2020",
    //         slug: "kid-funk"
    //     },
    //     {
    //         id: 3,
    //         name: "Paul Wall",
    //         time: "FRIday, feb 14, 2020",
    //         slug: "paul-wall"
    //     },
    //     {
    //         id: 4,
    //         name: "Eric Bellinger",
    //         time: "Saturday, feb 15, 2020",
    //         slug: "eric-bellinger"
    //     },
    //     {
    //         id: 5,
    //         name: "DJ Murat",
    //         time: "Sunday, feb 16, 2020",
    //         slug: "dj-murat"
    //     },
    //     {
    //         id: 6,
    //         name: "Kirko Bangz",
    //         time: "Saturday, mar 7, 2020",
    //         slug: "kirko-bangz"
    //     },
    //     {
    //         id: 7,
    //         name: "Fashen",
    //         time: "Sunday, feb 8, 2020",
    //         slug: "fashen"
    //     },
    //     {
    //         id: 8,
    //         name: "DJ Karma",
    //         time: "Saturday, Jan 25, 2020",
    //         slug: "dj-karma"
    //     },
    //     {
    //         id: 9,
    //         name: "DJ Karma",
    //         time: "Saturday, Jan 25, 2020",
    //         videoUrl: "https://www.youtube.com/watch?v=_sI_Ps7JSEk"
    //     },
    //     {
    //         id: 10,
    //         name: "Stunna 4 Vegas",
    //         time: "Saturday, Jan 25, 2020",
    //         videoUrl: "https://www.youtube.com/watch?v=_sI_Ps7JSEk"
    //     }
    // ]

    const changeLinePosition = (e) => {
        if (!(e.target.parentElement.parentElement.classList.contains("activePhotoMenuItem"))) {
            const widthOfElement = e.target.offsetWidth
            const heightOfElement = e.target.offsetHeight
            const spaceFromLeft = e.target.offsetLeft

            lineRef.current.style.left = `${spaceFromLeft}px`
            lineRef.current.style.width = `${widthOfElement}px`
        }
    }

    const firstChangePos = () => {
        lineRef.current.style.left = `${document.getElementsByClassName("activePhotoMenuItem")[0].children[0].children[0].offsetLeft}px`
        lineRef.current.style.width = `${document.getElementsByClassName("activePhotoMenuItem")[0].children[0].children[0].offsetWidth}px`
    }

    const navigateLineToActiveTab = () => {
        lineRef.current.style.left = `${document.getElementsByClassName("activePhotoMenuItem")[0].children[0].children[0].offsetLeft}px`
        lineRef.current.style.width = `${document.getElementsByClassName("activePhotoMenuItem")[0].children[0].children[0].offsetWidth}px`
    }

    const filterGallery = (index) => {
        setActiveTab(index)
    }

    const playVideo = (url) => {
        setVideoUrl(url)
    }

    const closeVideoModal = () => {
        setVideoUrl("")
    }

    useEffect(() => {
        setReady(true)
        firstChangePos()
        document.getElementsByClassName("subtitle__img")[0].style.transform = "scale(1.2)"


        function updateLinePos() {
            navigateLineToActiveTab()
        }

        window.addEventListener('resize', updateLinePos);

        return () => window.removeEventListener('resize', updateLinePos);
    }, [])

    const GalleryItem = ({ data }) => {
        if (data?.attributes?.videoUrl == null) {
            return (
                <div key={`galleryItem-${data?.id}`} className={'col-sm-6 col-lg-4 photos all' + [activeTab != 2 ? ' show' : undefined]}>
                    <Link href={`/${data?.attributes?.slug}`} className="gallery-externallayout">
                        <div className="gallery__img"><img src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}${data?.attributes?.photos?.data[0]?.attributes?.image?.data?.attributes?.url}`} alt="" /></div>
                        {/* <div className="gallery__time">{parseDateWithDayName(new Date(data?.attributes?.eventDate))}</div> */}
                        <div style={{ marginTop: '20px' }} className="gallery__title">{data?.attributes?.title}</div>
                        <p style={{ marginTop: '20px', color: 'black' }}>
                            {data?.attributes?.shortDescription}
                        </p>

                    </Link>
                </div>
            )
        }
        else {
            return (
                <div key={`galleryItem-${data?.id}`} className={'col-sm-6 videos all' + [activeTab != 1 ? ' show' : undefined]}>
                    <a onClick={() => playVideo(data?.attributes?.videoUrl)} href={undefined} className="gallery-externallayout js-video-popup">
                        <div className="gallery__img">
                            <img src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}${data?.attributes?.photos?.data[0]?.attributes?.image?.data?.attributes?.url}`} alt="" />
                            <div className="gallery__video"></div>
                        </div>
                        <div className="gallery__time">{parseDateWithDayName(new Date(data?.attributes?.eventDate))}</div>
                        <div className="gallery__title">{data?.attributes?.title}</div>
                    </a>
                </div>
            )
        }
    }

    return (
        <>
            {videoUrl != "" && <><div className="mfp-bg"></div>
                <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready">
                    <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                        <div className="mfp-content">
                            <div className="mfp-iframe-scaler">
                                <button onClick={closeVideoModal} title="Close (Esc)" className="mfp-close">×</button>
                                <ReactPlayer controls url={videoUrl} />
                            </div>
                        </div>
                    </div>
                </div>
            </>}

            <div id="filter-nav">
                <ul>
                    <li className={activeTab == 0 ? "activePhotoMenuItem" : undefined}><a className="gallery-navitem" href={undefined}><span onClick={() => filterGallery(0)} onMouseEnter={e => changeLinePosition(e)} onMouseLeave={navigateLineToActiveTab}>Show All</span></a></li>
                    <li className={activeTab == 1 ? "activePhotoMenuItem" : undefined}><a className="gallery-navitem" href={undefined}><span onClick={() => filterGallery(1)} onMouseEnter={e => changeLinePosition(e)} onMouseLeave={navigateLineToActiveTab}>#Photos</span></a></li>
                    <li className={activeTab == 2 ? "activePhotoMenuItem" : undefined}><a className="gallery-navitem" href={undefined}><span onClick={() => filterGallery(2)} onMouseEnter={e => changeLinePosition(e)} onMouseLeave={navigateLineToActiveTab}>#Videos</span></a></li>
                </ul>
                <div ref={lineRef} id="tt-filternav__line" style={{ opacity: isPageReady ? 1 : 0 }}></div>
            </div>
            <div id="filter-layout" className="row no-gutters gallery-externallayout-wrapper">
                {/* items */}
                {
                    events.data.map(item => <GalleryItem key={`galleryItem${item.id}`} data={item} />)
                }

                {/* more button */}
                <div className="col-12 text-center" id="js-more-include">
                    <a href="#" className="tt-btn-default tt-btn__wide tt-btn__wide-top"><span>more gallery</span></a>
                </div>
            </div>
        </>
    )
}