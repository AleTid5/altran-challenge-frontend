import { useLayoutEffect, useReducer } from "react";

const defaultBreakpoints = {
  miniMobile: 320,
  mobile: 576,
  tablet: 960,
  screen: 1200,
};

const initialState = () => ({
  width: undefined,
  height: undefined,
});

const reducer = (
  state: any,
  action: { type: any; value: { width: any; height: any } }
) => {
  switch (action.type) {
    case "changeScreenSize": {
      return {
        ...state,
        width: action.value.width,
        height: action.value.height,
      };
    }
    default:
      return state;
  }
};

export default function useScreenResizing(breakpoints = {}) {
  const [{ width, height }, dispatch] = useReducer(reducer, {}, initialState);
  const { miniMobile, mobile, tablet, screen } = {
    ...defaultBreakpoints,
    ...breakpoints,
  };

  const isMiniMobile = width < miniMobile;
  const isMobile = width < mobile;
  const isTablet = width < tablet;
  const isUsingPC = width >= tablet;
  const isNotebook = isUsingPC && width < screen;
  const isScreen = width >= screen;

  useLayoutEffect(() => {
    const handleResize = () =>
      dispatch({
        type: "changeScreenSize",
        value: { width: window.innerWidth, height: window.innerHeight },
      });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMiniMobile,
    isMobile,
    isTablet,
    isUsingPC,
    isNotebook,
    isScreen,
    screenGT: (size: number) => width > size,
    screenGTE: (size: number) => width >= size,
    screenLT: (size: number) => width < size,
    screenLTE: (size: number) => width <= size,
    width,
    height,
  };
}
