export default function createIteratorObject(report) {
  const rest = [];
  for (const index of Object.values(report.allEmployees)) {
    rest.push(...index);
  }
  return rest;
}
