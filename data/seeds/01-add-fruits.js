exports.seed = function (knex) {
  return knex('fruits').truncate()
    .then(function () {
      return knex('fruits').insert([
        { name: 'apple', avgWeightOz: 1.5, delicious: 1, color: 'red' },
        { name: 'pineapple', avgWeightOz: 2.5, delicious: 1 },
        { name: 'pear', avgWeightOz: 3.5 }
      ]);
    });
};
