let { DataSource } = require("typeorm");
const { userModel } = require("../models/user.model");

let AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "e3",
  synchronize: true,
  logging: false,
  entities: [userModel],
});

module.exports = { AppDataSource };
