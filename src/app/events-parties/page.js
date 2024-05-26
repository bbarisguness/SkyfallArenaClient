import EventPartiesItems from "@/components/eventPartiesItems";
import { getEventAndParties } from "@/services/eventAndParties";

export const metadata = {
    title: "Events & Parties | SkyFall Arena",
    description: "Events and Parties",
};

export default async function EventsParties() {
    const eventAndPartiesData = await getEventAndParties()

    return (
        <>
            <div id="subtitle-wrapper">
                <div className="subtitle__img"></div>
                <h1 className="subtitle__title">Events + Parties</h1>
                <div className="subtitle__label">Home &nbsp;-&nbsp; Events + Parties</div>
            </div>
            <main id="tt-pageContent">
                <div className="subpages-inner section-marker">
                    <div className="container-fluid-subpages">
                        <EventPartiesItems data={eventAndPartiesData} />
                    </div>
                </div>
            </main>
        </>
    )
}