import { useEffect, useRef } from "react";

interface Dimensions {
  width: number;
  height: number;
}

export const useDimensions = (ref: React.RefObject<HTMLElement>): Dimensions | null => {
  const dimensions = useRef<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  if (dimensions.current.width === 0 || dimensions.current.height === 0) {
    return null;
  }

  return dimensions.current;
};
