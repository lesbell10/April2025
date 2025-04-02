const playerDropdown = document.querySelector(".yearSelector");
let selectedPlayer = playerDropdown.value;

document.addEventListener("DOMContentLoaded", () => {
    // Load the saved year from localStorage
    const savedYear = localStorage.getItem("selectedYear");
    if (savedYear) {
        playerDropdown.value = savedYear;
        selectedPlayer = savedYear;  // Update selectedPlayer
        displayPlayerInfo();  // Automatically update the player info based on the saved year     
    }
});

function displayPlayerInfo() {
    const birthDate = document.querySelector(".birthDate");
    const nation = document.querySelector(".nation");
    const club = document.querySelector(".club");
    const position = document.querySelector(".position");
    const playerImage = document.querySelector(".playerImage")
    const stats = document.querySelector(".stats")
    const sidepic = document.querySelector(".sidepic")

    // club.style.fontSize = "28px"


    sidepic.src = "/fifa/football_img/logos/soccer ball.jpg"

    // if (selectedPlayer === "100") {
    //     birthDate.textContent = "";
    //     nation.textContent = "";
    //     club.textContent = "";
    //     position.textContent = "";
    //     playerImage.src = "";
    // } 

    nation.textContent = ""
    club.textContent = ""
    stats.innerHTML = ""

    // sidepic.style.bottom = "30px"
    // stats.style.bottom = "200px"
    // document.querySelector(".playerInfo").style.height = "675px"
    // document.querySelector("select").style.fontSize = "22.5px"

    if (selectedPlayer === "0") {
        nation.textContent = "Argentina";
        club.textContent = "Inter Miami";
        position.textContent = "Right Winger";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/messi.webp";
    } else if (selectedPlayer === "1") {
        nation.textContent = "Portugal";
        club.textContent = "Al Nassr";
        position.textContent = "Forward";
        stats.innerHTML = "2nd";
        playerImage.src = "/FIFA/football_img/players/c ronaldo.webp";
    } else if (selectedPlayer === "2") {
        nation.textContent = "Brazil";
        club.textContent = "Mostly Barcelona";
        position.textContent = "Forward";
        stats.innerHTML = "3rd";
        playerImage.src = "/FIFA/football_img/players/ronaldinho.webp";
    } else if (selectedPlayer === "3") {
        nation.textContent = "Brazil";
        club.textContent = "Mostly Real Madrid";
        position.textContent = "Striker";
        stats.innerHTML = "4th";
        playerImage.src = "/FIFA/football_img/players/ronaldo.webp";
    } else if (selectedPlayer === "4") {
        nation.textContent = "France";
        club.textContent = "Mostly Real Madrid";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "5th";
        playerImage.src = "/FIFA/football_img/players/zidane.webp";
    } else if (selectedPlayer === "5") {
        nation.textContent = "France";
        club.textContent = "Mostly Arsenal";
        position.textContent = "Forward";
        stats.innerHTML = "6th";
        playerImage.src = "/FIFA/football_img/players/henry.webp";
    } else if (selectedPlayer === "6") {
        nation.textContent = "Italy";
        club.textContent = "Mostly Juventus";
        position.textContent = "Centre Back";
        stats.innerHTML = "7th";
        playerImage.src = "/FIFA/football_img/players/cannavaro.webp";
    } else if (selectedPlayer === "7") {
        nation.textContent = "Brazil";
        club.textContent = "Santos";
        position.textContent = "Forward";
        stats.innerHTML = "8th";
        playerImage.src = "/FIFA/football_img/players/neymar.webp";
    } else if (selectedPlayer === "8") {
        nation.textContent = "Spain";
        club.textContent = "Mostly Barcelona";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "9th";
        playerImage.src = "/FIFA/football_img/players/iniesta.webp";
    } else if (selectedPlayer === "9") {
        nation.textContent = "Italy";
        club.textContent = "Mostly Juventus";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "10th";
        playerImage.src = "/FIFA/football_img/players/buffon.webp";
    } else if (selectedPlayer === "10") {
        nation.textContent = "Sweden";
        club.textContent = "Mostly AC Milan";
        position.textContent = "Striker";
        stats.innerHTML = "11th";
        playerImage.src = "/FIFA/football_img/players/ibrahimovic.webp";
    } else if (selectedPlayer === "11") {
        nation.textContent = "Spain";
        club.textContent = "Mostly Barcelona";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "12th";
        playerImage.src = "/FIFA/football_img/players/xavi.webp";
    } else if (selectedPlayer === "12") {
        nation.textContent = "Spain";
        club.textContent = "Mostly Real Madrid";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "13th";
        playerImage.src = "/FIFA/football_img/players/casillas.webp";
    } else if (selectedPlayer === "13") {
        nation.textContent = "Belgium";
        club.textContent = "Manchester City";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "14th";
        playerImage.src = "/FIFA/football_img/players/de bruyne.webp";
    } else if (selectedPlayer === "14") {
        nation.textContent = "Brazil";
        club.textContent = "Mostly AC Milan";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "15th";
        playerImage.src = "/FIFA/football_img/players/kaka.webp";
    }

    document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, lime 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
