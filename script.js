// PART 1: Managing the Ends (push, pop, shift, unshift)

// 1. The "Adding at the End" Challenge Create an empty array called myPets. Use a method to
// add "Dog" to the array, then use the same method to add "Cat".

const myPets = [];
myPets.push("Dog");
console.log(myPets);

//===========================================================
//===========================================================

// 2. The "VIP Entrance" (Adding at the Start) You have an array const queue = ["User1",
// "User2"]. A "Premium User" arrives and needs to be at the very front. Use the method that adds
// an element to the beginning of the array.

const queue = ["User1", "User2"];
queue.unshift("Premium User");
console.log(queue);

//===========================================================
//===========================================================

// 3. The "Package Delivery" (Removing from the End) You have const stack = ["Box1", "Box2",
// "Box3"]. You deliver the top box (the last one). Use a method to remove "Box3" and save that
// removed value into a new variable called deliveredBox.

const stack = ["Box1", "Box2", "Box3"];
const deliveredBox = stack.pop();
console.log(deliveredBox);

//===========================================================
//===========================================================

// 4. The "First in Line" (Removing from the Start) You have const swimmers = ["Gold", "Silver",
// "Bronze"]. The "Gold" swimmer leaves the water. Use the method that removes the first
// element. Log the array afterward to see who is now at index 0.

const swimmers = ["Gold", "Silver", "Bronze"];
swimmers.shift();
console.log(swimmers);

//===========================================================
//===========================================================

// PART 2: Searching & Slicing (indexOf, includes, slice)

// 5. The "Check the Guestlist" Create an array const guests = ["Alice", "Bob", "Charlie"]. Use the
// .includes() method to check if "David" is on the list. Log the result (it should be false)

const guests = ["Alice", "Bob", "Charlie"];
// guests.includes("David");
const isDavidOnList = guests.includes("David");
console.log(isDavidOnList);

//===========================================================
//===========================================================

// 6. Finding the Map Location You have const tools = ["Hammer", "Screwdriver", "Wrench"]. Use
// .indexOf() to find what position "Screwdriver" is at. Store this number in a variable.

const tools = ["Hammer", "Screwdriver", "Wrench"];
const positionOfNumber = tools.indexOf("Screwdriver");
console.log(positionOfNumber);

//===========================================================
//===========================================================

// 7. The "Safe Copy" (Slice) You have const fullMenu = ["Burger", "Fries", "Shake", "Salad"]. You
// want to create a "Side Dishes" menu that only contains "Fries" and "Shake". Use .slice() to grab
// these two items without changing the original fullMenu.

const fullMenu = ["Burger", "Fries", "Shake", "Salad"];
const sideDishes = fullMenu.slice(1, 3);
console.log(fullMenu);
console.log(sideDishes);

//===========================================================
//===========================================================

// PART 3: Surgery & Merging (splice, concat)

// 8. The "Replacement Surgery" Given const colors = ["Red", "Green", "Blue"]. Use .splice() to
// remove "Green" and put "Yellow" in its place.

//array.splice(startIndex, deleteCount, itemToAdd)
const colors = ["Red", "Green", "Blue"];
colors.splice(1, 1, "Yellow");
console.log(colors);

//===========================================================
//===========================================================

// 9. The "Sudden Gap" Take an array const items = ["A", "B", "C"]. Manually set items[5] = "F". Log
// the array.

const items = ["A", "B", "C"];
items[5] = "F";
console.log(items);

// Question: What does JavaScript put in the "empty" spots at index 3 and 4?
["A", "B", "C", null, null, "F"];

//===========================================================
//===========================================================

// 10. The "Grand Merger" Create two arrays: onlineFriends and offlineFriends. Use the .concat()
// method to create a single array called allFriends.

const onlineFriends = ["Ben", "Charles", "Jonh"];
const offlineFriends = ["Beauty", "Blessing", "Chioma"];

const allFriends = onlineFriends.concat(offlineFriends);
console.log(allFriends);

//===========================================================
//===========================================================

// PART 4: Introduction to Iteration

// 11. The Basic Counter (Iteration Exercise) Create an array of numbers [10, 20, 30, 40]. Write a
// for loop (like the example above) that prints each number and adds 5 to it.

const numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
  const addFiveToNumber = numbers[i] + 5;

  console.log(addFiveToNumber);
}

//===========================================================
//===========================================================

// 12. The Name Finder (Iteration Exercise) Create an array of names. Write a for loop that goes
// through the array. Inside the loop, use an if statement to check: if the name is equal to "John",
// log "Found him!".

const names = ["Bright", "Chimezie", "John", "Happiness"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "John") {
    console.log(`${names[i]} is here, i found him`);
  }
}
