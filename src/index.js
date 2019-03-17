/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr) {
  return arr.reduce(((count, current, index, arr ) => (arr[index] !== index + 1 && arr[arr[arr[index] - 1] - 1] === index + 1 ) ? ++count : count), 0) / 3;
};
