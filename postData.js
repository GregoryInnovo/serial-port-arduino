const fetch = require("cross-fetch");

class postData {
  // Singleton instance
  static instance = new postData();

  // Function to send the data in json to a specific URL
  PostData = async (data) => {
    // fetch(YOUR_URL, {method: "", body: "JSON_DATA"}) .then("RESPONSE CODE")
    await fetch(
      "https://things.ubidots.com/api/v1.6/devices/prueba/?token=BBFF-nPha9Vfmz6gE7QyIZlhVIuANggLEFX",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
}

module.exports = postData;
