import { longDescriptionExport, parseDateWithDayName } from "@/utils";
import EventGallery from "@/components/eventGallery";
import { notFound } from "next/navigation";
import { getGalleryBySlug } from "@/services/gallery";


export async function generateMetadata({ params }) {
    const eventData = await getGalleryBySlug({ slug: params.galleryDetail })
    if (eventData?.data?.length > 0) {
        return {
            title: eventData?.data[0]?.attributes?.seo?.metaTitle + " | SkyFall Arena",
            description: eventData?.data[0]?.attributes?.seo?.metaDescription,
        }
    } else {
        return {
            title: 'Not Found Data',
            description: 'Not Found Data desc',
        }
    }
}

export default async function Page({ params }) {
    const eventData = await getGalleryBySlug({ slug: params.galleryDetail })
    if (eventData?.data?.length > 0) {
        return (
            <>
                <div id="subtitle-wrapper">
                    <div className="subtitle__img"></div>
                    <h1 className="subtitle__title">Our Gallery</h1>
                    <div className="subtitle__label">Home &nbsp;-&nbsp; Our Gallery</div>
                </div>
                <main id="tt-pageContent">
                    <div style={{paddingTop: '0'}} className="subpages-inner section-marker">
                        <div className="container-fluid">
                            <div className="section-title">
                                {/* <div className="section-title__label">{parseDateWithDayName(new Date(eventData?.data[0]?.attributes?.eventDate))}</div> */}
                                <h2 className="section-title__text">{eventData?.data[0]?.attributes?.title}</h2>
                                <div className="title__text-description tt-wide">
                                    {
                                        eventData.data[0]?.attributes?.longDescription?.map((item, i) => {
                                            if (item?.type === 'paragraph') {
                                                return (
                                                    <>
                                                        <p key={i} className="text-15 text-dark-1">
                                                            {item?.children[0]?.text}
                                                            <br />
                                                        </p>
                                                    </>
                                                )
                                            } else if (item?.type === 'heading') {
                                                return (
                                                    <>
                                                        {
                                                            item?.level === 1 &&
                                                            <h1 key={i}>
                                                                {item?.children[0]?.text}
                                                                <br />
                                                            </h1>
                                                        }
                                                        {
                                                            item?.level === 2 &&
                                                            <h2 key={i}>
                                                                {item?.children[0]?.text}
                                                                <br />
                                                            </h2>
                                                        }
                                                        {
                                                            item?.level === 3 &&
                                                            <h3 key={i}>
                                                                {item?.children[0]?.text}
                                                                <br />
                                                            </h3>
                                                        }
                                                        {
                                                            item?.level === 4 &&
                                                            <h4 key={i} >
                                                                {item?.children[0]?.text}
                                                                <br />
                                                            </h4>
                                                        }
                                                        {
                                                            item?.level === 5 &&
                                                            <h5 key={i}>
                                                                {item?.children[0]?.text}
                                                                <br />
                                                            </h5>
                                                        }
                                                        {
                                                            item?.level === 6 &&
                                                            <h6 key={i}>
                                                                {item?.children[0]?.text}
                                                                <br />
                                                            </h6>
                                                        }
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                    {/* {eventData?.data[0]?.attributes?.shortDescription} */}
                                </div>
                            </div>
                            <div id="instafeed" className="instafeed-col"></div>
                            <EventGallery eventData={eventData} />
                        </div>
                    </div>
                </main>
            </>
        )
    } else {
        notFound()
    }
}