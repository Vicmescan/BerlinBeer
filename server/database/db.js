// require('dotenv').config()
import { Sequelize } from "sequelize";
import '../loadEnv.js';


const db = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

export default db