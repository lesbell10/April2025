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

    if (selectedPlayer === "0") {
        nation.textContent = "Canada";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Center";
        stats.innerHTML = "16th";
        playerImage.src = "/NHL/hockey_img/players/suzuki.jpg";
    } else if (selectedPlayer === "1") {
        nation.textContent = "United States";
        club.textContent = "Ottawa Senators";
        position.textContent = "Left Wing";
        stats.innerHTML = "17th";
        playerImage.src = "/NHL/hockey_img/players/b tkachuk.jpg";
    } else if (selectedPlayer === "2") {
        nation.textContent = "Finland";
        club.textContent = "Carolina Hurricanes";
        position.textContent = "Center";
        stats.innerHTML = "18th";
        playerImage.src = "/NHL/hockey_img/players/s aho.jpg";
    } else if (selectedPlayer === "3") {
        nation.textContent = "United States";
        club.textContent = "Dallas Stars";
        position.textContent = "Left Wing";
        stats.innerHTML = "19th";
        playerImage.src = "/NHL/hockey_img/players/j robertson.jpg";
    } else if (selectedPlayer === "4") {
        nation.textContent = "United States";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Right Wing";
        stats.innerHTML = "20th";
        playerImage.src = "/NHL/hockey_img/players/caufield.jpg";
    } else if (selectedPlayer === "5") {
        nation.textContent = "Sweden";
        club.textContent = "New Jersey Devils";
        position.textContent = "Right Wing";
        stats.innerHTML = "21st";
        playerImage.src = "/NHL/hockey_img/players/bratt.jpg";
    } else if (selectedPlayer === "6") {
        nation.textContent = "United States";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Defenseman";
        stats.innerHTML = "22nd";
        playerImage.src = "/NHL/hockey_img/players/hutson.jpg";
    } else if (selectedPlayer === "7") {
        nation.textContent = "United States";
        club.textContent = "Buffalo Sabres";
        position.textContent = "Center";
        stats.innerHTML = "23rd";
        playerImage.src = "/NHL/hockey_img/players/t thompson.jpg";
    } else if (selectedPlayer === "8") {
        nation.textContent = "United States";
        club.textContent = "Dallas Stars";
        position.textContent = "Goaltender";
        stats.innerHTML = "24th";
        playerImage.src = "/NHL/hockey_img/players/oettinger.jpg";
    } else if (selectedPlayer === "9") {
        nation.textContent = "Germany";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Defenseman";
        stats.innerHTML = "25th";
        playerImage.src = "/NHL/hockey_img/players/seider.jpg";
    } else if (selectedPlayer === "10") {
        nation.textContent = "Slovakia";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Left Wing";
        stats.innerHTML = "26th";
        playerImage.src = "/NHL/hockey_img/players/slafkovsky.jpg";
    } else if (selectedPlayer === "11") {
        nation.textContent = "Russia";
        club.textContent = "Columbus Blue Jackets";
        position.textContent = "Goaltender";
        stats.innerHTML = "27th";
        playerImage.src = "/NHL/hockey_img/players/tarasov.jpg";
    } else if (selectedPlayer === "12") {
        nation.textContent = "Russia";
        club.textContent = "Philadelphia Flyers";
        position.textContent = "Right Wing";
        stats.innerHTML = "28th";
        playerImage.src = "/NHL/hockey_img/players/michkov.jpg";
    } else if (selectedPlayer === "13") {
        nation.textContent = "Sweden";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Right Wing";
        stats.innerHTML = "29th";
        playerImage.src = "/NHL/hockey_img/players/raymond.jpg";
    } else if (selectedPlayer === "14") {
        nation.textContent = "Canada";
        club.textContent = "Buffalo Sabres";
        position.textContent = "Defenseman";
        stats.innerHTML = "30th";
        playerImage.src = "/NHL/hockey_img/players/power.jpg";
    }

    document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, dodgerblue 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
