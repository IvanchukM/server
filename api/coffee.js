const express = require('express');

const router = express.Router();

const queries = require('../db/queries');
const { response } = require('express');


<<<<<<< HEAD
=======
function isValidId(req,res,next){
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}
>>>>>>> 6f29f33136b51c385b21bea6661586ea15161214
router.get('/', (req,res) => {
    queries.getAll().then(coffee =>{
        // res.json(coffee);
        res.render('menu',{
            title: 'Menu',
            coffee: coffee
        });
    });
});
router.get('/menu', (req,res) => {
    queries.getAll().then(coffee =>{
        res.json(coffee);
    });
});

router.get('/orders', (req,res) => {
    queries.getAllOrders().then(orders =>{
        //res.json(orders);    
        res.render('orders',{
        title: 'Coffee Orders',
        orders: orders
        });
    });
});

router.get('/orders/:id', (req,res) => {
    //delete smth
    queries.deleteOrder(req.params.id).then(() =>{
        res.redirect('/api/v1/coffee/orders');
    });
});
router.delete('/:id', (req,res) => {
    //delete smth
    queries.delete(req.params.id).then(() =>{
        res.json({
            deleted: true
        });
    });
});

router.post('/orders', (req,res) =>{
       queries.createOrder(req.body).then(orders =>{
           res.json(orders)
       });
});

router.get('/add', (req,res) => {
        res.render('coffee_add',{
            title: 'Add Coffee'
        });
});
router.get('/edit/:id', (req,res) => {
    queries.getOne(req.params.id).then(coffee =>{
        res.render('coffee_edit',{
            title: 'Edit Coffee',
            coffee: coffee
        });
    });
});

<<<<<<< HEAD
router.post('/', (req,res) =>{
=======
router.post('/', (req,res,err) =>{
>>>>>>> 6f29f33136b51c385b21bea6661586ea15161214
       queries.create(req.body).then(coffee =>{
        res.redirect('/api/v1/coffee')
       });
});

<<<<<<< HEAD
router.post('/edited/:id', (req,res,next) => {
        //update coffee
=======
router.put('/:id', isValidId, (req,res,next) => {
        //update coffe
>>>>>>> 6f29f33136b51c385b21bea6661586ea15161214
        queries.update(req.params.id, req.body).then(coffee =>{
            res.redirect('/api/v1/coffee')
        });
});

router.get('/:id', (req,res) => {
    //delete smth
    queries.delete(req.params.id).then(() =>{
        res.redirect('/api/v1/coffee')
    });
});

module.exports = router;
