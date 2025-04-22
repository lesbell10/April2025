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
        nation.textContent = "Germany";
        club.textContent = "Bayer Leverkusen";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "16th";
        playerImage.src = "/FIFA/football_img/players/wirtz.webp";
    } else if (selectedPlayer === "1") {
        nation.textContent = "England";
        club.textContent = "Arsenal";
        position.textContent = "Right Winger";
        stats.innerHTML = "17th";
        playerImage.src = "/FIFA/football_img/players/saka.webp";
    } else if (selectedPlayer === "2") {
        nation.textContent = "Poland";
        club.textContent = "Barcelona";
        position.textContent = "Striker";
        stats.innerHTML = "18th";
        playerImage.src = "/FIFA/football_img/players/lewandowski.webp";
    } else if (selectedPlayer === "3") {
        nation.textContent = "Germany";
        club.textContent = "Barcelona";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "19th";
        playerImage.src = "/FIFA/football_img/players/ter stegen.webp";
    } else if (selectedPlayer === "4") {
        nation.textContent = "Germany";
        club.textContent = "Real Madrid";
        position.textContent = "Centre Back";
        stats.innerHTML = "20th";
        playerImage.src = "/FIFA/football_img/players/rudiger.webp";
    } else if (selectedPlayer === "5") {
        nation.textContent = "Italy";
        club.textContent = "Paris Saint-Germain";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "21st";
        playerImage.src = "/FIFA/football_img/players/donnarumma.webp";
    } else if (selectedPlayer === "6") {
        nation.textContent = "Portugal";
        club.textContent = "Manchester City";
        position.textContent = "Centre Back";
        stats.innerHTML = "22nd";
        playerImage.src = "/FIFA/football_img/players/r dias.webp";
    } else if (selectedPlayer === "7") {
        nation.textContent = "Germany";
        club.textContent = "Bayern Munich";
        position.textContent = "Defensive Midfielder";
        stats.innerHTML = "23rd";
        playerImage.src = "/FIFA/football_img/players/kimmich.webp";
    } else if (selectedPlayer === "8") {
        nation.textContent = "Uruguay";
        club.textContent = "Real Madrid";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "24th";
        playerImage.src = "/FIFA/football_img/players/valverde.webp";
    } else if (selectedPlayer === "9") {
        nation.textContent = "Slovenia";
        club.textContent = "Atletico Madrid";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "25th";
        playerImage.src = "/FIFA/football_img/players/oblak.webp";
    } else if (selectedPlayer === "10") {
        nation.textContent = "France";
        club.textContent = "Atletico Madrid";
        position.textContent = "Forward";
        stats.innerHTML = "26th";
        playerImage.src = "/FIFA/football_img/players/griezmann.webp";
    } else if (selectedPlayer === "11") {
        nation.textContent = "France";
        club.textContent = "Barcelona";
        position.textContent = "Right Back";
        stats.innerHTML = "27th";
        playerImage.src = "/FIFA/football_img/players/kounde.webp";
    } else if (selectedPlayer === "12") {
        nation.textContent = "England";
        club.textContent = "Liverpool";
        position.textContent = "Right Back";
        stats.innerHTML = "28th";
        playerImage.src = "/FIFA/football_img/players/alexander-a.webp";
    } else if (selectedPlayer === "13") {
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "29th";
        playerImage.src = "/FIFA/football_img/players/pedri.webp";
    } else if (selectedPlayer === "14") {
        nation.textContent = "France";
        club.textContent = "Paris Saint-Germain";
        position.textContent = "Forward";
        stats.innerHTML = "30th";
        playerImage.src = "/FIFA/football_img/players/o dembele.webp";
    }

    document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, lime 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
