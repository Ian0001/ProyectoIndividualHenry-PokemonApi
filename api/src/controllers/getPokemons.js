const {Pokemon}= require("../db")
const axios=require("axios");
const getPokemons= async(pokemonName) => {
    if(pokemonName) {
        //chequeo si existe en DB
        const pokemonDb= await Pokemon.findOne({where:{name:pokemonName}});
        if(pokemonDb) return pokemonDb;
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
        const types= apiResponse.data.types;
        const id= apiResponse.data.id;
        const pokemon= {id, name, image, life, attack, defense, speed, height, weight, types};
        return pokemon;
    };//si no hay query traigo todo los pokemons
    const apiResponse= await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=30");//traera 30 pokemon
    const {results}= apiResponse.data;
    const pokemons= await Promise.all(results.map(async(pokemon)=>{
        const urlResponse=await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const urlData= urlResponse.data;
        const image= urlData.sprites.front_default;
        const types= urlData.types;
        const name=urlData.name;
        const id=urlData.id;
        return {name, image, types, id};
    }));
    return pokemons;
}
module.exports= getPokemons;