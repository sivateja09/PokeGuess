import { pokemon } from "./gamestate.js";
import { fetchPokemonSprite } from "./api.js";

export function submitAnswer(event) {
  if (event.key === "Enter") {
    const answer = document
      .querySelector(".pokemonName")
      .value.toLowerCase()
      .trim();
    console.log(`entered ${answer}`);
    if (answer === pokemon.name.toLowerCase().trim().replace("-"," ")) {
      flash("correct");
      showDetails()
      setTimeout(hideDetails, 3000);
      setTimeout(fetchPokemonSprite, 3000);
    } else {
      flash("incorrect");
    }
  }
}

export function dontKnow() {
  flash("idk");
  showDetails();
  setTimeout(hideDetails, 3000);
  setTimeout(fetchPokemonSprite, 3000);
}

function flash(answer) {
  if (answer === "correct") {
    document.body.style.backgroundColor = "green";
    setTimeout(() => {
      document.body.style.backgroundColor = "rgb(25, 25, 25)";
    }, 500);
  } else if (answer === "incorrect") {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      document.body.style.backgroundColor = "rgb(25, 25, 25)";
    }, 500);
  } else {
    document.body.style.backgroundColor = "gold";
    setTimeout(() => {
      document.body.style.backgroundColor = "rgb(25, 25, 25)";
    }, 500);
  }
}

function showDetails() {
  document.querySelector(".details").style.visibility = "visible";
}

export function hideDetails() {
  document.querySelector(".details").style.visibility = "hidden";
}
