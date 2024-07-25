import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns/esm";

export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) => {
  if (!dateStr || !Date.parse(dateStr)) {
    return "Invalid date";
  }

  try {
    const parsedDate = new Date(dateStr);
    const currentDate = new Date();

    let result;
    if (parsedDate < currentDate) {
      // For past dates
      result = formatDistance(parsedDate, currentDate, {
        addSuffix: false,
      });
      result =
        result.replace("about ", "").replace("less than", "Less than") + " ago";
    } else {
      // For future dates
      result = formatDistance(currentDate, parsedDate, {
        addSuffix: false,
      });
      result = result.replace("in ", "In ") + " from now";
    }

    return result;
  } catch (error) {
    return "Error formatting date";
  }
};

// export const formatDistanceFromNow = (dateStr) => {
//   if (!dateStr || !Date.parse(dateStr)) {
//     // console.error("Invalid date string:", dateStr);
//     return "Invalid date";
//   }

//   try {
//     const parsedDate = new Date(dateStr); // Parse the date string

//     const currentDate = new Date();

//     let result;
//     if (parsedDate < currentDate) {
//       // For past dates
//       result = formatDistance(parsedDate, currentDate, {
//         addSuffix: true,
//       });
//     } else {
//       // For future dates
//       result = formatDistance(currentDate, parsedDate, {
//         addSuffix: true,
//       });
//     }

//     // Clean up the result
//     return result
//       .replace("about ", "")
//       .replace("less than", "Less than")
//       .replace("almost", "Almost")
//       .replace("in ", "In ");
//   } catch (error) {
//     // console.error("Error parsing or formatting date:", dateStr, error);
//     return "Error formatting date";
//   }
// };

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
