// the connection
const knex = require('./knex');

module.exports = {
    getAll(){
        return knex('coffee');
    },
    getOne(id){
        return knex('coffee').where('id', id).first();
    },
    create(coffee){
        return knex('coffee').insert(coffee,'*');
    },
    update(id,coffee){
        return knex('coffee').where('id', id).update(coffee, '*');
    },
    delete(id){
        return knex('coffee').where('id',id).del();
    }

}
