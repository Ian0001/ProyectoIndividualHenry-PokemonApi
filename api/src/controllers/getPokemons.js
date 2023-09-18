const {Pokemon, Type}= require("../db")
const axios=require("axios");
const getPokemons= async(pokemonName) => {
    if(pokemonName) {
        //chequeo si existe en DB
        const pokemonDb= await Pokemon.findOne({where:{name:pokemonName}, include:{model:Type, attributes: ["name"]}});
        if(pokemonDb) {
            const pokemonDbMod= await pokemonDb.toJSON();
            pokemonModified= pokemonDbMod.types.map((poke)=>poke.name);
            return {...pokemonDbMod, types: pokemonModified};
        };  
        //si no existe en DB lo busco en api
        const apiResponse= await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const name= apiResponse.data.name;
        const image=apiResponse.data.sprites.front_default;
        const life= apiResponse.data.stats.find((element)=>element.stat.name==="hp").base_stat;
        const attack=apiResponse.data.stats.find((element)=>element.stat.name==="attack").base_stat;
        const defense=apiResponse.data.stats.find((element)=>element.stat.name==="defense").base_stat;
        const speed=apiResponse.data.stats.find((element)=>element.stat.name==="speed").base_stat;
        const height=apiResponse.data.height;
        const weight=apiResponse.data.weight;
        const types= apiResponse.data.types.map((element)=>element.type.name);
        const id= apiResponse.data.id;
        const pokemon= {id, name, image, life, attack, defense, speed, height, weight, types};
        return pokemon;
    };//si no hay query traigo todo los pokemons
    const apiResponse= await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=60");//traera 60 pokemon
    const {results}= apiResponse.data;
    const pokemons= await Promise.all(results.map(async(pokemon)=>{
        const urlResponse=await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const urlData= urlResponse.data;
        const image= urlData.sprites.front_default;
        const types= urlData.types.map((element)=>element.type.name);
        const name=urlData.name;
        const id=urlData.id;
        const attack=urlData.stats.find((element)=>element.stat.name==="attack").base_stat;
        return {name, image, types, id, attack};
    }));
    return pokemons;
}
module.exports= getPokemons;