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

function switchTheme(theme) {
    // Remove any existing theme classes
    document.body.classList.remove("fifa-color", "nba-color", "nhl-color");

    // Add the new theme class
    document.body.classList.add(`${theme}-color`);
}

function displayPlayerInfo() {
    switchTheme("fifa");
    const birthDate = document.querySelector(".birthDate");
    const nation = document.querySelector(".nation");
    const club = document.querySelector(".club");
    const position = document.querySelector(".position");
    const playerImage = document.querySelector(".playerImage")
    const stats = document.querySelector(".stats")
    const sidepic = document.querySelector(".sidepic")
    const title = document.querySelector(".title")

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
    stats.style.fontSize = "32px"
    document.querySelector(".short").style.background = " linear-gradient(135deg, darkgrey 20%, #00ff66 100%)";
    document.querySelector(".playerInfo").style.border = "1px solid white"

    if (selectedPlayer === "0") {
        title.innerHTML = "TOP FIFA <br>GOALSCORERS IN EUROPE"
        nation.textContent = "Egypt";
        club.textContent = "Liverpool";
        position.textContent = "Right Winger";
        stats.innerHTML = "1st - 27 Goals ";
        playerImage.src = "/FIFA/football_img/players/salah.webp";
    }  else if (selectedPlayer === "1") { // top fifa, nhl, nba 200combined5-2025
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "Argentina";
        club.textContent = "Inter Miami";
        position.textContent = "Forward";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/messi.webp";
        switchTheme("fifa");
        document.querySelector(".short").style.background = " grey";     
    }   else if (selectedPlayer === "2") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "USA";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "SF / PF";
        stats.innerHTML = "2nd";
        playerImage.src = "/NBA/basket_img/players/l james.jpg";
        switchTheme("nba");
        document.querySelector(".short").style.background = " grey";       
    }  else if (selectedPlayer === "3") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "Canada";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Center";
        stats.innerHTML = "4th";
        playerImage.src = "/NHL/hockey_img/players/crosby.jpg";
        switchTheme("nhl");
        document.querySelector(".short").style.background = " grey";        
    }
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
