$(document).ready(function(){
  $("#roller").on('click',function(){
    var $numDice = $("#num-dice").val();
    var $randomRange = $("#text-field").val();
    var totalRoll = 0;
    var $output = $('main section h2');
    var rollOutput = [];

    $("#dice-output").html("");

    printDice($numDice,$randomRange,totalRoll, $output, rollOutput);

  function printDice($numdice,$randomRange,totalRoll, output, rollOutput){
    for(i=0;i<$numDice;i++){
      var thisRoll = 0;

      thisRoll = Math.floor( ( Math.random() * $randomRange ) + 1 );
      rollOutput.push(thisRoll);

      totalRoll += thisRoll;

      $output.text(totalRoll);

      //TODO: Delay between each iteration of the loop. srsly.
      $("#dice-output").append("<div class=\"die\"><h3>" + rollOutput[i] + "</h3></div>").hide().fadeIn('slow');
      }
    }
  });
});
