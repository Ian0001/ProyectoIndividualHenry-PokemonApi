const {Pokemon, Type}=require("../db");
const postPokemon= async(pokemon) =>{
    const {name, image, life, attack, defense, speed, height, weight, types}= pokemon;
    const pokemonDb=await Pokemon.create({name, image, life, attack, defense, speed, height, weight});
    types.forEach(async(element) => {
        const typesDb= await Type.findAll({where:{name:element}});
        await pokemonDb.addType(typesDb);
    });
    return pokemonDb;
    
};
module.exports=postPokemon;