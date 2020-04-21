
exports.up = function(knex) {
    return knex.schema.createTable('coffee', (table) =>{
        table.increments();
        table.text('name');
        table.text('volume');
        table.text('price');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('coffee');
  };
  