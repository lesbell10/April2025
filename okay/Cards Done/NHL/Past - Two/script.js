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


    sidepic.src = "/NHL/hockey_img/logos/quebec.png"

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

    sidepic.style.bottom = "80px"
    stats.style.bottom = "190px"
    document.querySelector(".playerInfo").style.height = "675px"
    document.querySelector("select").style.fontSize = "22.5px"
    club.style.fontSize = "28px"

    if (selectedPlayer === "0") {
        nation.textContent = "Canada";
        club.textContent = "Nashville Predators";
        position.textContent = "Center";
        stats.innerHTML = "16th";
        playerImage.src = "/NHL/hockey_img/players/stamkos.jpg";
    } else if (selectedPlayer === "1") {
        nation.textContent = "Russia";
        club.textContent = "New York Rangers";
        position.textContent = "Left Wing";
        stats.innerHTML = "17th";
        playerImage.src = "/NHL/hockey_img/players/panarin.jpg";
    } else if (selectedPlayer === "2") {
        nation.textContent = "Canada";
        club.textContent = "Mostly Tampa Bay Lightning";
        position.textContent = "Center";
        stats.innerHTML = "18th";
        playerImage.src = "/NHL/hockey_img/players/lecavalier.jpg";
        club.style.fontSize = "25px"
    } else if (selectedPlayer === "3") {
        nation.textContent = "Russia";
        club.textContent = "Minnesota Wild";
        position.textContent = "Left Wing";
        stats.innerHTML = "19th";
        playerImage.src = "/NHL/hockey_img/players/kaprizov.jpg";
    } else if (selectedPlayer === "4") {
        nation.textContent = "Canada";
        club.textContent = "Minnesota Wild";
        position.textContent = "Goaltender";
        stats.innerHTML = "20th";
        playerImage.src = "/NHL/hockey_img/players/fleury.jpg";
    } else if (selectedPlayer === "5") {
        nation.textContent = "Canada";
        club.textContent = "San Jose Sharks";
        position.textContent = "Center";
        stats.innerHTML = "21st";
        playerImage.src = "/NHL/hockey_img/players/thornton.jpg";
    } else if (selectedPlayer === "6") {
        nation.textContent = "Canada";
        club.textContent = "Mostly Nashville Predators";
        position.textContent = "Defenseman";
        stats.innerHTML = "22nd";
        playerImage.src = "/NHL/hockey_img/players/weber.jpg";
        club.style.fontSize = "27px"
    } else if (selectedPlayer === "7") {
        nation.textContent = "Canada";
        club.textContent = "Mostly Chicago Blackhawks";
        position.textContent = "Center";
        stats.innerHTML = "23rd";
        playerImage.src = "/NHL/hockey_img/players/j toews.jpg";
        club.style.fontSize = "26px"
    } else if (selectedPlayer === "8") {
        nation.textContent = "Canada";
        club.textContent = "Boston Bruins";
        position.textContent = "Left Wing";
        stats.innerHTML = "24th";
        playerImage.src = "/NHL/hockey_img/players/marchand.jpg";
    } else if (selectedPlayer === "9") {
        nation.textContent = "Canada";
        club.textContent = "Los Angeles Kings";
        position.textContent = "Defenseman";
        stats.innerHTML = "25th";
        playerImage.src = "/NHL/hockey_img/players/doughty.jpg";
    } else if (selectedPlayer === "10") {
        nation.textContent = "Russia";
        club.textContent = "Mostly Atlanta Thrashers";
        position.textContent = "Right Wing";
        stats.innerHTML = "26th";
        playerImage.src = "/NHL/hockey_img/players/kovalchuk.jpg";
    } else if (selectedPlayer === "11") {
        nation.textContent = "Sweden";
        club.textContent = "Mostly Vancouver Canucks";
        position.textContent = "Left Wing";
        stats.innerHTML = "27th";
        playerImage.src = "/NHL/hockey_img/players/d sedin.jpg";
        club.style.fontSize = "27px"
    } else if (selectedPlayer === "12") {
        nation.textContent = "Sweden";
        club.textContent = "Mostly Vancouver Canucks";
        position.textContent = "Center";
        stats.innerHTML = "28th";
        playerImage.src = "/NHL/hockey_img/players/h sedin.jpg";
        club.style.fontSize = "27px"
    } else if (selectedPlayer === "13") {
        nation.textContent = "Canada";
        club.textContent = "Mostly Chicago Blackhawks";
        position.textContent = "Defenseman";
        stats.innerHTML = "29th";
        playerImage.src = "/NHL/hockey_img/players/keith.jpg";
        club.style.fontSize = "26px"
    } else if (selectedPlayer === "14") {
        nation.textContent = "United States";
        club.textContent = "Los Angeles Kings";
        position.textContent = "Goaltender";
        stats.innerHTML = "30th";
        playerImage.src = "/NHL/hockey_img/players/quick.jpg";
    }

    document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, dodgerblue 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
