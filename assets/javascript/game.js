$(document).ready(function(){
    var counter = 0;
    var wins= 0;
    var losses = 0;

    function randomNum(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * ((max-min) +1) + min);
    }

    var targetNumber = randomNum(19,120);
    $("#target").html(targetNumber);

    var crystalOne= randomNum(1, 12);
    var crystalTwo= randomNum(1, 12);
    var crystalThree= randomNum(1, 12);
    var crystalFour= randomNum(1, 12);


    function reset(){
        $("#target").html(targetNumber);
        targetNumber = randomNum(19,120);
        $("#playerScore").text(counter);
        crystalOne= randomNum(1, 12);
        crystalTwo= randomNum(1, 12);
        crystalThree= randomNum(1, 12);
        crystalFour= randomNum(1, 12);
    }

    $("#redGem").on("click", function(){
        counter += crystalOne;
        result();
        $(playerScore).text(counter);
    });

    $("#blueGem").on("click", function(){
        counter += crystalTwo;
        result();
        $(playerScore).text(counter);
    });

    $("#yellowGem").on("click", function(){
        counter += crystalThree;
        result();
        $(playerScore).text(counter);
    });

    $("#greenGem").on("click", function(){
        counter += crystalFour;
        result();
        $(playerScore).text(counter);
    });

    function result(){

    if (counter === targetNumber){
        $("#gemDiv").text(counter);
        wins = wins + 1;
        $("#win").text(wins);
        reset();
    }

    else if(counter > targetNumber){
        $("#gemDiv").text(counter);
        losses = losses + 1;
        $("#Losses").text(losses);
        reset();
    }
}
}); 




    