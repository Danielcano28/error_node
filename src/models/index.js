const EmialCode = require("./EmailCode");
const User = require("./User");

//EmailCode -> userId
EmialCode.belongsTo(User) //userId
User.hasMany(EmialCode)