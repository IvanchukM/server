const coffeeSeed = require('../coffee')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('coffee').del()
    .then(function () {
      return knex('coffee').insert(coffeeSeed)
    });
};
