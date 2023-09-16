import { useState } from "react";
import { useDashboard } from "../DashboardContext/useDashboard";

export function UseTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeggining: true,
    isEnd: false,
  });

  return {
    areValuesVisible,
    sliderState,
    setSliderState,
    transactions: [1],
    isInitialLoading: false,
    isLoading: false,
  };
}
