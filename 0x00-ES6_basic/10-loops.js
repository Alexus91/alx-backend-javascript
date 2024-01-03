export default function appendToEachArrayValue(array, appendString) {
  const arrayed = [];
  for (const value of array) {
    arrayed.push(appendString + value);
  }
  return arrayed;
}
