(function (moduleName, env, getFibonacci) {
    if (typeof module !== "undefined" && module.exports) {
        console.log("Node");
        module.exports = getFibonacci();   
        env[moduleName] = module.exports;  
    } else {
        console.log("Client");
        env[moduleName] = getFibonacci(); 
    }
})("fibonacciNumber", this, function () {
    let fibonacciModule = {
        calculate: (n) => {
            if (n==1) return 0;
            if (n == 2) return 1;
            return fibonacciModule.calculate(n-1)+fibonacciModule.calculate(n-2);
        }
    };

    return fibonacciModule;
});
