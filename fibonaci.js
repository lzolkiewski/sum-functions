function fib(n, memo = {}){
    if(n in memo) return memo[n];
    if(n <= 2) return 1;

    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}

for(var i = 0; i<=1000; i++){
    console.log(i.toLocaleString() + ' : ' + fib(i));
}
