const { reverse, capitalize, truncate } = require("./stringUtils");
const { add, subtract, multiply, divide } = require("./mathOperations");
const { unique, flatten, chunk } = require("./arrayUtils");
const { formatDate, isWeekend, daysBetween } = require("./dateUtils");

const arr = [1, 2, 3, 4, 5, 6, 7];
const chunkedArray = chunk(arr, 4);
console.log(chunkedArray);

const date1 = new Date(2024, 11, 6);
const date2 = new Date(2024, 11, 7);
const date3 = new Date(2024, 11, 10);
console.log(formatDate(date1, "YYYY-MM-DD"));
console.log(formatDate(date2, "DD/MM/YYYY"));
console.log(isWeekend(date2));

const days1 = daysBetween(date1, date2);
const days2 = daysBetween(date1, date3);
console.log(days1);
console.log(days2);
