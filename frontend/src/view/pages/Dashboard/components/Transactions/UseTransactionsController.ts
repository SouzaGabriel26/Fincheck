import { useDashboard } from "../DashboardContext/useDashboard";

export function UseTransactionsController() {
  const { areValuesVisible } = useDashboard();

  return {
    areValuesVisible
  };
}
