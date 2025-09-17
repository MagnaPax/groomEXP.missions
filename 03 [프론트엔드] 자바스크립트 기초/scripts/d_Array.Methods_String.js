const uniqueRandomNumbers = new Set();

while (uniqueRandomNumbers.size < 10) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  uniqueRandomNumbers.add(randomNumber);
}

// Set을 배열로 변환
const uniqueArray = [...uniqueRandomNumbers];

console.log(uniqueArray);


uniqueArray.push(100);
console.log("\nAfter push():", uniqueArray);

uniqueArray.pop();
console.log("\nAfter pop():", uniqueArray);


uniqueArray.shift();
console.log("\nAfter shift():", uniqueArray);


uniqueArray.unshift(100);
console.log("\nAfter unshift(100):", uniqueArray);


const str = 'Hello World';

console.log(str);

const arrChar = str.split('');
console.log(arrChar);

str.indexOf('l');
console.log(str.indexOf('l'));

str.lastIndexOf('l');
console.log(str.lastIndexOf('l'))

console.log(str.substring(1,4));

console.log(str.slice(1,4));

console.log(str.toUpperCase());

console.log(str.toLowerCase());
