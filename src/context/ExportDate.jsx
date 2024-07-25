import { createContext, useContext, useState } from "react";

const ExportDateContext = createContext();

function ExportDateProvider({ children }) {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  return (
    <ExportDateContext.Provider value={{ start, setStart, end, setEnd }}>
      {children}
    </ExportDateContext.Provider>
  );
}

function useExportDate() {
  const context = useContext(ExportDateContext);

  if (context === "undefined")
    throw new Error(
      "DataFilterBookingsContext was used outside of DateFilterBookingsProvider"
    );

  return context;
}

export { ExportDateProvider, useExportDate };
