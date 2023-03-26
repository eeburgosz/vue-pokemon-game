<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <!-- <div v-if="pokemon"> -->
  <div v-else>
    <h1>Quién es este Pokémon?</h1>
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
    <!-- v-bind:pokemonId:"4" -> :pokemonId:"4" -->
    <PokemonOptions :pokemons="pokemonArr" @selection-pokemon="checkAnswer" />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
  </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

// console.log(getPokemonOptions());

export default {
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonsArray() {
      this.pokemonArr = await getPokemonOptions();
      // console.log(this.pokemonArr);
      const rndInt = Math.floor(Math.random() * 4);
      // console.log(rndInt)
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(selectedId) {
      // console.log("Pokemon Page llamado", pokemonId);
      this.showPokemon = true;
      this.showAnswer = true;
      if (selectedId == this.pokemon.id) {
        this.message = `Correcto!, ${this.pokemon.name}`;
      } else {
        this.message = `Oops! era ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonsArray();
    },
  },
  // Hooks
  mounted() {
    // console.log("Mounted");
    this.mixPokemonsArray();
  },
};
</script>
