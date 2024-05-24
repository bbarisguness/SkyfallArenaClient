'use client'

import { Formik, Form, Field } from "formik"
import * as Yup from 'yup';
import { useEffect, useRef } from "react";

const NewsletterFormSchema = Yup.object().shape({
    email: Yup.string()
        .email("Lütfen geçerli mail girin")
        .required("Lütfen mail girin")
});

export default function NewsletterForm() {
    const contactNewsletterMessageRef = useRef()

    const showNewsletterSuccesMessage = () => {
        contactNewsletterMessageRef.current.classList.add("tt-active")
        setTimeout(() => {
            contactNewsletterMessageRef.current.classList.remove("tt-active")
        }, [2000])
    }

    const clickSendNewsletterButton = () => {
        document.getElementsByName("email")[0].focus();
    }

    useEffect(() => {
        if (document.getElementsByClassName("subtitle__img").length > 0) {
            document.getElementsByClassName("subtitle__img")[0].style.transform = "scale(1.2)"
        }
    }, [])

    return (
        <Formik
            initialValues={{
                email: ''
            }}
            validationSchema={NewsletterFormSchema}
            onSubmit={(values, actions) => {
                showNewsletterSuccesMessage()
                actions.resetForm();
                document.getElementsByName("email")[0].blur();
            }}
        >
            {({ errors, touched, values }) => (
                <Form id="newsletterform-01" className="newsletterform-01">
                    <p>
                        Keep up to date with what's happening at Voicer.
                    </p>
                    <div className="form-group">
                        <Field type="text" className="tt-input" name="email" placeholder="Enter your e-mail *" />
                        {errors.email && touched.email ? (
                            <label className="error">{errors.email}</label>
                        ) : null}
                        <button onClick={clickSendNewsletterButton} type="submit" className="tt-btn-icon">
                            <span className="icon-mail"></span>
                        </button>
                    </div>
                    <div ref={contactNewsletterMessageRef} className="tt-modal-message">Form sent successfully</div>
                </Form>
            )}
        </Formik>
    )
}