describe("numbersInWords", function() {
  it("returns 'zero' if the user enters 0", function() {
    numbersInWords(0).should.equal('zero');
  });
  it("returns the correct string for numbers 1-9", function() {
    numbersInWords(3).should.equal('three');
  });
  it("returns the correct string for numbers 10-19", function() {
    numbersInWords(13).should.equal('thirteen');
  });
  it("returns the correct string for numbers 20-99", function() {
    numbersInWords(20).should.equal('twenty ');
  });
  it("returns the correct string for numbers 100-999", function() {
    numbersInWords(239).should.equal('two hundred thirty nine');
  });
});
