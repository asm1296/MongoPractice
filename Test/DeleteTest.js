/* const assert = require('assert');
const pokemonModel = require('../models/pokemonmod');

describe('Describe test for deleting records',()=>{
    var pikachu;
    beforeEach((done)=>{
        pikachu = new pokemonModel({
            name : 'Pikachu',
            power : 'Electric'
        })
        pikachu.save().then(()=>{
            done();
        })
    })

    it('Create Test for Delete One Record',()=>{
        pokemonModel.findOneAndRemove({name : 'Pikachu'}).then((done)=>{
            pokemonModel.findOne({name:'Pikachu'}.then((result)=>{
                assert(result === null);
                done();
            }))
        })
    })
}) */