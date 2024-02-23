import { DataTypes } from "sequelize"
import sequelize from "../db.mjs"

const Profile = sequelize.define('Profile',{
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gender: DataTypes.STRING,
      date_of_birth: DataTypes.DATE
})

export default Profile