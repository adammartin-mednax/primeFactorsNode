function primeFactors(suppliedNumber) {
  let number = suppliedNumber;
  let primes = [];
  let candidate = 2;
  while(number > 1) {
    for(candidate; number % candidate === 0; number /= candidate) {
      primes.push(candidate);
    }
    candidate += 1;
  }
  return primes;
}

module.exports = primeFactors;