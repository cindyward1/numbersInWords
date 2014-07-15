var splitter = function(numberInput){
  var numberString = numberInput.toString();
  var numberArray = numberString.split("").map(Number);
  var bigArray = [];
  var originalLength = numberArray.length;

  for (var i=0; i<originalLength; i+=3) {

  bigArray.push(numberArray.slice(-3));
  numberArray.splice(((numberArray.length)-3), 3);
}
  return bigArray.reverse();

  //result [[1,2,3],[4,5,6],[7,8,9]]
}

var numbersInWords = function(bigArray){
  // var numberString = numberInput.toString();
  // var numberArray = numberString.split("").map(Number);

  var finalArray = [];


  var onesWords = { 0: "", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine" };

  var teensWords = { 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen" };

  var tensWords = { 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety" };


  for (var i=0; i<bigArray.length; i++) {

    var l = bigArray[i].length;

    if (l === 3) {    //hundreds
      finalArray.push(onesWords[bigArray[i][0]] + " " + "hundred");
    }
    // } else if (l === 3 && bigArray[i][1] === 0)

    if (bigArray[i][l-2] >= 2) { //20-99
      finalArray.push(tensWords[bigArray[i][l-2]] + " " + onesWords[bigArray[i][l-1]]);

    } else if (bigArray[i][l-2] === 1) { //teens
      var teenNumber = "1" + bigArray[i][l-1];
      var teenNumberInt = parseInt(teenNumber);
      finalArray.push(teensWords[teenNumberInt]);

    } else if (l=1 && bigArray[i][0] === 0) {     //zero
      finalArray.push("zero");

    } else if (l = 1) {   //ones
      finalArray.push(onesWords[bigArray[i][0]]);
    };
   console.log(finalArray);

   return finalArray.join("");
}
}
