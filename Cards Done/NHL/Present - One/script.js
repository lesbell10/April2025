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


    sidepic.src = "/NHL/hockey_img/logos/nhl.png"
    sidepic.style.width = "200px"

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

    // sidepic.style.bottom = "0px"

    if (selectedPlayer === "0") {
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "1st";
        playerImage.src = "/NHL/hockey_img/players/mcdavid.jpg";
    } else if (selectedPlayer === "1") {
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Center";
        stats.innerHTML = "2nd";
        playerImage.src = "/NHL/hockey_img/players/mackinnon.jpg";
    } else if (selectedPlayer === "2") {
        nation.textContent = "Germany";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "3rd";
        playerImage.src = "/NHL/hockey_img/players/draisaitl.jpg";
    } else if (selectedPlayer === "3") {
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Defenseman";
        stats.innerHTML = "4th";
        playerImage.src = "/NHL/hockey_img/players/makar.jpg";
    } else if (selectedPlayer === "4") {
        nation.textContent = "United States";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Center";
        stats.innerHTML = "5th";
        playerImage.src = "/NHL/hockey_img/players/matthews.jpg";
    } else if (selectedPlayer === "5") {
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Right Wing";
        stats.innerHTML = "6th";
        playerImage.src = "/NHL/hockey_img/players/kucherov.jpg";
    } else if (selectedPlayer === "6") {
        nation.textContent = "Czech Republic";
        club.textContent = "Boston Bruins";
        position.textContent = "Right Wing";
        stats.innerHTML = "7th";
        playerImage.src = "/NHL/hockey_img/players/pastrnak.jpg";
    } else if (selectedPlayer === "7") {
        nation.textContent = "Russia";
        club.textContent = "New York Rangers";
        position.textContent = "Left Wing";
        stats.innerHTML = "8th";
        playerImage.src = "/NHL/hockey_img/players/panarin.jpg";
    } else if (selectedPlayer === "8") {
        nation.textContent = "United States";
        club.textContent = "Florida Panthers";
        position.textContent = "Left Wing";
        stats.innerHTML = "9th";
        playerImage.src = "/NHL/hockey_img/players/m tkachuk.jpg";
    } else if (selectedPlayer === "9") {
        nation.textContent = "United States";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Defenseman";
        stats.innerHTML = "10th";
        playerImage.src = "/NHL/hockey_img/players/q hughes.jpg";
    } else if (selectedPlayer === "10") {
        nation.textContent = "Finland";
        club.textContent = "Florida Panthers";
        position.textContent = "Center";
        stats.innerHTML = "11th";
        playerImage.src = "/NHL/hockey_img/players/barkov.jpg";
    } else if (selectedPlayer === "11") {
        nation.textContent = "Canada";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Center";
        stats.innerHTML = "13th";
        playerImage.src = "/NHL/hockey_img/players/crosby.jpg";
    } else if (selectedPlayer === "12") {
        nation.textContent = "United States";
        club.textContent = "Winnipeg Jets";
        position.textContent = "Goaltender";
        stats.innerHTML = "14th";
        playerImage.src = "/NHL/hockey_img/players/hellebuyck.jpg";
    } else if (selectedPlayer === "13") {
        nation.textContent = "Russia";
        club.textContent = "Washington Capitals";
        position.textContent = "Left Wing";
        stats.innerHTML = "15th";
        playerImage.src = "/NHL/hockey_img/players/ovechkin.jpg";
    } else if (selectedPlayer === "14") {
        nation.textContent = "United States";
        club.textContent = "Vegas Golden Knights";
        position.textContent = "Center";
        stats.innerHTML = "12th";
        playerImage.src = "/NHL/hockey_img/players/eichel.jpg";
    } 

    document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, dodgerblue 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
