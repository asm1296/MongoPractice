/* const assert = require('assert');
const pokemonModel = require('../models/pokemonmod');

describe('Describe Test for Update Records',()=>{
    var pikachu
    beforeEach((done)=>{
        pikachu = new pokemonModel({
            name : 'Pikachu',
            power : 'Electric'
        })

        pikachu.save().then(()=>{
            done();
        })
    })

    it('Create Test for update one record',()=>{
        pokemonModel.findOneAndUpdate({name:'Pikachu'},{name:'Snorlex'}).then((done)=>{
            pokemonModel.findOne({_id:pikachu._id}).then((result)=>{
                assert(result.name === 'Snorlex');
                done();
            })

        })
    })
}) */