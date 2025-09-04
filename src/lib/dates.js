import { parseISO, set, format, addDays } from "date-fns";

export function toUTC(dateString) {
  const parsedDate = parseISO(dateString); // Parse the date string to a Date object
  // return set(parsedDate, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  parsedDate.setUTCHours(0, 0, 0, 0);
  return parsedDate;
}

// function formatYMD(date) {
//   return format(date, "yyyy-MM-dd");
// }

export function formatYMD(date) {
  return date.toISOString().split("T")[0];
}

export function eachDayOfInterval(startDate, endDate) {
  const datesInRange = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    datesInRange.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }
  return datesInRange;
}
