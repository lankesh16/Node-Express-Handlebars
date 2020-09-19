var orm = require("../config/orm");
var burger = {
  selectAll: function(cb) {
    orm.selectAll("Burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("Burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("Burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  deleteOne: function(condition, cb) {
    orm.deleteOne("Burgers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
