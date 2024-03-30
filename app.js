function submit() {
    var text = document.getElementById("text");
    var questions = [];
    var value = text.value.split("\n");
    var obj = {};
    var count = 1;

    for (var i = 0; i < value.length; i++) {
        // console.log(value[i])
        if (value[i] === "") {
            questions.push(obj);
            obj = {};
            count = 1;
        } else {
            if (value[i].lastIndexOf("?") !== -1) {
                obj.question = value[i];
            } else {
                if (value[i].lastIndexOf("*") !== -1) {
                    obj.answer = value[i].slice(0, -1);
                    obj['option' + count] = value[i].slice(0, -1);
                } else {
                    obj['option' + count] = value[i]
                }
                count++
            }
        }
    }

    console.log(questions)
}


// Who is the President of US?
// Joe Biden*
// Donald Trump
// Barack Obama
// George Bush

// Who is the President of US?
// Joe Biden*
// Donald Trump
// Barack Obama
// George Bush

// What is the result of the following expression: 5 + "5"?
// 10
// "55"*
// 55
// Error

// Which statement is used to terminate a loop in JavaScript?
// stop
// exit
// break*
// end

// What method is used to add a new element to the end of an array in JavaScript?
// append
// push*
// add
// insert

// How can you convert a string to an integer in JavaScript?
// parseInt()*
// toInteger
// convertToInt
// intConvert

// What does the typeof operator in JavaScript return for the value null?
// "null"
// "object"*
// "undefined"
// "number"

// Which symbol is used for strict equality comparison in JavaScript?
// ==
// ===*
// =
// !==

// How can you check if a variable is an array in JavaScript?
// isArray(variable)*
// is_array(variable)
// variable.isArray()
// typeof variable === "array"

// What does the NaN stand for in JavaScript?
// Not a Null
// Not a Number*
// Non-Applicable Number
// No Assigned Number

// What does the toFixed() method do in JavaScript?
// Rounds a number to the nearest integer
// Converts a number to a fixed-point notation*
// Truncates a number to a specified number of decimal places
// Returns the largest integer less than or equal to a given number

// What does the charAt() method return if the specified index is out of range in JavaScript?
// undefined
// null
// An empty string ("")*
// Error