// Function Join ()
const elements = ['Fire', 'Air', 'Water'];
const separator_1 = '-';
function ownJoin(arr,separator=','){
    let final = arr[0];
    for (let i = 1; i < arr.length; i++) {
        final += `${separator}${arr[i]}`; 
    }
    return final;
}
console.log("My initial array is : " + elements );
console.log("Join function() result is :  " + ownJoin(elements,separator_1));

//Function Reverse ()
const array_1 = ['one', 'two', 'three'];
console.log("My initial array is : " + array_1 );
function ownReverse(arr1){
    let new_arr = [];
    for(let i=arr1.length - 1;i >= 0 ; i--){
        new_arr.push(arr1[i]);
    }
    return new_arr;
}

console.log("Reverse function() result is :  " + ownReverse(array_1));

//Function IndexOf()
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log("My initial array is : " + beasts );
function ownIndexOf(arr2, member,from_index){
    if(!from_index){
        from_index = 0;
    }
    for(i = from_index; i < arr2.length; i++){
        if(arr2[i] === member){
            return i;
        }
    }
    return -1;
}

console.log("IndexOf function() result is :  " + ownIndexOf(beasts, 'camel'));
console.log("IndexOf function() result is :  " + ownIndexOf(beasts, 'bison',2));
console.log("IndexOf function() result is(when member doesn't exist) :  " + ownIndexOf(beasts, 'dog'));

//Function LastIndexOf()
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log("My initial array is : " + animals );
function ownlastIndexOf(arr3,member){
    for(i = arr3.length - 1; i >= 0; i--){
        if(arr3[i] === member){
            return i;
        }
    }
    return -1;
}
console.log("LastIndexOf function() result is :  " + ownlastIndexOf(animals, 'Tiger'));

//Function Concat()
const arr_1 = ['a', 'b', 'c'];
const arr_2 = ['d', 'e', 'f'];
console.log("My initial arrays are : " + arr_1 + " and " + arr_2 );
function ownConcat(arr1,arr2){
    let arr_3 = [];
    for(let i = 0;i < arr1.length; i++){
        arr_3.push(arr1[i]);
    }
    for(let i = 0;i < arr2.length; i++){
        arr_3.push(arr2[i]);
    }
    return arr_3;
}
console.log("Concat function() result is :  " + ownConcat(arr_1,arr_2));


//Function Slice()
const animal = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const number = [1,2,3,4,5];
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log("My initial array is : " + animal );

function ownSlice(arr,start,end) {
  if(start < 0){
    start = arr.length - (start * (-1)) ;
  }
  if(end < 0 ){
         end = arr.length - (end * (-1)) ;
  }
    let new_array = [];
    end = end > arr.length || !end ? arr.length : end;
    for(let i = start;i < end ;i++){
        new_array.push(arr[i]);
    }
    return new_array;
}
console.log("Slice function() result is :  " + ownSlice(animal,2));
console.log("Slice function() result is :  " + ownSlice(animal,1,4));
console.log("Slice function() result is :  " + ownSlice(number,1,-1));   // [2,3,4]
console.log("Slice function() result is :  " + ownSlice(fruits,-3,-1)); // Lemon,Apple


//Function Fill()
const numbers = [1, 2, 3, 4,5];
console.log("My initial array is : " + numbers );
function ownFill(arr,value,start = 0,end){
    end = end > arr.length || !end ? arr.length : end;
    for(let i = start;i < end ;i++){
        arr[i] = value;
    }
    return arr;
}
//console.log("Fill function() result is :  " + ownFill(numbers,9,1));
//console.log("Fill function() result is :  " + ownFill(numbers,2));
console.log("Fill function() result is :  " + ownFill(numbers,7,2,4));