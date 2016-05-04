//TODO: Multiple rows for different die types.

$(document).ready(function(){
  $("#roller").on('click',function(){
    var $numDice     = $("#num-dice").val(),
        $randomRange = $("#text-field").val(),
        totalRoll    = 0,
        $output      = $('main section h2'),
        rollOutput   = [];

    $("#dice-output").html("");

    rollDice($numDice, $randomRange, totalRoll, rollOutput, $output);

    //TODO : Refactor outputDice to work recursively.


    function rollDice(numDice,randomRange, totalRoll,rollOutput,output){

      for (var i = 0; i < numDice; i++){
        var thisRoll = Math.floor(Math.random() * randomRange) + 1;
        totalRoll += thisRoll;
        rollOutput.push(thisRoll);
      }

      output.text(totalRoll);

      console.log(rollOutput);

      outputDice(output)
    }

    function outputDice(output){
      console.log("This works. " + output);


      rollOutput.forEach(function(element,index){
        setTimeout(function(){
          $("<div class=\"die\"><h3>" + element + "</h3></div>")
          .appendTo("#dice-output")
          .hide()
          .slideDown(1000);
        }, index * 100);
      });
    }

  });
});
