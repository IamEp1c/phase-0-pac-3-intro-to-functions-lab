function shout(string) {
    return string.toUpperCase(); 
}

function whisper(string) {
    return string.toLowerCase(); 
}

function logShout(string) {
    console.log(string.toUpperCase()); 
    return string
}

logShout(`hello`); 

function logWhisper(string) {
    console.log(string.toLowerCase());
    return string
}

logWhisper(`hello`); 


const string = `hello`; 

function sayHiToHeadphonedRoommate(string) {
    const string = `Hello!`;
    console.log(string);
    
    console.log(string.toLowerCase); 
    return "I can't hear you!" === string.toLowerCase(); 

}

sayHiToHeadphonedRoommate(); 

