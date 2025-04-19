const playerDropdown = document.querySelector(".yearSelector");
let selectedPlayer = playerDropdown.value;

document.addEventListener("DOMContentLoaded", () => {
    // Load the saved year from localStorage
    const savedYear = localStorage.getItem("selectedYear");
    if (savedYear) {
        playerDropdown.value = savedYear;
        selectedPlayer = savedYear;  // Update selectedPlayer
        displayPlayerInfo();  // Automatic<br>ally update the player info based on the saved year     
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

    // sidepic.style.bottom = "80px"
    // stats.style.bottom = "190px"
    // document.querySelector(".playerInfo").style.height = "675px"

    title.style.fontSize = "36px"
    document.querySelector("select").style.fontSize = "26px"

    if (selectedPlayer === "0") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25"
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "4th - 89 pts";
        playerImage.src = "/NHL/hockey_img/players/mcdavid.jpg";
    } else if (selectedPlayer === "1") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH #1";
        nation.textContent = "USA";
        club.textContent = "Vegas Golden Knights";
        position.textContent = "Center";
        stats.innerHTML = "1st - 23 POINTS";
        playerImage.src = "/NHL/hockey_img/players/eichel.jpg";
    }
    else if (selectedPlayer === "2") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH #1";
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Right Winger";
        stats.innerHTML = "2nd - 23 POINTS";
        playerImage.src = "/NHL/hockey_img/players/kucherov.jpg";
    }
    else if (selectedPlayer === "3") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH #1";
        nation.textContent = "Finland";
        club.textContent = "D<br>allas Stars";
        position.textContent = "Center";
        stats.innerHTML = "3rd - 21 POINTS";
        playerImage.src = "/NHL/hockey_img/players/hintz.jpg";
    }
    else if (selectedPlayer === "4") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH #1";

        nation.textContent = "Canada";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Center";
        stats.innerHTML = "4th - 20 POINTS";
        playerImage.src = "/NHL/hockey_img/players/tavares.jpg";
    }
    else if (selectedPlayer === "5") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH #1";
        nation.textContent = "Russia";
        club.textContent = "New York Rangers";
        position.textContent = "Left Winger";
        stats.innerHTML = "5th - 20 POINTS";
        playerImage.src = "/NHL/hockey_img/players/panarin.jpg";
    }
    else if (selectedPlayer === "6") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH #2";
        nation.textContent = "Canada";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Center";
        stats.innerHTML = "6th - 20 POINTS";
        playerImage.src = "/NHL/hockey_img/players/crosby.jpg";
    }
    else if (selectedPlayer === "7") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH #2";
        nation.textContent = "Canada";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Right Winger";
        stats.innerHTML = "7th - 20 POINTS";
        playerImage.src = "/NHL/hockey_img/players/nylander.jpg";
    }
    else if (selectedPlayer === "8") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH #2";
        nation.textContent = "Canada";
        club.textContent = "St. Louis Blues";
        position.textContent = "Center";
        stats.innerHTML = "8th - 20 POINTS";
        playerImage.src = "/NHL/hockey_img/players/thomas.jpg";
    }
    else if (selectedPlayer === "9") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH #2";
        nation.textContent = "USA";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Center";
        stats.innerHTML = "9th - 19 POINTS";
        playerImage.src = "/NHL/hockey_img/players/donato.jpg";
    }
    else if (selectedPlayer === "10") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH #2";
        nation.textContent = "USA";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Center";
        stats.innerHTML = "10th - 19 POINTS";
        playerImage.src = "/NHL/hockey_img/players/matthews.jpg";
    } else if (selectedPlayer === "10") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH #2";
        nation.textContent = "USA";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Center";
        stats.innerHTML = "10th - 19 POINTS";
        playerImage.src = "/NHL/hockey_img/players/matthews.jpg";
    }
    else if (selectedPlayer === "11") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH | #11 - #15";
        nation.textContent = "Canada";
        club.textContent = "St Louis Blues";
        position.textContent = "Left Winger";
        stats.innerHTML = "11th - 19 POINTS";
        playerImage.src = "/NHL/hockey_img/players/holloway.jpg";
    }
    else if (selectedPlayer === "12") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH | #11 - #15";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Center";
        stats.innerHTML = "12th - 19 POINTS";
        playerImage.src = "/NHL/hockey_img/players/mackinnon.jpg";
    }
    else if (selectedPlayer === "13") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH | #11 - #15";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Defenseman";
        stats.innerHTML = "13th - 18 POINTS";
        playerImage.src = "/NHL/hockey_img/players/makar.jpg";
    }
    else if (selectedPlayer === "14") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH | #11 - #15";
        nation.textContent = "Sweden";
        club.textContent = "New Jersey Devils";
        position.textContent = "Left Winger";
        stats.innerHTML = "14th - 18 POINTS";
        playerImage.src = "/NHL/hockey_img/players/bratt.jpg";
    }
    else if (selectedPlayer === "15") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN MARCH | #11 - #15";
        nation.textContent = "Switzerland";
        club.textContent = "New Jersey Devils";
        position.textContent = "Center";
        stats.innerHTML = "15th - 17 POINTS";
        playerImage.src = "/NHL/hockey_img/players/hischier.jpg";
    }
    else if (selectedPlayer === "16") {
        title.innerHTML = "OVECHKIN BEST <br>AMONG NHL TOP SCORERS";
        title.style.fontSize = "42px"
        nation.textContent = "Russia";
        club.textContent = "Washington Capitals";
        position.textContent = "Right Winger";
        stats.innerHTML = "1st - 895 Goals";
        playerImage.src = "/NHL/hockey_img/players/ovechkin.jpg";
    }
    else if (selectedPlayer === "17") {
        title.innerHTML = "OVECHKIN BEST <br>AMONG NHL TOP SCORERS";
        title.style.fontSize = "42px"
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "2nd - 894 Goals";
        playerImage.src = "/NHL/hockey_img/players/gretzky.jpg";
    }
    else if (selectedPlayer === "18") {
        title.innerHTML = "OVECHKIN BEST <br>AMONG NHL TOP SCORERS";
        title.style.fontSize = "42px"
        nation.textContent = "Canada";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Right Winger";
        stats.innerHTML = "3rd - 801 Goals";
        playerImage.src = "/NHL/hockey_img/players/howe.jpg";
    }
    else if (selectedPlayer === "19") {
        title.innerHTML = "OVECHKIN BEST <br>AMONG NHL TOP SCORERS";
        title.style.fontSize = "42px"
        nation.textContent = "Czech Republic";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Right Winger";
        stats.innerHTML = "4th - 766 Goals";
        playerImage.src = "/NHL/hockey_img/players/jagr.jpg";
    }
    else if (selectedPlayer === "20") {
        title.innerHTML = "OVECHKIN BEST <br>AMONG NHL TOP SCORERS";
        title.style.fontSize = "42px"
        nation.textContent = "USA";
        club.textContent = "St. Louis Blues";
        position.textContent = "Right Winger";
        stats.innerHTML = "5th - 741 Goals";
        playerImage.src = "/NHL/hockey_img/players/hull.jpg";
    }
    else if (selectedPlayer === "21") {
        title.innerHTML = "NHL TOP 5 GOALIES<BR>SINCE 2005";
        nation.textContent = "USA";
        club.textContent = "New York Rangers";
        position.textContent = "";
        stats.innerHTML = "5th";
        playerImage.src = "/NHL/hockey_img/players/quick.jpg";
    }
    else if (selectedPlayer === "22") {
        title.innerHTML = "NHL TOP 5 GOALIES<BR>SINCE 2005";
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "";
        stats.innerHTML = "4th";
        playerImage.src = "/NHL/hockey_img/players/vasilevskiy.jpg";
    }
    else if (selectedPlayer === "23") {
        document.querySelector("select").style.fontSize = "23.5px"
        title.innerHTML = "NHL TOP 5 GOALIES<BR>SINCE 2005";
        nation.textContent = "Canada";
        club.textContent = "Minnesota Wild";
        position.textContent = "";
        stats.innerHTML = "3rd";
        playerImage.src = "/NHL/hockey_img/players/fleury.jpg";
    }
    else if (selectedPlayer === "24") {
        title.innerHTML = "NHL TOP 5 GOALIES<BR>SINCE 2005";
        nation.textContent = "Sweden";
        club.textContent = "New York Rangers";
        position.textContent = "";
        stats.innerHTML = "2nd";
        playerImage.src = "/NHL/hockey_img/players/lundqvist.jpg";
    }
    else if (selectedPlayer === "25") {
        title.innerHTML = "NHL TOP 5 GOALIES<BR>SINCE 2005";
        nation.textContent = "Canada";
        club.textContent = "Montreal Canadiens";
        position.textContent = "";
        stats.innerHTML = "1st";
        playerImage.src = "/NHL/hockey_img/players/price.jpg";
    }
    else if (selectedPlayer === "26") {
        title.innerHTML = "NHL TOP U24<br>PLAYERS IN 2025 #1";
        nation.textContent = "Canada";
        club.textContent = "Utah Hockey Club";
        position.textContent = "Right Wing";
        stats.innerHTML = "10th";
        playerImage.src = "/NHL/hockey_img/players/guenther.jpg";
    }
    else if (selectedPlayer === "27") {
        title.innerHTML = "NHL TOP U24<br>PLAYERS IN 2025 #1";
        nation.textContent = "Sweden";
        club.textContent = "Anaheim Ducks";
        position.textContent = "Center";
        stats.innerHTML = "9th";
        playerImage.src = "/NHL/hockey_img/players/carlsson.jpg";
    }
    else if (selectedPlayer === "28") {
        title.innerHTML = "NHL TOP U24<br>PLAYERS IN 2025 #1";
        nation.textContent = "Canada";
        club.textContent = "Buffalo Sabres";
        position.textContent = "Defenseman";
        stats.innerHTML = "8th";
        playerImage.src = "/NHL/hockey_img/players/power.jpg";
    }
    else if (selectedPlayer === "29") {
        title.innerHTML = "NHL TOP U24<br>PLAYERS IN 2025";
        nation.textContent = "Germany";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Defenseman";
        stats.innerHTML = "7th";
        playerImage.src = "/NHL/hockey_img/players/seider.jpg";
    }
    else if (selectedPlayer === "30") {
        title.innerHTML = "NHL TOP U24<br>PLAYERS IN 2025 #1";
        nation.textContent = "USA";
        club.textContent = "Ottawa Senators";
        position.textContent = "Defenseman";
        stats.innerHTML = "6th";
        playerImage.src = "/NHL/hockey_img/players/sanderson.jpg";
    }
    else if (selectedPlayer === "31") {
        title.innerHTML = "NHL TOP 5<BR>UNDER 24 IN 2025";
        nation.textContent = "USA";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Left Wing";
        stats.innerHTML = "5th";
        playerImage.src = "/NHL/hockey_img/players/caufield.jpg";
    }
    else if (selectedPlayer === "32") {
        title.innerHTML = "NHL TOP 5<BR>UNDER 24 IN 2025";
        nation.textContent = "Sweden";
        club.textContent = "Buffalo Sabres";
        position.textContent = "Defenseman";
        stats.innerHTML = "4th";
        playerImage.src = "/NHL/hockey_img/players/dahlin.jpg";
    }
    else if (selectedPlayer === "33") {
        title.innerHTML = "NHL TOP 5<BR>UNDER 24 IN 2025";
        nation.textContent = "Germany";
        club.textContent = "Ottawa Senators";
        position.textContent = "Center";
        stats.innerHTML = "3rd";
        playerImage.src = "/NHL/hockey_img/players/stutzle.jpg";
    }
    else if (selectedPlayer === "34") {
        title.innerHTML = "NHL TOP 5<BR>UNDER 24 IN 2025";
        nation.textContent = "USA";
        club.textContent = "New Jersey Devils";
        position.textContent = "Center";
        stats.innerHTML = "2nd";
        playerImage.src = "/NHL/hockey_img/players/j hughes.jpg";
    }
    else if (selectedPlayer === "35") {
        title.innerHTML = "NHL TOP 5<BR>UNDER 24 IN 2025";
        nation.textContent = "Canada";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Center";
        stats.innerHTML = "1st";
        playerImage.src = "/NHL/hockey_img/players/bedard.jpg";
    }
    else if (selectedPlayer === "36") {
        title.innerHTML = "NHL TOP 5<BR>OVER 34 IN 2025";
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Right Wing";
        stats.innerHTML = "5th";
        playerImage.src = "/NHL/hockey_img/players/perry.jpg";
    }
    else if (selectedPlayer === "37") {
        title.innerHTML = "NHL TOP 5<BR>OVER 34 IN 2025";
        nation.textContent = "Canada";
        club.textContent = "Carolina Hurricanes";
        position.textContent = "Defenseman";
        stats.innerHTML = "4th";
        playerImage.src = "/NHL/hockey_img/players/burns.jpg";
    }
    else if (selectedPlayer === "38") {
        title.innerHTML = "NHL TOP 5<BR>OVER 34 IN 2025";
        nation.textContent = "Canada";
        club.textContent = "Nashville Predators";
        position.textContent = "Center";
        stats.innerHTML = "3rd";
        playerImage.src = "/NHL/hockey_img/players/stamkos.jpg";
    }
    else if (selectedPlayer === "39") {
        title.innerHTML = "NHL TOP 5<BR>OVER 34 IN 2025";
        nation.textContent = "Canada";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Center";
        stats.innerHTML = "2nd";
        playerImage.src = "/NHL/hockey_img/players/crosby.jpg";
    }
    else if (selectedPlayer === "40") {
        title.innerHTML = "NHL TOP 5<BR>OVER 34 IN 2025";
        nation.textContent = "Russia";
        club.textContent = "Washington Capitals";
        position.textContent = "Left Wing";
        stats.innerHTML = "1st";
        playerImage.src = "/NHL/hockey_img/players/ovechkin.jpg";
    }

    // document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, dodgerblue 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
