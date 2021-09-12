var SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

// Here you change the COM that you work with
var arduinoCOMPort = "COM4";

// Arduino configurations
var arduinoSerialPort = new SerialPort(arduinoCOMPort, {
  baudRate: 9600,
});
const parser = arduinoSerialPort.pipe(new Readline({ delimiter: "\n" }));

// Show a message when the Arduino open the port
arduinoSerialPort.on("open", function () {
  console.log("Serial Port " + arduinoCOMPort + " is opened.");
});

// It called when arduino do a serial print
parser.on("data", (data) => {
  const jsonData = data.toString()
  
  // See jsonData
  console.log(jsonData);
  
});