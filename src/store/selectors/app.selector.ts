import { RootState } from "..";

export const getSessionId = () => (state: RootState) => {
  return state.app.session_id;
};
