import { store } from "@/store";
import axios from "axios";
import { API_URL } from "./constants";
const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(function (config) {
  const session_id = store.getState().app.session_id;

  console.log("run api with session_id", session_id);
  config.headers["Session-ID"] = session_id;

  return config;
});

export default api;
