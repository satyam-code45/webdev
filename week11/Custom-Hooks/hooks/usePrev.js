import React, { useEffect, useRef } from "react";

export const usePrev = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current; ///it returns first then the useEffect gets called
};
