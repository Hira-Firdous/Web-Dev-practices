//Challenge 1

//1
const myBoolean='true';

//2
const myString ='hello world';

//3
const firstNumber='20';

//4
let secondNumber='40';

//5
secondNumber='80';

//6
const myArray =[myBoolean, myString];

//7
 const myObject ={
	FirstProperty: myArray,
	sumProperty: fisrtNumber+SecondNumber
		}

//8
console.log(myObject);

//9
console.log(myObject.sumProperty);

//10
console.log(myObject.FirstProperty[0]);

//Challenge 2
/*
firstly there is spacing in the initialization of our variable. secondly there is no ";" in second line and thirdly as the variable is being declared afterwards so use of let insead of const

*/

//Challenge 3

const some Number = 20;

someNumber = 50


//it will be equal to 2040 cause an int is being added to a string. The data type of it will be string.


//Challenge 4
//In the declaration of object ";" is being used. where as ";" is use at the end of a line. So this is not valid cause it should be ","

//for the editing:
const objectVariable = {
  property1: 'i am property 1',
  property2: 'i am property 2',
  property3: [20, 30, 40]
};

console.log(objectVariable.property3[2]);

//it should be like this.


//Challenge 5

//This code does not work cause the index use for elemt accessing is not valid. The value at that index does not exist.
//the correct solution will be:
const myArray = [20, 30, 40];

console.log(myArray[2]);
