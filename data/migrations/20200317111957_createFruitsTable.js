
exports.up = function(knex) {
  return knex.schema.createTable('fruits', (table) => {
    // make a column called id which is primary key integer auto-incrementing unique etc
    table.increments()
    // make a "name" column of type text (128) unique not null
    table.text('name', 128).unique().notNullable()
    // make a "avgWeightOz" of type decimal/float not null
    table.float('avgWeightOz').notNullable()
    // make a "delicious" of type boolean
    table.boolean('delicious')
  })
};

exports.down = function(knex) {
  
};
