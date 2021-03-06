const User = require('./User');
const Events = require('./Events');

User.hasMany(Events, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Events.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Events };
