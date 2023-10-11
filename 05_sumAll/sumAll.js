const sumAll = function(num1, num2) {
    let sum = 0;

    function num2Larger(){
        
        let length = num1 - num2;
        let sum = 0;
    
        for (i=0; i<=length; i++){
            sum += num1
            num1 +=1;
        }
    }


    function num1Larger(){
        let length = num2 - num1;
        
        for (i=0; i<=length; i++){
            sum += num1
            num1 +=1;
        }
    }

    if (num1 > num2){
        num1Larger();
    }
    else if (num2 > num1){
        num2Larger();
    }





    return sum
//figure out how many interations
//for each iteration, add num1 to sum, then add 1 to num1

};

// Do not edit below this line
module.exports = sumAll;
