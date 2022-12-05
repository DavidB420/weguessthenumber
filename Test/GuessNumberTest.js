//test cases 1012ab22f
assert = chai.assert;

// describe() is a function by which you can define a collection of tests. 
// It takes two parameters, the 1st one is a description of what is being tested, and 
// the 2nd one is a function which contains one or multiple tests each defined by one it().
describe('Testing function generateNum() of Task 1', function () {
  var result
  res(1000 / 2);
  result = lower(1000);


  // it() is a function by which you should define one single test.
  // It takes two parameters, the 1st one is a description of what is being tested, and 
  // the 2nd one is a function which normally contains one assert. 
  it('Test 1: generateNum() returns something', function () {

    // assert is the core component of automated testing, by which we can verify wether
    // some condition is true or false. true represents the test has passed, and false 
    // represents a failure. See https://www.chaijs.com/api/assert/
    assert.exists(result, 'the return value is not null or undefined');
  });

  it('Test 2: the returned value is from type number', function () {
    assert.typeOf(result, 'number');
  });

  it('Test 3: the returned value is 500 with range +-1', function () {
    assert(result == 500 || result == 499 || result == 501);
  });

  res(1000 / 2);
  var result2 = higher(1000);


  // it() is a function by which you should define one single test.
  // It takes two parameters, the 1st one is a description of what is being tested, and 
  // the 2nd one is a function which normally contains one assert. 
  it('Test 4: generateNum() returns something', function () {

    // assert is the core component of automated testing, by which we can verify wether
    // some condition is true or false. true represents the test has passed, and false 
    // represents a failure. See https://www.chaijs.com/api/assert/
    assert.exists(result2, 'the return value is not null or undefined');
  });

  it('Test 5: the returned value is from type number', function () {
    assert.typeOf(result2, 'number');
  });

  it('Test 6: the returned value is 1500 with range +-1', function () {
    assert(result2 == 1500 || result2 == 1499 || result2 == 1501);
  });

  var result3 = lower(result2);

  it('Test 4: generateNum() returns something', function () {

    // assert is the core component of automated testing, by which we can verify wether
    // some condition is true or false. true represents the test has passed, and false 
    // represents a failure. See https://www.chaijs.com/api/assert/
    assert.exists(result3, 'the return value is not null or undefined');
  });

  it('Test 5: the returned value is from type number', function () {
    assert.typeOf(result3, 'number');
  });

  it('Test 6: the returned value is 1250 with range +-2', function () {
    assert(result3 >= 1248 && result3 <= 1252);
  });

})

