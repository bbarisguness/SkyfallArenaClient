'use client'

import { Slide } from "react-slideshow-image"
import { useEffect } from "react";
import { useState } from "react";

const indicators = (index) => (<div className="indicator"></div>);
const responsiveSettings = [
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 880,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 700,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 530,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 5,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];

export default function Residents({ pastEvents }) {

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
        <div className="section-wrapper01" style={{ marginTop: "50px" }}>

            <div className="promo02">
                <div className="promo02__img">
                    <svg width="187" height="232" viewBox="0 0 187 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_promo02)">
                            <path d="M146.596 33.6C132.798 33.6232 121.165 43.9142 119.428 57.6333H110.823L121.764 19.8667H132.894V13H119.192C117.668 13.0004 116.328 14.0094 115.903 15.4754L103.691 57.6333H16.4264C14.5346 57.6329 13.0004 59.1698 13 61.0658C13 61.84 13.2608 62.5915 13.7408 63.1988L78.0856 144.661V212.133H50.6815V219H112.341V212.133H84.9366V144.661L132.455 84.5026C136.702 87.1407 141.6 88.5368 146.596 88.5333C161.731 88.5333 174 76.236 174 61.0667C174 45.8973 161.731 33.6 146.596 33.6ZM23.5069 64.5H101.701L94.7405 88.5333H42.4911L23.5069 64.5ZM81.5111 137.936L47.9137 95.4H92.7537L85.0737 121.909L91.6507 123.825L99.8856 95.4H115.109L81.5111 137.936ZM120.531 88.5333H101.872L108.836 64.5H139.515L120.531 88.5333ZM146.596 81.6667C143.135 81.6847 139.728 80.8088 136.703 79.1226L149.281 63.1988C150.456 61.7126 150.207 59.553 148.724 58.3754C148.119 57.8947 147.369 57.6329 146.596 57.6333H126.327C128.219 46.4153 138.826 38.8586 150.018 40.7546C161.211 42.6507 168.75 53.282 166.859 64.5C165.187 74.4103 156.624 81.665 146.596 81.6667Z" stroke="url(#paint0_linear)" />
                        </g>
                        <defs>
                            <filter id="filter0_promo02" x="0" y="0" width="187" height="232" filterUnits="userSpaceOnUse">
                                <feFlood result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="6" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.1 0 0 0 0 0.262 0 0 0 1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear" x1="93.5" y1="13" x2="93.5" y2="332" gradientUnits="userSpaceOnUse">
                                <stop offset="10%" />
                                <stop offset="1" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="container">
                    <div className="promo02__layout">
                        <div className="tt-col">
                            <h6 className="promo02__title">
                                Book Your <br /><span className="tt-base-color">VIP Table</span> Now!
                            </h6>
                        </div>
                        <div className="tt-col promo02__content">
                            VIP Clubio offers private and semi-private nightclub tables coupled with VIP bottle service treatment. Please inquire here for availability and our VIP Reservations Manager will follow up in a timely manner.
                        </div>
                        <div className="tt-col">
                            <div className="promo02_rowbtn">
                                <a href="#" className="tt-btn tt-btn__wide" data-toggle="modal" data-target="#modalVipTables"><span>book VIP table</span></a>
                                <a href="#" className="tt-btn tt-btn__wide" data-toggle="modal" data-target="#modalPrivateEvent"><span>private party</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-inner section-marker">
                <div className="section-wrapper02"></div>
                <div className="container container-fluid-tablet">
                    <div className="section-title">
                        <h2 className="section-title__text">Our Residents</h2>
                        <div className="section-title__text-under">Residents</div>
                        <div className="title__text-description">
                            We have great crowd motivating DJs who are night builders and can help to increase spend and dwell time in our club
                        </div>
                    </div>
                    <Slide responsive={responsiveSettings} arrows={false} cssClass="residentsSlider" slidesToScroll={3} slidesToShow={3} canSwipe={true} indicators={true} autoplay={true} transitionDuration={300} easing="ease">
                        {
                            pastEvents?.data?.map((item, i) => {
                                return (
                                    <div key={i} className="event-item02 tt-box01">
                                        <div className="imgBox">
                                            <div className="img" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_UPLOADS_URL}${item?.attributes?.photos?.data[0]?.attributes?.image?.data?.attributes?.url})` }}></div>
                                            <div className="tt-box01_layout">
                                                <div className="tt-col">
                                                    <ul className="tt-box01__social">
                                                        <li><a target="_blank" rel="nofollow" href="https://www.instagram.com/skyfall.arena/"><span className="icon-social-instagram"></span></a></li>
                                                    </ul>
                                                </div>
                                                <div className="tt-col">
                                                    <div className="tt-box01__title">
                                                        <div className="tt-title01"><a target="_blank" rel="nofollow" href="https://www.instagram.com/skyfall.arena/">{item?.attributes?.title}</a></div>
                                                        <div className="tt-title02">{item?.attributes?.caption}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/* <div className="event-item02 tt-box01">
                            <div className="imgBox">
                                <div className="img" style={{ backgroundImage: "url('../../images/box01-img01.jpg')" }}></div>
                                <div className="tt-box01_layout">
                                    <div className="tt-col">
                                        <ul className="tt-box01__social">
                                            <li><a href="https://www.facebook.com/"><span className="icon-social-facebook"></span></a></li>
                                            <li><a href="https://www.instagram.com/"><span className="icon-social-instagram"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="tt-col">
                                        <div className="tt-box01__title">
                                            <div className="tt-title01"><a href="https://www.instagram.com/">Anthony Markus</a></div>
                                            <div className="tt-title02">House, Deep House</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                        }} className="event-item02 tt-box01">
                            <div className="imgBox">
                                <div className="img" style={{ backgroundImage: "url('../../images/box01-img02.jpg')" }}></div>
                                <div className="tt-box01_layout tt-box01_layout02">
                                    <div className="tt-col">
                                        <ul className="tt-box01__social">
                                            <li><a href="https://www.facebook.com/"><span className="icon-social-facebook"></span></a></li>
                                            <li><a href="https://www.instagram.com/"><span className="icon-social-instagram"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="tt-col">
                                        <div className="tt-box01__title">
                                            <div className="tt-title01"><a href="https://www.instagram.com/">Ann Sandoval</a></div>
                                            <div className="tt-title02">House, Deep House</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                        }} className="event-item02 tt-box01">
                            <div className="imgBox">
                                <div className="img" style={{ backgroundImage: "url('../../images/box01-img03.jpg')" }}></div>
                                <div className="tt-box01_layout">
                                    <div className="tt-col">
                                        <ul className="tt-box01__social">
                                            <li><a href="https://www.facebook.com/"><span className="icon-social-facebook"></span></a></li>
                                            <li><a href="https://www.instagram.com/"><span className="icon-social-instagram"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="tt-col">
                                        <div className="tt-box01__title">
                                            <div className="tt-title01"><a href="https://www.instagram.com/">Kenneth Pierce</a></div>
                                            <div className="tt-title02">Kenneth Piercee</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                        }} className="event-item02 tt-box01">
                            <div className="imgBox">
                                <div className="img" style={{ backgroundImage: "url('../../images/box01-img01.jpg')" }}></div>
                                <div className="tt-box01_layout">
                                    <div className="tt-col">
                                        <ul className="tt-box01__social">
                                            <li><a href="https://www.facebook.com/"><span className="icon-social-facebook"></span></a></li>
                                            <li><a href="https://www.instagram.com/"><span className="icon-social-instagram"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="tt-col">
                                        <div className="tt-box01__title">
                                            <div className="tt-title01"><a href="https://www.instagram.com/">Anthony Markus</a></div>
                                            <div className="tt-title02">House, Deep House</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </Slide>
                </div>
            </div>
        </div>
    )
}