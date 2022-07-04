// import connection to DB
import db from "../database/db.js";
// import sequelize
import { DataTypes } from "sequelize";

const DbModel = db.define('barLists', {
    id: {type: DataTypes.NUMBER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    tabNumber: {type: DataTypes.INTEGER},
    beerNames: {type: DataTypes.STRING},
    createdAt: {type: DataTypes.DATE},
    updatedAt: {type: DataTypes.DATE}
})

export default DbModel