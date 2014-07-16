describe("splitter", function() {
  it("turns the input 1234567 into [[1],[2,3,4],[5,6,7]]", function() {
    splitter("1234567890").should.eql([[1],[2,3,4],[5,6,7],[8,9,0]]);
  });
  it("turns the input 1234567 into [[1],[2,3,4],[5,6,7]]", function() {
    splitter("1234567").should.eql([[1],[2,3,4],[5,6,7]]);
  });
    it("turns the input 123 into [[1,2,3]]", function() {
    splitter("123").should.eql([[1,2,3]]);
  });
    it("turns the input 12 into [[1,2]]", function() {
    splitter("12").should.eql([[1,2]]);
  });
    it("turns the input 1 into [[1]]", function() {
    splitter("1").should.eql([[1]]);
  });
});

describe("numbersInWords", function() {
  it("returns 'zero' if the user enters 0", function() {
    numbersInWords("0").should.equal('zero');
  });
  it("returns the correct string for numbers 1-9", function() {
    numbersInWords("3").should.equal('three');
  });
  it("returns the correct string for numbers 10-19", function() {
    numbersInWords("13").should.equal('thirteen');
  });
  it("returns the correct string for numbers 20-99", function() {
    numbersInWords("24").should.equal('twenty four');
  });
  it("returns the correct string for numbers 100-999", function() {
    numbersInWords("239").should.equal('two hundred thirty nine');
  });
  it("returns the correct string for numbers with 4 or more digits", function() {
    numbersInWords("1234").should.equal('one thousand two hundred thirty four');
  });
  it("returns the correct string for numbers with 4 or more digits", function() {
    numbersInWords("1234567").should.equal('one million two hundred thirty four thousand five hundred sixty seven');
  });
    it("should display 'zero' for the entered value of 0", function() {
    numbersInWords("0").should.equal("zero");
  });
  it("should display 'one' for the entered value of 1", function() {
    numbersInWords("1").should.equal("one");
  });
  it("should display 'twenty nine' for the entered value of 29", function() {
    numbersInWords("29").should.equal("twenty nine");
  });
  it("should display 'three hundred' for the entered value of 300", function() {
    numbersInWords("300").should.equal("three hundred");
  });
  it("should display 'three hundred twenty six' for the entered value of 326", function() {
    numbersInWords("326").should.equal("three hundred twenty six");
  });
  it("should display 'one thousand forty three' for the entered value of 1043", function() {
    numbersInWords("1043").should.equal("one thousand forty three");
  });
  it("should display 'one thousand one hundred forty three' for the entered value of 1143", function() {
    numbersInWords("1143").should.equal("one thousand one hundred forty three");
  });
  it("should display 'nine thousand one hundred forty three' for the entered value of 9143", function() {
    numbersInWords("9143").should.equal("nine thousand one hundred forty three");
  });
  it("should display 'eleven thousand two hundred three' for the entered value of 11203", function() {
    numbersInWords("11203").should.equal("eleven thousand two hundred three");
  });
  it("should display 'one hundred thousand three' for the entered value of 100003", function() {
    numbersInWords("100003").should.equal("one hundred thousand three");
  });
  it("should display 'one hundred forty thousand three' for the entered value of 140003", function() {
    numbersInWords("140003").should.equal("one hundred forty thousand three");
  });
  it("should display 'one billion two' for the entered value of 1000000002", function() {
    numbersInWords("1000000002").should.equal("one billion two");
  });
});

