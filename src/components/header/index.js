'use client'
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { handlerPrivateEventModal, handlerVipTableModal } from "@/utils";
import { usePathname } from "next/navigation";

export default function Header() {
    const lineRef = useRef(null)
    const pathname = usePathname()
    const [activeMenu, setActiveMenu] = useState(-1)
    const [isPageReady, setPageReady] = useState(false)

    const handleScroll = () => {
        const newScrollYPosition = window.pageYOffset;
        //console.log(newScrollYPosition);

        const header = document.getElementById("tt-header")

        if (!header.classList.contains("stuck")) {

            if (!(newScrollYPosition == 0)) {
                header.classList.add("stuck")
            }
        }
        else {
            if (newScrollYPosition == 0) {
                header.classList.remove("stuck")
            }
        }

        // setScrollYPosition(newScrollYPosition);
    };

    useEffect(() => {
        setPageReady(true)
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(() => {
        if (isPageReady) {
            navigateLineToActiveTab()
        }
    }, [isPageReady])

    useEffect(() => {
        setActiveMenu(pathname)
    }, [pathname])

    useEffect(() => {
        if (activeMenu != -1) {
            navigateLineToActiveTab()
        }
    }, [activeMenu])

    const openMenu = () => {
        document.body.classList.add("mm-open")
        document.getElementById("mobile-menu").classList.add("mmitemopen")
    }

    const moveActiveTabLine = (e) => {
        let widthOfElement, heightOfElement, spaceFromLeft
        //console.log(lineRef);

        if (!(e.target.parentElement.parentElement.classList.contains("activeHeaderMenuItem"))) {

            if (e.target && e.target.children[0]) {
                widthOfElement = e.target.children[0].offsetWidth
                heightOfElement = e.target.children[0].offsetHeight
                spaceFromLeft = e.target.children[0].offsetLeft
            }

            lineRef.current.style.left = `${spaceFromLeft}px`
            lineRef.current.style.width = `${widthOfElement}px`
        }
    }

    const navigateLineToActiveTab = () => {
        lineRef.current.style.left = `${document.getElementsByClassName("activeHeaderMenuItem")[0]?.children[0]?.children[0]?.offsetLeft}px`
        lineRef.current.style.width = `${document.getElementsByClassName("activeHeaderMenuItem")[0]?.children[0]?.children[0]?.offsetWidth}px`
    }

    const closeMenu = () => {
        document.body.classList.remove("mm-open")
        document.getElementById("mobile-menu").classList.remove("mmitemopen")
        document.getElementById("mm0").classList.remove("mmsubopened", "mmhidden")
    }

    // const openSubMenu = (menu) => {
    //     console.log(e.target);
    //     document.getElementById("mm0").classList.add("mmsubopened", "mmhidden")
    // }

    return (
        <>
            <nav className="panel-menu" id="mobile-menu">
                <div className="mmpanels">


                    <div className="mmpanel mmopened current" id="mm0">
                        <ul>
                            <li onClick={closeMenu} className="mm-close-parent"><a href={undefined} className="mm-close">Close</a></li>
                            <li onClick={closeMenu}><Link href="/"><span>HOME</span></Link></li>
                            <li onClick={closeMenu}><Link href="/events"><span>EVENTS</span></Link></li>
                            <li onClick={closeMenu}><Link href="/gallery"><span>GALLERY</span></Link></li>
                            <li onClick={closeMenu}><Link href="/events-parties"><span>EVENT + PARTIES</span></Link></li>
                            <li onClick={closeMenu}><Link href="/contact"><span>CONTACT US</span></Link></li>
                            {/* <li className="subMenu">
                                <a href={undefined} data-target="#mm1" className="mm-next-level"><span>EVENTS CALENDAR</span></a>
                            </li>
                            <li className="subMenu">
                                <a href="#mm2" data-target="#mm2" className="mm-next-level"><span>GALLERY</span></a>

                            </li> */}
                            {/* <li className="subMenu">
                                <a href="#mm3" data-target="#mm3" className="mm-next-level"><span>NEWS</span></a>

                            </li> */}
                        </ul>
                    </div>

                    <div className="mmpanel mmhidden" id="mm1"><ul><li><a href="#" data-target="#" className="mm-prev-level">Back</a></li><li><a href="events.html" className="mm-original-link"><span>EVENTS CALENDAR</span></a></li>
                        <li><a href="tickets.html">EVENTS TICKETS #1</a></li>
                        <li><a href="tickets-02.html">EVENTS TICKETS #2</a></li>
                    </ul></div>

                    <div className="mmpanel mmhidden" id="mm2"><ul><li><a href="#" data-target="#" className="mm-prev-level">Back</a></li><li><a href="gallery-01.html" className="mm-original-link"><span>GALLERY</span></a></li>
                        <li><a href="gallery-01.html">GALLERY #1</a></li>
                        <li><a href="gallery-02.html">GALLERY #2</a></li>
                        <li><a href="gallery-detail.html">GALLERY DETAIL</a></li>
                    </ul></div>
                </div>
            </nav >

            <header id="tt-header">
                <div className="tt-holder">
                    <div className="tt-col">
                        <Link href="/" className="tt-logo tt-logo-alignment">
                            <img src="/images/skyfall-logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="tt-col tt-col tt-desctop-parent tt-wide">
                        <nav id="tt-nav">
                            <ul>
                                <li className={activeMenu == "/" ? "activeHeaderMenuItem" : undefined} onMouseEnter={(e) => moveActiveTabLine(e)} onMouseLeave={navigateLineToActiveTab}><Link href="/"><span>HOME</span></Link></li>
                                <li className={activeMenu == "/events" ? "activeHeaderMenuItem" : undefined} onMouseEnter={(e) => moveActiveTabLine(e)} onMouseLeave={navigateLineToActiveTab}><Link href="/events"><span>EVENTS</span></Link></li>
                                {/* <li>
                                    <a href="events.html"><span>EVENTS CALENDAR</span></a>
                                    <ul>
                                        <li><a href="tickets.html">EVENTS TICKETS #1</a></li>
                                        <li><Link href="/tickets">EVENTS TICKETS #2</Link></li>
                                    </ul>
                                </li> */}
                                <li className={activeMenu == "/gallery" ? "activeHeaderMenuItem" : undefined} onMouseEnter={(e) => moveActiveTabLine(e)} onMouseLeave={navigateLineToActiveTab}><Link href="/gallery"><span>GALLERY</span></Link></li>
                                {/* <li>
                                    <a href="gallery-01.html"><span>GALLERY</span></a>
                                    <ul>
                                        <li><a href="gallery-01.html">GALLERY #1</a></li>
                                        <li><Link href="/gallery">GALLERY #2</Link></li>
                                        <li><Link href="/gallery-detail">GALLERY DETAIL</Link></li>
                                    </ul>
                                </li> */}
                                {/* <li>
                                    <a href="news.html"><span>NEWS</span></a>
                                    <ul>
                                        <li><a href="news.html">NEWS GRID</a></li>
                                        <li><a href="news-item.html">NEWS/BLOG PAGE</a></li>
                                    </ul>
                                </li> */}
                                <li className={activeMenu == "/events-parties" ? "activeHeaderMenuItem" : undefined} onMouseEnter={(e) => moveActiveTabLine(e)} onMouseLeave={navigateLineToActiveTab}><Link href="/events-parties"><span>EVENTS + PARTIES</span></Link></li>
                                <li className={activeMenu == "/contact" ? "activeHeaderMenuItem" : undefined} onMouseEnter={(e) => moveActiveTabLine(e)} onMouseLeave={navigateLineToActiveTab}><Link href="/contact"><span>CONTACT US</span></Link></li>
                            </ul>
                            <div ref={lineRef} id="tt-nav__line"></div>
                        </nav>
                    </div>
                    <div className="tt-col">
                        <ul className="nav-btn">
                            <li onClick={() => handlerPrivateEventModal(true)}><a href={undefined}><i className="icon-private"></i><span className="tt-text">private <span className="short-hide">events</span></span></a></li>
                            <li onClick={() => handlerVipTableModal(true)}><a href={undefined} data-toggle="modal" data-target="#modalVipTables"><i className="icon-tables"></i><span className="tt-text"><span className="short-hide">VIP</span> tables</span></a></li>
                            {/* <li className="tablet-visible" data-toggle="modal" data-target="#modalChat"><a href="#"><i className="icon-chat"></i><span className="tt-text">chat</span></a></li> */}
                        </ul>
                    </div>
                    <div className="tt-col tt-col-obj">
                        {/* <div className="tt-obj tt-obj-chat tablet-hidden">
                        <a href="#" className="tt-obj__btn" data-toggle="modal" data-target="#modalChat"><i className="icon-chat"></i></a>
                    </div> */}
                        {/* <div className="tt-obj tt-obj-search" id="js-search">
                        <a href="#" className="tt-obj__btn"><i className="icon-search"></i></a>
                        <div className="tt-dropdown-menu">
                            <div className="container">
                                <form>
                                    <div className="tt-col">
                                        <input type="text" id="js-search-input" className="tt-search-input" placeholder="Search Events..." />
                                        <a href="#" className="tt-btn-search"></a>
                                    </div>
                                    <div className="tt-col">
                                        <a href="#" className="tt-btn-close icon-g-80"></a>
                                    </div>
                                    <div className="tt-info-text">
                                        What are you Looking for?
                                    </div>
                                    <div className="search-results" id="js-search-results"></div>
                                </form>
                            </div>
                        </div>
                    </div> */}
                        {/* <div className="tt-obj tt-obj-cart">
                            <a href="#" className="tt-obj__btn"><i className="icon-cart"></i><div className="tt-obj__badge">2</div></a>
                        </div> */}
                        <div className="tt-obj tt-obj-languages">
                            <div className="tt-skinSelect-02 tt-select__popup-right tt-obj__select">
                                <select className="tt-select">
                                    <option value="ENG">EN</option>
                                    <option value="RUS">RUS</option>
                                </select>
                            </div>
                        </div>
                        <div className="tt-obj tt-obj-toggle">
                            <a onClick={openMenu} href={undefined} className="tt-menu-toggle icon-menu icon-menu-toggle"></a>
                        </div>
                    </div>
                </div>
            </header>

            <div onClick={closeMenu} className="mm-fullscreen-bg"></div>
        </>
    )
}