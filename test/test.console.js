

console.time("Test console");
let sum = 0;
for(let counter=0;counter<1e6;counter++){ // 1e6 équivalent à 1 000 000 
    sum += counter;
    // console.log(counter);
}
console.log(sum);
console.timeEnd("Test console");


// Test console: 33.387s
// Test console: 6.548ms