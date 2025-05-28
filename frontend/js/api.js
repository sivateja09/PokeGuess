import { pokemon } from "./gamestate.js";
import {
  updateSprite,
  clearText,
  updateData,
  getRandomPokemon,
} from "./utils.js";

let currentSpriteURL = null;

export async function fetchPokemonSprite() {
  try {
    clearText();
    let currentSpriteURL = null;
    let id = getRandomPokemon();
    const pokemonResponse = await fetch(`http://localhost:1412/pokemon/${id}`);
    if (!pokemonResponse.ok) {
      throw new Error(`Could not load sprite`);
    }

    const pokemonBlob = await pokemonResponse.blob();

    if (currentSpriteURL) {
      URL.revokeObjectURL(currentSpriteURL);
    }
    currentSpriteURL = URL.createObjectURL(pokemonBlob);
    pokemon.spriteURL = currentSpriteURL;
    updateSprite(currentSpriteURL);

    await fetchPokemonData(id);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchPokemonData(id) {
  try {
    const pokemonDataResponse = await fetch(
      `http://localhost:1412/pokemonData/${id}`
    );
    if (!pokemonDataResponse.ok) {
      throw new Error("Problem loading evolutions");
    }

    const pokemonData = await pokemonDataResponse.json();

    updateData(pokemonData);
  } catch (error) {
    console.error(error);
  }
}
