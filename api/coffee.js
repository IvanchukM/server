const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req,res,next){
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}
function validCoffee(coffee){
    const hasName = typeof coffee.name == 'string' && coffee.name.trim() != '';
    const hasVolume = typeof coffee.volume == 'string' && coffee.volume.trim() != '';
    const hasPrice = typeof coffee.price == 'string' && coffee.price.trim() != '';
    return hasName && hasVolume && hasPrice
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

router.post('/', (req,res,next) =>{
    if(validCoffee(req.body)){
       queries.create(req.body).then(coffee =>{
           res.json(coffee);
       });
    }else{
        next(new Error(err));
    }
});

router.put('/:id', isValidId, (req,res,next) => {
    if(validCoffee(req.body)){
        //update coffe
        queries.update(req.params.id, req.body).then(coffee =>{
            res.json(coffee);
        });
    }else{
        next(new Error('Invalid data'));
    }
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