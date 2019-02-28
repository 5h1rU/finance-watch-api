const https = require("https");
const BASE_URL = "https://api.iextrading.com/1.0/stock";

module.exports = function getData(path, dataType) {
  return new Promise((resolve, reject) => {
    let body;
    const req = https.get(`${BASE_URL}/${path[1]}/${dataType}`, res => {
      res.setEncoding("utf8");
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error("Stock not found"));
      }
      res.on("data", data => {
        body = data;
        resolve(body);
      });
      res.on("end", () => {
        try {
          body = JSON.parse(body);
        } catch (e) {
          reject(e);
        }
        resolve(body);
      });
    });

    req.on("error", err => {
      reject(err);
    });

    return req.end();
  });
};
