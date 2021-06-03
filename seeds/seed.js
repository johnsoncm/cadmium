const sequelize = require('../config/connection');
const { User, Events } = require('../models');

const userData = require('./userData.json');
const eventsData = require('./eventsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // revisit - Scott said this is just assigning a random user to each event??
  for (const event of eventsData) {
    await Events.create({
      ...event,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
