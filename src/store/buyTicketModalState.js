"use client";
import { createSlice } from "@reduxjs/toolkit";
import { parseDateWithDayName, parseDateToTime } from "@/utils";

const initialState = {
  id: 0,
  name: "name",
  subtitle: "subtitle",
  date: "date",
  desc: "desc",
  time: "23:55",
  price: 40,
  table: 120,
  imgName: "",
};

const globalState = createSlice({
  name: "buyTicketModalState",
  initialState,
  reducers: {
    changeModalData: (state, action) => {
      state.id = action.payload.item.id;
      state.name = action.payload.item.attributes.title;
      state.subtitle = action.payload.item.attributes.caption;
      state.date = parseDateWithDayName(new Date(action.payload.item.attributes.eventDate));
      state.imgName = action.payload.item.attributes.photos.data[0].attributes.image.data.attributes.url;
      state.time = parseDateToTime(new Date(action.payload.item.attributes.eventDate));
      state.desc = action.payload.item.attributes.shortDescription

      // state.id = action.payload.id;
      // state.name = action.payload.name;
      // state.subtitle = action.payload.subtitle;
      // state.date = action.payload.date;
      // state.desc = action.payload.desc;
      // state.imgName = action.payload.img;
    },
    // changeHamburgerMenuState: (state, action) => {
    //     state.isHamburgerMenuActive = !state.isHamburgerMenuActive;
    // },
    // changeDate: (state, action) => {
    //     state.reservationStartDate = action.payload.start
    //     state.reservationEndDate = action.payload.end
    // },
    // changeNumberOfPeople: (state, action) => {
    //     state.numberOfAdults = action.payload.adult;
    //     state.numberOfChild = action.payload.child;
    //     state.numberOfBabies = action.payload.baby;
    // },
    // changeReservationFilter: (state, action) => {
    //     state.reservationFilter = action.payload;
    // },
  },
});

export const { changeModalData } = globalState.actions;
export default globalState.reducer;
