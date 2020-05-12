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
    },
    getAllOrders(){
        return knex('orders');
    },
    getOrderByName(name){
        return knex('orders').where('name', name).first();
    },
    createOrder(orders){
        return knex('orders').insert(orders,'*');
    }

}
