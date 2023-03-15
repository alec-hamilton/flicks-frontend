import { useEffect, useState } from "react";

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

export default function useWindowSize(): WindowSize {
  // initalise values because Next can't use the window object here.
  const [size, setSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = (): void => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}
