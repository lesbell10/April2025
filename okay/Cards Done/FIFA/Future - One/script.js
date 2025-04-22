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
    // document.querySelector(".playerInfo").style.height = "675px"
    // document.querySelector("select").style.fontSize = "22.5px"

    if (selectedPlayer === "0") {
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Right Winger";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/yamal.webp";
    } else if (selectedPlayer === "1") {
        nation.textContent = "France";
        club.textContent = "Real Madrid";
        position.textContent = "Striker";
        stats.innerHTML = "2nd";
        playerImage.src = "/FIFA/football_img/players/mbappe.webp";
    } else if (selectedPlayer === "2") {
        nation.textContent = "England";
        club.textContent = "Real Madrid";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "3rd";
        playerImage.src = "/FIFA/football_img/players/bellingham.webp";
    } else if (selectedPlayer === "3") {
        nation.textContent = "Brazil";
        club.textContent = "Real Madrid";
        position.textContent = "Forward";
        stats.innerHTML = "4th";
        playerImage.src = "/FIFA/football_img/players/vinicius jr.webp";
    } else if (selectedPlayer === "4") {
        nation.textContent = "Norway";
        club.textContent = "Manchester City";
        position.textContent = "Striker";
        stats.innerHTML = "5th";
        playerImage.src = "/FIFA/football_img/players/haaland.webp";
    } else if (selectedPlayer === "5") {
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "6th";
        playerImage.src = "/FIFA/football_img/players/pedri.webp";
    } else if (selectedPlayer === "6") {
        nation.textContent = "Germany";
        club.textContent = "Bayern Munich";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "7th";
        playerImage.src = "/FIFA/football_img/players/musiala.webp";
    } else if (selectedPlayer === "7") {
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Centre Back";
        stats.innerHTML = "8th";
        playerImage.src = "/FIFA/football_img/players/cubarsi.webp";
    } else if (selectedPlayer === "8") {
        nation.textContent = "France";
        club.textContent = "Real Madrid";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "9th";
        playerImage.src = "/FIFA/football_img/players/camavinga.webp";
    } else if (selectedPlayer === "9") {
        nation.textContent = "Germany";
        club.textContent = "Bayer Leverkusen";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "10th";
        playerImage.src = "/FIFA/football_img/players/wirtz.webp";
    } else if (selectedPlayer === "10") {
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "11th";
        playerImage.src = "/FIFA/football_img/players/gavi.webp";
    } else if (selectedPlayer === "11") {
        nation.textContent = "Portugal";
        club.textContent = "Benfica";
        position.textContent = "Centre Back";
        stats.innerHTML = "12th";
        playerImage.src = "/FIFA/football_img/players/a silva.webp";
    } else if (selectedPlayer === "12") {
        nation.textContent = "Portugal";
        club.textContent = "AC Milan";
        position.textContent = "Left Winger";
        stats.innerHTML = "13th";
        playerImage.src = "/FIFA/football_img/players/r leao.webp";
    } else if (selectedPlayer === "13") {
        nation.textContent = "Georgia";
        club.textContent = "Valencia";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "14th";
        playerImage.src = "/FIFA/football_img/players/mamardashvili.webp";
    } else if (selectedPlayer === "14") {
        nation.textContent = "Georgia";
        club.textContent = "Paris Saint-Germain";
        position.textContent = "Left Winger";
        stats.innerHTML = "15th";
        playerImage.src = "/FIFA/football_img/players/kvaratskhelia.webp";
    }

    document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, lime 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
