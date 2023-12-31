// Challenge #1

const numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);

/*
This code does not work because the variable is declared  with the keyword "const". When we declare a variable with thus keyword we cannot declare it afterwards. So this code will not work.

*/

//Challenge #2
//first snippet:
const firstNumber = 20;
const secondNumber = '20';
const result = firstNumber === secondNumber;
console.log(result);

//second snippet:
const firstNumber = 20;
const secondNumber = '20';
const result = firstNumber == secondNumber;
console.log(result);
/*
No they wont give the same result.
because "===" checks the types and as the types are not same so "==" will give us true and "===" will give us false result.
*/



//Challenge #3
const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5);
/*
These line of codes can be written as a single one by 
the following code:
const answer= !(((100 % 50)<(100 / 50)) && (300+5)===305);
*/


//Challenge #4
const myObj = {
  prop1: 'first value',
  prop2: 20
};

const myArray = [40, 50, 2];

const result = myObj.prop2 === (myArray[0] / myArray[2]);

/*
The result will true, as:
myArray[0]=40 and myArray[2]=2 so when they divide they will give us the answer of 20.
When we access the value "myObj.prop2" it will give us 20 
When they both will be compared, they will give us answer which will be true. 

*/



//Challenge #5

const myObj = {
  nestedObject1: {
    price: 100,
    quantity: 5
  },
  nestedObject2: {
    price: 150,
    quantity: 2
  }
};

const myArray = [myObj.nestedObject1, myObj.nestedObject2];

const result = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity); 

/*
myArray contains the objects.
So,
myArray[0].price=100
myArray[0].quantity=5
myArray[1].price=150
myArray[1].quantity=2

So evaluating the expression ((100*5)>150*2) So the value will be true.

*/
