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
    document.body.classList.add("nhl-color");
    const birthDate = document.querySelector(".birthDate");
    const nation = document.querySelector(".nation");
    const club = document.querySelector(".club");
    const position = document.querySelector(".position");
    const playerImage = document.querySelector(".playerImage")
    const stats = document.querySelector(".stats")
    const sidepic = document.querySelector(".sidepic")
    const title = document.querySelector(".title")

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
    stats.style.fontSize = "32px"

    // sidepic.style.bottom = "80px"
    // stats.style.bottom = "190px"
    // document.querySelector(".playerInfo").style.height = "675px"

        if (selectedPlayer === "0") {
        title.innerHTML = "TOP 5 NHL POINTERS<BR>IN 2024-25"
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "4th - 89 pts";
        playerImage.src = "/NHL/hockey_img/players/mcdavid.jpg";
    }  else if (selectedPlayer === "1") {
        title.innerHTML = "NHL TOP 5 POINTERS<BR>IN MARCH #1";
        nation.textContent = "USA";
        club.textContent = "Vegas Golden Knights";
        position.textContent = "Center";
        stats.innerHTML = "1st - 23 POINTS";
        playerImage.src = "/NHL/hockey_img/players/eichel.jpg";
    }
    else if (selectedPlayer === "2") {
        title.innerHTML = "NHL TOP 5 POINTERS<BR>IN MARCH #1";
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Right Winger";
        stats.innerHTML = "2nd - 23 POINTS";
        playerImage.src = "/NHL/hockey_img/players/kucherov.jpg";
    }
    else if (selectedPlayer === "3") {
        title.innerHTML = "NHL TOP 5 POINTERS<BR>IN MARCH #1";
        nation.textContent = "Finland";
        club.textContent = "Dallas Stars";
        position.textContent = "Center";
        stats.innerHTML = "3rd - 21 POINTS";
        playerImage.src = "/NHL/hockey_img/players/hintz.jpg";
    }
    else if (selectedPlayer === "4") {
        title.innerHTML = "NHL TOP 5 POINTERS<BR>IN MARCH #1";

        nation.textContent = "Canada";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Center";
        stats.innerHTML = "4th - 20 POINTS";
        playerImage.src = "/NHL/hockey_img/players/tavares.jpg";
    }
    else if (selectedPlayer === "5") {
        title.innerHTML = "NHL TOP 5 POINTERS<BR>IN MARCH #1";
        nation.textContent = "Russia";
        club.textContent = "New York Rangers";
        position.textContent = "Left Winger";
        stats.innerHTML = "5th - 20 POINTS";
        playerImage.src = "/NHL/hockey_img/players/panarin.jpg";
    }

    // document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, dodgerblue 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
