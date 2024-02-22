import { Sequelize } from "sequelize"
const sequelize = new Sequelize('IRT','postgres','nnu1123',{
    host:"localhost",
    dialect: 'postgres'
})
export default sequelize
