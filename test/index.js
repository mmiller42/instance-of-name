const instanceOf = require('../');
const should = require('should');

describe('instanceOf', function () {
	it('validates the example', function () {
		class Car {}
		class Ford extends Car {}
		class Focus extends Ford {}
		
		let focus = new Focus();
		instanceOf(focus, 'Focus').should.be.true();
		instanceOf(focus, 'Ford').should.be.true();
		instanceOf(focus, 'Car').should.be.true();
		instanceOf(focus, 'Object').should.be.true();
		instanceOf(focus, 'Array').should.be.false();
	});
});
