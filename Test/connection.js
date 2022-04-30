const mongoose = require('mongoose');

    before((done)=>{
        mongoose.connect('mongodb://localhost:27017/Test',{useNewUrlParser:true,useUnifiedTopology:true});
    mongoose.connection.once('open',()=>{
        console.log('Connected to MongoDb - Test');
        done();
    }).on('error',(error)=>{
        console.log(`Connection Error --> ${error}`)
    });
    })

    beforeEach((done)=>{
        mongoose.connection.collections.pokemons.drop(()=>{
            done();
        })

    })

    after

    afterEach