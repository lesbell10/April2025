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

    club.style.fontSize = "36px"


    // sidepic.src = "/NBA/basket_img/logos/golden state.gif"

    // if (selectedPlayer === "100") {
    //     birthDate.textContent = "";
    //     nation.textContent = "";
    //     club.textContent = "";
    //     position.innerHTML = "";
    //     playerImage.src = "";
    // } 

    nation.textContent = ""
    club.textContent = ""
    stats.innerHTML = ""

    // sidepic.style.bottom = "55px"

    if (selectedPlayer === "0") {
        nation.textContent = "Canada";
        club.textContent = "Oklahoma City Thunder";
        position.textContent = "PG, SG";
        stats.innerHTML = "1st";
        playerImage.src = "/NBA/basket_img/players/s gilgeous-a.jpg";
        club.style.fontSize = "34px"
    } else if (selectedPlayer === "1") {
        nation.textContent = "Serbia";
        club.textContent = "Denver Nuggets";
        position.textContent = "C, PF";
        stats.innerHTML = "2nd";
        playerImage.src = "/NBA/basket_img/players/n jokic.jpg";
    } else if (selectedPlayer === "2") {
        nation.textContent = "Greece";
        club.textContent = "Milwaukee Bucks";
        position.textContent = "PF, SF";
        stats.innerHTML = "3rd";
        playerImage.src = "/NBA/basket_img/players/g antetokounmpo.jpg";
    } else if (selectedPlayer === "3") {
        nation.textContent = "Slovenia";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "PG, SG";
        stats.innerHTML = "4th";
        playerImage.src = "/NBA/basket_img/players/l doncic.jpg";
    } else if (selectedPlayer === "4") {
        nation.textContent = "United States";
        club.textContent = "Boston Celtics";
        position.textContent = "SF, SG";
        stats.innerHTML = "5th";
        playerImage.src = "/NBA/basket_img/players/j tatum.jpg";
    } else if (selectedPlayer === "5") {
        nation.textContent = "France";
        club.textContent = "San Antonio Spurs";
        position.textContent = "C, PF";
        stats.innerHTML = "6th";
        playerImage.src = "/NBA/basket_img/players/v wembanyama.jpg";
    } else if (selectedPlayer === "6") {
        nation.textContent = "United States";
        club.textContent = "Minnesota Timberwolves";
        position.textContent = "SG, SF";
        stats.innerHTML = "7th";
        playerImage.src = "/NBA/basket_img/players/a edwards.jpg";
        club.style.fontSize = "32px"
    } else if (selectedPlayer === "7") {
        nation.textContent = "United States";
        club.textContent = "Phoenix Suns";
        position.textContent = "SF, PF";
        stats.innerHTML = "8th";
        playerImage.src = "/NBA/basket_img/players/k durant.jpg";
    } else if (selectedPlayer === "8") {
        nation.textContent = "United States";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "SF, PF";
        stats.innerHTML = "9th";
        playerImage.src = "/NBA/basket_img/players/l james.jpg";
    } else if (selectedPlayer === "9") {
        nation.textContent = "United States";
        club.textContent = "Golden State Warriors";
        position.textContent = "PG, SG";
        stats.innerHTML = "10th";
        playerImage.src = "/NBA/basket_img/players/s curry.jpg";
    } else if (selectedPlayer === "10") {
        nation.textContent = "United States";
        club.textContent = "Dallas Mavericks";
        position.textContent = "PF, C";
        stats.innerHTML = "11th";
        playerImage.src = "/NBA/basket_img/players/a davis.jpg";
    } else if (selectedPlayer === "11") {
        nation.textContent = "United States";
        club.textContent = "Cleveland Cavaliers";
        position.textContent = "SG, SF";
        stats.innerHTML = "12th";
        playerImage.src = "/NBA/basket_img/players/d mitchell.jpg";
    } else if (selectedPlayer === "12") {
        nation.textContent = "United States";
        club.textContent = "Boston Celtics";
        position.textContent = "SG, PG";
        stats.innerHTML = "13th";
        playerImage.src = "/NBA/basket_img/players/j brown.jpg";
    } else if (selectedPlayer === "13") {
        nation.textContent = "United States";
        club.textContent = "Milwaukee Bucks";
        position.textContent = "PG, SG";
        stats.innerHTML = "14th";
        playerImage.src = "/NBA/basket_img/players/d lillard.jpg";
    } else if (selectedPlayer === "14") {
        nation.textContent = "United States";
        club.textContent = "New York Knicks";
        position.textContent = "PG, SG";
        stats.innerHTML = "15th";
        playerImage.src = "/NBA/basket_img/players/j brunson.jpg";
    }

    document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, darkorange 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
