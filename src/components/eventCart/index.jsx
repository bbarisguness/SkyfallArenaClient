import React from 'react'

import { parseDateWithDayName } from "@/utils";
import { handlerVipTableModal, handlerBuyTicketModal } from "@/utils";
import { useDispatch } from 'react-redux';
import { changeModalData } from "@/store/buyTicketModalState";

export default function EventCart({ data, index }) {
    const date = new Date(data.attributes.eventDate)

    const dispatch = useDispatch()

    const clickBuyTicketsButton = ({ item }) => {
        handlerBuyTicketModal(true)

        dispatch(changeModalData({ item }))
    }

    return (
        <div className="col-sm-6 col-md-4">
            <div className="tickets-col">
                <div className="tickets-col__img">
                    <img draggable={false} src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}${data?.attributes?.photos?.data[0]?.attributes?.image?.data?.attributes?.url}`} alt="" />
                    <div style={{ padding: 0, display: 'flex', gap: '8px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className="tickets-col__label">
                        <h2 style={{ fontSize: '22px' }}>{date.toLocaleString('en-us', { month: 'short' })}</h2>
                        <h2 style={{ fontSize: '22px' }}>
                            {date.getDate()}
                        </h2>
                    </div>
                    <div className="tickets-col__btn">
                        <a onClick={() => clickBuyTicketsButton({ item: data })} tabIndex={index} href={undefined} className="tt-btn" ><span>info</span></a>
                        <a tabIndex={index} rel='nofollow' target='_blank' href={data?.attributes?.link} className="tt-btn" ><span>buy tickets</span></a>
                    </div>
                </div>
                <div className="tickets-col__description">
                    <div className="tickets-col__data">{parseDateWithDayName(new Date(data?.attributes?.eventDate))}</div>
                    <h3 className="tickets-col__title">{data?.attributes?.title}.</h3>
                    {data?.attributes?.caption}
                </div>
            </div>
        </div>

    )
}
