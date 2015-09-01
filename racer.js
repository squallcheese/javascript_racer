$(document).ready(function(){
var player1_postion = 1;
var player2_position = 1;

var player1move = function(){
  $("tr#player1_strip > td.active").removeClass().next().addClass("active");
  player1_position ++;
};

var player2move = function() {
  $("tr#player2_strip > td.active").removeClass().next().addClass("active");
  player2_position ++;
};

var race_restart = function() {
player1_postion = 1;
player2_position = 1;

$("tr#player1_strip > td.active").removeClass().next().addClass("active")
$("tr#player2_strip > td.active").removeClass().next().addClass("active")
};

var winner = function(){
  if (player1_position == 20){
    alert("Winner is Player 1!!!");
  }
    else if (player2_position == 20){
    alert("Winner is Player 2!!!");
  }
};

$("button#restart").click(function(){
race_restart();
});

  $(document).keyup(function(keycode) {
    if (keycode.which == 81){
      player1move();
    }else if(keycode.which == 80){
      player2move();
    }

    winner();
  });
});