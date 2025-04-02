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
    // stats.style.bottom = "160px"
    // document.querySelector(".playerInfo").style.height = "705px"
    // document.querySelector("select").style.fontSize = "22.5px"

    if (selectedPlayer === "0") {
        nation.textContent = "United States";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "Small Forward, Power Forward";
        stats.innerHTML = "1st";
        playerImage.src = "/NBA/basket_img/players/l james.jpg";
    } else if (selectedPlayer === "1") {
        nation.textContent = "United States";
        club.textContent = "Mostly Los Angeles Lakers";
        position.textContent = "Shooting Guard, Small Forward";
        stats.innerHTML = "2nd";
        playerImage.src = "/NBA/basket_img/players/k bryant.jpg";
    } else if (selectedPlayer === "2") {
        nation.textContent = "United States";
        club.textContent = "Golden State Warriors";
        position.textContent = "Point Guard, Shooting Guard";
        stats.innerHTML = "3rd";
        playerImage.src = "/NBA/basket_img/players/s curry.jpg";
    } else if (selectedPlayer === "3") {
        nation.textContent = "United States";
        club.textContent = "Mostly Los Angeles Lakers";
        position.textContent = "Center, Power Forward";
        stats.innerHTML = "4th";
        playerImage.src = "/NBA/basket_img/players/s o'neal.jpg";
    } else if (selectedPlayer === "4") {
        nation.textContent = "United States";
        club.textContent = "Phoenix Suns";
        position.textContent = "Small Forward, Power Forward";
        stats.innerHTML = "5th";
        playerImage.src = "/NBA/basket_img/players/k durant.jpg";
    } else if (selectedPlayer === "5") {
        nation.textContent = "United States";
        club.textContent = "Mostly San Antonio Spurs";
        position.textContent = "Power Forward, Center";
        stats.innerHTML = "6th";
        playerImage.src = "/NBA/basket_img/players/t duncan.jpg";
    } else if (selectedPlayer === "6") {
        nation.textContent = "Serbia";
        club.textContent = "Denver Nuggets";
        position.textContent = "Center, Power Forward";
        stats.innerHTML = "7th";
        playerImage.src = "/NBA/basket_img/players/n jokic.jpg";
    } else if (selectedPlayer === "7") {
        nation.textContent = "Greece";
        club.textContent = "Milwaukee Bucks";
        position.textContent = "Power Forward, Center";
        stats.innerHTML = "8th";
        playerImage.src = "/NBA/basket_img/players/g antetokounmpo.jpg";
    } else if (selectedPlayer === "8") {
        nation.textContent = "Canada";
        club.textContent = "Oklahoma City Thunder";
        position.textContent = "Point Guard, Shooting Guard";
        stats.innerHTML = "9th";
        playerImage.src = "/NBA/basket_img/players/s gilgeous-a.jpg";
    } else if (selectedPlayer === "9") {
        nation.textContent = "United States";
        club.textContent = "Mostly Miami Heat";
        position.textContent = "Shooting Guard, Point Guard";
        stats.innerHTML = "10th";
        playerImage.src = "/NBA/basket_img/players/d wade.jpg";
    } else if (selectedPlayer === "10") {
        nation.textContent = "Cameroon";
        club.textContent = "Philadelphia 76ers";
        position.textContent = "Center, Power Forward";
        stats.innerHTML = "11th";
        playerImage.src = "/NBA/basket_img/players/j embiid.jpg";
    } else if (selectedPlayer === "11") {
        nation.textContent = "United States";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "Power Forward, Center";
        stats.innerHTML = "12th";
        playerImage.src = "/NBA/basket_img/players/a davis.jpg";
    } else if (selectedPlayer === "12") {
        nation.textContent = "United States";
        club.textContent = "Los Angeles Clippers";
        position.textContent = "Point Guard, Shooting Guard";
        stats.innerHTML = "13th";
        playerImage.src = "/NBA/basket_img/players/j harden.jpg";
    } else if (selectedPlayer === "13") {
        nation.textContent = "Slovenia";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "Point Guard, Shooting Guard";
        stats.innerHTML = "14th";
        playerImage.src = "/NBA/basket_img/players/l doncic.jpg";
    } else if (selectedPlayer === "14") {
        nation.textContent = "United States";
        club.textContent = "San Antonio Spurs";
        position.textContent = "Point Guard, Shooting Guard";
        stats.innerHTML = "15th";
        playerImage.src = "/NBA/basket_img/players/c paul.jpg";
    }

    document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, darkorange 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
