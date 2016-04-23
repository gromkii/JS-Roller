$(document).ready(function(){
  $("#roller").on('click',function(){
    var $numDice = $("#num-dice").val();
    var $randomRange = $("#text-field").val();
    var totalRoll = 0;
    var $output = $('main section h2');

    if (typeof $randomRange !== 'int' || typeof $numDice !== 'int'){
      $output.text("Enter an integer.");
    } else {
      for(i=0;i<$numDice;i++){
        totalRoll += Math.floor((Math.random()*$randomRange)+1);
        $output.text(totalRoll);
        //TODO: Push each result into an array, list.
      }
    }
  });
});
