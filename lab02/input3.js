var b = require('bonescript');
b.pinMode('P8_19', b.INPUT);
b.pinMode('P8_13', b.OUTPUT);
setInterval(check,100);
function check(){
b.digitalRead('P8_19', checkButton);
}
function checkButton(x) {
  if(x.value==1)  blinkLed();
  }
  function blinkLed(){
  for(i=0;i<10;i++){
   b.digitalWrite('P8_13', b.HIGH);
   delay(10);
    b.digitalWrite('P8_13', b.Low);
    delay(10);
  }
  }
