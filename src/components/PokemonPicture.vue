<template>
  <div class="pokemon-container">
    <img
      v-if="!showPokemon"
      :src="imgSrc"
      class="pokemon-hidden"
      alt="pokemon"
    />
    <img v-if="showPokemon" :src="imgSrc" class="fade-in" alt="pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
/* "scoped es para que estos estilos sean únicamente para este componente" */
/* Pokemon Picture */
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.pokemon-hidden {
  filter: brightness(0);
}
</style>
