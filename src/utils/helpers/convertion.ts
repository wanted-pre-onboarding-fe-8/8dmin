export function dateToString(date: string) {
  return date.replace(/-/g, '');
}
export function dateToArray(date: string) {
  const newDate = date.split('-');
  return newDate;
}
export function convertYear(date: string) {
  const newDate = date.split('-');
  return newDate[0];
}
export function convertMonth(date: string) {
  const newDate = date.split('-');
  return newDate[1];
}
export function convertDay(date: string) {
  const newDate = date.split('-');
  return newDate[2];
}
