function reverse(str) {
  return str.split("").reverse().join("");
}

function capitalize(str) {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function truncate(str, length) {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}

module.exports = {
  reverse,
  capitalize,
  truncate,
};
