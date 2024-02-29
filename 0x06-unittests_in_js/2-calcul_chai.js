function calculateNumber(type, a, b) {
  const firstint = Math.round(a);
  const secendint = Math.round(b);

  switch (type) {
    case 'SUM':
      return firstint + secendint;
    case 'SUBTRACT':
      return firstint - secendint;
    case 'DIVIDE':
      if (secendint === 0) {
        return 'Error';
      }
      return firstint / secendint;

    default:
      throw new Error(`Invalid type: ${type}`);
  }
}

module.exports = calculateNumber;
