
const cheat = document.createElement("button");
cheat.id = "cheat";

const { solution } = JSON.parse(localStorage.getItem("nyt-wordle-state"));

cheat.onclick = () => {
    for(const char of solution.split(""))
        window.dispatchEvent(new KeyboardEvent("keydown", { key: char }));
    
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
};

const reset = document.createElement("button");
reset.id = "reset";

reset.onclick = () => {
    localStorage.clear();
    document.location.reload();
}

document.body.appendChild(cheat);
document.body.appendChild(reset);
