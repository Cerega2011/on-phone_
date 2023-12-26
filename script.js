let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scicers = document.querySelector(".scicers");
let result = document.querySelector(".result");
let downloadButton = document.querySelector(".download-button");


rock.addEventListener("click", function () {
    playGame("Камень");
});

paper.addEventListener("click", function () {
    playGame("Бумага");
});
//asdasgit init
scicers.addEventListener("click", function () {
    playGame("Ножницы");
});

function playGame(playerChoise) {
    let choises = ["Камень", "Ножницы", "Бумага"];
    let computerChoise = choises[Math.floor(Math.random() * 3)];
    if (playerChoise == computerChoise) {
        result.textContent = "Ничья";
    } else if (
        (playerChoise == "Камень" && computerChoise == "Ножницы") ||
        (playerChoise == "Ножницы" && computerChoise == "Бумага") ||
        (playerChoise == "Бумага" && computerChoise == "Камень")
    ) {
        result.textContent = "Вы выиграли комьютер выбрал " + computerChoise;
    } else {
        result.textContent = "Вы проиграли компьютер выбрал " + computerChoise;
    }
}

let defaultInstallEvent = null;
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    defaultInstallEvent = event;
});
downloadButton.addEventListener("click", (event) => {
    defaultInstallEvent.prompt();
});