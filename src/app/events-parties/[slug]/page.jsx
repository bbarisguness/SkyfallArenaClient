import { parseDateWithDayName } from "@/utils";
import EventGallery from "@/components/eventGallery";
import { getPartiesBySlug } from "@/services/eventAndParties";
import { notFound } from "next/navigation";
import { slugToTitle } from "@/utils";

export async function generateMetadata({ params }) {
  const partiesData = await getPartiesBySlug({ slug: params.slug });
  console.log(params.slug);

  return {
    title: slugToTitle(params.slug) + " | SkyFall Arena",
    description: "asd",
  };

  if (partiesData?.data?.length > 0) {
    return {
      title: partiesData?.data[0]?.attributes?.seo?.metaTitle,
      description: partiesData?.data[0]?.attributes?.seo?.metaDescription,
    };
  } else {
    return {
      title: "Not Found Data",
      description: "Not Found Data desc",
    };
  }
}

export default async function PartiesDetail({ params }) {
  const partiesData = await getPartiesBySlug({ slug: params.slug });
  if (partiesData?.data?.length > 0) {
    return (
      <>
        <div id="subtitle-wrapper">
          <div className="subtitle__img"></div>
          <h1 className="subtitle__title">Parties</h1>
          <div className="subtitle__label">Home &nbsp;-&nbsp; Parties</div>
        </div>
        <main id="tt-pageContent">
          <div
            style={{ paddingTop: "0px" }}
            className="subpages-inner section-marker"
          >
            <div className="container-fluid">
              <div className="section-title">
                {/* <div className="section-title__label">{parseDateWithDayName(new Date(partiesData?.data[0]?.attributes?.eventDate))}</div> */}
                <h2 className="section-title__text">
                  {partiesData?.data[0]?.attributes?.title}
                </h2>
                <div className="title__text-description tt-wide">
                  {partiesData.data[0]?.attributes?.longDescription?.map(
                    (item, i) => {
                      if (item?.type === "paragraph") {
                        return (
                          <>
                            <p key={i} className="text-15 text-dark-1">
                              {item?.children[0]?.text}
                              <br />
                            </p>
                          </>
                        );
                      } else if (item?.type === "heading") {
                        return (
                          <>
                            {item?.level === 1 && (
                              <h1 key={i}>
                                {item?.children[0]?.text}
                                <br />
                              </h1>
                            )}
                            {item?.level === 2 && (
                              <h2 key={i}>
                                {item?.children[0]?.text}
                                <br />
                              </h2>
                            )}
                            {item?.level === 3 && (
                              <h3 key={i}>
                                {item?.children[0]?.text}
                                <br />
                              </h3>
                            )}
                            {item?.level === 4 && (
                              <h4 key={i}>
                                {item?.children[0]?.text}
                                <br />
                              </h4>
                            )}
                            {item?.level === 5 && (
                              <h5 key={i}>
                                {item?.children[0]?.text}
                                <br />
                              </h5>
                            )}
                            {item?.level === 6 && (
                              <h6 key={i}>
                                {item?.children[0]?.text}
                                <br />
                              </h6>
                            )}
                          </>
                        );
                      }
                    }
                  )}
                  {/* {eventData?.data[0]?.attributes?.shortDescription} */}
                </div>
              </div>
              <div id="instafeed" className="instafeed-col"></div>
              <EventGallery eventData={partiesData} />
            </div>
          </div>
        </main>
      </>
    );
  } else {
    notFound();
  }
}
