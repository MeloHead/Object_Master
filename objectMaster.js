const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// const poisonPokemonNames = pokemon.filter(onePokemon => onePokemon.types.includes("poison"))
//                             .map(onePokemon => onePokemon.name);
// const mapPokemonNames = pokemon.map(onePokemon => onePokemon.name);
// console.log(poisonPokemonNames)
// console.log(mapPokemonNames)

//---------------------------------------
//list divisble by 3
// const  divBy3 = pokemon.filter( poke => poke.id % 3 == 0)
//                                                         // .map(poke=> poke.id) 
//                                                         // just the id
// console.log(divBy3)

//----------------------------------------
// firetype pokemon
// const fireType = pokemon.filter(poke => poke.types.includes("fire"))
//                                                             // .map(poke => poke.name)
// console.log(fireType)

//----------------------------------------
// multiple type pokemon
// const multiPoke = pokemon.filter(poke => poke.types.length > 1)

// console.log(multiPoke)

//----------------------------------------
//pokemon names
// const pokeName = pokemon.map(poke => poke.name)
// console.log(pokeName)

//----------------------------------------
// pokeGreaterThan
// const pokeGreaterThan = pokemon.filter(poke => poke.id > 99);

// console.log(pokeGreaterThan)

//----------------------------------------
// const poisonPokemonNames = pokemon.filter(onePokemon => onePokemon.types.includes("poison"))

// console.log(poisonPokemonNames)

//----------------------------------------

// const flyingType = pokemon.filter(poke => poke.types[1] == "flying")
//                                 // .map(poke => poke.name)

// console.log(flyingType)

//----------------------------------------
const countPoke = pokemon.filter(poke => poke.types.includes("normal")).length;

console.log(countPoke)
//----------------------------------------