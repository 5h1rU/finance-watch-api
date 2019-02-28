const getData = require("../resources/get");

module.exports = function stock(path) {
  let response = {};
  return Promise.all([
    getData(path, "quote"),
    getData(path, "logo"),
    getData(path, "news/last/1")
  ]).then(data => {
    const payload = data.map(JSON.parse);
    response = {
      latestPrice: payload[0].latestPrice,
      logoUrl: payload[1].url,
      latestNews: payload[2][0].url
    };
    return response;
  });
};
