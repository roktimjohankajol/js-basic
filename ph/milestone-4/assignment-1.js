// Problem Solving-1 
function cubeNumber(number) {
    
    if (isNaN(number) || typeof number === 'string' || typeof number === 'boolean') {
        return 'Please enter just number';
    }

    if( number <= 0){
        return 'Please enter a positive number ';
    }

    for (let i = 1; i <= number; i++) {
            cube = i ** 3;
        }

    return cube;

  }
  
  console.log(cubeNumber(3));


  // Problem Solving - 2 

function matchFinder(string1, string2) {

    if(typeof string1 !== 'string' || typeof string2 !== 'string'){

        return 'Please enter a string word';
    }

    const matchingWord = string1.includes(string2);

    return matchingWord; 
    
}
console.log(matchFinder('Kajol Hossain', 'Kajol'));


// Problem Solving - 3

function sortMaker(arr) {
    
    if( arr.some(element => element <0 )){
        return 'Invalid Input';
    }

    const equal = arr.slice().reverse();

    if( JSON.stringify(arr) === JSON.stringify(equal) ){
        return 'equal'; 
    }

    return arr.slice().sort((a, b) => (a - b)).reverse();
}

console.log(sortMaker([0, 1]));


// Problem Solving - 4 

function findAddress(obj){
    const address = {street: 10, house : '15 A', society : 'Earth Perfect'}

    const keys = ['street', 'house', 'society'];
    const objectValues = keys.map( key => address[key] || '__').join(', ');

    return objectValues;
}
console.log(findAddress());


// Problem Solving - 5

function canPay(changeArray, totalDue) {
    
    if(changeArray.length ===  0){
        return 'The array is empty'
    }

    let array = 0;

    for (let i = 0; i < changeArray.length; i++) {
        array = changeArray[i] + 1;
        if (array >= totalDue) {
            return true;
        }
    }

    return false;
    
}

console.log(canPay([5,1,3], 15));