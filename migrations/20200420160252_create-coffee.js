
exports.up = function(knex) {
    return knex.schema.createTable('coffee', (table) =>{
        table.increments();
        table.text('name');
        table.text('volumeMedium');
        table.text('volumeBig');
        table.text('priceMedium');
        table.text('priceBig');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('coffee');
  };
  