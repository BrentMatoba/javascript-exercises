const removeFromArray = function(inputArray) {

    function removeThree(number){
        if (number !=3){
            return number;
        }
    }
    
    let flattened = inputArray.flat();

    
    let final = flattened.filter(removeThree)

    return final;
    
};

// Do not edit below this line
module.exports = removeFromArray;
