const assert = require('assert');
const {masterModel, pokemonModel} = require('../models/pokemonmod');


describe('Test cases for Saving records in DB',()=>{
    var pikachu = new pokemonModel({
            name : 'Pikachu',
            power : 'Electric'
        });
        pikachu.pwd = pikachu.encryptPwd('ash');
         var ash = new masterModel({
             name:"Ash",
             age:16,
             pokemonsOwned:[pikachu]
         })
    it('Test Case for saving one record in DB',(done)=>{
        ash.save().then(()=>{
            assert(ash.isNew === false);
            done();
        })    
    })
});