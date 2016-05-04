

function createGrid(columns, width) {
    if (!width) {
        width = '38px';
    }

    grid = '';
    for (i=0; i < columns; ++i) {
        grid+='<div class="row">';
        for (j=0; j < columns; ++j) {
            grid+='<div class="grid-cell"></div>';
        };
        grid+='</div>';
    };
    $('.grid-container').html(grid); 

    $('.grid-cell').css({"width": width,
    "height": width});

    width = width.replace('px','');

    containerwidth = ((columns * width) + (2 * columns)) + 'px';

    $('.grid-container').css({"width": containerwidth});

    $('.grid-cell').mouseover(function() {
        $(this).addClass('mark-red');
    });

};

//Script for creating first 16x16 grid
$(document).ready(function() {
    console.log('hello');
    createGrid(16);
    
    $('.clr').click(function() {
        $('.grid-cell').removeClass('mark-red');
    });

    $('.btn').mouseout(function() {
        (this).blur();
    });

    $('.new').click(function() {
        var newcols = prompt("How many columns would you like?", "Please type an integer from 1 to 120.");

        var attempts = 0;

        console.log(newcols);
        console.log(attempts);

        while (((newcols > 120) || (newcols < 1) || ((newcols % 1.0) != 0)) && (attempts < 3)) {

            newcols = prompt("How many columns would you like?", "Please type an integer from 1 to 120");
            ++attempts;
            console.log(newcols);
            console.log(attempts);
        };

        if (attempts == 3) {
            newcols =16;
            alert("Try resizing again and please type an integer from 1 to 120.");
        };

        console.log(newcols);

        //Calculate width based on input
        var borderpixels = newcols * 2;
        console.log("borderpixels = " + borderpixels);
        var availablepixels = 640 - borderpixels;
        console.log("availablepixels = " + availablepixels);
        var newwidth = availablepixels / newcols;
        console.log("newwidth = " + newwidth);        
        var intwidth = Math.floor(newwidth);
        console.log("intwidth = " + intwidth);        
        var widthstring = intwidth +'px';
        console.log("widthstring = " + widthstring);  

        createGrid(newcols, widthstring);

    });

});




//Script for clearing button appearance after click
/* $(document).ready(function() {
    $('.btn').mouseup(function() {
        console.log('hello2');
        
        $('.btn').css({"background": "#EEEEEE", "border": "1px solid #E0E0E0"});
    });
}); */