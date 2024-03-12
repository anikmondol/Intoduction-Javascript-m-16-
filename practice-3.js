function findRemainder(num){
    if(typeof num != 'number'){
        return 'please give me number'
    }else{
        let ans = num % 5;
        return ans;
    }
}


console.log(findRemainder(119));