'use client'

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handlerVipTableModal, handlerBuyTicketModal } from "@/utils";
import { changeModalData } from "@/store/buyTicketModalState";
import { parseDateWithDayName } from "@/utils";
import EventCart from "../eventCart";

export default function TicketsSlider({ data }) {

    const dispatch = useDispatch()

    const clickBuyTicketsButton = ({ item }) => {
        handlerBuyTicketModal(true)

        dispatch(changeModalData({ item }))
    }

    useEffect(() => {
        document.getElementsByClassName("subtitle__img")[0].style.transform = "scale(1.2)"
    }, [])

    // const TicketCard = ({ data, index }) => {
    //     const date = new Date(data.attributes.eventDate)
    //     return (
    //         <div className="col-sm-6 col-md-4">
    //             <div className="tickets-col">
    //                 <div className="tickets-col__img">
    //                     <img draggable={false} src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}${data?.attributes?.photos?.data[0]?.attributes?.image?.data?.attributes?.url}`} alt="" />
    //                     <div style={{ padding: 0, display: 'flex', gap: '8px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className="tickets-col__label">
    //                         <h2 style={{ fontSize: '22px' }}>{date.toLocaleString('en-us', { month: 'short' })}</h2>
    //                         <h2 style={{ fontSize: '22px' }}>
    //                             {date.getDate()}
    //                         </h2>
    //                     </div>
    //                     <div className="tickets-col__btn">
    //                         <a onClick={() => clickBuyTicketsButton({ item: data })} tabIndex={index} href={undefined} className="tt-btn" ><span>buy tickets</span></a>
    //                         <a onClick={() => handlerVipTableModal(true)} tabIndex={index} href={undefined} className="tt-btn" ><span>VIP tables</span></a>
    //                     </div>
    //                 </div>
    //                 <div className="tickets-col__description">
    //                     <div className="tickets-col__data">{parseDateWithDayName(new Date(data?.attributes?.eventDate))}</div>
    //                     <h3 className="tickets-col__title">{data?.attributes?.title}.</h3>
    //                     {data?.attributes?.shortDescription}
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <>
            <div id="js-ttcalendar" className="ttcalendar-layout ttcalendar-layout02 slick-slider">
                <div className="item">
                    {/* <div className="ttcalendar__month-title">January 2020</div> */}
                    <div className="row tickets-col-wrapper">
                        {
                            data.data.map((item, index) => <EventCart data={item} index={index} key={`ticketsItem${item.id}`} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}