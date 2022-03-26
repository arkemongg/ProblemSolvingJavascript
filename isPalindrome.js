var isPalindrome = function(x) {
    let z = x.toString().split('').reverse();

    let z2 = x.toString().split('');
    
    return z.join('') === z2.join('');
     
};