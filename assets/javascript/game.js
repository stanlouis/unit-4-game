$ (function () {
  //Global variables
  var numberToGet = getRandomInt (19, 120);
  var blueNumber = getRandomInt (1, 12);
  var greenNumber = getRandomInt (1, 12);
  var redNumber = getRandomInt (1, 12);
  var yellowNumber = getRandomInt (1, 12);
  var wins = 0;
  var looses = 0;
  var result = 0;

  //Functions
  function getRandomInt (min, max) {
    min = Math.ceil (min);
    max = Math.floor (max);
    return Math.floor (Math.random () * (max - min + 1)) + min;
  }

  function gameReset () {
    numberToGet = getRandomInt (19, 120);
    $ ('h2 span#generatedNumber').text (numberToGet);
    blueNumber = getRandomInt (1, 12);
    greenNumber = getRandomInt (1, 12);
    redNumber = getRandomInt (1, 12);
    yellowNumber = getRandomInt (1, 12);
    result = 0;
    $ ('h2 span#totalScore').text (result);
  }

  function winLostStatus (totalResult) {
    if (totalResult === numberToGet) {
      wins++;
      $ ('h2 span#winsNumber').text (wins);
      gameReset ();
    } else if (totalResult > numberToGet) {
      console.log ('You loose');
      looses++;
      $ ('h2 span#lossesNumber').text (looses);
      gameReset ();
    }
  }
  // Set ui values
  $ ('h2 span#generatedNumber').text (numberToGet);
  $ ('h2 span#winsNumber').text (wins);
  $ ('h2 span#lossesNumber').text (looses);
  $ ('h2 span#totalScore').text (result);

  // Handle click events
  $ ('.images')
    .on ('click', '#blue', () => {
      result += blueNumber;
      $ ('h2 span#totalScore').text (result);
      winLostStatus (result);
    })
    .on ('click', '#green', () => {
      result += greenNumber;
      $ ('h2 span#totalScore').text (result);
      winLostStatus (result);
    })
    .on ('click', '#red', () => {
      result += redNumber;
      $ ('h2 span#totalScore').text (result);
      winLostStatus (result);
    })
    .on ('click', '#yellow', () => {
      result += yellowNumber;
      $ ('h2 span#totalScore').text (result);
      winLostStatus (result);
    });
});
