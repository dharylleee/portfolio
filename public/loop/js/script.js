 // FOR LOOP
 for (let a = 0; a < 10; a++) {
    console.log(a);
}

// FOR IN
const numbers = [45, 4, 9, 16, 25];
for (let c in numbers) {
    console.log(numbers[c]);

}

// FOR ON
const cars = ["BMW", "VOLVO", "MINI"];
for (let car of cars) {
    console.log(car);
}

const word = "The quick brown fox";
for (let letter of word) {
    console.log(letter);
}


// WHILE LOOP
let b = 20;
while (b < 30) {
    console.log(b);
    b++;
}
let sum = 0;
        for (let a = 1; a <= 20; a++) {
            sum += a;
            console.log(a);
        }
        console.log("the sum is",sum);

        let factorial = 1;
        let num = 5;

        while (num > 0) {
            factorial *= num;
            num--;
        }

        console.log(factorial);