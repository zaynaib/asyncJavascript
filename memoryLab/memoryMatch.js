//create a box on the screen

//create a div
let gameDiv = $("<div>");

//give the div an id of game
gameDiv.attr('id','game')

// create a 3 by 3 table
gameDiv.append(
    `<table>

        <tr>
            <td class="hide three">3</td>
            <td class="hide one">1</td>
            <td class="hide five">5</td>
        </tr>

        <tr>
            <td class="hide six">6</td>
            <td class="hide three">3</td>
            <td class="hide six">6</td>
        </tr>

        <tr>
            <td class="hide one">1</td>
            <td class="hide two">2</td>
            <td class="hide five">5</td>
        </tr>

    </table>`
)

//append buttons on to the body
gameDiv.append(
    `
        <div>
            <button>Start/Pause</button>
            <button>Reset</button>
        </div>
    `
)

//append it to the body
$("body").append(gameDiv);

/*

    FUNCTIONS

*/
/*
randomly distribute the matching pairs of values among the cells
turn the blue cells orange when a mouse is hovering over
turn the blue cells red and reveal their hidden number when clicked
start the elapsed time counter when the first cell is clicked 
*/

var num = [];
for(var i = 0 ;i<9;i++){
    let randomNum = Math.ceil(Math.random()*5)    
    console.log(randomNum)
    num.append(randomNum)
}
console.log(num)


//create a reveal function for the table boxes

//if a user clicks on a table cell show what's is inside
    $(".hide").click(function(){
        $(this).hide();
    })


//W3schools show and hide buttons
/*
    $("#hide").click(function(){
        $("p").hide();
    });

    $("#show").click(function(){
        $("p").show();
    });

*/

/*
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

*/