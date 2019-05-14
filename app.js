console.log ('tic tac toe magic');
//Set up headers
const $h1 = $('<h1>').text("Tic Tac Toe Game").css('text-align', 'center');
const $h3 = $('<h3>').text("Click on a square to get started").css('text-align', 'center');
$('body').prepend($h1, $h3);


//Start Game
$(() => {

let player = 1;


  $('.square').on('click', function(event) {

////Determines which square has been clicked on since divs in html don't have separate ID's
    let squareSelected = $(this);

////Create alternating turns for users
    if(squareSelected.hasClass('fas fa-times') || squareSelected.hasClass('far fa-circle')) {
      alert('Oops, this square has already been selected.  Please choose another.');
    } else {
      if (player === 1) {
        squareSelected.addClass('fas fa-times');
        if(checkForWin('fas fa-times')) {
        alert('Congrats Player' +  player  + ' has won!');
      } else {
      player = 2;
      }
    } else {
        squareSelected.addClass('far fa-circle');
        if(checkForWin('far fa-circle')) {
        alert('Congrats Player' +  player  + ' has won!');
      } else {
        player = 1;
      }
      }
    }
});

//Check for winner
const checkForWin = (symbol) => {
  if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
    return true;
  } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
    return true;
  } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
    return true;
  } else if ($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
    return true;
  } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
    return true;
  } else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
    return true;
  } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
    return true;
  } else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
    return true;
  } else {
    return false;
  }
}

});
