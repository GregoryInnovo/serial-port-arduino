var SerialPort = require("serialport");

// Here you change the COM that you work with
var arduinoCOMPort = "COM4";

// Arduino configurations
var arduinoSerialPort = new SerialPort(arduinoCOMPort, {
  baudRate: 9600,
});

// Show a message when the Arduino open the port
arduinoSerialPort.on("open", function () {
  console.log("Serial Port " + arduinoCOMPort + " is opened.");
});

// Waits for the serial data
arduinoSerialPort.on("data", (data) => {
  console.log(data.toString());
});
