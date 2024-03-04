// GCD Calculation
// function main(input) {
//   const data = input.split(" ");

//   const num1 = parseInt(data[0]);
//   const num2 = parseInt(data[1]);

//   let a = num1 < num2 ? num1 : num2;
//   let b = num1 < num2 ? num2 : num1;

//   let temp = -1;
//   while (a != 0) {
//     temp = b % a;
//     b = a;
//     a = temp;
//   }
//   console.log(b);
// }

// main("9 12");

// Prime Number
// function main(input) {
//   const n = parseInt(input);
//   const verdict = isPrime(n);

//   if (verdict) console.log(n, "is a prime number.");
//   else console.log(n, "is not a prime number.");
// }

// function isPrime(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i < n - 1; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }

// main("13");

// Power Calc
function main(input) {
  const data = input.split(" ");

  const n = parseInt(data[0]);
  const k = parseInt(data[1]);

  let ans = 1;
  for (let i = 1; i <= k; i++) {
    ans *= n;
  }
  console.log(ans);
}

main("3 4");
