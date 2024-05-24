export default function TicketCard() {
    return (
        <div className="l-col-right ticket-wrap" aria-label="A fake boat ticket demonstrating mixing font weights and widths">
            <div className="ticket" aria-hidden="true">
                <div className="ticket__header">
                    <div className="ticket__co">
                        <svg className="ticket__co-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
                            <g filter="url(#filter0_dlogo)"><path class="logo__img" d="M11.4995 9.60767C15.2754 9.61397 18.4591 12.4154 18.9344 16.1499H21.2893L18.2951 5.86922H15.2493V4H18.9991C19.416 4.00012 19.7827 4.27478 19.899 4.67385L23.241 16.1499H47.1225C47.6402 16.1498 48.0601 16.5682 48.0602 17.0843C48.0602 17.2951 47.9888 17.4996 47.8575 17.6649L30.2485 39.8405V58.2074H37.748V60.0766H20.874V58.2074H28.3736V39.8405L15.3693 23.4642C14.2071 24.1823 12.8668 24.5624 11.4995 24.5614C7.35766 24.5614 3.99996 21.2139 3.99996 17.0846C3.99996 12.9552 7.35766 9.60767 11.4995 9.60767ZM45.1848 18.0192H23.7857L25.6906 24.5614H39.9895L45.1848 18.0192ZM29.311 38.0096L38.5055 26.4307H26.2343L28.3361 33.6468L26.5362 34.1683L24.2826 26.4307H20.1165L29.311 38.0096ZM18.6326 24.5614H23.7388L21.833 18.0192H13.4372L18.6326 24.5614ZM11.4995 22.6922C12.4467 22.6971 13.3791 22.4587 14.2069 21.9997L10.7646 17.6649C10.443 17.2604 10.5113 16.6725 10.9171 16.3519C11.0828 16.2211 11.288 16.1498 11.4995 16.1499H17.0464C16.5287 13.0962 13.6259 11.0391 10.5629 11.5553C7.49992 12.0714 5.4366 14.9654 5.9543 18.0192C6.41177 20.7169 8.75516 22.6918 11.4995 22.6922Z" fill="#FF1A43"></path></g>
                        </svg>
                        <span className="ticket__co-name">VIP</span>
                        <span className="u-upper ticket__co-subname">CLUBIO</span>
                    </div>
                </div>
                <div className="ticket__body">
                    <p style={{ marginBottom: 20, color: "#FF385F" }} className="ticket__route">Genel Giriş Bileti A</p>
                    <p className="ticket__route">Ayçin Asan Konseri</p>
                    <p className="ticket__description">Skyfall Arena / Muğla</p>
                    <div className="ticket__timing">
                        <p>
                            <span className="ticket__detail">Feb 27, 2024</span>
                        </p>
                    </div>
                    <p className="ticket__fine-print">This ticket cannot be transferred to another voyage</p>
                    <p className="u-upper ticket__admit">Admit one adult</p>
                    <img className="ticket__barcode" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/515428/barcode.png" alt="Fake barcode" />
                </div>
            </div>
        </div>
    )
}