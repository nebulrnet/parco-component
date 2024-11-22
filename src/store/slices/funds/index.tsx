import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "@/store/store";
import Funds from "@/types/funds";

const initialState : Funds = {
  funds: [],
};

// Slice for the fund
export const FundSlice = createSlice({
  name: 'Fund',
  initialState,
  reducers: {
    getFunds: (state, action) => {
      state.funds = action.payload;
    },
  },
});

export const { getFunds } = FundSlice.actions;

/**
 * @name fetchFunds - gets the funds associated with the account
 * @returns Promise
 */
export const fetchFunds = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get("/api/funds");
    dispatch(getFunds(response.data));
  } catch (err) {
    console.error(err);
  }
};

export default FundSlice.reducer;
