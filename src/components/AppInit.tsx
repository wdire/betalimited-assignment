"use client";

import { useAppDispatch } from "@/store";
import { cartApi } from "@/store/api";
import { appSelectors } from "@/store/selectors";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AppInit = () => {
  const dispatch = useAppDispatch();
  const sessionId = useSelector(appSelectors.getSessionId());

  useEffect(() => {
    // just in case if session create takes much time
    if (sessionId) {
      const abortController = new AbortController();
      dispatch(cartApi.viewCart(abortController.signal));
      return () => abortController.abort();
    }
  }, [dispatch, sessionId]);

  return <></>;
};

export default AppInit;
