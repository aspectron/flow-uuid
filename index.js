const uuid = (typeof vertx !== 'undefined' && vertx !== null) ? require("./lib/vertx-uuid") : require("uuid");
module.exports = uuid;