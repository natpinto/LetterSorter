//take input and push to an array 

// onclick function to fire

// split, sort, and then join the array

// return the array to our p tag

var input = document.getElementById("input");
var letter = document.getElementById("letter");
string = [];

function sort(string) {
  var userLetter = input.value;
  console.log(userLetter);
  var arr = userLetter.split('');
  var sorted = arr.sort();
  console.log(sorted);
