const vector3 = require('./vector3');

function sqVectorToVector(v1, v2) {
  let dv = vector3.difference(v1, v2);
  return vector3.sqMagnitude(dv);
}
exports.sqVectorToVector = sqVectorToVector;

function vectorToVector(v1, v2) {
  let dv = vector3.difference(v1, v2);
  return vector3.magnitude(dv);
}
exports.vectorToVector = vectorToVector;

// TODO
/*
function squareDistanceToLine(vector, line) {
  let w1 = subtract(vector, line[0]);
  let w2 = subtract(line[1], line[0]);
  project(w2, w1, w2);
  return squareDistance(w1, w2);
}
prototype.squareDistanceToLine = squareDistanceToLine;
function squareDistanceToLineSegment(vector, line) {
  let w1 = subtract([0, 0, 0], vector, line[0]);
  let w2 = subtract([0, 0, 0], line[1], line[0]);
  let wx = w2[0];
  project(w2, w1, w2);
  let dwx = w2[0] / wx;
  if (dwx * dwx < 1) return squareDistance(w1, w2);
  if (dwx < 0) return squareDistance(vector, line[0]);
  return squareDistance(vector, line[1]);
}
prototype.squareDistanceToLineSegment = squareDistanceToLineSegment;
*/
