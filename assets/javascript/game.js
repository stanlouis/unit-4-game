$ (function () {
  function getRandomInt (min, max) {
    min = Math.ceil (min);
    max = Math.floor (max);
    return Math.floor (Math.random () * (max - min)) + min;
  }
  //Global variables
  var numberToGet = getRandomInt (50, 101);
  var blueNumber = getRandomInt (1, 15);
  var greenNumber = getRandomInt (1, 15);
  var redNumber = getRandomInt (1, 15);
  var yellowNumber = getRandomInt (1, 15);
  var wins = 0;
  var looses = 0;
  var result = 0;

  $ ('h2 span#generatedNumber').text (numberToGet);
  $ ('h2 span#winsNumber').text (wins);
  $ ('h2 span#lossesNumber').text (looses);

  $ ('.images')
    .on ('click', '#blue', function () {
      result += blueNumber;
      console.log (result);
    })
    .on ('click', '#green', function () {
      result += greenNumber;
      console.log (result);
    })
    .on ('click', '#red', function () {
      result += redNumber;
      console.log (result);
    })
    .on ('click', '#yellow', function () {
      result += yellowNumber;
      console.log (result);
    });
});
