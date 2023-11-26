import { createAsyncThunk } from "@reduxjs/toolkit";

import { appActions } from "../slices/app.slice";
import { STORAGE_KEYS } from "@/utils/constants";
import api from "@/utils/api";

export const createSession = createAsyncThunk("app/createSession", async () => {
  const res = await api("/createsession");
  const data = await res.data;
  return data;
});

export const initSession = createAsyncThunk(
  "app/initSession",
  async (_, { dispatch }) => {
    console.log("initSession");
    const storage_session_id = localStorage.getItem(STORAGE_KEYS.session_id);

    console.log("storage_session_id", storage_session_id);

    if (storage_session_id) {
      dispatch(appActions.setSessionId(storage_session_id));
    } else {
      dispatch(createSession());
    }
  }
);
