import { format } from "date-fns";
import { createContext, useContext, useState } from "react";

const DateFilterBookingsContext = createContext();

let today = new Date();
let tomorrow = new Date(today);
let yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);
tomorrow.setDate(tomorrow.getDate() + 1);

function DateFilterBookingsProvider({ children }) {
  const [startDate, setStartDate] = useState(format(yesterday, "yyyy-MM-dd"));
  const [endDate, setEndDate] = useState(format(tomorrow, "yyyy-MM-dd"));

  return (
    <DateFilterBookingsContext.Provider
      value={{ startDate, setStartDate, endDate, setEndDate }}
    >
      {children}
    </DateFilterBookingsContext.Provider>
  );
}

function useDateFilterBookings() {
  const context = useContext(DateFilterBookingsContext);

  if (context === "undefined")
    throw new Error(
      "DataFilterBookingsContext was used outside of DateFilterBookingsProvider"
    );

  return context;
}

export { DateFilterBookingsProvider, useDateFilterBookings };
