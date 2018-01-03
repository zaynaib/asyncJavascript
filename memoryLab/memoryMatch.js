//create a box on the screen

$("body").append('<p>hello</p>')

//create a timer function
var count = 0;
var timer = setInterval(function(){
    count++;
    console.log(count);

    //stops the timer once it hits 10
    if(count ===10){
        clearInterval(timer);
    }
    
},1000)