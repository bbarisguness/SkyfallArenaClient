'use client'

import { handlerPrivateEventModal } from "@/utils"
import { useEffect } from "react"

export default function EventPartiesItems({ data }) {
    useEffect(() => {
        document.getElementsByClassName("subtitle__img")[0].style.transform = "scale(1.2)"
    }, [])

    const clickBookNowButton = () => {
        handlerPrivateEventModal(true)
    }

    return (
        <div className="events-parties">
            {
                data?.data?.map((item) => {
                    return (
                        <div className="tt-item" key={'eventAndPartiesItem' + item.id}>
                            <div className="tt-item__img lazyload" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_UPLOADS_URL}${item?.attributes?.photos?.data[0]?.attributes?.image?.data?.attributes?.url})` }}></div>
                            <div className="tt-item__content">
                                <div className="tt-item__content-wrapper">
                                    <div className="blocktitle">
                                        {/* <div className="tt-caption">caption</div> */}
                                        <h4 className="tt-title">{item?.attributes?.title}</h4>
                                    </div>
                                    <div className="tt-content-text">{item?.attributes?.shortDescription}</div>
                                    <div className="tt-btn-row">
                                        <a href={`/events-parties/${item?.attributes?.slug}`} data-toggle="modal" data-target="#modalPrivateEvent" className="tt-btn-default"><span>detail</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}