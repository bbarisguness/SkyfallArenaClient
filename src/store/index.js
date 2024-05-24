'use client';
import { configureStore } from "@reduxjs/toolkit";
import buyTicketModalState from "./buyTicketModalState";
import buyPageSelectedTicket from "./buyPageSelectedTicket";

const store = configureStore({
    reducer: {
        buyTicketModalState,
        buyPageSelectedTicket
    }
})

export default store