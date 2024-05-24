'use client'

import { Formik, Form, Field } from "formik"
import * as Yup from 'yup';
import { useRef } from "react";

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

export default function ContactForm() {
    const contactFormSuccesMessageRef = useRef()

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
        <Formik
            initialValues={{
                firstName: '',
                email: '',
                phone: '',
                message: ''
            }}
            validationSchema={ContactFormSchema}
            onSubmit={(values, actions) => {
                showContactFormSuccesMessage()
                actions.resetForm();
                document.getElementsByName("firstName")[0].blur();
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
    )
}