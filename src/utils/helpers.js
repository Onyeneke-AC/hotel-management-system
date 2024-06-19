import { formatDistance, isPast, parseISO } from "date-fns";
import { differenceInDays } from "date-fns/esm";

export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) => {
  if (!dateStr || !Date.parse(dateStr)) {
    console.error("Invalid date string:", dateStr);
    return "Invalid date";
  }

  try {
    const parsedDate = dateStr;

    const currentDate = new Date();

    let result;
    if (isPast(parsedDate)) {
      // For past dates
      result = formatDistance(parsedDate, currentDate, {
        addSuffix: true,
      });
    } else {
      // For future dates
      result = formatDistance(currentDate, parsedDate, {
        addSuffix: true,
      });
    }

    return result
      .replace("about ", "")
      .replace("less than", "Less than")
      .replace("almost", "Almost")
      .replace("in ", "In ");
  } catch (error) {
    console.error("Error parsing or formatting date:", dateStr, error);
    return "Error formatting date";
  }
};

export const getToday = function (options = {}) {
  const today = new Date();

  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(
    value
  );
