// Created a function declaration that has a single parameter, called string. 
// The parameter is passed as an argument and then returned in uppercase.

function shout(string) {
    return string.toUpperCase(  );
}

// Created a function declaration that has a single parameter, called HELLO. 
// The parameter is passed as an argument and then returned in lowercase.

function whisper(HELLO) {
    return HELLO.toLowerCase();
}

// Same structure, except logs the function output. 

function logShout(string) {
    console.log(string.toUpperCase(  ));
}

// Same structure, except logs the function output. 

function logWhisper(HELLO) {
    console.log(HELLO.toLowerCase());
}

// Although there are 3 tests for sayHiToHeadphonedRoommate(), you only need to write one function. 
// This function should be able to handle all three test conditions.
// Key points: need initial parameter passed in the function. 
// Need if-condition to have syntax "string === string.toLowerCase()" with a strict equalto operator. 

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can\'t hear you!";
    }
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    if ("Let's have dinner together!") {
        return  "I would love to!";
    }
}

sayHiToHeadphonedRoommate();