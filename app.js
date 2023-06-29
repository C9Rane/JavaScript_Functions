console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if (count < 0) {
        for(let i = -1; i >= count; i--) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
    for(let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
let apple = printOdds
apple(21);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`

    if (age >= 16) {
        console.log(aboveSixteen);
    } else if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log("Please Provide a name and age.");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whereAt(x, y) {
    if (x === 0 && y === 0) {
        console.log("Point of Origin (0,0)");
    } else if ( x === 0){
        console.log(`Point (${x}, ${y}) is on the y-axis.`);
    } else if (y === 0){
        console.log(`Point (${x}, ${y}) is on the x-axis.`);
    } else if (x > 0 && y > 0) {
        console.log(`Point (${x}, ${y}) is in the Quadrant 1.`);
    } else if (x < 0 && y > 0) {
        console.log(`Point (${x}, ${y}) is in the Quadrant 2.`);
    } else if (x < 0 && y < 0) {
        console.log(`Point (${x}, ${y}) is in the Quadrant 3.`);
    } else {
        console.log(`Point (${x}, ${y}) is in the Quadrant 4.`);
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triAngle(a, b, c) {
    if(a > b < c){
        console.log("Scalene Triange");
    } else if(a === b && a === c){
        console.log("Equilateral Triangle");
    } else if((a === b && a != c) || (a === c && a != b) || (b === c && b != a)){
        console.log("Isosceles Triangle");
    } else {
        console.log("makes an invalid triangle");
    }
}

triAngle(1, 2, 2);