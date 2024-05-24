import Link from "next/link"

export default function About() {
    return (
        <div className="section-indent02">
            <div className="container-fluid no-gutters section-marker">
                <div className="events-wide-list">
                    <div className="events-wide">
                        <div className="events-wide__img">
                            <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="js-video-popup lazyload" target="_blank" style={{ backgroundImage: "url('../../../images/events-wide01.jpg')" }}>
                                <span className="tt-text tt-text__right">Night CLub</span>
                                <span className="tt-icon"></span>
                            </a>
                        </div>
                        <div className="events-wide__content tt-color02">
                            <div className="events-wide_wrapper">
                                <div className="blocktitle_color-01 blocktitle">
                                    <div className="tt-caption">ABOUT NIGHT CLUB</div>
                                    <h4 className="tt-title">
                                        Old Space. New Stories
                                    </h4>
                                    <div className="tt-title-under">
                                        About
                                    </div>
                                </div>
                                <p>
                                    Our award-winning seasonal music series showcases the best in live and electronic music, becoming a vital part of the city’s vibrant cultural scene today and garnering global acclaim. Our Autumn/Winter 2019 Season features in excess of 250 artists, with over 30 shows taking place between September and January.
                                </p>
                                <Link href="/events-parties" className="tt-btn tt-btn_color02"><span>know more</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="events-wide tt-item__revers">
                        <div className="events-wide__img">
                            <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="js-video-popup lazyload" target="_blank" style={{ backgroundImage: "url('../../../images/events-wide02.jpg')" }}>
                                <span className="tt-text tt-text__left">Day CLub</span>
                                <span className="tt-icon"></span>
                            </a>
                        </div>
                        <div className="events-wide__content tt-color01">
                            <div className="events-wide_wrapper">
                                <div className="blocktitle">
                                    <div className="tt-caption">About Day Club</div>
                                    <h4 className="tt-title">
                                        Feel the Day Energy
                                    </h4>
                                    <div className="tt-title-under">
                                        About
                                    </div>
                                </div>
                                <p>
                                    VIP Clubio also features a dayclub that serves as an exclusive adult oasis by day and an extension of the nightclub in the evening. You can experience a vibrant beach club scene hosted by today’s most influential DJs while living it up in eight Grand Cabanas, each with its own private spa and infinity plunge pool.
                                </p>
                                <Link href="/events-parties" className="tt-btn-default"><span>know more</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}