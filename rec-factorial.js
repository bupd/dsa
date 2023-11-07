let factorial = function (n) {
    var fact=1;
    cache={};
    i= n;
    console.log(fact);
    console.log(i);
    let recurse = function (n) {
        console.log(n+1);

 if (n===0){
           return fact=n;
        }else if(0<n-1) {
            fact = fact*n;
            n--;
            console.log("fact",n," -- ", cache)
            cache[i]= fact;
            return (recurse (n), cache[i])
        }
    }
    console.log(cache);

       if (i in cache){
        console.log("returning from cache");
            console.log(cache);
        return cache[i];
    }
        else 
    {   return recurse (n);}
}

const fact = function(x) {
    if (x===0){
        return 1;
    }else {
        return x * factorial(x-1);
    };

}; 

console.log(factorial(10));
console.log(fact(10));
console.log(fact(10));
