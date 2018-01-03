//setTimeout function takes a callback function + time in milliseconds
//setTimeout on does a function once when the timeout is over

//it prints out hello after 1 second
setTimeout(function(){console.log("hello")},1000);

//clearTimeout is a function that stops the timer

var counter = function(){
    var myCounter = 60;
    console.log(myCounter);

}
let timeout = setTimeout(counter,1000);
clearTimeout(timeout); //clears the setTimeout callback from running


//setInterval is a timer function for events that occur periodically
var count = 60;
var countDown = setInterval(function(){
    count--;
    console.log(count);
    if(count === 0){
        clearTimeout(countDown);
    }
},1000)


function asynLog(value){
    setTimeout(function(){
        console.log(value)
    },0)
}

asynLog("third");
console.log("first");
console.log("second");
