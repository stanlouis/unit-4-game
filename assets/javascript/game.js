$ (function () {
  //Global variables
  var numberToGet = getRandomInt (50, 101);
  var blueNumber = getRandomInt (1, 15);
  var greenNumber = getRandomInt (1, 15);
  var redNumber = getRandomInt (1, 15);
  var yellowNumber = getRandomInt (1, 15);
  var wins = 0;
  var looses = 0;
  var result = 0;

  //Functions
  function winLostStatus (totalResult) {
    if (totalResult === numberToGet) {
      console.log ('you win');
      win++;
      $ ('h2 span#winsNumber').text (wins);
    } else if (totalResult > numberToGet) {
      console.log ('You loose');
      looses++;
      $ ('h2 span#winsNumber').text (wins);
    }
  }

  $ ('h2 span#generatedNumber').text (numberToGet);
  $ ('h2 span#winsNumber').text (wins);
  $ ('h2 span#lossesNumber').text (looses);

  $ ('.images')
    .on ('click', '#blue', function () {
      result += blueNumber;
      console.log (result);
      winLostStatus (result);
    })
    .on ('click', '#green', function () {
      result += greenNumber;
      console.log (result);
      winLostStatus (result);
    })
    .on ('click', '#red', function () {
      result += redNumber;
      console.log (result);
      winLostStatus (result);
    })
    .on ('click', '#yellow', function () {
      result += yellowNumber;
      console.log (result);
      winLostStatus (result);
    });
});
