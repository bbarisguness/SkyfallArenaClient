"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { ticketCategories } from "@/data/ticketCategories";
import TicketCategoryItem from "@/components/TicketCategoryItem";
import Image from 'next/image'
import * as Yup from 'yup';
import { useRef } from "react";
import { Formik, Form, Field } from "formik"
import TicketCard from "@/components/TicketCard";

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Lütfen daha uzun bir isim girin')
    .max(50, 'Lütfen daha kısa bir isim girin')
    .required('Lütfen isim girin'),
  email: Yup.string()
    .email("Lütfen geçerli mail girin")
    .required("Lütfen mail girin"),
  message: Yup.string()
    .required("Lütfen mesajınızı girin")
});


export default function CheckOut() {
  const router = useRouter();
  const contactFormSuccesMessageRef = useRef()
  const data = useSelector((state) => state.buyPageSelectedTicket);


  if (data.categoryId < 1) {
    router.push("/");
    return;
  }

  const showContactFormSuccesMessage = () => {
    contactFormSuccesMessageRef.current.classList.add("tt-active")
    setTimeout(() => {
      contactFormSuccesMessageRef.current.classList.remove("tt-active")
    }, [2000])
  }

  const clickContactFormButton = () => {
    document.getElementsByName("firstName")[0].focus();
  }

  return (
    <div style={{ marginTop: 90, backgroundColor: "#f1f1f1" }}>
      <div className="section-indent05">
        <div className="container">
          <div className="row">
            <div className="col-md-6" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h4 className="tt-subtitle" style={{ paddingBottom: 20, fontWeight: 300 }}>Bilet Bilgileri</h4>
              <TicketCard />
            </div>
            <div className="divider d-block d-md-none"></div>
            <div className="col-md-6" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h6 className="tt-subtitle" style={{ paddingBottom: 20, fontWeight: 300 }}>Ödeme</h6>
              <div className="checkoutForm">
                <Formik
                  initialValues={{
                    firstName: '',
                    email: '',
                    phone: '',
                    message: ''
                  }}
                  validationSchema={ContactFormSchema}
                  onSubmit={(values, actions) => {
                    //showContactFormSuccesMessage()
                    //actions.resetForm();
                    //document.getElementsByName("firstName")[0].blur();
                    router.push("/congratulation");
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contactform" className="form-default contact-form">
                      <div className="form-group">
                        <Field name="firstName" type="text" className="form-control" id="inputName" placeholder="First name *" />
                        {errors.firstName && touched.firstName ? (
                          <label className="error">{errors.firstName}</label>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <Field name="email" type="email" className="form-control" id="inputEmail" placeholder="Email address *" />
                        {errors.email && touched.email ? (
                          <label className="error">{errors.email}</label>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <Field name="phone" type="text" className="form-control" id="inputReview" placeholder="Phone number" />
                        {errors.phone && touched.phone ? (
                          <label className="error">{errors.phone}</label>
                        ) : null}
                      </div>
                      <div className="form-group">
                        {/* <textarea className="form-control" rows="7" placeholder="Message" id="textareaMessage"></textarea> */}

                        <Field name="message" type="text" as="textarea" rows={7} className="form-control" id="textareaMessage" placeholder="Message *" />
                        {errors.message && touched.message ? (
                          <label className="error">{errors.message}</label>
                        ) : null}
                      </div>
                      <button onClick={clickContactFormButton} type="submit" className="tt-btn-default tt-btn__wide"><span>send message</span></button>
                      <div ref={contactFormSuccesMessageRef} className="tt-modal-message">Form sent successfully</div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
