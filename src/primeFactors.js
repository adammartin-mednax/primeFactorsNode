function primeFactors(suppliedNumber) {
  let number = suppliedNumber;
  let primes = [];
  if(number > 1) {
    while(number % 2 === 0) {
      primes.push(2);
      number /= 2;
    }
    if(number > 1){
      primes.push(number);
    }
  }
  return primes;
}

module.exports = primeFactors;