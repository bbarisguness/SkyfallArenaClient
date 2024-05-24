'use client'

import { useEffect, useRef, useState } from "react"
import { handlerPrivateEventModal, handlerVipTableModal, privateEventFormGetEventType, isModalActiveById } from "@/utils"
import { Formik, Form, Field } from "formik"
import * as Yup from 'yup';
import BuyTicketModal from "../buyTicketModal";


const PrivateEventFormSchema = Yup.object().shape({
    PrivateEventFormName: Yup.string()
        .min(2, 'Lütfen daha uzun bir isim girin')
        .max(50, 'Lütfen daha kısa bir isim girin')
        .required('Lütfen isim girin'),
    PrivateEventFormEmail: Yup.string()
        .email("Lütfen geçerli mail girin")
        .required("Lütfen mail girin"),
    PrivateEventFormMessage: Yup.string()
        .required("Lütfen mesajınızı girin")
});

const VipTableFormSchema = Yup.object().shape({
    VipTableFormName: Yup.string()
        .min(2, 'Lütfen daha uzun bir isim girin')
        .max(50, 'Lütfen daha kısa bir isim girin')
        .required('Lütfen isim girin'),
    VipTableFormEmail: Yup.string()
        .email("Lütfen geçerli mail girin")
        .required("Lütfen mail girin"),
    VipTableFormMessage: Yup.string()
        .required("Lütfen mesajınızı girin")
});


