function primeFactors(suppliedNumber) {
  let number = suppliedNumber;
  let primes = [];
  if(number > 1) {
    primes.push(number);
  }
  return primes;
}

module.exports = primeFactors;