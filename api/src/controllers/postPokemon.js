const {Pokemon, Type}=require("../db");
const postPokemon= async(pokemon) =>{
    const {name, image, life, attack, defense, speed, height, weight, types}= pokemon;
    const pokemonDb=await Pokemon.findOrCreate({where:{name, image, life, attack, defense, speed, height, weight}});
    const typeDb= await Type.findOrCreate({where:{name:types}});
    await pokemonDb.addTypes(typeDb);
};
module.exports=postPokemon;