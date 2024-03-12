

function isPrice(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'please provide ma a number';
    }else{
        var total = a + b;
        return ans = 1000 - total;
    }
}

console.log(isPrice(100, 200));


