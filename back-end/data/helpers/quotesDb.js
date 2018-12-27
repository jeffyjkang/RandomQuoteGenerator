const quotesDb = require("../dbConfig");

module.exports = dataAccessMethods = {
  get: function() {
    return quotesDb("quotes");
  },
  insert: function(quote) {
    return quotesDb("quotes").insert(quote);
    //   .then(ids => ({ id: ids[0] }));
  },
  update: function(id, quote) {
    return quotesDb("quotes")
      .where("id", id)
      .update(quote);
  },
  remove: function(id) {
    return quotesDb("quotes")
      .where("id", id)
      .del();
  }
};
