const game = document.getElementsByTagName("game-app")[0],
      keyboard = game.$keyboard;

const cheat = document.createElement("button");
cheat.id = "cheat";

const reset = document.createElement("button");
reset.id = "reset";

const { solution } = JSON.parse(localStorage.getItem("nyt-wordle-state"));

cheat.onclick = () => {
    solution.split("").forEach((letter) => keyboard.dispatchKeyPressEvent(letter));
    keyboard.dispatchKeyPressEvent("Enter");
};

reset.onclick = () => {
    localStorage.clear();
    document.location.reload();
}

document.body.appendChild(cheat);
document.body.appendChild(reset);
