const getPokemons=require("../controllers/getPokemons");
const getPokemonById=require("../controllers/getPokemonById");
const postPokemon=require("../controllers/postPokemon");
const getTypes=require("../controllers/getTypes");

const getPokemonsHandler=async(req, res)=>{
    try {
        const {name}=req.query;
        const pokemon= await getPokemons(name);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const getPokemonByIdHandler=async(req, res)=>{
    try {
        const {idPokemon}=req.params;
        const pokemon= await getPokemonById(idPokemon);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const postPokemonHandler=async(req, res)=>{
    try {
        const pokemon= req.body;
        const created= await postPokemon(pokemon);
        res.status(200).json(created);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const getTypesHandler=async(req, res)=>{
    try {
        const types= await getTypes();
        res.status(200).json(types);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports={
    getPokemonByIdHandler,
    getPokemonsHandler,
    getTypesHandler,
    postPokemonHandler
}