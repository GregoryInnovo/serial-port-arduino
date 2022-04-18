var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://industrial.api.ubidots.com", {
  username: "BBFF-j6NHsndSkqmjuuKGaOZCyK4idLHWse",
  password: "",
});
client.subscribe(
  { "/v1.6/devices/parquedelperro/apart1": 1 },
  function (err, granted) {
    console.log(granted);
  }
);
client.on("message", function (topic, message, packet) {
  //here you can process updates from the broker
});

//mosquitto_sub  -h "industrial.api.ubidots.com" -t "/v1.6/devices/parquedelperro/apart1/lv" -u "BBFF-j6NHsndSkqmjuuKGaOZCyK4idLHWse" -p 1883 -q 1