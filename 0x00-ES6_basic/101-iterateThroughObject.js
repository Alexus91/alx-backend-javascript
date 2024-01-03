export default function iterateThroughObject(reportWithIterator) {
  const workers = [];

  for (const worker of reportWithIterator) {
    workers.push(worker);
  }

  return workers.join(' | ');
}
