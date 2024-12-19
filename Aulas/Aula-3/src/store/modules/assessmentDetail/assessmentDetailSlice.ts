import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Assessment } from "../../../utils/types/assessment";

// Nome
// Valor inicial
// Ações

const initialState: Omit<Assessment, "studentId"> = {
  id: "",
  title: "",
  description: "",
  grade: 0,
  createdAt: new Date().toLocaleDateString(),
};

const assessmentDetailSlice = createSlice({
  name: "assessmentDetail",
  initialState,
  reducers: {
    // Set
    setAssessentDetail(state, action: PayloadAction<Assessment>) {
      // state.id = action.payload.id;
      return {
        ...state, // {}
        ...action.payload, // {}
      };
    },
    // Reset
    resetAssessmentDetail() {
      return initialState;
    },
  },
});

export const { resetAssessmentDetail, setAssessentDetail } =
  assessmentDetailSlice.actions;

export const assessmentDetailReducer = assessmentDetailSlice.reducer;
