import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store, { AppDispatch, RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, type RootState, type AppDispatch };
