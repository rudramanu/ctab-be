const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "mysql://avnadmin:AVNS_LDNnL2j3Jr3UrjlS_MG@mysql-30b5284-merudramanu-1902.a.aivencloud.com:14844/ct-user"
);

try {
  sequelize.authenticate();
  console.log("Database Connected Successfully");
} catch (error) {
  console.log("Something went wrong while connecting with database");
}

module.exports = sequelize;
