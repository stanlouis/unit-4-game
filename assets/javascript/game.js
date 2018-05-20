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
  function getRandomInt (min, max) {
    min = Math.ceil (min);
    max = Math.floor (max);
    return Math.floor (Math.random () * (max - min)) + min;
  }

  function reset () {
    numberToGet = getRandomInt (50, 101);
    $ ('h2 span#generatedNumber').text (numberToGet);
    blueNumber = getRandomInt (1, 15);
    greenNumber = getRandomInt (1, 15);
    redNumber = getRandomInt (1, 15);
    result = 0;
    $ ('h2 span#totalScore').text (result);
  }

  function winLostStatus (totalResult) {
    if (totalResult === numberToGet) {
      console.log ('you win');
      wins++;
      $ ('h2 span#winsNumber').text (wins);
      reset ();
    } else if (totalResult > numberToGet) {
      console.log ('You loose');
      looses++;
      console.log ('looses' + looses);
      $ ('h2 span#lossesNumber').text (looses);
      reset ();
    }
  }

  $ ('h2 span#generatedNumber').text (numberToGet);
  $ ('h2 span#winsNumber').text (wins);
  $ ('h2 span#lossesNumber').text (looses);
  $ ('h2 span#totalScore').text (result);

  $ ('.images')
    .on ('click', '#blue', function () {
      result += blueNumber;
      console.log (result);
      $ ('h2 span#totalScore').text (result);
      winLostStatus (result);
    })
    .on ('click', '#green', function () {
      result += greenNumber;
      console.log (result);
      $ ('h2 span#totalScore').text (result);
      winLostStatus (result);
    })
    .on ('click', '#red', function () {
      result += redNumber;
      console.log (result);
      $ ('h2 span#totalScore').text (result);
      winLostStatus (result);
    })
    .on ('click', '#yellow', function () {
      result += yellowNumber;
      console.log (result);
      $ ('h2 span#totalScore').text (result);
      winLostStatus (result);
    });
});
