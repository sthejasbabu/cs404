var b = require('bonescript');

var inputPin = "P9_36";
var outputPin = "P9_14";
var outputPin1 = "P9_16";

b.pinMode(outputPin, b.ANALOG_OUTPUT);
b.pinMode(outputPin1, b.ANALOG_OUTPUT);
loop();

function loop() {
    var value = b.analogRead(inputPin);
    b.analogWrite(outputPin, value);
     b.analogWrite(outputPin1, value);
    setTimeout(loop, 1);
}

