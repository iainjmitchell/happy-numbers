require('chai').should();

var HAPPY_NUMBERS = [1, 7];

HAPPY_NUMBERS.forEach(function(number){
	describe(number, function(){
		it('is a happy number', function(){
			var mathematician = new Mathematician();
			mathematician.isHappyNumber(number).should.be.true;
		});
	});
});

var NON_HAPPY_NUMBERS = [2, 3];

NON_HAPPY_NUMBERS.forEach(function(number){
	describe(number, function(){
		it('is not a happy number', function(){
			var mathematician = new Mathematician();
			mathematician.isHappyNumber(number).should.be.false;
		});
	});
});

var Mathematician = function(){
	this.isHappyNumber = function(number){
		return number === 1 ;
	}
}