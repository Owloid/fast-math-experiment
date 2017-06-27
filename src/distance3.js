function Distance3(options) {
  this.options = options;
}

function create(options) {
  return new Distance3(options);
}
exports.create = create;

Distance3.prototype.sqVectorToVector = function(v1, v2) {
  let Vector = this.options.Vector;

  let dv = Vector.difference(v1, v2);
  return Vector.sqMagnitude(dv);
};

Distance3.prototype.vectorToVector = function(v1, v2) {
  let Vector = this.options.Vector;

  let dv = Vector.difference(v1, v2);
  return Vector.magnitude(dv);
};

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
