var splitter = function(numberString){
  //result [[1,2,3],[4,5,6],[7,8,9]]

  var numberArray = numberString.split("").map(Number);
  var bigArray = [];
  var originalLength = numberArray.length;

  for (var i=0; i<originalLength; i+=3) {
    bigArray.push(numberArray.slice(-3));
    numberArray.splice(((numberArray.length)-3), 3);
  };

  return bigArray.reverse();

};

var numbersInWords = function(numberString){
  // var numberString = numberInput.toString();
  // var numberArray = numberString.split("").map(Number);
  var bigArray = splitter(numberString);
  var finalArray = [];
  var powerNum = 0;


  var onesWords = { 0: "", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine" };

  var teensWords = { 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen" };

  var tensWords = { 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety" };

  var powerWords = {1000:"thousand",1000000:"million",1000000000:"billion",
                    1000000000000:"trillion"};

  for (var i=0; i<bigArray.length; i++) {

    var l = bigArray[i].length;
    powerNum = 0;

    if (bigArray.length === 1 && bigArray[i][0] === 0) { // special case of zero input
      finalArray.push("zero");
      break;
    };

    if (l === 3 && bigArray[i][0] !== 0) {    //hundreds
      finalArray.push(onesWords[bigArray[i][0]] + " " + "hundred");
    };

    if (bigArray[i][l-2] >= 2 && bigArray[i][l-1] !== 0) { //20-99
      finalArray.push(tensWords[bigArray[i][l-2]] + " " + onesWords[bigArray[i][l-1]]);
    } else if (bigArray[i][l-2] >= 2 && bigArray[i][l-1] === 0) { //20-99
      finalArray.push(tensWords[bigArray[i][l-2]]);
    } else if (bigArray[i][l-2] === 1) { //teens
      var teenNumber = "1" + bigArray[i][l-1];
      var teenNumberInt = parseInt(teenNumber);
      finalArray.push(teensWords[teenNumberInt]);
    } else if (bigArray[i][l-2] === 0) {
      if (bigArray[i][l-1] !== 0) {   //ones
        finalArray.push(onesWords[bigArray[i][l-1]]);
      };
    } else if (l = 1 && bigArray[i][0] !== 0) {   //ones
      finalArray.push(onesWords[bigArray[i][l-1]]);
    };

    // write out order of magnitude
    powerNum = Math.pow(10,((bigArray.length-i-1) * 3));
    if (powerNum >= 1000 && (bigArray[i][0] !== 0 || bigArray[i][1] !== 0 || bigArray[i][2] !== 0)) {
    finalArray.push(powerWords[powerNum]);
    };

  }; // end for loop

  console.log(finalArray);
  return finalArray.join(" ");

}; // end function

$(document).ready (function () {

  $("form#input-form").submit (function (event) {

    var inputNumberString = $("input#input").val();
    var inputNumberString2 = inputNumberString.match(/\d+/g).join("");
    var outputString = numbersInWords(inputNumberString2);

    $(".output").text(outputString);
    $("#result").show();

    event.preventDefault();

  });

});

