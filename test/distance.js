// test/distance.js
'use strict';

const assert = require('assert');
const math = require('../index');

const vector3 = require('../src/vector3');
const options = {
  Vector: vector3
};

const distance = math.distance.create(options);




describe('distance', function() {
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
    var expected = [];
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
      let result = distance.sqVectorToVector(vectors[0], vectors[1]);
      let expected = 9 + 36;
      assert.equal(result, expected);
    });
  });
});
