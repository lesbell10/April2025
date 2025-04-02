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

    sidepic.style.bottom = "55px"
    stats.style.bottom = "200px"
    document.querySelector(".playerInfo").style.height = "675px"
    document.querySelector("select").style.fontSize = "22.5px"

    if (selectedPlayer === "0") {
        nation.textContent = "United States";
        club.textContent = "Los Angeles Clippers";
        position.textContent = "Point Guard, Shooting Guard";
        stats.innerHTML = "16th";
        playerImage.src = "/NBA/basket_img/players/j harden.jpg";
    } else if (selectedPlayer === "1") {
        nation.textContent = "United States";
        club.textContent = "Atlanta Hawks";
        position.textContent = "Point Guard, Shooting Guard";
        stats.innerHTML = "17th";
        playerImage.src = "/NBA/basket_img/players/t young.jpg";
    } else if (selectedPlayer === "2") {
        nation.textContent = "United States";
        club.textContent = "Memphis Grizzlies";
        position.textContent = "Power Forward, Center";
        stats.innerHTML = "18th";
        playerImage.src = "/NBA/basket_img/players/j jackson.jpg";
    } else if (selectedPlayer === "3") {
        nation.textContent = "United States";
        club.textContent = "Philadelphia 76ers";
        position.textContent = "Center, Power Forward";
        stats.innerHTML = "19th";
        playerImage.src = "/NBA/basket_img/players/j embiid.jpg";
    } else if (selectedPlayer === "4") {
        nation.textContent = "United States";
        club.textContent = "Dallas Mavericks";
        position.textContent = "Point Guard, Shooting Guard";
        stats.innerHTML = "20th";
        playerImage.src = "/NBA/basket_img/players/k irving.jpg";
    } else if (selectedPlayer === "5") {
        nation.textContent = "United States";
        club.textContent = "San Antonio Spurs";
        position.textContent = "Point Guard, Shooting Guard";
        stats.innerHTML = "21st";
        playerImage.src = "/NBA/basket_img/players/d fox.jpg";
    } else if (selectedPlayer === "6") {
        nation.textContent = "Dominican Republic";
        club.textContent = "New York Knicks";
        position.textContent = "Center, Power Forward";
        stats.innerHTML = "22nd";
        playerImage.src = "/NBA/basket_img/players/ka towns.jpg";
        document.querySelector("select").style.fontSize = "21px"
    } else if (selectedPlayer === "7") {
        nation.textContent = "United States";
        club.textContent = "Phoenix Suns";
        position.textContent = "Shooting Guard, Point Guard";
        stats.innerHTML = "23rd";
        playerImage.src = "/NBA/basket_img/players/d booker.jpg";
    } else if (selectedPlayer === "8") {
        nation.textContent = "United States";
        club.textContent = "Memphis Grizzlies";
        position.textContent = "Point Guard, Shooting Guard";
        stats.innerHTML = "24th";
        playerImage.src = "/NBA/basket_img/players/j morant.jpg";
    } else if (selectedPlayer === "9") {
        nation.textContent = "United States";
        club.textContent = "Orlando Magic";
        position.textContent = "Power Forward, Small Forward";
        stats.innerHTML = "25th";
        playerImage.src = "/NBA/basket_img/players/p banchero.jpg";
    } else if (selectedPlayer === "10") {
        nation.textContent = "United States";
        club.textContent = "Charlotte Hornets";
        position.textContent = "Point Guard, Shooting Guard";
        stats.innerHTML = "26th";
        playerImage.src = "/NBA/basket_img/players/la ball.jpg";
    } else if (selectedPlayer === "11") {
        nation.textContent = "United States";
        club.textContent = "Cleveland Cavaliers";
        position.textContent = "Power Forward, Center";
        stats.innerHTML = "27th";
        playerImage.src = "/NBA/basket_img/players/e mobley.jpg";
    } else if (selectedPlayer === "12") {
        nation.textContent = "United States";
        club.textContent = "Indiana Pacers";
        position.textContent = "Point Guard, Shooting Guard";
        stats.innerHTML = "28th";
        playerImage.src = "/NBA/basket_img/players/t haliburton.jpg";
    } else if (selectedPlayer === "13") {
        nation.textContent = "United States";
        club.textContent = "Los Angeles Clippers";
        position.textContent = "Small Forward, Power Forward";
        stats.innerHTML = "29th";
        playerImage.src = "/NBA/basket_img/players/k leonard.jpg";
    } else if (selectedPlayer === "14") {
        nation.textContent = "United States";
        club.textContent = "Detroit Pistons";
        position.textContent = "Point Guard, Shooting Guard";
        stats.innerHTML = "30th";
        playerImage.src = "/NBA/basket_img/players/c cunningham.jpg";
    }

    document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, darkorange 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
