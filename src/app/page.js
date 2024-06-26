import About from "@/components/about";
//import AdditionalServices from "@/components/additionalServices";
import Gallery from "@/components/gallery";
import MainSlider from "@/components/mainSlider";
//import Promo from "@/components/promo";
import Residents from "@/components/residents";
import Services from "@/components/services";
//import UnderResidents from "@/components/underResidents";
import UpcomingEvents from "@/components/upcomingEvents";
import { getEvents, getPastEvents } from "@/services/event";
import { getEventAndParties } from "@/services/eventAndParties";
import WhatsAppIcon from "@/components/whatsappIcon";
import Link from "next/link";
import { getHomePageGallery } from "@/services/gallery";

export const metadata = {
  title: "SkyFall Arena",
  description: "desc",
};

export default async function Home() {
  const events = await getEvents()
  const parties = await getEventAndParties()
  const pastEvents = await getPastEvents()
  const homePageGallery = await getHomePageGallery()
  return (
    <>
      <MainSlider />
      <WhatsAppIcon />
      <main id="tt-pageContent no-section-marker">
        <About />
        <div className="section-indent01">
          <div className="container">
            <div className="section-title section-title_bottom-none">
              <h2 className="section-title__text">Upcoming Events</h2>
              <div className="section-title__text-under">Events</div>
              <div className="section-title__link"><Link href="/events" className="link-01">view all events</Link></div>
            </div>
          </div>
          <UpcomingEvents events={events} />
        </div>
        <Services parties={parties} />
        {/* <AdditionalServices /> */}
        <Residents pastEvents={pastEvents} />
        {/* <UnderResidents /> */}
        <Gallery photos={homePageGallery.data} />
        {/* <Promo /> */}
      </main>
    </>
  );
}
