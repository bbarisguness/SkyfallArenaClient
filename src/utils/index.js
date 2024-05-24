//operation == true: openModal, false:closeModal
export const handlerPrivateEventModal = (operation) => {
    if (operation) {
        document.body.classList.add("modal-open")
        document.getElementById("modalBgContainer").classList.add('modal-backdrop', 'fade', 'show')
        document.getElementById("modalPrivateEvent").style.display = "block"
        setTimeout(() => {
            document.getElementById("modalPrivateEvent").classList.add("show")
        }, 200)

    }
    else {
        document.body.classList.remove("modal-open")

        document.getElementById("modalPrivateEvent").classList.remove("show")

        setTimeout(() => {
            document.getElementById("modalBgContainer").classList.remove('modal-backdrop', 'fade', 'show')
            document.getElementById("modalPrivateEvent").style.display = "none"
        }, 200)
    }
}

//operation == true: openModal, false:closeModal
export const handlerVipTableModal = (operation) => {
    if (operation) {
        document.body.classList.add("modal-open")
        document.getElementById("modalBgContainer").classList.add('modal-backdrop', 'fade', 'show')

        document.getElementById("modalVipTable").style.display = "block"

        setTimeout(() => {
            document.getElementById("modalVipTable").classList.add("show")
        }, 200)
    }
    else {
        document.body.classList.remove("modal-open")

        document.getElementById("modalVipTable").classList.remove("show")


        setTimeout(() => {
            document.getElementById("modalBgContainer").classList.remove('modal-backdrop', 'fade', 'show')
            document.getElementById("modalVipTable").style.display = "none"
        }, 200)
    }
}

//operation == true: openModal, false:closeModal
export const handlerBuyTicketModal = (operation) => {
    if (operation) {
        document.body.classList.add("modal-open")
        document.getElementById("modalBgContainer").classList.add('modal-backdrop', 'fade', 'show')

        document.getElementById("modalBayTickets").style.display = "block"
        document.getElementById("modalBayTickets").style.paddingRight = "17px"

        setTimeout(() => {
            document.getElementById("modalBayTickets").classList.add("show")
        }, 200)
    }
    else {
        document.body.classList.remove("modal-open")

        document.getElementById("modalBayTickets").classList.remove("show")

        setTimeout(() => {
            document.getElementById("modalBgContainer").classList.remove('modal-backdrop', 'fade', 'show')
            document.getElementById("modalBayTickets").style.display = "none"
            document.getElementById("modalBayTickets").style.paddingRight = "0px"
        }, 200)
    }
}

//operation == true: show, false:hide
//modalName = 0 => privateEventModal, 1=> VipTableModal
export const showOrHidePrivateEventAndVipTableModalCalendar = (modalName = 0, operation) => {
    let x, y, heigthOfInput
    if (operation) {
        if (modalName == 0) {
            x = document.getElementById("privateEventCalendarInput").getBoundingClientRect().top
            y = document.getElementById("privateEventCalendarInput").getBoundingClientRect().left
            heigthOfInput = document.getElementById("privateEventCalendarInput").offsetHeight
        }
        else {
            x = document.getElementById("vipTableCalendarInput").getBoundingClientRect().top
            y = document.getElementById("vipTableCalendarInput").getBoundingClientRect().left
            heigthOfInput = document.getElementById("vipTableCalendarInput").offsetHeight
        }
        //console.log(heigthOfInput);


        document.getElementById("datepickers-PrivateEventAndVipTableCalendar").classList.add("active")
        document.getElementById("datepickers-PrivateEventAndVipTableCalendar").style.left = `${y}px`
        document.getElementById("datepickers-PrivateEventAndVipTableCalendar").style.top = `${x + heigthOfInput}px`
    }
    else {
        document.getElementById("datepickers-PrivateEventAndVipTableCalendar").classList.remove("active")
        document.getElementById("datepickers-PrivateEventAndVipTableCalendar").style.left = '-100000px'
        document.getElementById("datepickers-PrivateEventAndVipTableCalendar").style.top = '2000px'
    }
}

//Thu May 09 2024 00:00:00 GMT+0300 (GMT+03:00) to 09/05/2024
export const parseDate = (date) => {
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const month = date.getMonth() < 9 ? '0' + parseInt(date.getMonth() + 1) : date.getMonth() + 1
    const year = date.getFullYear()

    return day + '/' + month + '/' + year
}

//Thu May 09 2024 00:00:00 GMT+0300 (GMT+03:00) to 00:00
export const parseDateToTime = (date) => {
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    return hour + ':' + minute
}

//Thu May 09 2024 00:00:00 GMT+0300 (GMT+03:00) to THURSDAY, JAN 23, 2020
export const parseDateWithDayName = (date) => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayName = dayNames[date.getDay()]
    const monthName = date.toLocaleString('en-us', { month: 'short' });
    const day = date.getDate()
    const year = date.getFullYear()

    return dayName + ', ' + monthName + ' ' + day + ', ' + year
}

//returns selected event type of private event form
export const privateEventFormGetEventType = () => {
    return document.getElementById("PrivateEventFormEventType").innerHTML.trim()
}

export const isModalActiveById = (id) => {
    if (id) {
        return document.getElementById(id).classList.contains("show")
    }
}