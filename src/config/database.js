const mongoose = require('mongoose');

const { MENU_ONLINE_MONGODB_HOST, MENU_ONLINE_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${MENU_ONLINE_MONGODB_HOST}/${MENU_ONLINE_MONGODB_DATABASE}`;

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

module.exports = connectDB;
