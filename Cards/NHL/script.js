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
        club.textContent = "Colorado Avalanche";
        position.textContent = "Center";
        stats.innerHTML = "1st - 103 pts";
        playerImage.src = "/NHL/hockey_img/players/mackinnon.jpg";
    } else if (selectedPlayer === "1") {
        title.innerHTML = "TOP 5 NHL POINTERS<BR>IN 2024-25"
        nation.textContent = "Germany";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "2nd - 101 pts";
        playerImage.src = "/NHL/hockey_img/players/draisaitl.jpg";
    } else if (selectedPlayer === "2") {
        title.innerHTML = "TOP 5 NHL POINTERS<BR>IN 2024-25"
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Right Wing";
        stats.innerHTML = "3rd - 95 pts";
        playerImage.src = "/NHL/hockey_img/players/kucherov.jpg";
    } else if (selectedPlayer === "3") {
        title.innerHTML = "TOP 5 NHL POINTERS<BR>IN 2024-25"
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "4th - 89 pts";
        playerImage.src = "/NHL/hockey_img/players/mcdavid.jpg";
    } else if (selectedPlayer === "4") {
        title.innerHTML = "TOP 5 NHL POINTERS<BR>IN 2024-25"
        nation.textContent = "United States";
        club.textContent = "Winnipeg Jets";
        position.textContent = "Left Wing";
        stats.innerHTML = "5th - 85 pts";
        playerImage.src = "/NHL/hockey_img/players/k connor.jpg";
    } else if (selectedPlayer === "5") {
        title.innerHTML = "TOP 5 NHL POINTERS<BR>IN 2024-25"
        nation.textContent = "Czech Republic";
        club.textContent = "Boston Bruins";
        position.textContent = "Right Wing";
        stats.innerHTML = "6th  - 83 pts";
        playerImage.src = "/NHL/hockey_img/players/pastrnak.jpg";
    } else if (selectedPlayer === "6") {
        title.innerHTML = "TOP 5 NHL POINTERS<BR>IN 2024-25"
        nation.textContent = "Canada";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Right Wing";
        stats.innerHTML = "7th - 82 pts";
        playerImage.src = "/NHL/hockey_img/players/marner.jpg";
    } else if (selectedPlayer === "7") {
        title.innerHTML = "TOP 5 NHL POINTERS<BR>IN 2024-25"
        nation.textContent = "United States";
        club.textContent = "Vegas Golden Knights";
        position.textContent = "Center";
        stats.innerHTML = "8th - 80 pts";
        playerImage.src = "/NHL/hockey_img/players/eichel.jpg";
    } else if (selectedPlayer === "8") {
        title.innerHTML = "TOP 5 NHL POINTERS<BR>IN 2024-25"
        nation.textContent = "Sweden";
        club.textContent = "New Jersey Devils";
        position.textContent = "Left Wing";
        stats.innerHTML = "9th - 80 pts";
        playerImage.src = "/NHL/hockey_img/players/bratt.jpg";
    } else if (selectedPlayer === "9") {
        title.innerHTML = "TOP 5 NHL POINTERS<BR>IN 2024-25"
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Defenseman";
        stats.innerHTML = "10th - 78 pts";
        playerImage.src = "/NHL/hockey_img/players/makar.jpg";
    } else if (selectedPlayer === "10") { // Top Goalies 2025
        title.innerHTML = "NHL TOP 5 GOALIES<BR>IN 2024-25";
        nation.textContent = "United States";
        club.textContent = "Winnipeg Jets";
        position.textContent = "";
        stats.innerHTML = "1st";
        playerImage.src = "/NHL/hockey_img/players/hellebuyck.jpg";
    } else if (selectedPlayer === "11") {
        title.innerHTML = "NHL TOP 5 GOALIES<BR>IN 2024-25";
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "";
        stats.innerHTML = "2nd";
        playerImage.src = "/NHL/hockey_img/players/vasilevskiy.jpg";
    } else if (selectedPlayer === "12") {
        title.innerHTML = "NHL TOP 5 GOALIES<BR>IN 2024-25";
        nation.textContent = "United States";
        club.textContent = "Dallas Stars";
        position.textContent = "";
        stats.innerHTML = "3rd";
        playerImage.src = "/NHL/hockey_img/players/oettinger.jpg";
    } else if (selectedPlayer === "13") {
        title.innerHTML = "NHL TOP 5 GOALIES<BR>IN 2024-25";
        nation.textContent = "Russia";
        club.textContent = "New York Rangers";
        position.textContent = "";
        stats.innerHTML = "4th";
        playerImage.src = "/NHL/hockey_img/players/shesterkin.jpg";
    } else if (selectedPlayer === "14") {
        title.innerHTML = "NHL TOP 5 GOALIES<BR>IN 2024-25";
        nation.textContent = "United States";
        club.textContent = "Vancouver Canucks";
        position.textContent = "";
        stats.innerHTML = "5th";
        playerImage.src = "/NHL/hockey_img/players/demko.jpg";
    } else if (selectedPlayer === "15") { // Top Goalies 2005-2025
        title.innerHTML = "NHL TOP 5 GOALIES<BR>2005 to 2025";
        nation.textContent = "Canada";
        club.textContent = "Montreal Canadiens";
        position.textContent ="";
        stats.innerHTML = "1st";
        playerImage.src = "/NHL/hockey_img/players/price.jpg";
    } else if (selectedPlayer === "16") {
        title.innerHTML = "NHL TOP 5 GOALIES<BR>2005 to 2025";
        nation.textContent = "Sweden";
        club.textContent = "New York Rangers";
        position.textContent ="";
        stats.innerHTML = "2nd";
        playerImage.src = "/NHL/hockey_img/players/lundqvist.jpg";
    } else if (selectedPlayer === "17") {
        title.innerHTML = "NHL TOP 5 GOALIES<BR>2005 to 2025";
        nation.textContent = "Canada";
        club.textContent = "Minnesota Wild";
        position.textContent ="";
        stats.innerHTML = "3rd";
        playerImage.src = "/NHL/hockey_img/players/fleury.jpg";
    } else if (selectedPlayer === "18") {
        title.innerHTML = "NHL TOP 5 GOALIES<BR>2005 to 2025";
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent ="";
        stats.innerHTML = "4th";
        playerImage.src = "/NHL/hockey_img/players/vasilevskiy.jpg";
    } else if (selectedPlayer === "19") {
        title.innerHTML = "NHL TOP 5 GOALIES<BR>2005 to 2025";
        nation.textContent = "USA";
        club.textContent = "New York Rangers";
        position.textContent = "";
        stats.innerHTML = "5th";
        playerImage.src = "/NHL/hockey_img/players/quick.jpg";
    } else if (selectedPlayer === "20") {
        title.innerHTML = "NHL TOP 5 POINTERS<BR>IN MARCH #1";
        nation.textContent = "USA";
        club.textContent = "Vegas Golden Knights";
        position.textContent = "Center";
        stats.innerHTML = "1st - 23 POINTS";
        playerImage.src = "/NHL/hockey_img/players/eichel.jpg";
    }
    else if (selectedPlayer === "21") {
        title.innerHTML = "NHL TOP 5 POINTERS<BR>IN MARCH #1";
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Right Winger";
        stats.innerHTML = "2nd - 23 POINTS";
        playerImage.src = "/NHL/hockey_img/players/kucherov.jpg";
    }
    else if (selectedPlayer === "22") {
        title.innerHTML = "NHL TOP 5 POINTERS<BR>IN MARCH #1";
        nation.textContent = "Finland";
        club.textContent = "Dallas Stars";
        position.textContent = "Center";
        stats.innerHTML = "3rd - 21 POINTS";
        playerImage.src = "/NHL/hockey_img/players/hintz.jpg";
    }
    else if (selectedPlayer === "23") {
        title.innerHTML = "NHL TOP 5 POINTERS<BR>IN MARCH #1";

        nation.textContent = "Canada";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Center";
        stats.innerHTML = "4th - 20 POINTS";
        playerImage.src = "/NHL/hockey_img/players/tavares.jpg";
    }
    else if (selectedPlayer === "24") {
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
