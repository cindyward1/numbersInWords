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
    numbersInWords("1234").should.equal('one two hundred thirty four');
  });
  it("returns the correct string for numbers with 4 or more digits", function() {
    numbersInWords("1234567").should.equal('one two hundred thirty four five hundred sixty seven');
  });
});

