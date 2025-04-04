import { useLayoutEffect, useState } from "react";

interface viewPort {
  width: number;
  height: number;
  isMobile: boolean;
  isLoaded: boolean;
}

const useViewPort = (): viewPort => {
  if (typeof window === "undefined") {
    return { width: 0, height: 0, isMobile: false, isLoaded: false };
  }

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setIsMobile(window.innerWidth < 1024);
  };

  useLayoutEffect(() => {
    handleResize();
    setIsLoaded(true);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    height,
    isMobile,
    isLoaded,
  };
};

export type { viewPort };
export { useViewPort };
