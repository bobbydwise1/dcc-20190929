/*
This problem was asked by Facebook.

Given an array of integers, write a function to determine whether the array could become non-decreasing by modifying at most 1 element.

For example, given the array [10, 5, 7], you should return true, since we can modify the 10 into a 1 to make the array non-decreasing.

Given the array [10, 5, 1], you should return false, since we can't modify any one element to get a non-decreasing array.
*/

const makeDec = (yourArray) => {
  if (yourArray.length < 3) {
    return null
  }
  let count = 0
  for ( let i = 0; i < yourArray.length-1; i++ ) {
    if ( yourArray[i] > yourArray[i+1] ) {
      count++
    }
  }
  if ( count <= 1 ) {
    return true;
  } else if (count > 1) {
    return false;
  }
}

let test1 = [10,5,7]
let test2 = [10,5,1]
let test3 = [1,2,3,4,5,6,7,8]
let test4 = [8,7,6,5,4,3,2,1]
let test5 = [1,2,3,10,5,6,7,8]
console.log(makeDec(test1)) //true
console.log(makeDec(test2)) //false
console.log(makeDec(test3)) //true
console.log(makeDec(test4)) //false
console.log(makeDec(test5)) //true

$(document).ready(function() {
  $('#form-1').submit(function(){
    event.preventDefault()
    let input1 = $('#input-1').val()
    input1 = input1.replace(/\'/g,'"')  //JSON.parse does not like single quotes for arrays
    input1 = JSON.parse(input1)
    $('#output-1').text(JSON.stringify(makeDec(input1)))
  })
});
