const quotesDb = require("../dbConfig");

module.exports = dataAccessMethods = {
  get: function() {
    return quotesDb("quotes");
  }
};
