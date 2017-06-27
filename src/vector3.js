// vector3.js
'use strict';

function create(x, y, z) {
  return [x, y, z];
}
exports.create = create;

function createBlank() {
  return create(0, 0, 0);
}

function isValid(obj) {
  return Array.isArray(obj) &&
    obj.length === 3 &&
    !isNaN(obj[0]) &&
    !isNaN(obj[1]) &&
    !isNaN(obj[2]);
}
exports.isValid = isValid;

function getX(vector) {
  return vector[0];
}
exports.getX = getX;

function getY(vector) {
  return vector[1];
}
exports.getY = getY;

function getZ(vector) {
  return vector[2];
}
exports.getZ = getZ;

function setX(vector, val) {
  vector[0] = val;
}
exports.setX = setX;

function setY(vector, val) {
  vector[1] = val;
}
exports.setY = setY;

function setZ(vector, val) {
  vector[2] = val;
}
exports.setZ = setZ;


function equals(v1, v2) {
  return getX(v1) === getX(v2) &&
    getY(v1) === getY(v2) &&
    getZ(v1) === getZ(v2);
}
exports.equals = equals;

function sum(v1, v2) {
  let sum = createBlank();

  setX(sum, getX(v1) + getX(v2));
  setY(sum, getY(v1) + getY(v2));
  setZ(sum, getZ(v1) + getZ(v2));

  return sum;
}
exports.sum = sum;

// v1 minuend
// v2 subtrahend
function difference(v1, v2) {
  let difference = createBlank();

  setX(difference, getX(v1) - getX(v2));
  setY(difference, getY(v1) - getY(v2));
  setZ(difference, getZ(v1) - getZ(v2));

  return difference;
}
exports.difference = difference;

// aka Hadamard product
function entrywiseProduct(v1, v2) {
  let product = createBlank();

  setX(product, getX(v1) * getX(v2));
  setY(product, getY(v1) * getY(v2));
  setZ(product, getZ(v1) * getZ(v2));

  return product;
}
exports.entrywiseProduct = entrywiseProduct;

function scalarMult(vector, scalar) {
  let product = createBlank();

  setX(product, getX(vector) * scalar);
  setY(product, getY(vector) * scalar);
  setZ(product, getZ(vector) * scalar);

  return product;
}
exports.scalarMult = scalarMult;

function dotProduct(v1, v2) {
  let x = getX(v1) * getX(v2);
  let y = getY(v1) * getY(v2);
  let z = getZ(v1) * getZ(v2);

  return x + y + z;
}
exports.dotProduct = dotProduct;

function crossProduct(v1, v2) {
  let product = createBlank();

  let v1_x = getX(v1);
  let v1_y = getY(v1);
  let v1_z = getZ(v1);
  let v2_x = getX(v2);
  let v2_y = getY(v2);
  let v2_z = getZ(v2);

  setX(product, v1_y * v2_z - v2_y * v1_z);
  setY(product, v1_z * v2_x - v2_z * v1_x);
  setZ(product, v1_x * v2_y - v2_y * v1_x);

  return product;
}
exports.crossProduct = crossProduct;

function sqMagnitude(vector) {
  let x = getX(vector);
  let y = getY(vector);
  let z = getZ(vector);

  return x * x + y * y + z * z;
}
exports.sqMagnitude = sqMagnitude;

function magnitude(vector) {
  return Math.sqrt(sqMagnitude(vector));
}
exports.magnitude = magnitude;

function normalize(vector) {
  let mag = magnitude(vector);
  return scalarMult(vector, 1/mag);
}
exports.normalize = normalize;

// projection of v1 onto v2
function projection(v1, v2) {
  let u = dotProduct(v1, v2);
  let sqMag = sqMagnitude(v2);
  return scalarMult(u, 1/sqMag);
}
exports.projection = projection;

// TODO
/*
function complement(v1, v2) {
  let u = dotProduct(v1, v2);
}
*/
