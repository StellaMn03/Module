function unique(arr) {
  return [...new Set(arr)];
}

function flatten(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
    []
  );
}

function chunk(arr, size) {
  if (size <= 0) {
    throw new Error("Size must be > 0");
  }
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

module.exports = { unique, flatten, chunk };
