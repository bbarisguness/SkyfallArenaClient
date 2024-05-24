"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: -1,
    categoryName: "",
    datetime: "12 Mayıs Pazar - 00:00",
    price: 0
};

const globalState = createSlice({
    name: "buyPageSelectedTicket",
    initialState,
    reducers: {
        changeSelectedTicket: (state, action) => {
            state.categoryId = action.payload.categoryId;
            state.categoryName = action.payload.categoryName;
            state.datetime = action.payload.datetime;
            state.price = action.payload.price;
        }
    }
});

export const { changeSelectedTicket } = globalState.actions;
export default globalState.reducer;
