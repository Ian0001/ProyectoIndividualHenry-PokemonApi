const axios=require("axios");
const {Type}=require("../db");
const { where } = require("sequelize");
const getTypes= async() =>{
    const types= await Type.findAll();
    if(types.length===0) {
        //obtengo los tipos de la api
        const apiResponse= await axios.get(`https://pokeapi.co/api/v2/type`);
        const {results}= apiResponse.data;
        const pokemonsTypes= results.map((type)=>{
            const name= type.name;
            return {name};
        });//los guardo en la db
        await Type.bulkCreate(pokemonsTypes);
        const typesDb= await Type.findAll();
        return typesDb;
    }
    return types;
};
module.exports= getTypes;