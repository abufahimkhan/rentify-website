import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FlatPropsTypes {
  flatNo: string;
  size: string;
  meterNo: string;
  status: string;
}

interface FlatState {
  flats: FlatPropsTypes[];
}

const initialState: FlatState = {
  flats: [
    {
      flatNo: "A101",
      size: "1200 sqft",
      meterNo: "MTR-202345",
      status: "Occupied",
    },
    {
      flatNo: "A102",
      size: "1000 sqft",
      meterNo: "MTR-202346",
      status: "Available",
    },
    {
      flatNo: "B203",
      size: "1300 sqft",
      meterNo: "MTR-202347",
      status: "Occupied",
    },
    {
      flatNo: "C101",
      size: "900 sqft",
      meterNo: "MTR-202348",
      status: "Under Maintenance",
    },
    {
      flatNo: "D301",
      size: "1400 sqft",
      meterNo: "MTR-202349",
      status: "Available",
    },
  ],
};

const flatSlice = createSlice({
  name: "flats",
  initialState,

    reducers: {
        addFlat(state, action: PayloadAction<FlatPropsTypes>) {
            state.flats.push(action.payload)
      },
        updateFlat(state, action: PayloadAction<FlatPropsTypes>) {
            const index = state.flats.findIndex((data) => data.flatNo === action.payload.flatNo)

            if (index !== -1) state.flats[index] = action.payload;
      },
        deleteFlat(state, action: PayloadAction<string>) {
            state.flats = state.flats.filter((data) =>
                data.flatNo !== action.payload);
      },
  },
});

export const { addFlat, updateFlat, deleteFlat } = flatSlice.actions;

export default flatSlice.reducer;
