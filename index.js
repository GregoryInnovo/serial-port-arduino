var SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const postData = require('./postData');

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

parser.on("data", (data) => {
  const jsonData = data.toString();

  console.log(jsonData);

  // Here this class POST the data from jsonData
  postData.instance.PostData(jsonData)
});


// parser.close(() => {
//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   var yyyy = today.getFullYear();

//   today = mm + '/' + dd + '/' + yyyy;
//   console.log(today);
// })
