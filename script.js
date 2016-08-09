

var protoInheritance = (function() {

	var canvas 	= $('#canvas-area');	
	var ctx 	= canvas[0].getContext("2d");

	// Main Object
	var ball = {
		color: '#e3e3e3',

		draw: function(x,y,r) {
			this.x = (x === null) ? 0 : x;
		    this.y = (y === null) ? 0 : y;
		    this.r = (r === null) ? 0 : r;
		    
		    
	        ctx.beginPath();
	        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
	        ctx.fillStyle = this.color;
	        ctx.fill();
		    
		}
	}

	// Instanciates the 'ball' object and adds a new method to it
	var movingBall = Object.create(ball);
	movingBall.move = function() {
		console.log('moving');
	}

	var init = function() {
		console.log('protoInheritance');
		movingBall.draw(5,5,5);
		movingBall.move();
	}

	return {
		init: init
	}

}());

protoInheritance.init();