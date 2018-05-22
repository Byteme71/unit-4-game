$(document).ready ( function() { 
    
    var targetNumber = Math.floor((Math.random() * 100) + 19);
    $("#Number-Guess").text(targetNumber);
    var counter = 0;
    $("#Counter-Enter").text(counter);
    var wins = 0;
    $("#Wins-Enter").text(wins);
    var losses = 0;
    $("#Losses-Enter").text(losses);
  
    var numberOptionsOne = Math.floor((Math.random() * 12) + 1);
    var numberOptionsTwo = Math.floor((Math.random() * 12) + 1);
    var numberOptionsThree = Math.floor((Math.random() * 12) + 1);
    var numberOptionsFour = Math.floor((Math.random() * 12) + 1);

    $(".BlueCrystal").attr("data-crystalvalue", numberOptionsOne);
    $(".WhiteCrystal").attr("data-crystalvalue", numberOptionsTwo);
    $(".GreenCrystal").attr("data-crystalvalue", numberOptionsThree);
    $(".RedCrystal").attr("data-crystalvalue", numberOptionsFour);
    
    var reset = function() {
        var targetNumber = Math.floor((Math.random() * 100) + 19);
        $("#Number-Guess").text(targetNumber);
        var counter = 0;
        $("#Counter-Enter").text(counter);
    }    


    $(".BlueCrystal, .WhiteCrystal, .GreenCrystal, .RedCrystal").on("click", function(){

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        // alert("Clicked!");

        counter+= crystalValue;
        $("#Counter-Enter").text(counter);
  
        if (counter === targetNumber){
            alert("You win!");
            wins++;
            $("#Wins-Enter").text(wins);
            reset();
            alert("Your new wins: " + wins + " !!")

        }
        else if (counter >= targetNumber){
            alert("You Lose!")
            losses++;
            $("#Losses-Enter").text(losses);
            reset();
            
        }

    });
    
    
    })
 
