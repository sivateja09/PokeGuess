import { fetchPokemonSprite } from "./api.js";
import { submitAnswer, dontKnow } from "./events.js";

window.addEventListener("load", () => {
  fetchPokemonSprite();
});

document.querySelector(".pokemonName").addEventListener("keydown", (event) => {
  submitAnswer(event);
});

document.querySelector(".dontKnow").addEventListener("click", dontKnow);

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.shiftKey) {
    dontKnow();
  }
});
