const mongoose = require('mongoose');
const crypto = require('crypto');

const pokemonSchema = new mongoose.Schema({
    name : {type:String,required:true},
    power : {type:String,required:true},
    pwd:{type:String, required:true}
});

const masterSchema = new mongoose.Schema({
    name:String,
    age:Number,
    pokemonsOwned:[pokemonSchema]
})

pokemonSchema.method({
    encryptPwd: function (textPassword){
        let secret="thisisnewsec";
        const hash = crypto.createHmac('sha256', secret).update(textPassword).digest('hex');
        return hash;            
    },
    authenticateUser:function (loginPassword){
        return this.encryptPwd(loginPassword) == this.pwd;
    }
})

let masterModel = mongoose.model('master',masterSchema);
let pokemonModel = mongoose.model('pokemon', pokemonSchema);

module.exports = { masterModel, pokemonModel};
