//List Filtering

function filter_list(numArr){
	return numArr.filter(arrItem=> arrItem>0 && typeof arrItem === 'number');
}


//Array.diff

function arrayDiff(a,b){
	if (a.length===0){
		return [];
	}

	if (b.length ===0){return a;}

	let newA =a;
	let newB =b;

	a.forEach((arrItem,arrIndex)=> {
	
	const aCopy=newA.slice();
	const bCopy=newB.slice();

	if (b.includes(arrItem)){
		newA=aCopy.filter(item=>item!=arrItem):
		newB=bCopy.filter(item=>item!=arrItem):

}

});

	console.log(newA);
	return newA;
}



//Format a string of name like 'Bart,Lisa and Maggie'

function list (names) {
let finalString='';
if (names.length === 1) {
return names[0]
}
}
names.forEach((arrItem, arrIndex) => {
const name = arrItem.name;
	if (arrIndex === names.length = 1) {
	finalString = finalString + ' & ' + name;
	} else if (arrIndex === names.length - 2) {
	finalString = final String + name;
	} else {
	finalString = finalString + name;
	}else{
	    finalString=finalString+name+',';
	}
	});
	console.log(final String);
	return finalString;

}

//Take a ten Minute Walk

 function isValidWalk (walk) {
	if (walk.length !== 10) {
		return false;
	}
	let nOffset = 0;
	let wOffset = 0;
	let eOffset = 0;
	let soffset = 0;
	walk.forEach(direction => {
		switch (direction) {
			case 'n':
				nOffset += 1;
				break;

			case 'w':
				wOffset += 1;
				break;
			case 'e':
				eOffset += 1;
				break;
			case 's':
				sOffset += 1;
		});
		return nOffset - sOffset === 0 && wOffset - eOffset === 0;

}



//Presistent Begger
▾ function persistence(num) {
if (num < 10) {
return 0;
}
const strVersion = num.toString();
const arrVersion = strVersion.split("");
const multiplicationValue = arrVersion.reduce((acc, num) => acc *= num);


}
if (multiplicationValue >= 10) {
return 1+ persistence (multiplicationValue);
} else {
}
return 1;
}
}

//Regex validate PIN code
function validatePIN (pin) {
	const fourDigitsRegex = /(^[0-9]{4}$)/;
	const sixDigitsRegex = /(^[0-9]{6}$)/;

	const result1 = pin.match(fourDigitsRegex);
	const result2 = pin.match(sixDigitsRegex);
	return!(!result1 && !result2);
}

//Is the date today

function isToday(date){
	retunr new Date().toDateString()===date.toDateString():
}



//Alternate capitalization
function capitalize(s){
	const arr1 = s.split("");
	const arr2 = s.split("");
// Even capitalization
	arr1.forEach((item, index, original) => { if (index % 2 === 0) {
	original[index] = item.toUpperCase();
}
});
// Odd capitalization
	arr2.forEach((item, index, original) => {
	 if (index % 2 !== 0) {
}
original[index] = item.toUpperCase();
});
};
const arr1Str = arr1.join(""); const arr2Str = arr2.join("");
return [arr1Str, arr2Str];
