import { useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";

export function useAccountsController() {
  const windowWidth = useWindowWidth();

  const [sliderState, setSliderState] = useState({
    isBegining: true,
    isEnd: false,
  });

  return { sliderState, setSliderState, windowWidth };
}
