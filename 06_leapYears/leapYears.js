const leapYears = function(year) {
    let four = false;
    let hundred = false;
    let leap = false;

    if (Number.isInteger(year/4)){
        let four = true;
    }
    if (!(Number.isInteger(year/100))){
        let hundred = true;
    }
    if (four == true && hundred == true){
        return true;
        
    }
    return true

};

// Do not edit below this line
module.exports = leapYears;
