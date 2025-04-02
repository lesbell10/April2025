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
    document.body.classList.add("nba-color");
    const birthDate = document.querySelector(".birthDate");
    const nation = document.querySelector(".nation");
    const club = document.querySelector(".club");
    const position = document.querySelector(".position");
    const playerImage = document.querySelector(".playerImage")
    const stats = document.querySelector(".stats")
    const sidepic = document.querySelector(".sidepic")
    const title = document.querySelector(".title")
    
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
    stats.style.fontSize = "32px"
    
    // sidepic.style.bottom = "55px"
    // stats.style.bottom = "200px"
    // document.querySelector(".playerInfo").style.height = "675px"
    // club.style.fontSize = "30px"
    // document.querySelector("select").style.fontSize = "24.5px"

    if (selectedPlayer === "0") {
        title.innerHTML= "TOP 5 NBA POINTS PER <br>GAME 2024-25"
        nation.textContent = "Canada";
        club.textContent = "Oklahoma City Thunder";
        position.textContent = "PG, SG";
        stats.innerHTML = "1st - 33.0 PPG";
        playerImage.src = "/NBA/basket_img/players/s gilgeous-a.jpg";
    } 
    
    // document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, darkorange 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
