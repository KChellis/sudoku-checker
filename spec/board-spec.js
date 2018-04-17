import { Board } from './../src/board.js';

describe("Board", function(){
  it("should check a row for non-repeated numbers 1-9", function() {
    expect(board.checkRow()).toEqual("true");
  });


});
