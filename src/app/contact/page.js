import ContactForm from "@/components/contactForm";
import NewsletterForm from "@/components/contactNewsletterForm";

export const metadata = {
  title: "Contact | SkyFall Arena",
  description: "Contact",
};

export default function Contact() {
  return (
    <>
      <div id="subtitle-wrapper">
        <div className="subtitle__img"></div>
        <h1 className="subtitle__title">Contacts</h1>
        <div className="subtitle__label">Home &nbsp;-&nbsp; Contacts</div>
      </div>
      <main id="tt-pageContent">


        <div className="section-indent no-margin section-marker">
          <div className="container-fluid no-gutters">
            <div className="contact-map" style={{ height: "450px" }}>
              {/* <iframe
                style={{ borderWidth: 0 }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11631066.156722378!2d-2.226884674663211!3d44.62533041320563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab76145e71bcf%3A0x6fbdfe9741933bfd!2sCLUB%20IQ!5e0!3m2!1str!2str!4v1716286995447!5m2!1str!2str&z=15">
              </iframe> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.566404556154!2d28.978443276451173!3d41.03474121779442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab76145e71bcf%3A0x6fbdfe9741933bfd!2sCLUB%20IQ!5e0!3m2!1str!2str!4v1716287465284!5m2!1str!2str" width="100%" height="100%" style={{ borderWidth: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        <div className="section-indent no-margin">
          <div className="contact-info-wrapper">
            <div className="container">
              <h3 className="contact-info__title text-center">Get in Touch with Us</h3>
              <div className="row contact-info-list">
                <div className="col-md-6 col-lg-4">
                  <div className="contact-info">
                    <div className="contact-info__icon">
                      <span className="icon-place"></span>
                    </div>
                    <div className="contact-info__content">
                      <div className="tt-title">VIP Clubio</div>
                      <address>
                        1035 N Sycamore<br /> Avenue Hollywood, CA 90040
                      </address>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="contact-info">
                    <div className="contact-info__icon">
                      <span className="icon-phone"></span>
                    </div>
                    <div className="contact-info__content">
                      <div className="tt-title">Contact Phones</div>
                      <address>
                        1 (800) 765-43-21, 765-43-22<br />1 (800) 765-43-23 (fax)
                      </address>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="contact-info">
                    <div className="contact-info__icon">
                      <span className="icon-clock"></span>
                    </div>
                    <div className="contact-info__content">
                      <div className="tt-title">Working Hours</div>
                      <address>
                        Mon-Fri: 9:00 am – 5:00 pm<br />Sat-Sun: 11:00 am – 16:00 pm
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-indent05">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4 className="tt-subtitle">Did You Know?</h4>
                <div className="tt-width-01">
                  <ul className="list-02">
                    <li>
                      For more information on corporate event services, please fill out the form located here or call 765-43-22. For press inquiries email:
                      <a className="tt-link02" href="mailto:publicrelations@vipclubio.com">publicrelations@vipclubio.com</a>
                    </li>
                    <li>
                      If you are inquiring about your items lost during your time here, please provide any identifying information of your lost items such as name, brand, colour, etc and we'll be in touch if it turns up.
                    </li>
                    <li>
                      The management reserves the right to change drink and admission prices from time to time. Please e mail <a className="tt-link02" target="_blank" href="info@vipclubio.com">info@vipclubio.com</a> for further information.
                    </li>
                  </ul>
                </div>
                {/* <h6 className="tt-subtitle tt-subtitle-top">Newsletter</h6> */}
                {/* <NewsletterForm /> */}
              </div>
              <div className="divider d-block d-md-none"></div>
              <div className="col-md-6">
                <h6 className="tt-subtitle">Contact Form</h6>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}