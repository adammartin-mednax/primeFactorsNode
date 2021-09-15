function primeFactors(suppliedNumber) {
  let number = suppliedNumber;
  let primes = [];
  let candidate = 2;
  for(candidate; number > 1; candidate += 1) {
    for(candidate; number % candidate === 0; number /= candidate) {
      primes.push(candidate);
    }
  }
  return primes;
}

module.exports = primeFactors;