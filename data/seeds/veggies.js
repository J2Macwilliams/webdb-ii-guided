
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('veggies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('veggies').insert([
        {id: 1, name: 'carrots', like_it: '1'},
        {id: 2, name: 'broccoli', like_it: '1'},
        {id: 3, name: 'brussel sprouts', like_it: '1'},
        {id: 4, name: 'eggplant', like_it: '0'}
      ]);
    });
};