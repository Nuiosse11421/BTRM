import sequelize from '../path/to/db.mjs';
import User from '../models/userModel.mjs';

const getUserById = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export default getUserById;