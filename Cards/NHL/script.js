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

    // sidepic.style.bottom = "80px"
    // stats.style.bottom = "190px"
    // document.querySelector(".playerInfo").style.height = "675px"

        if (selectedPlayer === "0") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25"
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "4th - 89 pts";
        playerImage.src = "/NHL/hockey_img/players/mcdavid.jpg";
    }  else if (selectedPlayer === "1") {
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
        club.textContent = "Dallas Stars";
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

    
    // document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, dodgerblue 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
