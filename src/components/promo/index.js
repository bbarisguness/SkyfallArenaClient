import Link from "next/link"

export default function Promo() {
    return (
        <div className="tt-promo01">
            <div className="tt-promo01__layout">
                <h5 className="tt-title">
                    <span className="tt-base-color">Feel Free</span> and Enjoy<br />in VIP Clubio with Joy
                </h5>
                <p>
                    We are very excited to have launched our brand new cocktail bar! Located on our ground floor. Come in, have a drink, some complimentary nibbles and relax.
                </p>
                <Link href="/events-parties" className="tt-btn-default"><span>explore all events</span></Link>
            </div>
        </div>
    )
}