const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');

const app = require('../app');

describe('CRUD coffee', () => {
    before((done) =>{
        //run migrations
        knex.migrate.latest()
        .then(() =>{
            //run seeds
            return knex.seed.run();
        }).then(() => done());
    });

    it('List all Records!!', function(done) {
        request(app)
          .get('/api/v1/coffee')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then((response) =>{
             expect(response.body).to.be.a('array') ;
             console.log(response.body);
             done();
          })
      });

      it('List a record by id', function(done) {
        request(app)
          .get('/api/v1/coffee/1')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then((response) =>{
             expect(response.body).to.be.a('object') ;
             console.log(response.body);
             done();
          });
      });
});