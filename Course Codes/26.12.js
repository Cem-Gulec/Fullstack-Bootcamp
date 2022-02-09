import "./styles.css";
import axios from "axios";

let foo = "bar";
foo = 1;
console.log(foo);

//const fool = "bar";
//fool = 2;

// string interpolation
let foo1 = "my foo1 variable";
foo = `bar - ${foo1}`;
console.log(foo);

// object definition (key, val)
let myObject = {
  name: "foo",
  surname: "bar",
  peopleRelated: [{ name: "foo1" }, { name: "foo2" }],
  printName: function () {
    console.log("cem");
  }
};
myObject.age = 14;
console.log(myObject);
console.log(Object.keys(myObject), Object.values(myObject));
console.log(myObject.age);
console.log(myObject["age"]);

let fieldName = "name";
console.log(myObject[fieldName]);
myObject.printName();

// array definition
let myArray = [123, "hübele", NaN, { name: "deneme" }, [1, 2, 3]];
console.log(myArray);
console.log(Object.keys(myArray), Object.values(myArray));
console.log(myArray[0]);

myArray.push({ name: "cem" });
console.log(myArray[3]);

// arrow function
let myFunction = function (name, surname) {
  console.log(name, surname);
};

myFunction("cem", "gulec");

//practive
var func1 = function (arg1) {
  return "arg1-result";
};

// one liner olursa
// var func1 = (arg1) => console.log(arg1)
// var func1 = (arg1) => ({ name: "foo" })

var func2 = function () {
  return "no argument function";
};

// var func2 = () => "arg1-result";

var func3 = function (arg1, arg2) {
  return "two argument function";
};

// var func3 = (arg1, arg2) => "two argument function";

var func4 = function () {
  return { name: "foo", surname: "bar" };
};

// var func4 = () => ({ name: "foo", surname: "bar" });

var func5 = function () {
  return ["foo", "bar"];
};

// var func5 = () => ["foo", "bar"];

// Array methodları (map, filter, foreach)

let object = {
  key1: "value1",
  key2: "value2"
};

let array = ["value1", "value2"];

// of: valuelar için
// in: keyler için (bu durumda index döner)
for (const key of array) {
  console.log(key);
}

const fruitArray = ["🍎", "🍐", "🍐", "🍎"];

function eat(apple) {
  return "🗑️";
}

fruitArray.forEach((arg) => console.log(arg));

// split apple and pear  (filtering)
const apples = fruitArray
  .filter((fruit) => fruit === "🍎")
  .forEach((apple) => console.log(apple));

const applesCopy = [];
for (let fruit of fruitArray) {
  if (fruit === "🍎") {
    applesCopy.push(fruit);
  }
}
console.log(applesCopy);

// eat fruit 😋 and convert it to 🗑️ (mapping)
//apples.map((apple) => eat(apple));

let students = [
  { name: "studet1", city: "Ankara", university: { name: "Metu" } },
  { name: "studet2", city: "Istanbul", university: { name: "Metu" } },
  { name: "studet3", city: "Bursa", university: { name: "Itu" } }
];

students.filter((student) => student.university.name === "Metu");

// truck removes the garbage 🚚 (foreach)

// Destructring

//Object Destructuring
const objectDeneme = { name: "asd", surname: "dsd", age: 155 };

//const name = objectDeneme.name;
//const surname = objectDeneme.surname;
//yerine
objectDeneme.university = "sdsds";
const { name, surname, age, university } = objectDeneme;
console.log(name, surname, age, university);

printName(myObject);
function printName({ argName }) {
  console.log(argName);
}

//Array Destructring
const { result } = queryDb("Select");
const { result: deleteResult, count = 0 } = queryDb("delete");

console.log(result);

function queryDb(query) {
  return {
    result: [],
    status: "failed"
  };
}

// Spread Operator
const personalInfo = getPersonalInfo();
const experienceInfo = getExperienceInfo();

//Task 1
// How can i merge these two jsons
//...
// const myObject = { name: "foo", surname: "bar"}
// ...myObject = name: "foo", surname: "bar"
const wholeInfo = { ...personalInfo, ...experienceInfo };
//const { name, surname, company } = wholeInfo;
console.log(wholeInfo);
console.log({ ...wholeInfo, ...students });
// overriding
console.log({ ...wholeInfo, ...students, name: "cem" });

// identical copying (deep clone)
const copy = JSON.parse(JSON.stringify(personalInfo));
console.log("asdasd", copy);

function getPersonalInfo() {
  return {
    name: "x-name",
    surname: "x-surname",
    highSchool: "x-school",
    university: "x-university"
  };
}

function getExperienceInfo() {
  return {
    company: "x-company",
    salary: "x-salary",
    experience: "x-experience"
  };
}

// interesting usage (rest)
doJob(1, 2, 3, 4, 5);

function doJob(arg1, ...foo) {
  console.log(arg1, foo);
}

//Task 2
// how can i send foo array's values to the bar function

const foo2 = [1, 32, 48];

bar();

function bar(x, y, z) {
  console.log(x, "-", y, "-", z);
}

//task 3
// Your Codility question
// sort chacters denizdzn -> ddeinnzz
const myString = "denizdzn";

// Promises
function getResponse() {
  console.log("1");
  // wait
  // then
  // callback
  fulfilledPromise().then((response) => {
    console.log(response);
  });

  console.log("3");
}

getResponse();

function fulfilledPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(2);
      resolve("fulfilled return value");
    }, 3000);
  });
}

function rejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(2);
      reject("rejectedPromise return value");
    }, 3000);
  });
}

function randomPromise() {
  return new Promise((resolve, reject) => {
    const functionToBeCalled = Math.random() > 0.5 ? resolve : reject;
    setTimeout(() => {
      console.log(2);
      functionToBeCalled("random return value");
    }, 3000);
  });
}

// Real life example
// Getting data from server

getPersonData();

function getPersonData() {
  // you can either wait for response
  // or use then and catch block
  axios.get("https://swapi.dev/api/people/1").then((response) => {
    const { name } = response.data;
    console.log(name);
  });
}
