(function iife(global) {
	//A();
	function C() {
		console.log("OOPS!");
	}

	function E(f) {
		console.log("E");
		f();
	}

	var A = function() {
		console.log("A");
		B();
	};

	var C;

	function G() {
		console.log("G");
		H();

		function H() {
			console.log("H");
			I();
		};
	}

	var D = d;

	function d() {
		console.log("D");
		E(F);
	}

	function I() {
		console.log("I");
		J();
		J();
	}

	B = function() {
		console.log("B");
		C();
	};

	var F = function() {
		console.log("F");
		G();
	};

	var rest = "KLMNOPQRSTUVWXYZ".split("");
	var notGlobal = {};
	for (var i=0; i<rest.length; i++) {
		(function inneriife(i){
			// define the current function
			notGlobal[rest[i]] = function() {
				console.log(rest[i]);
				if (i < (rest.length-1)) {
					notGlobal[rest[i+1]]();
				}
			};
		})(i);
	}

	var J = function() {
		J = function() {
			console.log("J");
			notGlobal.K();
		};
	};

	C = function() {
		console.log("C");
		D();
	}

	return A();

})(window);
