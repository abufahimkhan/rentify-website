import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RentPropsTypes {
  flatNo: string;
  tenantName: string;
  totalMembers: number;
  rentAmount: number;
  dueAmount: number;
  rentStatus: string;
  rentPaidDate: string;
  electricityBill: number;
  gasBill: number;
  waterBill: number;
  status: string;
}

interface RentsState {
  rents: RentPropsTypes[];
}

const initialState: RentsState = {
  rents: [
    {
      flatNo: "A101",
      tenantName: "Khushi Begum",
      totalMembers: 4,
      rentAmount: 4000, // Changed to a number for easier calculations
      dueAmount: 50.0,
      rentStatus: "Paid",
      rentPaidDate: "2024-11-01",
      electricityBill: 60.0,
      gasBill: 30.0,
      waterBill: 20.0,
      status: "To Let",
    },
    {
      flatNo: "A102",
      tenantName: "Khushi Begum",
      totalMembers: 3,
      rentAmount: 600.0,
      dueAmount: 100.0,
      rentStatus: "Pending",
      rentPaidDate: "-",
      electricityBill: 50.0,
      gasBill: 25.0,
      waterBill: 15.0,
      status: "To Let",
    },
    {
      flatNo: "B203",
      tenantName: "Korban Ali",
      totalMembers: 5,
      rentAmount: 700.0,
      dueAmount: 0.0,
      rentStatus: "Paid",
      rentPaidDate: "2024-10-28",
      electricityBill: 75.0,
      gasBill: 35.0,
      waterBill: 25.0,
      status: "To Let",
    },
    {
      flatNo: "C101",
      tenantName: "Afroza Begum",
      totalMembers: 2,
      rentAmount: 450.0,
      dueAmount: 150.0,
      rentStatus: "Pending",
      rentPaidDate: "-",
      electricityBill: 40.0,
      gasBill: 20.0,
      waterBill: 10.0,
      status: "To Let",
    },
    {
      flatNo: "C102",
      tenantName: "Afroza Begum",
      totalMembers: 1,
      rentAmount: 300.0,
      dueAmount: 0.0,
      rentStatus: "Paid",
      rentPaidDate: "2024-11-05",
      electricityBill: 30.0,
      gasBill: 15.0,
      waterBill: 10.0,
      status: "To Let",
    },
    {
      flatNo: "D301",
      tenantName: "Shah Alom",
      totalMembers: 6,
      rentAmount: 800.0,
      dueAmount: 0.0,
      rentStatus: "Paid",
      rentPaidDate: "2024-10-25",
      electricityBill: 100.0,
      gasBill: 50.0,
      waterBill: 40.0,
      status: "To Let",
    },
  ],
};

const rentSlice = createSlice({
  name: "rents",
  initialState,
  reducers: {
    addRent(state, action: PayloadAction<RentPropsTypes>) {
      state.rents.push(action.payload);
    },

    updateRent(state, action: PayloadAction<RentPropsTypes>) {
      const index = state.rents.findIndex(
        (data) => data.flatNo === action.payload.flatNo
      );
      if (index !== -1) state.rents[index] = action.payload;
    },

    deleteRent(state, action: PayloadAction<string>) {
      state.rents = state.rents.filter(
        (data) => data.flatNo !== action.payload
      );
    },
  },
});

export const { addRent, updateRent, deleteRent } = rentSlice.actions;

export default rentSlice.reducer;
