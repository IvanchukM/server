const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req,res,next){
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

router.get('/', (req,res) => {
    queries.getAll().then(coffee =>{
        res.json(coffee);
    });
});

router.get('/orders', (req,res) => {
    queries.getAllOrders().then(orders =>{
        res.json(orders);    
    });
});
router.post('/orders', (req,res) =>{
       queries.createOrder(req.body).then(orders =>{
           res.json(orders);
       });
});

router.get('/:id', isValidId, (req,res,next) => {
   queries.getOne(req.params.id).then(coffee =>{
       if(coffee){
           res.json(coffee);
       }else{
           next();
       }
       
   });
});

router.post('/', (req,res,err) =>{
       queries.create(req.body).then(coffee =>{
           res.json(coffee);
       });
});

router.put('/:id', isValidId, (req,res,next) => {

        //update coffe
        queries.update(req.params.id, req.body).then(coffee =>{
            res.json(coffee);
        });
});

router.delete('/:id', isValidId, (req,res) => {
    //delete smth
    queries.delete(req.params.id).then(() =>{
        res.json({
            deleted: true
        });
    });
});

module.exports = router;