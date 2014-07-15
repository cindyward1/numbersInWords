var numbersInWords = function(numberInput){
  var numberString = numberInput.toString();
  var numberArray = numberString.split("").map(Number);
  var l = numberArray.length;
  var finalArray = [];


  var onesWords = { 0: "", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine" };

  var teensWords = { 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen" };

  var tensWords = { 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety" };


  if (l === 3) {
    finalArray.push(onesWords[numberArray[0]] + " " + "hundred");

  };
  if (numberArray[l-2] >= 2) {
    finalArray.push(tensWords[numberArray[l-2]] + " " + onesWords[numberArray[l-1]]);

  } else if (numberArray[l-2] === 1) {
    var teenNumber = "1" + numberArray[l-1];
    var teenNumberInt = parseInt(teenNumber);
    finalArray.push(teensWords[teenNumberInt]);

  }
  else if (l=1 && numberArray[0] === 0) {
    finalArray.push("zero");
  } else if (l = 1) {
    finalArray.push(onesWords[numberArray[0]]);
  };

return finalArray.join(" ");

}

