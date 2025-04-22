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

    club.style.fontSize = "28px"


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

    sidepic.style.bottom = "30px"
    stats.style.bottom = "200px"
    document.querySelector(".playerInfo").style.height = "675px"
    document.querySelector("select").style.fontSize = "22.5px"

    if (selectedPlayer === "0") {
        nation.textContent = "France";
        club.textContent = "Real Madrid";
        position.textContent = "Defensive Midfielder";
        stats.innerHTML = "16th";
        playerImage.src = "/FIFA/football_img/players/tchouameni.webp";
    } else if (selectedPlayer === "1") {
        nation.textContent = "Spain";
        club.textContent = "Athletic Bilbao";
        position.textContent = "Left Winger";
        stats.innerHTML = "17th";
        playerImage.src = "/FIFA/football_img/players/n williams.webp";
    } else if (selectedPlayer === "2") {
        nation.textContent = "France";
        club.textContent = "Paris Saint-Germain";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "18th";
        playerImage.src = "/FIFA/football_img/players/zaire-emery.webp";
    } else if (selectedPlayer === "3") {
        nation.textContent = "Brazil";
        club.textContent = "Real Madrid";
        position.textContent = "Right Winger";
        stats.innerHTML = "19th";
        playerImage.src = "/FIFA/football_img/players/rodrygo.webp";
    } else if (selectedPlayer === "4") {
        nation.textContent = "Portugal";
        club.textContent = "Paris Saint-Germain";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "20th";
        playerImage.src = "/FIFA/football_img/players/j neves.webp";
    } else if (selectedPlayer === "5") {
        nation.textContent = "Netherlands";
        club.textContent = "RB Leipzig";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "21st";
        playerImage.src = "/FIFA/football_img/players/x simons.webp";
    } else if (selectedPlayer === "6") {
        nation.textContent = "Belgium";
        club.textContent = "Manchester City";
        position.textContent = "Left Winger";
        stats.innerHTML = "22nd";
        playerImage.src = "/FIFA/football_img/players/doku.webp";
    } else if (selectedPlayer === "7") {
        nation.textContent = "Italy";
        club.textContent = "Atalanta";
        position.textContent = "Centre Back";
        stats.innerHTML = "23rd";
        playerImage.src = "/FIFA/football_img/players/scalvini.webp";
    } else if (selectedPlayer === "8") {
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Left Back";
        stats.innerHTML = "24th";
        playerImage.src = "/FIFA/football_img/players/balde.webp";
    } else if (selectedPlayer === "9") {
        nation.textContent = "Brazil";
        club.textContent = "Manchester City";
        position.textContent = "Right Winger";
        stats.innerHTML = "25th";
        playerImage.src = "/FIFA/football_img/players/savinho.webp";
    } else if (selectedPlayer === "10") {
        nation.textContent = "Nigeria";
        club.textContent = "Galatasaray";
        position.textContent = "Striker";
        stats.innerHTML = "26th";
        playerImage.src = "/FIFA/football_img/players/osimhen.webp";
    } else if (selectedPlayer === "11") {
        nation.textContent = "Croatia";
        club.textContent = "Manchester City";
        position.textContent = "Left Back";
        stats.innerHTML = "27th";
        playerImage.src = "/FIFA/football_img/players/gvardiol.webp";
    } else if (selectedPlayer === "12") {
        nation.textContent = "Brazil";
        club.textContent = "Real Madrid";
        position.textContent = "Striker";
        stats.innerHTML = "28th";
        playerImage.src = "/FIFA/football_img/players/endrick.webp";
    } else if (selectedPlayer === "13") {
        nation.textContent = "Argentina";
        club.textContent = "Atletico Madrid";
        position.textContent = "Forward";
        stats.innerHTML = "29th";
        playerImage.src = "/FIFA/football_img/players/j alvarez.webp";
    } else if (selectedPlayer === "14") {
        nation.textContent = "Turkey";
        club.textContent = "Real Madrid";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "30th";
        playerImage.src = "/FIFA/football_img/players/guler.webp";
    }

    document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, lime 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
