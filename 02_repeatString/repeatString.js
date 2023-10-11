const repeatString = function(string, number) {
    let final = "";
    if (number<0){
        return "ERROR"
    }
    for (let i = 0; i < number; i+=1){
        final += string
    }
    return final;
    
};

// Do not edit below this line
module.exports = repeatString;
