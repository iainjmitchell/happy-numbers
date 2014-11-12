require('chai').should();

describe('1', function(){
	it('is a happy number', function(){
		var mathematician = new Mathematician();
		mathematician.isHappyNumber(1).should.be.true;
	});
});

var Mathematician = function(){
	this.isHappyNumber = function(){
		return true;
	}
}