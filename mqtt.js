var mqtt = require("mqtt");

var client = mqtt.connect("mqtt://industrial.api.ubidots.com", {
  username: "BBFF-j6NHsndSkqmjuuKGaOZCyK4idLHWse",
  password: "",
});

client.publish(
  "/v1.6/devices/parquedelperro/apart1",
  '{"value": 10}',
  { qos: 1, retain: false },
  function (err, response) {
    console.log(response);
  }
);
