
exports.up = function(knex) {
    return knex.schema.createTable('coffee', (table) =>{
        table.increments();
        table.text('name');
        table.text('volume_medium');
        table.text('volume_big');
        table.text('price_medium');
        table.text('price_big');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('coffee');
  };
  