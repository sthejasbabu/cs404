var b = require('bonescript');
b.pinMode('P8_19', b.INPUT);
b.pinMode('P8_13', b.OUTPUT);
b.pinMode('P9_16', b.OUTPUT);
setInterval(check,100);
//calling function check
function check(){
b.digitalRead('P8_19', checkButton);
}

function checkButton(x) {
  if(x.value == 1){
    b.digitalWrite('P8_13', b.HIGH);
    b.digitalWrite('P9_16', b.HIGH);
  }
  else{
    b.digitalWrite('P8_13', b.LOW);
     b.digitalWrite('P9_16', b.LOW);
  }
}


