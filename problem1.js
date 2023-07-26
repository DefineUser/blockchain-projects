//using a loop
var sum_to_n_a = function(n) {
    let sum = 0;
    for(let i = 1; i <= n; ++i){
        sum += i;
    }
    return sum;
};

//using the sum of an arithmetic series equation, sum = n/2 * (a + l), since n is the last term and a is the first term
//substitute a = 1 and 1 = n, hence sum = n/2 * (1 + n)
var sum_to_n_b = function(n) {
    let sum = n/2 * (1 + n);
    return sum;
};

//using recursion
var sum_to_n_c = function(n) {
    if(n <= 0) {
      return 0;
    }
    return n + sum_to_n_c(n - 1);
};
