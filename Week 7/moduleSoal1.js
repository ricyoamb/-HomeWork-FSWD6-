exports.areaRectangle = function (length, width) {
  return length * width;
};

exports.perimeterRectangle = function (length, width) {
  return 2 * (length + width);
};

exports.areaRSquare = function (squareSide) {
  return squareSide ** 2;
};

exports.perimeterSquare = function (squareSide) {
  return 4 * squareSide;
};