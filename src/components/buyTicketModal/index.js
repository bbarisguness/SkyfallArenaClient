"use client"

import { handlerBuyTicketModal, isModalActiveById } from "@/utils";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux"

export default function BuyTicketModal() {
    //REFS
    const buyTicketModalRef = useRef(null)

    //SELECTORS
    const data = useSelector(state => state.buyTicketModalState)


    const handleOutsideClick = (e) => {
        //dışarı tıklanırsa
        if (isModalActiveById("modalBayTickets")) {
            if (buyTicketModalRef.current && !buyTicketModalRef.current.contains(e.target)) {

                if (!buyTicketModalRef.current.contains(e.target)) {
                    closeBuyTicketModal()
                }

            }
        }
    };

    const closeBuyTicketModal = () => {
        handlerBuyTicketModal(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    })

    return (
        <div className="modal fade" id="modalBayTickets" tabIndex="-1" role="dialog" aria-label="modalBayTickets" style={{ display: "none" }}>
            <div className="modal-dialog modal-lg">
                <div ref={buyTicketModalRef} className="modal-content ">
                    <div className="modal-body modal-baytickets">
                        <button onClick={closeBuyTicketModal} type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="icon-close"></span></button>
                        <div className="row">
                            <div className="col-md-6 tt-col-left">
                                <div className="baytickets__img">
                                    <img src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}${data.imgName}`} data-src="images/events-03.jpg" className=" lazyloaded" alt="" />
                                </div>
                                <dl className="baytickets__timing">
                                    <dt>Time:</dt>
                                    <dd>
                                        <div className="tt-col">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 0C5.38332 0 0 5.38332 0 12C0 18.6167 5.38332 24 12 24C18.6167 24 24 18.6167 24 12C24 5.38332 18.6167 0 12 0ZM12 22.5C6.2102 22.5 1.50001 17.7898 1.50001 12C1.50001 6.2102 6.2102 1.50001 12 1.50001C17.7898 1.50001 22.5 6.2102 22.5 12C22.5 17.7898 17.7898 22.5 12 22.5Z" fill="black"></path>
                                                <path d="M12.75 4.50002H11.25V12.3105L15.9697 17.0303L17.0303 15.9697L12.75 11.6895V4.50002Z" fill="black"></path>
                                            </svg>
                                        </div>
                                        <div className="tt-col">{data.time}</div>
                                    </dd>
                                    <dt>Price:</dt>
                                    <dd>
                                        <div className="tt-col">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.4163 0H12.3081C12.1217 0 11.9428 0.0741575 11.811 0.205993L0.755308 11.2613C-0.251769 12.2688 -0.251769 13.9077 0.755308 14.9148L9.08493 23.2443C9.57126 23.7306 10.22 23.9985 10.9114 23.9986H10.9116C11.6032 23.9986 12.2519 23.7306 12.7384 23.2441L23.7938 12.1886C23.9256 12.0567 23.9997 11.8778 23.9997 11.6914L23.9999 2.58324C23.9997 1.15887 22.8407 0 21.4163 0ZM22.5935 11.4003L11.744 22.2498C11.5232 22.4708 11.2274 22.5924 10.9116 22.5924C10.5955 22.5924 10.3 22.4708 10.0792 22.25L1.74957 13.9206C1.29071 13.4617 1.29071 12.7146 1.74957 12.2556L12.5993 1.40625H21.4163C22.0654 1.40625 22.5937 1.93432 22.5937 2.58343L22.5935 11.4003Z" fill="black"></path>
                                                <path d="M17.8026 3.98828C17.2125 3.98828 16.6577 4.21826 16.2404 4.63556C15.8231 5.05267 15.5933 5.60748 15.5933 6.19763C15.5933 6.78778 15.8231 7.34259 16.2404 7.75989C16.6577 8.17718 17.2125 8.40698 17.8026 8.40698C18.3926 8.40698 18.9474 8.17718 19.3647 7.75989C19.782 7.34259 20.0118 6.78778 20.0118 6.19763C20.0118 5.60748 19.782 5.05267 19.3649 4.63556C18.9476 4.21826 18.3928 3.98828 17.8026 3.98828ZM18.3704 6.76544C18.2188 6.91724 18.017 7.00073 17.8026 7.00073C17.588 7.00073 17.3864 6.91724 17.2348 6.76544C17.083 6.61383 16.9995 6.41205 16.9995 6.19763C16.9995 5.98321 17.083 5.78143 17.2348 5.62982C17.3864 5.47803 17.5882 5.39453 17.8026 5.39453C18.017 5.39453 18.2186 5.47803 18.3704 5.62982C18.5222 5.78143 18.6057 5.98321 18.6057 6.19763C18.6057 6.41205 18.522 6.61383 18.3704 6.76544Z" fill="black"></path>
                                            </svg>
                                        </div>
                                        <div className="tt-col">{data.price}$</div>
                                    </dd>
                                    <dt>Table:</dt>
                                    <dd>
                                        <div className="tt-col">
                                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.8929 0C18.3036 0.00427902 16.1204 1.93122 15.7945 4.50002H1.60723C1.25219 4.49972 0.964108 4.78726 0.963867 5.14229C0.963747 5.30098 1.02233 5.45418 1.12834 5.57225L10.6073 16.1447V25.7142H6.75012V27H15.7501V25.7143H11.893V16.1441L17.9712 9.36514C18.8274 9.96481 19.8476 10.2862 20.8929 10.2857C23.7332 10.2857 26.0358 7.9832 26.0358 5.1429C26.0358 2.30259 23.7332 0 20.8929 0ZM11.2501 14.9349L5.90149 8.96979H16.5974L11.2501 14.9349ZM17.6787 7.75991V7.68403H4.74887L3.04721 5.78571H16.3929H19.4516L17.6787 7.75991ZM20.8929 8.99998C20.1642 9.00106 19.4504 8.79362 18.8358 8.40212L21.3726 5.57357C21.6104 5.31002 21.5896 4.90351 21.326 4.66564C21.2073 4.55848 21.0529 4.49942 20.8929 4.50002H17.0891C17.4442 2.39956 19.4348 0.984656 21.5352 1.33969C23.6357 1.69473 25.0506 3.68526 24.6955 5.78571C24.3819 7.64136 22.7749 8.99974 20.8929 8.99998Z" fill="black"></path>
                                            </svg>
                                        </div>
                                        <div className="tt-col">{data.table}$</div>
                                    </dd>
                                </dl>
                            </div>
                            <div className="col-md-6 tt-col-right">
                                <div className="modal-titleblock">
                                    <div className="modal-title text-left">{data.name}</div>
                                    <div className="modal-title__label">{data.subtitle}</div>
                                </div>
                                <div className="baytickets__timer">
                                    <div className="tt-title">
                                        {data.date}
                                    </div>
                                    <div className="pt-countdown" data-date="2020-12-15" data-year="Yrs" data-month="Mths" data-week="WK" data-day="Days" data-hour="Hours" data-minute="Minutes"><span className="countdown-row"></span></div>
                                </div>
                                <div className="baytickets__description">
                                    {data.desc}
                                </div>
                                <ul className="baytickets__social">
                                    <li><a href="#"><span className="icon-social-facebook"></span></a></li>
                                    <li><a href="#"><span className="icon-social-twitter"></span></a></li>
                                    <li><a href="#"><span className="icon-social-googleplus"></span></a></li>
                                </ul>
                                {/* <div className="row-btn">
                                    <a href="" className="tt-btn-default"><span>buy tickets</span></a>
                                    <Link href='/buy' onClick={()=>{closeBuyTicketModal()}} className="tt-btn-default"><span>buy tickets</span></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}