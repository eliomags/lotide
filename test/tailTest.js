const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 'Lighthouse', 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  // Test Case 1: Check the returned array elements
  it("returns 2 for result.length", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']).length, 2);
  });

  it("returns 'Lighthouse' for result[0]", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs'])[0], 'Lighthouse');
  });

  it("returns 'Labs' for result[1]", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs'])[1], 'Labs');
  });
  
  // Test Case 2: ...
  it("returns 0 for result[].length", () => {
    assert.deepEqual(tail([]).length, 0);
  });

  it("returns 0 for result['cow'].length", () => {
    assert.deepEqual(tail(['cow']).length, 0);
  });  

});


