export default function Gallery({ photos }) {
    console.log(photos[0].attributes.image.data.attributes.url);
    return (
        <div className="section-marker__indent04">
            <div className="section-indent06">
                <div className="container">
                    <div className="section-title section-title_01">
                        <div className="section-title__label">YOU CAN AFFORD MORE HERE</div>
                        <h2 className="section-title__text">Instagram <a href="https://www.instagram.com/skyfall.arena/" target="_blank" className="tt-base-color">@SkyfallArena</a></h2>
                        <div className="section-title__text-under">Gallery</div>
                    </div>
                </div>
                <div className="instafeed-masonry">
                    <div className="instagram_gallery">
                        {
                            photos.map((item, index) => (
                                <a key={"homeGalleryItem" + index + 1} href="https://www.instagram.com/skyfall.arena/" className="instagram-image" rel="noopener" target="_blank">
                                    <img src={`${process.env.NEXT_PUBLIC_UPLOADS_URL + photos[index].attributes.image.data.attributes.url}`} alt="" className="lazyload" />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}