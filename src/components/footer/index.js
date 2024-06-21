'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function Footer() {
    const pathname = usePathname()
    const [activePage, setActivePage] = useState("")

    useEffect(() => {
        setActivePage(pathname)
    }, [pathname])

    return (
        <footer id="tt-footer" className="no-margin">
            <div className="footer-wrapper">
                <div className="container">
                    <nav className="f-nav" id="f-nav">
                        <ul>
                            <li className={activePage == "/" ? "active" : undefined}><Link href="/">Home</Link></li>
                            <li className={activePage == "/events" ? "active" : undefined}><Link href="/events">Events</Link></li>
                            <li className={activePage == "/gallery" ? "active" : undefined}><Link href="/gallery">Gallery</Link></li>
                            <li className={activePage == "/events-parties" ? "active" : undefined}><Link href="/events-parties">Event + Parties</Link></li>
                            <li className={activePage == "/contact" ? "active" : undefined}><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                    <div className="f-logo">
                        <a href="/" className="tt-logo tt-logo-alignment">
                            <img src="/images/skyfall-logo.png" alt="" />
                        </a>
                    </div>
                    <div className="f-col">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="f-info">
                                    <div className="f-info__icon icon-place"></div>
                                    <div className="f-info__content">
                                        <div className="tt-title">SkyFall Arena</div>
                                        <address>
                                            Ölüdeniz Mah. Cumhuriyet Cad. No:25 Muğla/Fethiye
                                        </address>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="f-info">
                                    <div className="f-info__icon icon-phone"></div>
                                    <div className="f-info__content">
                                        <div className="tt-title">Contact Phones</div>
                                        <address>
                                            +90 555 333 33 33<br />
                                        </address>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="f-info">
                                    <div className="f-info__icon icon-clock"></div>
                                    <div className="f-info__content">
                                        <div className="tt-title">Working Hours</div>
                                        <address>
                                            Her gün <br />
                                            21:00 – 04:00
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="f-social">
                        <ul>
                            <li><a href="#" className="icon-social-facebook"></a></li>
                            <li><a href="#" className="icon-social-twitter"></a></li>
                            <li><a href="#" className="icon-social-googleplus"></a></li>
                            <li><a rel="nofollow" target="_blank" href="https://www.instagram.com/skyfall.arena/" className="icon-social-instagram"></a></li>
                        </ul>
                    </div>
                    <div className="f-copyright">
                        &copy; {new Date().getFullYear()} SkyFall Arena. All Rights Reserved.<br />
                        {/* <a href="#">Privacy Policy</a>
                        &nbsp;|&nbsp; <a href="#">Terms of Service</a> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}