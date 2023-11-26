import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { STORAGE_KEYS } from "@/utils/constants";
import { appApi } from "../api";

export type AppStateType = {
  session_id: string | null;
};

const initialState: AppStateType = {
  session_id: null,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setSessionId: (state, action: PayloadAction<string>) => {
      state.session_id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(appApi.createSession.fulfilled, (state, action) => {
      console.log("Session created:", action.payload);
      localStorage.setItem(STORAGE_KEYS.session_id, action.payload);
      state.session_id = action.payload;
    });
  },
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;
