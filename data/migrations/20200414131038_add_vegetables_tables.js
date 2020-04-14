// The changes we are making to the database schema
exports.up = function(knex) {
    return knex.schema.createTable('veggies', tbl => {
        // A primary key, called ID, that autoincrements
        tbl.increments();
        // .index() makes searching for a value in a column much faster
        tbl.string('name', 255).notNullable().unique().index();
        tbl.boolean("tasty").defaultTo(true);
    })
};

// How to undo the changes to the database schema
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('veggies');
};
