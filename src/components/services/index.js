
'use client'

import { useEffect } from "react";
import { Slide } from "react-slideshow-image"
import { useState } from "react";
import Link from "next/link";

const indicators = (index) => (<div className="indicator"></div>);
const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 100,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];

export default function Services({ parties }) {
    const [width, setWidth] = useState(0);
    const [showIndicator, setShowIndicator] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (width < 876) {
            if (!showIndicator) {
                setShowIndicator(true)
            }
        }
        else {
            if (showIndicator) {
                setShowIndicator(false)
            }
        }
    }, [width])

    return (
        <div className="section-indent03 section-marker section-marker__indent01">
            <div className="container container-fluid-tablet">
                <div className="section-title">
                    <h2 className="section-title__text">What We Offer</h2>
                    <div className="section-title__text-under">Services</div>
                    <div className="title__text-description">
                        Experience the best nightlife option in with this escorted tour that includes 3 of the funnest bar/lounges/clubs each night has to offer
                    </div>
                </div>
                <div className="events-img-list">
                    <Slide responsive={responsiveSettings} arrows={false} cssClass="servicesSlider" slidesToScroll={1} slidesToShow={3} canSwipe={showIndicator} indicators={showIndicator ? indicators : false} autoplay={showIndicator} transitionDuration={300} easing="ease">
                        {
                            parties?.data?.map((item, i) => {
                                return (
                                    <div key={i} className="event-item02">
                                        <div className="event-item02__img" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_UPLOADS_URL}${item?.attributes?.photos?.data[0]?.attributes?.image?.data?.attributes?.url})` }}></div>
                                        <div className="event-item02__content">
                                            <div className="event-item02__border">
                                                <h4 className="tt-title">{item?.attributes?.title}</h4>
                                                <p>{item?.attributes?.shortDescription}</p>
                                                <Link href={`/events-parties/${item?.attributes?.slug}`} className="tt-btn"><span>know more</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* <div style={{}} className="event-item02">
                            <div className="event-item02__img" style={{ backgroundImage: "url('../../../images/events-offer-01.jpg')" }}></div>
                            <div className="event-item02__content">
                                <div className="event-item02__border">
                                    <h4 className="tt-title">Corporate Events</h4>
                                    <p>
                                        A friendly happy hour, a company holiday party, or an evening of entertainment for VIP.
                                    </p>
                                    <Link href="/events-parties" className="tt-btn"><span>know more</span></Link>
                                </div>
                            </div>
                        </div>
                        <div style={{}} className="event-item02">
                            <div className="event-item02__img" style={{ backgroundImage: "url('../../../images/events-offer-02.jpg')" }}></div>
                            <div className="event-item02__content">
                                <div className="event-item02__border">
                                    <h4 className="tt-title">Birthday Parties</h4>
                                    <p>
                                        Spend your birthday with us, and enjoy a night you’ll remember forever.
                                    </p>
                                    <Link href="/events-parties" className="tt-btn"><span>know more</span></Link>
                                </div>
                            </div>
                        </div>
                        <div style={{}} className="event-item02">
                            <div className="event-item02__img" style={{ backgroundImage: "url('../../../images/events-offer-03.jpg')" }}></div>
                            <div className="event-item02__content">
                                <div className="event-item02__border">
                                    <h4 className="tt-title">Bachelorette</h4>
                                    <p>
                                        VIP Night Club! End your single days in style with a VIP table reservation.
                                    </p>
                                    <Link href="/events-parties" className="tt-btn"><span>know more</span></Link>
                                </div>
                            </div>
                        </div> */}
                    </Slide>
                    {/* <div className="slick-dots02 js-slick02 event-item02-list row">

                        <div className="col-md-4">
                            <div className="event-item02">
                                <div className="event-item02__img lazyload" data-bg="images/events-offer-01.jpg"></div>
                                <div className="event-item02__content">
                                    <div className="event-item02__border">
                                        <h4 className="tt-title">Corporate Events</h4>
                                        <p>
                                            A friendly happy hour, a company holiday party, or an evening of entertainment for VIP.
                                        </p>
                                        <a href="events-parties.html" className="tt-btn"><span>know more</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="event-item02">
                                <div className="event-item02__img lazyload" data-bg="images/events-offer-02.jpg"></div>
                                <div className="event-item02__content">
                                    <div className="event-item02__border">
                                        <h4 className="tt-title">Birthday Parties</h4>
                                        <p>
                                            Spend your birthday with us, and enjoy a night you’ll remember forever.
                                        </p>
                                        <a href="events-parties.html" className="tt-btn"><span>know more</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="event-item02">
                                <div className="event-item02__img lazyload" data-bg="images/events-offer-03.jpg"></div>
                                <div className="event-item02__content">
                                    <div className="event-item02__border">
                                        <h4 className="tt-title">Bachelorette</h4>
                                        <p>
                                            VIP Night Club! End your single days in style with a VIP table reservation.
                                        </p>
                                        <a href="events-parties.html" className="tt-btn"><span>know more</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}