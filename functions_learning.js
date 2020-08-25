// Function Join ()
const Elements = ['Fire', 'Air', 'Water'];
const separator_1 = '-';
function OwnJoin(arr,separator){
    let final = arr[0];
    for (let i = 1; i < arr.length; i++) {
      final += separator + arr[i];
    }
    return final;
}
console.log("My initial array is : " + Elements );
console.log("Join function() result is :  " + OwnJoin(Elements,separator_1));

//Function Reverse ()
const array1 = ['one', 'two', 'three'];
console.log("My initial array is : " + array1 );
let new_arr = [];
function OwnReverse(arr1){
    for(let i=arr1.length - 1;i >= 0 ; i--){
        new_arr.push(arr1[i]);
    }
    return new_arr;
}

console.log("Reverse function() result is :  " + OwnReverse(array1));

//Function IndexOf()
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log("My initial array is : " + beasts );
function OwnIndexOf(arr2, member,from_index){
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

console.log("IndexOf function() result is :  " + OwnIndexOf(beasts, 'camel'));
console.log("IndexOf function() result is :  " + OwnIndexOf(beasts, 'bison',2));
console.log("IndexOf function() result is(when member doesn't exist) :  " + OwnIndexOf(beasts, 'dog'));

//Function LastIndexOf()
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log("My initial array is : " + animals );
function OwnlastIndexOf(arr3,member){
    for(i = arr3.length - 1; i >= 0; i--){
        if(arr3[i] === member){
            return i;
        }
    }
    return -1;
}
console.log("LastIndexOf function() result is :  " + OwnlastIndexOf(animals, 'Tiger'));

//Function Concat()
const arr_1 = ['a', 'b', 'c'];
const arr_2 = ['d', 'e', 'f'];
console.log("My initial arrays are : " + arr_1 + " and " + arr_2 );
let arr_3 = [];
function OwnConcat(arr1,arr2){
    for(let i = 0;i < arr1.length; i++){
        arr_3.push(arr1[i]);
    }
    for(let i = 0;i < arr2.length; i++){
        arr_3.push(arr2[i]);
    }
    return arr_3;
}
console.log("Concat function() result is :  " + OwnConcat(arr_1,arr_2));


//Function Slice()
const Animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log("My initial array is : " + Animals );

function OwnSlice(arr,start,end) {
    let new_array = [];
    if((end > arr.length)||(!end)) {
        for(let i=start;i<arr.length;i++){
            new_array.push(arr[i]);
        }
    } 
    for(let i = start;i < end ;i++){
        new_array.push(arr[i]);
    }
    return new_array;
}
console.log("Slice function() result is :  " + OwnSlice(Animals,2));
console.log("Slice function() result is :  " + OwnSlice(Animals,1,4));


//Function Fill()
const numbers = [1, 2, 3, 4,5];
console.log("My initial array is : " + numbers );
function OwnFill(arr,value,start,end){
    if(!start){
        start = 0;
    }
    if((end > arr.length)||(!end)){
        for(let i = start;i < arr.length;i++){
            arr[i]=value;
        }
    } 
    for(let i = start;i < end ;i++){
        arr[i]=value;
    }
    return arr;
}
//console.log("Fill function() result is :  " + OwnFill(numbers,9,1));
//console.log("Fill function() result is :  " + OwnFill(numbers,2));
console.log("Fill function() result is :  " + OwnFill(numbers,7,2,4));