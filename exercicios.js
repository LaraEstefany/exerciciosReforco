/*
1 - Create a function that takes two numbers as arguments and returns their sum.
Examples
addition(3, 2) ➞ 5

addition(-3, -6) ➞ -9

addition(7, 3) ➞ 10
Notes
Don't forget to return the result.
*/

const addition = (num1, num2) => num1 + num2;

/*
2 - Convert Minutes into Seconds. Write a function that takes an integer minutes and converts it to seconds.

Examples
convert(5) ➞ 300
convert(3) ➞ 180
convert(2) ➞ 120
*/

const convert = minutes => minutes * 60;

/*
3 - Convert Age to Days. Create a function that takes the age in years and returns the age in days.

Examples
calcAge(65) ➞ 23725
calcAge(0) ➞ 0
calcAge(20) ➞ 7300
*/

const calcAge = age => age * 365;

/*
4 - The Farm problem. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

Examples
animals(2, 3, 5) ➞ 36
animals(1, 2, 3) ➞ 22
animals(5, 2, 8) ➞ 50
*/

const animals = (chickens, cows, pigs) => (chickens * 2) + (cows * 4) + (pigs * 4);

/*
5 - Concatenate First and Last Name into One String. Given two strings, firstName and lastName, return a single string in the format "last, first".

Examples
concatName("First", "Last") ➞ "Last, First"
concatName("John", "Doe") ➞ "Doe, John"
concatName("Mary", "Jane") ➞ "Jane, Mary"
*/

const concatName = (first, last) => `${last}, ${first}`

/*
6 - Drinks Allowed?. A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

Examples
shouldServeDrinks(17, true) ➞ false
shouldServeDrinks(19, false) ➞ true
shouldServeDrinks(30, true) ➞ false

Notes
Return true or false.
Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be 18.
*/

const shouldServeDrinks = (age, onBreak) => (age >= 18 && onBreak == false) ? true : false;

/*
7 - Check if an Array Contains a Given Number. Write a function to check if an array contains a particular number.

Examples
check([1, 2, 3, 4, 5], 3) ➞ true
check([1, 1, 2, 1, 1], 3) ➞ false
check([5, 5, 5, 6], 5) ➞ true
check([], 5) ➞ false
*/

const check = (list, num) => list.includes(num);

/*
8 - Luke, I Am Your ...
Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

Person	Relation
Darth Vader	father
Leia		sister
Han		brother in law
R2D2		droid

Examples
relationToLuke("Darth Vader") ➞ "Luke, I am your father."
relationToLuke("Leia") ➞ "Luke, I am your sister."
relationToLuke("Han") ➞ "Luke, I am your brother in law."
*/

const relationToLuke = person => {
    let relation;

    if (person == "Darth Vader") relation = "father";
    if (person == "Leia") relation = "sister";
    if (person == "Han") relation = "brother in law";
    if (person == "R2D2") relation = "droid";

    return `Luke, I am your ${relation}`
}

/*
9 - Is the Word Singular or Plural?
Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

Examples
isPlural("changes") ➞ true
isPlural("change") ➞ false
isPlural("dudes") ➞ true
isPlural("magic") ➞ false

Notes
Don't forget to return the result.
Remember that return true (boolean) is not the same as return "true" (string).
This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.
*/

const isPlural = word => (word.slice(-1) == 's') ? true : false;

/*
10 - Repeat String. Create a function that takes a string txt and a number n and returns the repeated string n number of times.

If given argument txt is not a string, return Not A String !!

Examples
repeatString("Mubashir", 2) ➞ "MubashirMubashir"
repeatString("Matt", 3) ➞ "MattMattMatt"
repeatString(1990, 7) ➞ "Not A String !!
*/

function repeatString(txt, n) {
    if (typeof txt != "string") return "Not A String !!";

    let newTxt = "";
    for (let i = 0; i < n; i++) {
        newTxt += txt;
    }

    return newTxt;
}

console.log(addition(1, 2));
console.log(convert(5));
console.log(calcAge(65));
console.log(animals(1, 2, 3));
console.log(concatName("Mary", "Jane"));
console.log(shouldServeDrinks(17, true));
console.log(check([1, 2, 3, 4, 5], 1));
console.log(relationToLuke("Darth Vader"));
console.log(isPlural("change"));
console.log(repeatString("Matt", 3));