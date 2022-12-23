/* eslint-disable no-unused-vars */
import React, { useLayoutEffect } from "react";

const useBrowserLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : () => {};
export default useBrowserLayoutEffect;
