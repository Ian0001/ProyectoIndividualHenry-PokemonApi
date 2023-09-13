const {Pokemon, Type}=require("../db");
const axios=require("axios");
const getPokemonById= async(idPokemon) =>{
    if(idPokemon.length>4) {
        const pokemonDb= await Pokemon.findOne({where:{id:idPokemon}, include:{model:Type, attributes: ["name"]}});
        if(pokemonDb)  return pokemonDb; 
    };
    const apiResponse= await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
    const name= apiResponse.data.name;
    const image=apiResponse.data.sprites.other.dream_world.front_default;
    const life= apiResponse.data.stats.find((element)=>element.stat.name==="hp").base_stat;
    const attack=apiResponse.data.stats.find((element)=>element.stat.name==="attack").base_stat;
    const defense=apiResponse.data.stats.find((element)=>element.stat.name==="defense").base_stat;
    const speed=apiResponse.data.stats.find((element)=>element.stat.name==="speed").base_stat;
    const height=apiResponse.data.height;
    const weight=apiResponse.data.weight;
    const types=apiResponse.data.types.map((element)=>element.type.name);
    const pokemon= {name, image, life, attack, defense, speed, height, weight, types};
    return pokemon;
}
module.exports= getPokemonById;