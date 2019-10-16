const { expect } = require('chai');
const Util = require('../src/util');

describe('Util', () => {
  it('passes canary test', () => {
    expect(true).to.be.true;
  });

  let util;

  beforeEach(() => {
    util = new Util();  
  });

  it('f2c returns 0C for 32F', () => {
    const fahrenheit = 32;

    const celsius = util.f2c(fahrenheit);

    expect(celsius).to.equal(0);
  });

  it('f2c returns 10C for 50F', () => {
    const fahrenheit = 50;

    const celsius = util.f2c(fahrenheit);

    expect(celsius).to.equal(10);
  });
});