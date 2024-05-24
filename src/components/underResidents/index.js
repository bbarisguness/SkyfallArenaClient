'use client'

import { Slide } from "react-slideshow-image"
import { useState } from "react";
import Link from "next/link"

const indicators = (index) => (<li className="indicator slick-dots"></li>);

const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
};

const properties = {
    prevArrow: <a href={undefined} className="parallax__navleft icon-arrow_left"></a>,
    nextArrow: <a href={undefined} className="parallax__navright icon-arrow_right"></a>
}

const responsiveSettings = [
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 880,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 700,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 530,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 300,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];


export default function UnderResidents() {
    return (
        <div className="section-marker section-marker__indent02">
            <div className="section-indent-minus01">
                <div className="section-parallax lazyload" style={{ backgroundImage: "url('../../images/section-parallax.jpg')" }}>
                    <div className="section-parallax-inner">
                        <div className="container container-fluid-tablet">
                            {/* <a href="#" className="parallax__navleft icon-arrow_left"></a>
                            <a href="#" className="parallax__navright icon-arrow_right"></a> */}
                            <div className="section-parallax-border01">
                                <div className="section-parallax-border02">
                                    <div className="js-init-slick04 slick-dots01 slick-arrows01">
                                        <Slide {...properties} responsive={responsiveSettings} cssClass="residentsSlider" slidesToScroll={1} slidesToShow={1} canSwipe={true} indicators={indicators} autoplay={true} transitionDuration={300} easing="ease">
                                            {/* <div style={{
                                            }} className="event-item02 tt-box01">
                                                <div className="imgBox">
                                                    <div className="img" style={{ backgroundImage: "url('box01-img01.jpg')" }}></div>
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
                                            <div className="item">
                                                <div className="tt-parallax01">
                                                    <div className="tt-parallax01__wrapper">
                                                        <div className="tt-parallax01__data">Saturday, Jan 25, 2020</div>
                                                        <div className="tt-parallax01__title">Elevation: Season Opening Party</div>
                                                        <p>
                                                            The season opening party is here. Super special debut of RSS Disco, the now legendary Mayan Warrior resident Peter Invasion who brought it top level to the City of Gods & the debut of Savaggio & ZERO!!!
                                                        </p>
                                                        <Link href="/events-parties" className="tt-btn tt-btn__wide"><span>know more</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="tt-parallax01">
                                                    <div className="tt-parallax01__wrapper">
                                                        <div className="tt-parallax01__data">Saturday, Jan 25, 2020</div>
                                                        <div className="tt-parallax01__title">Elevation: Season Opening Party</div>
                                                        <p>
                                                            The season opening party is here. Super special debut of RSS Disco, the now legendary Mayan Warrior resident Peter Invasion who brought it top level to the City of Gods & the debut of Savaggio & ZERO!!!
                                                        </p>
                                                        <Link href="/events-parties" className="tt-btn tt-btn__wide"><span>know more</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}