(function (root, factory) {
	if (typeof module !== "undefined" && module.exports) {
		module.exports = factory();   // return the module
	} else {
		root.fiboModule = factory();  // browser global
	}
}(this, function () {

	function fibonacci(n) {
		if (n < 0) throw new Error("Negative numbers not allowed");
		if (n === 1) return 0;
		if (n === 2) return 1;
		return fibonacci(n - 1) + fibonacci(n - 2);
	}

	return { fibonacci };
}));
