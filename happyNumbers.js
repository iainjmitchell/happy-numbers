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
	var HAPPY_NUMBER = 1;

	this.isHappyNumber = function(number){
		var digits = (""+number).split("").map(function(digit){
			return parseInt(digit);
		});
		var result = squareDigits(digits);
		return result === HAPPY_NUMBER;
	};

	function squareDigits(digits){
		if (digits.length === 0){
			return 0;
		}
		var digit = digits[0];
		var tail = digits.slice(1);
		var digitSquared = Math.pow(digit, 2);
		return digitSquared + squareDigits(tail);
	}
}