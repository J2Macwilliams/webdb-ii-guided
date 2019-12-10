
// a migration describes the changes that apply to the db

//up function describes what will be done
exports.up = function(knex) {
    // Always return the call to knex schema
      return knex.schema.createTable('veggies', tbl => {
        //   primary key called "id", an integer, auto increments
        tbl.increments();
        // unique() is a constraint (rules we define to protect against invalid data)
        tbl.string('name', 255)
        .notNullable()
        .unique()
        .index();//makes searching for veggies using this column faster
    
        tbl.boolean('like_it').defaultTo(false)
      });
    };
    
    //down function describes how to revert the changes
    exports.down = function(knex) {
      return knex.schema.dropTableIfExists('veggies');
    };
    
