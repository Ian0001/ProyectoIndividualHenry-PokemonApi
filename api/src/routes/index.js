const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getPokemonsHandler}=require("../handlers/handlers")
const {getPokemonByIdHandler}=require("../handlers/handlers");
const {postPokemonHandler}=require("../handlers/handlers");
const {getTypesHandler}=require("../handlers/handlers");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons", getPokemonsHandler);
router.get("/pokemons/:idPokemon", getPokemonByIdHandler);
router.post("/pokemons", postPokemonHandler);
router.get("/types", getTypesHandler);


module.exports = router;
