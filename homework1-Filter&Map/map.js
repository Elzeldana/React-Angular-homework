const numbersArray= [1, 2, 3, 4, 5]
const incrementedNumbers = numbersArray.map(n=>n*10);
console.log(incrementedNumbers);
incrementedNumbers.forEach((n) => {
    console.log(n);
});