export default function OtherComponents() {

    //USE REFS
    const privateEventFormModalSuccesRef = useRef(null)
    const vipFormModalSuccesRef = useRef(null)
    const eventMenuRef = useRef(null)
    const vipTableEventMenuRef = useRef(null)
    const startTimeRef = useRef(null)
    const vipTableEventTimeInputRef = useRef(null)
    const endTimeRef = useRef(null)
    const privateEventModalRef = useRef(null)
    const vipTableModalRef = useRef(null)

    //STATES
    const [isActiveEventMenu, setEventMenuActivity] = useState(false)
    const [isActiveVipTableEventMenu, setVipTableEventMenuActivity] = useState(false)
    const [isActiveStartTimeMenu, setIsActiveStartTimeMenu] = useState(false)
    const [isActiveEndTimeMenu, setIsActiveEndTimeMenu] = useState(false)
    const [isActiveVipTableEventTimeMenu, setIsActiveVipTableEventTimeMenu] = useState(false)
    const [selectedEventType, setSelectedEventType] = useState("Anniversary")
    const [selectedVipTableEventType, setSelectedVipTableEventType] = useState("Paradisco By Occupy The Disco – 23 Jan")
    const [selectedStartTime, setSelectedStartTime] = useState("9:00 PM")
    const [selectedEndTime, setSelectedEndTime] = useState("9:00 PM")
    const [selectedVipTableEventTime, setSelectedVipTableEventTime] = useState("9:00 PM")
    const [isPageReady, setPageReady] = useState(false)



    const PrivateMenuEventTypeItems = ["Anniversary", "Event Type", "Bachelor/Bachelorette", "Birthday", "Corporate Reception", "Full Venue Buyout", "Partial Venue Buyout", "Other", "Special Occasion", "Wedding/Rehearsal"]
    const VipTablesEventTypeItems = [
        "Paradisco By Occupy The Disco – 23 Jan",
        "Gustavo Outsource Steve Play – 28 Jan",
        "Friday Night Memoirs In Paradise – 30 Jan",
        "March Madness Travis Gold / Macho Iza – 2 Feb",
        "Warm Up Get The Party Started – 5 Feb",

    ]
    const PrivateMenuTimes = ["9:00 PM", "10:00 PM", "11:00 PM", "12:00 PM", "13:00 PM", "14:00 PM", "15:00 PM", "16:00 PM", "17:00 PM", "18:00 PM", "19:00 PM", "18:00 PM", "20:00 PM"]

    const closePrivateModal = () => {
        handlerPrivateEventModal(false)
    }

    const closeVipTableModal = () => {
        handlerVipTableModal(false)
    }

    const showOrHideEventMenu = () => {
        if (isActiveEventMenu) {
            setEventMenuActivity(false)
        }
        else {
            setEventMenuActivity(true)
        }
    }

    const showOrHideVipTableEventMenu = () => {
        if (isActiveVipTableEventMenu) {
            setVipTableEventMenuActivity(false)
        }
        else {
            setVipTableEventMenuActivity(true)
        }
    }

    const showOrHideStartTimeMenu = () => {
        if (isActiveStartTimeMenu) {
            setIsActiveStartTimeMenu(false)
        }
        else {
            setIsActiveStartTimeMenu(true)
        }
    }

    const showOrHideVipTableEventTimeMenu = () => {
        if (isActiveVipTableEventTimeMenu) {
            setIsActiveVipTableEventTimeMenu(false)
        }
        else {
            setIsActiveVipTableEventTimeMenu(true)
        }
    }

    const showOrHideEndTimeMenu = () => {
        if (isActiveEndTimeMenu) {
            setIsActiveEndTimeMenu(false)
        }
        else {
            setIsActiveEndTimeMenu(true)
        }
    }

    const handleOutsideClick = (e) => {
        //dışarı tıklanırsa
        if (eventMenuRef.current && !eventMenuRef.current.contains(e.target)) {
            if (isActiveEventMenu == true) {
                setEventMenuActivity(false)
            }
        }

        if (vipTableEventMenuRef.current && !vipTableEventMenuRef.current.contains(e.target)) {
            if (isActiveVipTableEventMenu == true) {
                setVipTableEventMenuActivity(false)
            }
        }

        if (startTimeRef.current && !startTimeRef.current.contains(e.target)) {
            if (isActiveStartTimeMenu == true) {
                setIsActiveStartTimeMenu(false)
            }
        }

        if (vipTableEventTimeInputRef.current && !vipTableEventTimeInputRef.current.contains(e.target)) {
            if (isActiveVipTableEventTimeMenu == true) {
                setIsActiveVipTableEventTimeMenu(false)
            }
        }

        if (endTimeRef.current && !endTimeRef.current.contains(e.target)) {
            if (isActiveEndTimeMenu == true) {
                setIsActiveEndTimeMenu(false)
            }
        }

        if (isModalActiveById("modalPrivateEvent")) {
            if (privateEventModalRef.current && !privateEventModalRef.current.contains(e.target)) {

                if (!privateEventModalRef.current.contains(e.target)) {
                    console.log("private pasif");
                    closePrivateModal()
                }

            }
        }

        if (isModalActiveById("modalVipTable")) {
            if (vipTableModalRef.current && !vipTableModalRef.current.contains(e.target)) {

                if (!vipTableModalRef.current.contains(e.target)) {
                    console.log("vip table pasif");
                    closeVipTableModal()
                }

            }
        }
    };

    const clickPrivateFormSendButton = () => {
        document.getElementsByName("PrivateEventFormName")[0].focus();
    }

    const clickVipTableFormSendButton = () => {
        document.getElementsByName("VipTableFormName")[0].focus();
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    })

    useEffect(() => {
        setPageReady(true)
    }, [])


    if (isPageReady) {
        return (
            <>
                {/* Modal private event(start) */}
                <div className="modal fade" id="modalPrivateEvent" style={{ display: "none" }}>
                    <div className="modal-dialog modal-md">
                        <div ref={privateEventModalRef} className="modal-content ">
                            <div className="modal-body modal-layout-dafault">
                                <button onClick={closePrivateModal} type="button" className="close"><span className="icon-close"></span></button>
                                <div className="modal-titleblock">
                                    <div className="modal-title">Private Event</div>
                                </div>
                                <Formik
                                    initialValues={{
                                        PrivateEventFormName: '',
                                        PrivateEventFormEmail: '',
                                        PrivateEventFormMessage: '',
                                        PrivateEventFormPhone: '',
                                        PrivateEventFormGroupSize: ''
                                    }}
                                    validationSchema={PrivateEventFormSchema}
                                    onSubmit={(values, actions) => {
                                        //console.log({ ...values, PrivateEventFormDate: privateAndVipCalendarSelectedDate, PrivateEventFormStartTime: selectedStartTime, PrivateEventFormEndTime: selectedEndTime, PrivateEventFormEventType: privateEventFormGetEventType() });
                                        //showContactFormSuccesMessage()
                                        actions.resetForm();
                                        document.getElementsByName("PrivateEventFormName")[0].blur();

                                        privateEventFormModalSuccesRef.current.style.opacity = 1
                                        setTimeout(() => {
                                            privateEventFormModalSuccesRef.current.style.opacity = 0
                                        }, 1000);
                                    }}
                                >
                                    {
                                        ({ errors, touched }) => (
                                            <Form className="form-modal form-PrivateEvent" id="jsFormPrivateEvent">
                                                <div className="form-group">
                                                    <Field name="PrivateEventFormName" type="text" className="form-control" id="modalName01" placeholder="First name *" />
                                                    {errors.PrivateEventFormName && touched.PrivateEventFormName ? (
                                                        <label className="error">{errors.PrivateEventFormName}</label>
                                                    ) : null}
                                                </div>
                                                <div className="form-group">
                                                    <Field name="PrivateEventFormEmail" type="email" className="form-control" id="modalEmail01" placeholder="Email address *" />
                                                    {errors.PrivateEventFormEmail && touched.PrivateEventFormEmail ? (
                                                        <label className="error">{errors.PrivateEventFormEmail}</label>
                                                    ) : null}
                                                </div>
                                                <div className="form-group">
                                                    <Field name="PrivateEventFormPhone" type="text" className="form-control" id="modalPhone01" placeholder="Phone number" />
                                                </div>
                                                <div className="form-group">
                                                    <div className="tt-skinSelect-01">
                                                        <div ref={eventMenuRef} onClick={showOrHideEventMenu} className={`SumoSelect sumo_typeofholiday` + [isActiveEventMenu ? ' open' : undefined]} tabIndex="0" role="button" >
                                                            <p className="CaptionCont SelectBox" title={' ' + selectedEventType}>
                                                                <span id="PrivateEventFormEventType"> {selectedEventType}</span>
                                                                <label><i></i></label>
                                                            </p>
                                                            <div className="optWrapper">
                                                                <ul className="options">
                                                                    {
                                                                        PrivateMenuEventTypeItems.map((item, index) => (<li key={`privateEventType-${index + 1}`} onClick={() => setSelectedEventType(item)} className="opt"><label>{item}</label></li>))
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <Field name="PrivateEventFormGroupSize" type="text" className="form-control" id="modalTotal01" placeholder="Group size" />
                                                </div>
                                                <div className="row">

                                                    <div className="col-sm-6 col-md-4">
                                                        <div className="form-group">
                                                            <label>Start time:</label>
                                                            <div className="tt-skinSelect-01">
                                                                <div ref={startTimeRef} onClick={showOrHideStartTimeMenu} className={`SumoSelect sumo_starttime` + [isActiveStartTimeMenu ? ' open' : undefined]} tabIndex="0" role="button" >
                                                                    <p className="CaptionCont SelectBox" title={' ' + selectedStartTime}>
                                                                        <span> {selectedStartTime}</span>
                                                                        <label><i></i></label>
                                                                    </p>
                                                                    <div className="optWrapper">
                                                                        <ul className="options">
                                                                            {
                                                                                PrivateMenuTimes.map((item, index) => (<li key={`privateStartTimeItem-${index + 1}`} onClick={() => setSelectedStartTime(item)} className="opt"><label>{item}</label></li>))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-4">
                                                        <div className="form-group">
                                                            <label>End time:</label>
                                                            <div className="tt-skinSelect-01">
                                                                <div ref={endTimeRef} onClick={showOrHideEndTimeMenu} className={`SumoSelect sumo_endtime` + [isActiveEndTimeMenu ? ' open' : undefined]} tabIndex="0" role="button" >
                                                                    <p className="CaptionCont SelectBox" title={' ' + selectedEndTime}><span> {selectedEndTime}</span><label><i></i></label>
                                                                    </p>
                                                                    <div className="optWrapper">
                                                                        <ul className="options">
                                                                            {
                                                                                PrivateMenuTimes.map((item, index) => (<li key={`privateEndTimeItem-${index + 1}`} onClick={() => setSelectedEndTime(item)} className="opt"><label>{item}</label></li>))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <Field name="PrivateEventFormMessage" type="text" as="textarea" rows={3} className="form-control" id="textareaMessage" placeholder="Comments *" />
                                                    {errors.PrivateEventFormMessage && touched.PrivateEventFormMessage ? (
                                                        <label className="error">{errors.PrivateEventFormMessage}</label>
                                                    ) : null}
                                                </div>
                                                <div className="row-btn text-center">
                                                    <button onClick={clickPrivateFormSendButton} type="submit" className="tt-btn-default"><span>request availability</span></button>
                                                </div>
                                                <div ref={privateEventFormModalSuccesRef} id="privateEventFormSuccesMessage" className="tt-modal-message">Form sent successfully</div>
                                            </Form>
                                        )
                                    }
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal private event(end) */}

                {/* Modal vip table(start) */}
                <div className="modal fade" id="modalVipTable" style={{ display: "none" }}>
                    <div className="modal-dialog modal-md">
                        <div ref={vipTableModalRef} className="modal-content ">
                            <div className="modal-body modal-layout-dafault">
                                <button onClick={closeVipTableModal} type="button" className="close"><span className="icon-close"></span></button>
                                <div className="modal-titleblock">
                                    <div className="modal-title">VIP Table</div>
                                </div>
                                <Formik
                                    initialValues={{
                                        VipTableFormName: '',
                                        VipTableFormEmail: '',
                                        VipTableFormPhone: '',
                                        VipTableFormGroupSize: '',
                                        VipTableFormMessage: ''
                                    }}
                                    validationSchema={VipTableFormSchema}
                                    onSubmit={(values, actions) => {
                                        console.log({ ...values, asd: 1 });
                                        //showContactFormSuccesMessage()
                                        actions.resetForm();
                                        document.getElementsByName("VipTableFormName")[0].blur();

                                        vipFormModalSuccesRef.current.style.opacity = 1
                                        setTimeout(() => {
                                            vipFormModalSuccesRef.current.style.opacity = 0
                                        }, 1000);
                                    }}
                                >
                                    {
                                        ({ errors, touched }) => (
                                            <Form className="form-modal form-VipTable" id="jsFormVipTable">
                                                <div className="form-group">
                                                    <div className="tt-skinSelect-01">
                                                        <div ref={vipTableEventMenuRef} onClick={showOrHideVipTableEventMenu} className={`SumoSelect sumo_typeofholiday` + [isActiveVipTableEventMenu ? ' open' : undefined]} tabIndex="0" role="button" >
                                                            <p className="CaptionCont SelectBox" title={' ' + selectedVipTableEventType}>
                                                                <span id="PrivateEventFormEventType"> {selectedVipTableEventType}</span>
                                                                <label><i></i></label>
                                                            </p>
                                                            <div className="optWrapper">
                                                                <ul className="options">
                                                                    {
                                                                        VipTablesEventTypeItems.map((item, index) => (<li key={`privateEventTypeItem-${index + 1}`} onClick={() => setSelectedVipTableEventType(item)} className="opt"><label>{item}</label></li>))
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <Field name="VipTableFormName" type="text" className="form-control" id="vipTableModalName01" placeholder="Your Name *" />
                                                    {errors.VipTableFormName && touched.VipTableFormName ? (
                                                        <label className="error">{errors.VipTableFormName}</label>
                                                    ) : null}
                                                </div>
                                                <div className="form-group">
                                                    <Field name="VipTableFormEmail" type="email" className="form-control" id="vipTableModalEmail01" placeholder="Email address *" />
                                                    {errors.VipTableFormEmail && touched.VipTableFormEmail ? (
                                                        <label className="error">{errors.VipTableFormEmail}</label>
                                                    ) : null}
                                                </div>
                                                <div className="form-group">
                                                    <Field name="VipTableFormPhone" type="text" className="form-control" id="vipTableModalPhone01" placeholder="Phone number" />
                                                </div>
                                                <div className="form-group">
                                                    <Field name="VipTableFormGroupSize" type="text" className="form-control" id="vipTableModalTotal01" placeholder="Group size" />
                                                </div>
                                                <div className="row">

                                                    <div className="col-sm-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>Event time:</label>
                                                            <div className="tt-skinSelect-01">
                                                                <div ref={vipTableEventTimeInputRef} onClick={showOrHideVipTableEventTimeMenu} className={`SumoSelect sumo_starttime` + [isActiveVipTableEventTimeMenu ? ' open' : undefined]} tabIndex="0" role="button" >
                                                                    <p className="CaptionCont SelectBox" title={' ' + selectedVipTableEventTime}>
                                                                        <span> {selectedVipTableEventTime}</span>
                                                                        <label><i></i></label>
                                                                    </p>
                                                                    <div className="optWrapper">
                                                                        <ul className="options">
                                                                            {
                                                                                PrivateMenuTimes.map((item, index) => (<li key={`vipTableEventTimeItem-${index + 1}`} onClick={() => setSelectedVipTableEventTime(item)} className="opt"><label>{item}</label></li>))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <Field name="VipTableFormMessage" type="text" as="textarea" rows={3} className="form-control" id="vipTableTextareaMessage" placeholder="Comments *" />
                                                    {errors.VipTableFormMessage && touched.VipTableFormMessage ? (
                                                        <label className="error">{errors.VipTableFormMessage}</label>
                                                    ) : null}
                                                </div>
                                                <div className="row-btn text-center">
                                                    <button onClick={clickVipTableFormSendButton} type="submit" className="tt-btn-default"><span>submit</span></button>
                                                </div>
                                                <div ref={vipFormModalSuccesRef} id="vipTableFormSuccesMessage" className="tt-modal-message">Form sent successfully</div>
                                            </Form>
                                        )
                                    }
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal vip table(end) */}


                {/* Date-Calendar Modal(start) */}
                <div id="modalBgContainer"></div>
                {/* Date-Calendar Modal(end) */}

                <BuyTicketModal />
            </>
        )
    }
}