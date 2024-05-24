import TicketsSlider from "@/components/ticketsSlider";
import { getEvents } from "@/services/event";

export const metadata = {
    title: "Events | VIP CLUBİO",
    description: "Events",
};

export default async function Events() {
    const events = await getEvents()

    return (
        <>
            <div id="subtitle-wrapper">
                <div className="subtitle__img"></div>
                <h1 className="subtitle__title">Events</h1>
                <div className="subtitle__label">Home &nbsp;-&nbsp; Events</div>
            </div>
            <main id="tt-pageContent">
                <div className="subpages-inner section-marker">
                    <div className="container container-fluid-lg">
                        <TicketsSlider data={events} />
                    </div>
                </div>
            </main>
        </>
    )
}