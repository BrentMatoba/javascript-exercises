const palindromes = function (word) {
//take word
//iterate through front and from back.
const processed = word.toLowerCase().replace(/^[a-zA-Z0-9]$/);
return processed.split("").reverse().join("") == processed;


//This is code from the solution not my own***
//I think the takeaway from this is that I don't spend enough time thinking about the problem
//and jump right in. This would ahve been so much less of a headache if I had taken the time to
//peruse javascripts string manipulation methods. Usually when working with data, half the 
//effort is cleaning the data before starting.

};

// Do not edit below this line
module.exports = palindromes;






