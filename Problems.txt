 /*
Mulpliply function
*/

function multiply(a,b){
	return a*b
}

//OR

multiply =(a,b)=> a*b;


/*
   function getPlanetName
*/

function getPlanetName(id){
	var name;
	switch(id){
	    case 1:
		name='Mercury'
		break;
	    case 2:
		name='Venus'
		break;
	    case 3:
		name='Earth'
		break;
	    case 4:
		name='Mars'
		break;
	    case 5:
		name='Jupiter'
		break;
	    case 6:
		name='Saturn'
		break;
	    case 7:
		name='Uranus'
		break;
	    case 8:
		name='Neptune'

}

return name;
}

/*
String reverse
*/

function solution(input_string){
	list_of_string=input_string.split("");
	reverse=list_of_string.reverse();
	return reverse.join("");
}




/*
even and odd
*/

function even_or_odd(number){
	return number%2 ? 'Odd':'Even'
}

/*
Get the count of vowels in the given input.
*/

function getCount(input_string){
	let vowelsCount=0;
	const Vowels=['a','e','i','o','u'];
	for(let i=0;i<input_string.length;i++){
	   if (str[i]===Vowels[i]){
		vowelsCount++;
}
}
	return vowelsCount;
}



/*
Jenny's secret message
*/

function greet(name){
	return "Hello, "+ (name =="Johnny" ? "my love" : name)+"!";
}


/*
Is n divisible by x,y?
*/

isDivisible=(n,x,y) => (n%x===0 && n%y===0) ? true : flase;


/*
Return Negative
*/

function makeNegative(number){
	return number<0? number: -number
}



/*
Find the smallest integer in the array 
*/
class SmallestIntegerFinder{
	findSmallestInt(arrayOfNumbers){
	let smallestNumber;
	for (let i=0;i<arrayOfNumbers.length; i++){
		const arrNumber=arrayOfNumbers[i];
		if (i==0){
			smallestNumber=arrNumber;
		}
		if (arrNumber<smallestNumber){
			smallestNumber=arrNumber;
		}
	}
	
	return smallestNumber;
}
}


/*
Grasshopper-Summation
*/

var summation =function(number){
	let sum=0;
	for(let i =1; i<=number; i++){
		sum=sum+i;
	}
	return sum;
}




/*
Get the mean of an array
*/
function getAverage(marks){
	return Math.floor(marks.reduce(sum,x)=> sum+x)/marks.length;
}


/*
Rock Paper Scissors!
*/
const rockPaperScissors=(p1,p2)=>{
	if (p1==p2){return 'Draw';}
	if((p1=='rock'&& p2=='scissors') || (p1=='Scissors'&& p2=='paper')|| (p1=='paper'&& p2=='rock'))
{return 'player1 won!';}
	 else:
		return 'Player 2 won!';
	
}


/*
Remove First and Last Character
*/

function RemoveFirstandLast(input_string){
	return input_string.slice(1,-1)
}




/*
Sum of Positive
*/
function positiveSum(input_array){
	let sum=0;
	for (let i=0; i< input_array.length;i++){
		if (input_array[i]>0){
		sum=sum+input_array[i];
	}
	
	}
	
	return sum;
}




/*
Arithmetic operations
*/
function basicOp(operation,value1,value2){
	if (operator==="+"){return value1+value2;}
	if (operator==="-"){return value1-value2;}
	if (operator==="*"){return value1*value2;}
	if (operator==="/"){return value1/value2;}
}


/*
String repeat
*/

function repeatStr(n,s){
	return s.repeat(n);
}


/*
Convert String to array
*/

function stringToArray(input_string){
	return input_string.split("");

}


/*
Remove:String Spaces
*/

function noSpace(input_string){
	const arr= input_string.split(" ");
	let newArray=[];
	
	for (let i=0; i<arr.length; i++){
		const trimmedString= arr[i].trim();
		newArray.push(trimmedString);
	}
	
	const finalString =newArray.join("");
	return finalString;
}




/*
Lost Without Map
*/

function maps(arr){
	const result= arr.map(arrItem)=>{
		return arrItem*2;
	});

	return result;
}



/*
Is he gonna survive
*/

function hero(bullets, dragons){
	return bullets/dragons>=2;
}



/*
Array plus array
*/
function arrayPlusArray(arr1,arr2){
	let sum=0;
	for (let i=0; i<arr.length; i++){
		let arr1Value=arr1[i];
		let arr2Value=arr2[i];
		let addedValue=arr1Value+arr2Value;
		sum=sum+addedValue;
	}

	return sum;
}





/*
Century of years
*/

function century(year){
	return Math.ceil(year/100);
}




/*
Cat year, Dog year 
*/

var humanYearsCatYearsDogYears=function(y){
	if(y=1){return [1,15,15];}
	if(y==2){return [2,24,24];}
	return [y,(y-2)*4+24,(y-2)*5+24];

}


/*
Total_Ammount_of_points
*/

function points(games){
	let totalPoints=0;
	for (let i=0;i<gamesArray.length;i++){
	const value =gamesArray[i];
	const parts =value.sprit(":");
	const x=parts[0];
	const y=parts[1];

	if(x>y){
	  totalPoints =totalPints+3;
	}else if(x==y){totalPoints +=1;}

}
	return totalPoints;
}
