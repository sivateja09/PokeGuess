import { pokemon, totalPokemon } from "./gamestate.js";

export async function updateSprite(url) {
  const spriteElement = document.querySelector(".pokemonSprite");
  spriteElement.src = url;
  spriteElement.style.display = "block";
}

export function updateData(Data) {
  pokemon.id = Data.id;
  pokemon.gen = Data.gen;
  pokemon.name = Data.name;
  pokemon.primary_type = Data.primary_type;
  pokemon.secondary_type = Data.secondary_type;
  pokemon.description = Data.description;
  updateDetails();
}

export function clearText() {
  document.querySelector(".pokemonName").value = null;
}

export function getRandomPokemon() {
  return Math.floor(Math.random() * 1025) + 1
}

export function updateDetails() {
  document.querySelector(
    ".detail-1"
  ).innerText = `#${pokemon.id} ${pokemon.name}`;
  document.querySelector(".detail-2").innerText = `Generation: ${pokemon.gen}`;
  document.querySelector(".detail-3").innerText = `${pokemon.primary_type}`;
  document.querySelector(".detail-4").innerText = `${pokemon.secondary_type}`;
  document.querySelector(".detail-5").innerText = `${pokemon.description}`;
}
