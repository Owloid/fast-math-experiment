const assert = require('assert');
const math = require('../src/math.js')
const vector3 = math.vector3;
const distance3 = math.distance3;

describe('vector3', function() {
  var vectors;
  beforeEach(function(){
    vectors = [];
    vectors[0] = vector3.create(1, 2, 3);
    vectors[1] = vector3.create(4, 8, 3);
    vectors[2] = vector3.create(5, 0, 3);
    vectors[3] = vector3.create(4, 8, -2);
    vectors[4] = vector3.create(-19, -21, 5);
    vectors[5] = vector3.create(-31, 10, -8);
    vectors[6] = vector3.create(-12, -3, -4);
    vectors[7] = vector3.create(8, 10, 3);
  });
  afterEach(function(){
    expected = [];
    expected[0] = vector3.create(1, 2, 3);
    expected[1] = vector3.create(4, 8, 3);
    expected[2] = vector3.create(5, 0, 3);
    expected[3] = vector3.create(4, 8, -2);
    expected[4] = vector3.create(-19, -21, 5);
    expected[5] = vector3.create(-31, 10, -8);
    expected[6] = vector3.create(-12, -3, -4);
    expected[7] = vector3.create(8, 10, 3);
    for (var i = 0; i < vectors.length; i++) {
      assert(vector3.equals(vectors[i], expected[i]));
    }
  });

  describe('#equals()', function() {
    it('should be equal', function() {
      let v1 = vector3.create(1, 2, 3);
      let v2 = vector3.create(1, 2, 3);
      assert(vector3.equals(v1, v2));
    });
    it('should be equal', function() {
      let v1 = vector3.create(5, 10, 3);
      let v2 = vector3.create(5, 10, 3);
      assert(vector3.equals(v1, v2));
    });
    it('should not be equal', function() {
      let v1 = vector3.create(5, 0, 11);
      let v2 = vector3.create(5, 1, 11);
      assert(!vector3.equals(v1, v2));
    });
    it('should not be equal', function() {
      let v1 = vector3.create(-5, 0, -11);
      let v2 = vector3.create(-5, 0, -12);
      assert(!vector3.equals(v1, v2));
    });
    it('should not be equal', function() {
      let v1 = vector3.create(5, 10, 3);
      let v2 = vector3.create(4, 10, 3);
      assert(!vector3.equals(v1, v2));
    });
  });

  describe('#sum()', function() {
    it('should give the vectors sum', function() {
      let result = vector3.sum(vectors[0], vectors[1]);
      let expected = vector3.create(5, 10, 6);
      assert(vector3.isValid(result));
      assert(vector3.equals(result, expected));
    });
    it('should give the vectors sum', function() {
      let result = vector3.sum(vectors[2], vectors[3]);
      let expected = vector3.create(9, 8, 1);
      assert(vector3.isValid(result));
      assert(vector3.equals(result, expected));
    });
    it('should give the vectors sum', function() {
      let result = vector3.sum(vectors[4], vectors[5]);
      let expected = vector3.create(-50, -11, -3);
      assert(vector3.isValid(result));
      assert(vector3.equals(result, expected));
    });
    it('should give the vectors sum', function() {
      let result = vector3.sum(vectors[6], vectors[7]);
      let expected = vector3.create(-4, 7, -1);
      assert(vector3.isValid(result));
      assert(vector3.equals(result, expected));
    });
  });

  describe('#difference()', function() {
    it('should give the vector difference', function() {
      let result = vector3.difference(vectors[0], vectors[1]);
      let expected = vector3.create(-3, -6, 0);
      assert(vector3.isValid(result));
      assert(vector3.equals(result, expected));
    });
    it('should give the vector difference', function() {
      let result = vector3.difference(vectors[2], vectors[3]);
      let expected = vector3.create(1, -8, 5);
      assert(vector3.isValid(result));
      assert(vector3.equals(result, expected));
    });
    it('should give the vector difference', function() {
      let result = vector3.difference(vectors[4], vectors[5]);
      let expected = vector3.create(12, -31, 13);
      assert(vector3.isValid(result));
      assert(vector3.equals(result, expected));
    });
    it('should give the vector difference', function() {
      let result = vector3.difference(vectors[6], vectors[7]);
      let expected = vector3.create(-20, -13, -7);
      assert(vector3.isValid(result));
      assert(vector3.equals(result, expected));
    });
  });
});

describe('distance3', function() {
  var vectors;
  beforeEach(function(){
    vectors = [];
    vectors[0] = vector3.create(1, 2, 3);
    vectors[1] = vector3.create(4, 8, 3);
    vectors[2] = vector3.create(5, 0, 3);
    vectors[3] = vector3.create(4, 8, -2);
    vectors[4] = vector3.create(-19, -21, 5);
    vectors[5] = vector3.create(-31, 10, -8);
    vectors[6] = vector3.create(-12, -3, -4);
    vectors[7] = vector3.create(8, 10, 3);
  });
  afterEach(function(){
    expected = [];
    expected[0] = vector3.create(1, 2, 3);
    expected[1] = vector3.create(4, 8, 3);
    expected[2] = vector3.create(5, 0, 3);
    expected[3] = vector3.create(4, 8, -2);
    expected[4] = vector3.create(-19, -21, 5);
    expected[5] = vector3.create(-31, 10, -8);
    expected[6] = vector3.create(-12, -3, -4);
    expected[7] = vector3.create(8, 10, 3);
    for (var i = 0; i < vectors.length; i++) {
      assert(vector3.equals(vectors[i], expected[i]), 'vectors should not be changed');
    }
  });

  describe('#test', function() {
    it('should give the distance between the vectors', function() {
      let result = distance3.sqVectorToVector(vectors[0], vectors[1]);
      let expected = 9 + 36;
      assert.equal(result, expected);
    });
  });
});
