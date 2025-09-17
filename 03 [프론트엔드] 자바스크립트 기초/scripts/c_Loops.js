const randomNumbers = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));

console.log('전체 숫자');
console.log(randomNumbers);


console.log("\n-=-=-=-=-=-=-=-=-for...of=-=-=-=-=-=-=-=-=-=-");
for (number of randomNumbers){
    if(number % 2 == 0){
        console.log(number);
    }
}


console.log("\n-=-=-=-=-=-=-=-=-Array.prototype.map=-=-=-=-=-=-=-=-=-=-");
randomNumbers.map(item => {
    if(item % 2 == 0){
        console.log(item);
    }
})


console.log("\n-=-=-=-=-=-=-=-=-Array.prototype.filter=-=-=-=-=-=-=-=-=-=-");
console.log(randomNumbers.filter(item => item % 2 == 0));


console.log("\n-=-=-=-=-=-=-=-=-Array.prototype.map=-=-=-=-=-=-=-=-=-=-");
randomNumbers.map(item => item % 2 == 0 && console.log(item))