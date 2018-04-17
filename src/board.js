export function Board() {
  this.board = [[], [], [], [], [], [], [], [], []];
}

Board.prototype.checkRow = function (row) {
  for (var i = 0; i < 9; i++) {
    var element1 = this.board[row][i];
    for (var j = 0; j < 9; j++) {
      var element2 = this.board[row][j];
      if (element1 === element2 && i !== j) {
        return false;
      }
    }
  }
  return true;
};
Board.prototype.checkCol = function (col) {
  for (var i = 0; i < 9; i++) {
    var element1 = this.board[i][col];
    for (var j = 0; j < 9; j++) {
      var element2 = this.board[j][col];
      if (element1 === element2 && i !== j) {
        return false;
      }
    }
  }
  return true;
};
// Board.prototype.checkBox = function (box) {
//   var boxElements = [];
//   for (var i = box[0]; i < (box[0] + 3); i++) {
//     for (var j = box[1]; j < (box[1] + 3); j++) {
//       boxElements.push(this.board[i][j])
//     }
//   }
// };
