/* const assert = require('assert');
const pokemonModel = require('../models/pokemonmod');

describe('Describe Test for finding records',()=>{

    var pikachu;
    beforeEach((done)=>{
         pikachu = new pokemonModel({
            name : 'Pikachu',
            power : 'Electric'
        });
        pikachu.pwd = pikachu.encryptPwd('ash');
        pikachu.save().then(()=>{
            done();
        })
    })

    it('creating test for authenticating user',(done)=>{
        pokemonModel.findOne({name:'Pikachu'}).then((result)=>{
            assert(result.authenticateUser('ash'));
            done();
        })
        })

    it('creating test for finding result by ID',(done)=>{
        pokemonModel.findOne({_id:pikachu._id}).then((result)=>{
            assert(result._id.toString() === pikachu._id.toString());
            done();
        })
    })
}) */