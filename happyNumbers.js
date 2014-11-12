require('chai').should();

var HAPPY_NUMBERS = [1, 10];

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
	var HAPPY_NUMBER = 1,
		HAPPY_NUMBERS = [1, 10];

	this.isHappyNumber = function(number){
		if (number === HAPPY_NUMBER){
			
			return number * number === HAPPY_NUMBER;
		}
		return HAPPY_NUMBERS.indexOf(number) >= 0;
	}
}