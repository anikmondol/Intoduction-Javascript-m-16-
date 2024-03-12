function averageMark(a, b, c, d, e){
    if(typeof a != 'number' || typeof b != 'number' || typeof c != 'number' || typeof d != 'number' || typeof e != 'number'){
        return 'please provide number'
    }else{
        let avg = (a + b + c + d + e) / 5;
        return parseFloat(avg.toFixed(2));
    }
}



console.log(averageMark(75.25, 65, 35.45, 99.50, 80));