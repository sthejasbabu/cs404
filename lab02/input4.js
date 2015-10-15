var b = require('bonescript');
b.pinMode('P8_19', b.INPUT);
b.pinMode('P8_13', b.OUTPUT);
b.pinMode('P9_16', b.OUTPUT);
var status = 0;

setInterval(check,100);

function check(){
b.digitalRead('P8_19', checkButton);
status = b.digitalRead('P8_16');
}

function checkButton(x) {
  if(x.value == 1){
   blinkLed();
  }
}

function blinkLed(){
  while(status) {
   b.digitalWrite('P8_13', b.HIGH);
   delay(10);
    b.digitalWrite('P8_13', b.Low);
    delay(10);
  }
