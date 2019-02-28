const logger = require("./utils/logger");
const stock = require("./controllers/stock");

module.exports = function router(options) {
  const path = options.path.split("/").splice(1, 3);

  if (options.method === "GET") {
    if (path[0] === "stock" && path.length === 2) {
      return stock(path)
        .then(r => {
          return options.res.end(JSON.stringify(r));
        })
        .catch(e => {
          options.res.statusCode = 404;
          options.res.end(e.message);
        })
        .finally(() => {
          logger({
            path: options.path,
            status: options.res.statusCode
          });
        });
    } else {
      options.res.statusCode = 404;
      options.res.end();
    }
  }
};
