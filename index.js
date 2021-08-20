var SerialPort = require("serialport");

var arduinoCOMPort = "COM4";

var arduinoSerialPort = new SerialPort(arduinoCOMPort, {  
  baudRate: 9600
});

arduinoSerialPort.on('open',function() {
  console.log('Serial Port ' + arduinoCOMPort + ' is opened.');
});

arduinoSerialPort.on('data', (data) => {
  console.log(data.toString());
    // io.emit('arduino:data', {
    //   value: data.toString()
    // });
});