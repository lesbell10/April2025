// const { select } = require("three/tsl");

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

function switchTheme(theme) {
    // Remove any existing theme classes
    document.body.classList.remove("fifa-color", "nba-color", "nhl-color");

    // Add the new theme class
    document.body.classList.add(`${theme}-color`);
}

function displayPlayerInfo() {
    switchTheme("fifa");
    const birthDate = document.querySelector(".birthDate");
    const nation = document.querySelector(".nation");
    const club = document.querySelector(".club");
    const position = document.querySelector(".position");
    const playerImage = document.querySelector(".playerImage")
    const stats = document.querySelector(".stats")
    const sidepic = document.querySelector(".sidepic")
    const title = document.querySelector(".title")

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
    title.style.fontSize = "36px"
    document.querySelector("select").style.fontSize = "24px"
    // sidepic.style.bottom = "30px"
    // stats.style.bottom = "200px"
    document.querySelector(".short").style.background = " linear-gradient(135deg, darkgrey 20%, #00ff66 100%)";
    document.querySelector(".playerInfo").style.border = "1px solid white"

    if (selectedPlayer === "0") {
        title.innerHTML = "TOP FIFA <br>GOALSCORERS IN EUROPE"
        nation.textContent = "Egypt";
        club.textContent = "Liverpool";
        position.textContent = "Right Winger";
        stats.innerHTML = "1st - 27 Goals ";
        playerImage.src = "/FIFA/football_img/players/salah.webp";
    } else if (selectedPlayer === "100") { // top fifa, nhl, nba 200combined5-2025
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "Argentina";
        club.textContent = "Inter Miami";
        position.textContent = "Forward";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/messi.webp";
        switchTheme("fifa");
        document.querySelector(".short").style.background = " grey";
    } else if (selectedPlayer === "200") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "USA";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "SF / PF";
        stats.innerHTML = "2nd";
        playerImage.src = "/NBA/basket_img/players/l james.jpg";
        switchTheme("nba");
        document.querySelector(".short").style.background = " grey";
    } else if (selectedPlayer === "300") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "Canada";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Center";
        stats.innerHTML = "4th";
        playerImage.src = "/NHL/hockey_img/players/crosby.jpg";
        switchTheme("nhl");
        document.querySelector(".short").style.background = " grey";
    } else if (selectedPlayer === "1") {
        title.innerHTML = "FIFA TOP ATTACKING<BR>MIDFIELDERS SINCE 2005";
        nation.textContent = "Germany";
        club.textContent = "Arsenal";
        position.textContent = "";
        stats.innerHTML = "5th";
        playerImage.src = "/FIFA/football_img/players/ozil.webp";
    } else if (selectedPlayer === "2") {
        title.innerHTML = "FIFA TOP ATTACKING<BR>MIDFIELDERS SINCE 2005";
        nation.textContent = "England";
        club.textContent = "Manchester United";
        position.textContent = "";
        stats.innerHTML = "4th";
        playerImage.src = "/FIFA/football_img/players/rooney.webp";
    } else if (selectedPlayer === "3") {
        title.innerHTML = "FIFA TOP ATTACKING<BR>MIDFIELDERS SINCE 2005";
        nation.textContent = "Italy";
        club.textContent = "AS Roma";
        position.textContent = "";
        stats.innerHTML = "3rd";
        playerImage.src = "/FIFA/football_img/players/totti.webp";
    } else if (selectedPlayer === "4") {
        title.innerHTML = "FIFA TOP ATTACKING<BR>MIDFIELDERS SINCE 2005";
        nation.textContent = "Brazil";
        club.textContent = "AC Milan";
        position.textContent = "";
        stats.innerHTML = "2nd";
        playerImage.src = "/FIFA/football_img/players/kaka.webp";
    } else if (selectedPlayer === "5") {
        title.innerHTML = "FIFA TOP ATTACKING<BR>MIDFIELDERS SINCE 2005";
        nation.textContent = "France";
        club.textContent = "Real Madrid";
        position.textContent = "";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/zidane.webp";
    } else if (selectedPlayer === "6") {
        title.innerHTML = "FIFA TOP 5 DEFENSIVE<BR>MIDFIELDERS SINCE 2005";
        nation.textContent = "Brazil";
        club.textContent = "Manchester United";
        position.textContent = "";
        stats.innerHTML = "5th";
        playerImage.src = "/FIFA/football_img/players/casemiro.webp";
    } else if (selectedPlayer === "7") {
        title.innerHTML = "FIFA TOP 5 DEFENSIVE<BR>MIDFIELDERS SINCE 2005";
        nation.textContent = "Ghana";
        club.textContent = "Chelsea";
        position.textContent = "";
        stats.innerHTML = "4th";
        playerImage.src = "/FIFA/football_img/players/essien.webp";
    } else if (selectedPlayer === "8") {
        title.innerHTML = "FIFA TOP 5 DEFENSIVE<BR>MIDFIELDERS SINCE 2005";
        nation.textContent = "Ivory Coast";
        club.textContent = "Manchester City";
        position.textContent = "";
        stats.innerHTML = "3rd";
        playerImage.src = "/FIFA/football_img/players/y toure.webp";
    } else if (selectedPlayer === "9") {
        title.innerHTML = "FIFA TOP 5 DEFENSIVE<BR>MIDFIELDERS SINCE 2005";
        nation.textContent = "Spain";
        club.textContent = "Inter Miami";
        position.textContent = "";
        stats.innerHTML = "2nd";
        playerImage.src = "/FIFA/football_img/players/busquets.webp";
    } else if (selectedPlayer === "10") {
        title.innerHTML = "FIFA TOP 5 DEFENSIVE<BR>MIDFIELDERS SINCE 2005";
        nation.textContent = "France";
        club.textContent = "Al-Ittihad";
        position.textContent = "";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/kante.webp";
    } else if (selectedPlayer === "11") {
        title.innerHTML = "FIFA TOP 5 RIGHT<BR>BACKS SINCE 2005";
        nation.textContent = "Spain";
        club.textContent = "Real Madrid";
        position.textContent = "";
        stats.innerHTML = "5th";
        playerImage.src = "/FIFA/football_img/players/carvajal.webp";
    } else if (selectedPlayer === "12") {
        title.innerHTML = "FIFA TOP 5 RIGHT<BR>BACKS SINCE 2005";
        nation.textContent = "England";
        club.textContent = "AC Milan";
        position.textContent = "";
        stats.innerHTML = "4th";
        playerImage.src = "/FIFA/football_img/players/walker.webp";
    } else if (selectedPlayer === "13") {
        document.querySelector("select").style.fontSize = "18.25px"
        title.innerHTML = "FIFA TOP 5 RIGHT<BR>BACKS SINCE 2005";
        nation.textContent = "England";
        club.textContent = "Liverpool";
        position.textContent = "";
        stats.innerHTML = "3rd";
        playerImage.src = "/FIFA/football_img/players/alexander-a.webp";
    }  else if (selectedPlayer === "14") {
        title.innerHTML = "FIFA TOP 5 RIGHT<BR>BACKS SINCE 2005";
        nation.textContent = "Germany";
        club.textContent = "Bayern Munich";
        position.textContent = "";
        stats.innerHTML = "2nd";
        playerImage.src = "/FIFA/football_img/players/lahm.webp";
    } else if (selectedPlayer === "15") {
        title.innerHTML = "FIFA TOP 5 RIGHT<BR>BACKS SINCE 2005";
        nation.textContent = "Brazil";
        club.textContent = "Barcelona";
        position.textContent = "";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/d alves.webp";
    } else if (selectedPlayer === "16") {
        title.innerHTML = "FIFA TOP 5 LEFT<BR>BACKS SINCE 2005";
        nation.textContent = "Portugal";
        club.textContent = "Al Hilal";
        position.textContent = "";
        stats.innerHTML = "5th";
        playerImage.src = "/FIFA/football_img/players/cancelo.webp";
    } else if (selectedPlayer === "17") {
        title.innerHTML = "FIFA TOP 5 LEFT<BR>BACKS SINCE 2005";
        nation.textContent = "France";
        club.textContent = "Manchester United";
        position.textContent = ""
        stats.innerHTML = "4th";
        playerImage.src = "/FIFA/football_img/players/evra.webp";
    } else if (selectedPlayer === "18") {
        title.innerHTML = "FIFA TOP 5 LEFT<BR>BACKS SINCE 2005";
        nation.textContent = "England";
        club.textContent = "Chelsea";
        position.textContent = ""
        stats.innerHTML = "3rd";
        playerImage.src = "/FIFA/football_img/players/a cole.webp";
    } else if (selectedPlayer === "19") {
        title.innerHTML = "FIFA TOP 5 LEFT<BR>BACKS SINCE 2005";
        nation.textContent = "Spain";
        club.textContent = "Inter Miami";
        position.textContent = ""
        stats.innerHTML = "2nd";
        playerImage.src = "/FIFA/football_img/players/alba.webp";
    } else if (selectedPlayer === "20") {
        title.innerHTML = "FIFA TOP 5 LEFT<BR>BACKS SINCE 2005";
        nation.textContent = "Brazil";
        club.textContent = "Real Madrid";
        position.textContent = ""
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/marcelo.webp";
    }
    else if (selectedPlayer === "21") {
        title.innerHTML = "FIFA TOP 5 CENTRE<BR>BACKS SINCE 2005";
        nation.textContent = "Portugal";
        club.textContent = "Manchester City";
        position.textContent = "";
        stats.innerHTML = "5th";
        playerImage.src = "/FIFA/football_img/players/r dias.webp";
    }
    else if (selectedPlayer === "22") {
        title.innerHTML = "FIFA TOP 5 CENTRE<BR>BACKS SINCE 2005";
        nation.textContent = "Brazil";
        club.textContent = "Paris Saint-Germain";
        position.textContent = "";
        stats.innerHTML = "4th";
        playerImage.src = "/FIFA/football_img/players/t silva.webp";
    }
    else if (selectedPlayer === "23") {
        title.innerHTML = "FIFA TOP 5 CENTRE<BR>BACKS SINCE 2005";
        nation.textContent = "Italy";
        club.textContent = "Juventus";
        position.textContent = "";
        stats.innerHTML = "3rd";
        playerImage.src = "/FIFA/football_img/players/chiellini.webp";
    }
    else if (selectedPlayer === "24") {
        title.innerHTML = "FIFA TOP 5 CENTRE<BR>BACKS SINCE 2005";
        nation.textContent = "Netherlands";
        club.textContent = "Liverpool";
        position.textContent = "";
        stats.innerHTML = "2nd";
        playerImage.src = "/FIFA/football_img/players/van dijk.webp";
    }
    else if (selectedPlayer === "25") {
        title.innerHTML = "FIFA TOP 5 CENTRE<BR>BACKS SINCE 2005";
        nation.textContent = "Spain";
        club.textContent = "Real Madrid";
        position.textContent = "";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/s ramos.webp";
    }
    else if (selectedPlayer === "26") {
        title.innerHTML = "FIFA TOP U24<br>PLAYERS IN 2025 #1";
        nation.textContent = "France";
        club.textContent = "Real Madrid";
        position.textContent = "Defensive Midfielder";
        stats.innerHTML = "10th";
        playerImage.src = "/FIFA/football_img/players/camavinga.webp";
    }
    else if (selectedPlayer === "27") {
        title.innerHTML = "FIFA TOP U24<br>PLAYERS IN 2025 #1";
        nation.textContent = "Portugal";
        club.textContent = "Paris Saint-Germain";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "9th";
        playerImage.src = "/FIFA/football_img/players/j neves.webp";
    }
    else if (selectedPlayer === "28") {
        title.innerHTML = "FIFA TOP U24<br>PLAYERS IN 2025 #1";
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Centre Back";
        stats.innerHTML = "8th";
        playerImage.src = "/FIFA/football_img/players/cubarsi.webp";
    }
    else if (selectedPlayer === "29") {
        title.innerHTML = "FIFA TOP U24<br>PLAYERS IN 2025 #1";
        nation.textContent = "Germany";
        club.textContent = "Bayer Leverkusen";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "7th";
        playerImage.src = "/FIFA/football_img/players/wirtz.webp";
    }
    else if (selectedPlayer === "30") {
        title.innerHTML = "FIFA TOP U24<br>PLAYERS IN 2025 #1";
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "6th";
        playerImage.src = "/FIFA/football_img/players/gavi.webp";
    }
    else if (selectedPlayer === "31") {
        title.innerHTML = "FIFA TOP 5<br>UNDER 24 IN 2025";
        nation.textContent = "Germany";
        club.textContent = "Bayern Munich";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "5th";
        playerImage.src = "/FIFA/football_img/players/musiala.webp";
    }
    else if (selectedPlayer === "32") {
        title.innerHTML = "FIFA TOP 5<br>UNDER 24 IN 2025";
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "4th";
        playerImage.src = "/FIFA/football_img/players/pedri.webp";
    }
    else if (selectedPlayer === "33") {
        title.innerHTML = "FIFA TOP 5<br>UNDER 24 IN 2025";
        nation.textContent = "England";
        club.textContent = "Arsenal";
        position.textContent = "Right Winger";
        stats.innerHTML = "3rd";
        playerImage.src = "/FIFA/football_img/players/saka.webp";
    }
    else if (selectedPlayer === "34") {
        title.innerHTML = "FIFA TOP 5<br>UNDER 24 IN 2025";
        nation.textContent = "England";
        club.textContent = "Real Madrid";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "2nd";
        playerImage.src = "/FIFA/football_img/players/bellingham.webp";
    }
    else if (selectedPlayer === "35") {
        title.innerHTML = "FIFA TOP 5<br>UNDER 24 IN 2025";
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Right Winger";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/yamal.webp";
    }
    else if (selectedPlayer === "36") {
        title.innerHTML = "FIFA TOP 5<br>OVER 34 IN 2025";
        nation.textContent = "France";
        club.textContent = "Al-Ittihad";
        position.textContent = "Striker";
        stats.innerHTML = "5th";
        playerImage.src = "/FIFA/football_img/players/benzema.webp";
    }
    else if (selectedPlayer === "37") {
        title.innerHTML = "FIFA TOP 5<br>OVER 34 IN 2025";
        nation.textContent = "Croatia";
        club.textContent = "Real Madrid";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "4th";
        playerImage.src = "/FIFA/football_img/players/modric.webp";
    }
    else if (selectedPlayer === "38") {
        title.innerHTML = "FIFA TOP 5<br>OVER 34 IN 2025";
        nation.textContent = "Portugal";
        club.textContent = "Al Nassr";
        position.textContent = "Forward";
        stats.innerHTML = "3rd";
        playerImage.src = "/FIFA/football_img/players/c ronaldo.webp";
    }
    else if (selectedPlayer === "39") {
        document.querySelector("select").style.fontSize = "25px"
        title.innerHTML = "FIFA TOP 5<br>OVER 34 IN 2025";
        nation.textContent = "Poland";
        club.textContent = "Barcelona";
        position.textContent = "Striker";
        stats.innerHTML = "2nd";
        playerImage.src = "/FIFA/football_img/players/lewandowski.webp";
    }
    else if (selectedPlayer === "40") {
        title.innerHTML = "FIFA TOP 5<br>OVER 34 IN 2025";
        nation.textContent = "Argentina";
        club.textContent = "Inter Miami";
        position.textContent = "Forward";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/messi.webp";
    }
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
