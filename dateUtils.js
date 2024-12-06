function formatDate(date, format) {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  console.log(year);
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  return format.replace("YYYY", year).replace("MM", month).replace("DD", day);
}

function isWeekend(date) {
  const day = date.getDay();
  console.log(day);
  return day === 0 || day === 6;
}

function daysBetween(date1, date2) {
  const diff = Math.abs(date1 - date2);
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
module.exports = { formatDate, isWeekend, daysBetween };
