import GalleryNav from "@/components/galleryNav";
import { getGalleries } from "@/services/gallery";

export const metadata = {
    title: "Gallery | VIP CLUBİO",
    description: "Gallery",
};

export default async function Gallery() {
    const galleries = await getGalleries()
    return (
        <>
            <div id="subtitle-wrapper">
                <div className="subtitle__img"></div>
                <h1 className="subtitle__title">Our Gallery</h1>
                <div className="subtitle__label">Home &nbsp;-&nbsp; Our Gallery</div>
            </div>
            <main id="tt-pageContent">
                <div className="subpages-inner section-marker">
                    <div className="container-fluid">
                        <GalleryNav events={galleries} />
                    </div>
                </div>
            </main>
        </>
    )
}