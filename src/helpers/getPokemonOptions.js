import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
   const pokemonsArr = Array.from(Array(650));
   // console.log(pokemonsArr);
   return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonsOptions = async () => {
   // console.log(Math.random());
   const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
   // console.log(getPokemons());
   // console.log(mixedPokemons);
   const pokemons = await getPokemonsNames(mixedPokemons.splice(0, 4));
   // console.table(pokemons);
   return pokemons;
};

const getPokemonsNames = async ([a, b, c, d] = []) => {
   // const resp = await pokemonApi.get(`/${1}`);
   // console.log(a, b, c, d);
   // console.log(resp.data.name, resp.data.id);

   const promiseArr = [
      pokemonApi.get(`/${a}`),
      pokemonApi.get(`/${b}`),
      pokemonApi.get(`/${c}`),
      pokemonApi.get(`/${d}`),
   ];
   // const resps = await Promise.all(promiseArr);
   const [p1, p2, p3, p4] = await Promise.all(promiseArr);
   // console.log(p1, p2, p3, p4);
   return [
      { name: p1.data.name, id: p1.data.id },
      { name: p2.data.name, id: p2.data.id },
      { name: p3.data.name, id: p3.data.id },
      { name: p4.data.name, id: p4.data.id },
   ];

};

export default getPokemonsOptions;