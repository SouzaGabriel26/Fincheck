import { createContext, useCallback, useEffect, useState } from "react";
import { localStorageKeys } from "../../../../../app/config/localStorageKeys";

interface DashboardContextValue {
  areValuesVisible: boolean;
  toggleValuesVisibility(): void;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(() => {
    const isVisible = localStorage.getItem(localStorageKeys.IS_VALUES_VISIBLE);
    if (!isVisible) {
      return true;
    }

    if (isVisible === 'true') {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    updateLocalStorageInfo(areValuesVisible);
  }, [areValuesVisible]);

  const updateLocalStorageInfo = (isVisible: boolean) => {
    localStorage.setItem(localStorageKeys.IS_VALUES_VISIBLE, String(isVisible));
  }

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState);

  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        toggleValuesVisibility,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
