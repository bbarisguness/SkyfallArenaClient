'use client'

import { Slide } from "react-slideshow-image"
import { handlerBuyTicketModal } from "@/utils";
import { useDispatch } from "react-redux";
import { changeModalData } from "@/store/buyTicketModalState";
import EventCart from "../eventCart";

const indicators = (index) => (<div className="indicator"></div>);
const responsiveSettings = [
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 700,
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
        breakpoint: 200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];

const UpcomingEventItem = ({ item, clickBuyTicketsButton }) => {
    const date = new Date(item.attributes.date)
    return (
        <div className="event-item upcomingEventItem">
            <div className="img">
                <img src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}${item?.attributes?.image?.data?.attributes.url}`} />
            </div>
            <div className="event-item__label">
                {item?.attributes?.date?.split('-')[2]}<span>{date.toLocaleString('en-us', { month: 'short' })}</span>
            </div>
            <div className="event-item__layout">
                <a onClick={() => clickBuyTicketsButton({ item })} href={undefined} tabIndex={item?.id} className="tt-btn" data-toggle="modal" data-target="#modalBayTickets"><span>buy tickets</span></a>
                <a href="#" className="tt-btn" data-toggle="modal" data-target="#modalVipTables"><span>VIP tables</span></a>
            </div>
        </div>
    )
}

export default function UpcomingEvents({ events }) {

    const dispatch = useDispatch()
    // const [upcomingEvents, setUpcomingEvents] = useState([
    //     {
    //         id: 1,
    //         img: "events-01.jpg",
    //         date: [23, "Jan"],
    //         name: "Paradisco",
    //         fullDate: "SATURDAY, JAN 23, 2020",
    //         desc: "Açıklama"
    //     },
    //     {
    //         id: 2,
    //         img: "events-02.jpg",
    //         date: [28, "Jan"],
    //         name: "Gustavo",
    //         fullDate: "SATURDAY, JAN 28, 2020",
    //         desc: "Açıklama"
    //     },
    //     {
    //         id: 3,
    //         img: "events-03.jpg",
    //         date: [30, "Jan"],
    //         name: "Priday Night",
    //         fullDate: "SATURDAY, JAN 30, 2020",
    //         desc: "Açıklama"
    //     },
    //     {
    //         id: 4,
    //         img: "events-04.jpg",
    //         date: [2, "Feb"],
    //         name: "March Madness",
    //         fullDate: "TUESDAY, FEB 2, 2020",
    //         desc: "Açıklama"
    //     },
    //     {
    //         id: 5,
    //         img: "events-05.jpg",
    //         date: [5, "Feb"],
    //         name: "Warmup",
    //         fullDate: "FRİDAY, FEB 5, 2020",
    //         desc: "Açıklama"
    //     }
    // ])

    const clickBuyTicketsButton = ({ item }) => {
        handlerBuyTicketModal(true)

        dispatch(changeModalData({ item }))
    }

    return (
        // <div className="section-indent01">
        //     <div className="container">
        //         <div className="section-title section-title_bottom-none">
        //             <h2 className="section-title__text">Upcoming Events</h2>
        //             <div className="section-title__text-under">Events</div>
        //             <div className="section-title__link"><a href="events.html" className="link-01">view all events</a></div>
        //         </div>
        //     </div>
        //     <div className="container-fluid">
        //         <div className="slick-indent">
        //             <div className="js-slick01 slick-dots01 slick-initialized slick-slider slick-dotted">
        //                 <Slide responsive={responsiveSettings} arrows={false} cssClass="upcomingSlider slick-list draggable" slidesToScroll={2} slidesToShow={5} indicators={indicators} autoplay={false} transitionDuration={300} easing="ease">
        //                     {
        //                         events?.data?.map((item, index) => <UpcomingEventItem clickBuyTicketsButton={clickBuyTicketsButton} key={"upcomingItem" + index} item={item} />)
        //                     }
        //                 </Slide>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div style={{paddingBottom: '0'}} className="subpages-inner section-marker">
            <div className="container container-fluid-lg">
                <div id="js-ttcalendar" className="ttcalendar-layout ttcalendar-layout02 slick-slider">
                    <div className="item">
                        {/* <div className="ttcalendar__month-title">January 2020</div> */}
                        <div className="row tickets-col-wrapper">
                            {
                                events.data.map((item, index) => <EventCart data={item} index={index} key={`ticketsItem${item.id}`} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}