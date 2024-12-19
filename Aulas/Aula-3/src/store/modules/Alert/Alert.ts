import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Alert {
    open: boolean;
    type: "success" | "error" | "warning";
    message: string
}

const initialState: Alert = {
    open: false,
    type: "success",
    message: ""
}

const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        showAlert(state, action: PayloadAction<Omit<Alert, "open">>) {
            state.open = true;
            state.message = action.payload.message;
            state.type = action.payload.type;
            return state;
        },
        hiddenAlert(state) {
            return {...state, open: false}
        }
    }
})

export const { showAlert, hiddenAlert } = alertSlice.actions;
export const alertReducer = alertSlice.reducer