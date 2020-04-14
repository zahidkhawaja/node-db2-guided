exports.up = function(knex) {
  // Alter table
  return knex.schema.alterTable('fruits', tbl => {
      tbl.string('color');
  })
};

exports.down = function(knex) {
  return knex.schema.table('fruits', tbl => {
      tbl.dropColumn('color');
  });
};;
