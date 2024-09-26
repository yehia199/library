/* const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
 */
for (let i = 0; i < 16; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`fizzbuzz`);
  } else if (i % 3 === 0) {
    console.log(`fizz`);
  } else if (i % 5 === 0) {
    console.log(`buzz`);
  } else {
    console.log(i);
  }
}

let x = 3;
let y = 5;
console.log(`the sum is ${x + y}`);
console.log(Number("1000"));

//some array bullshit
const cars = ["volkswagen", "BMW", "mercedes", "ferrari", "lambo"];
cars.push("porche");
console.log(cars.length);
console.log(cars[0]);
console.log(cars[cars.length - 1]);
console.log(cars.join(" * ")); // converts the array to a string but joined with *
// poping and pushing 'last elements'
cars.pop();
cars.push("toyota");
// shifting
cars.shift(); // removes the first element and lower the index of others
cars.unshift(); // does the opposite of shift
// important rule : adding items to an array returns the new lenght while removing returns the removed element
console.log(cars);
// slice and splice
console.log(cars.slice(1, 3));
const numbers = [12, 50, 70, 80];
let total = 0;
numbers.forEach((number) => {
  total += number;
  console.log(total);
});

// creat a variable called password
let pass = "nichtdeinbier";
// make a loop as a counter to wrong password
for (let i = 0; i <= 3; i++) {
  let input = prompt("type your pass word");
  // if the password is correct end the loop else increment the counter
  if (input === pass) {
    alert("access granted");
    break;
  } else {
    alert("wrong pass word");
  }
  if (i == 3) {
    alert("TOO MANY WRONG ATTEMPTS LAUNCHING MISSILES");
  }
}
