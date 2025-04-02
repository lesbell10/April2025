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

    // sidepic.style.bottom = "30px"
    // stats.style.bottom = "200px"
    stats.style.fontSize = "32px"
    document.querySelector(".short").style.background = " linear-gradient(135deg, darkgrey 20%, #00ff66 100%)";
    document.querySelector(".playerInfo").style.border = "1px solid white"

    if (selectedPlayer === "0") {
        title.innerHTML = "TOP FIFA <br>GOALSCORERS IN EUROPE"
        nation.textContent = "Egypt";
        club.textContent = "Liverpool";
        position.textContent = "Right Winger";
        stats.innerHTML = "1st - 27 Goals ";
        playerImage.src = "/FIFA/football_img/players/salah.webp";
    } else if (selectedPlayer === "1") {
        title.innerHTML = "TOP FIFA <br>GOALSCORERS IN EUROPE"
        nation.textContent = "Poland";
        club.textContent = "FC Barcelona";
        position.textContent = "Striker";
        stats.innerHTML = "2nd - 22 Goals";
        playerImage.src = "/FIFA/football_img/players/lewandowski.webp";
    } else if (selectedPlayer === "2") {
        title.innerHTML = "TOP FIFA <br>GOALSCORERS IN EUROPE"
        nation.textContent = "Italy";
        club.textContent = "Atalanta";
        position.textContent = "Striker";
        stats.innerHTML = "3rd - 22 Goals";
        playerImage.src = "/FIFA/football_img/players/retegui.webp";
    } else if (selectedPlayer === "3") {
        nation.textContent = "Sweden";
        club.textContent = "Sporting CP";
        position.textContent = "Striker";
        stats.innerHTML = "4th - 28 Goals (x 0.75)";
        playerImage.src = "/FIFA/football_img/players/gyokeres.webp";
        stats.style.fontSize = "28px"
    } else if (selectedPlayer === "4") {
        title.innerHTML = "TOP FIFA <br>GOALSCORERS IN EUROPE"
        nation.textContent = "France";
        club.textContent = "Paris Saint-Germain";
        position.textContent = "Forward";
        stats.innerHTML = "5th - 21 Goals";
        playerImage.src = "/FIFA/football_img/players/o dembele.webp";
    } else if (selectedPlayer === "5") {
        title.innerHTML = "TOP FIFA <br>GOALSCORERS IN EUROPE"
        nation.textContent = "England";
        club.textContent = "Bayern Munich";
        position.textContent = "Striker";
        stats.innerHTML = "6th - 21 Goals";
        playerImage.src = "/FIFA/football_img/players/kane.webp";
    } else if (selectedPlayer === "6") {
        title.innerHTML = "TOP FIFA <br>GOALSCORERS IN EUROPE"
        nation.textContent = "Norway";
        club.textContent = "Manchester City";
        position.textContent = "Striker";
        stats.innerHTML = "7th - 21 Goals";
        playerImage.src = "/FIFA/football_img/players/haaland.webp";
    } else if (selectedPlayer === "7") {
        title.innerHTML = "TOP FIFA <br>GOALSCORERS IN EUROPE"
        nation.textContent = "France";
        club.textContent = "Real Madrid";
        position.textContent = "Forward";
        stats.innerHTML = "8th - 20 Goals";
        playerImage.src = "/FIFA/football_img/players/mbappe.webp";
    } else if (selectedPlayer === "8") { // BEST GOALKEEPERS 2025
        title.innerHTML = "FIFA TOP 5 <br>GOALKEEPERS IN 2025";
        nation.textContent = "Brazil";
        club.textContent = "Liverpool";
        position.textContent = "";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/alisson.webp";
    } else if (selectedPlayer === "9") {
        title.innerHTML = "FIFA TOP 5 <br>GOALKEEPERS IN 2025";
        nation.textContent = "Belgium";
        club.textContent = "Real Madrid";
        position.textContent = "";
        stats.innerHTML = "2nd";
        playerImage.src = "/FIFA/football_img/players/courtois.webp";
    } else if (selectedPlayer === "10") {
        title.innerHTML = "FIFA TOP 5 <br>GOALKEEPERS IN 2025";
        nation.textContent = "Slovenia";
        club.textContent = "Atlético Madrid";
        position.textContent = "";
        stats.innerHTML = "3rd";
        playerImage.src = "/FIFA/football_img/players/oblak.webp";
    } else if (selectedPlayer === "11") {
        title.innerHTML = "FIFA TOP 5 <br>GOALKEEPERS IN 2025";
        nation.textContent = "Germany";
        club.textContent = "FC Barcelona";
        position.textContent = "";
        stats.innerHTML = "4th";
        playerImage.src = "/FIFA/football_img/players/ter stegen.webp";
    } else if (selectedPlayer === "12") {
        title.innerHTML = "FIFA TOP 5 <br>GOALKEEPERS IN 2025";
        nation.textContent = "Italy";
        club.textContent = "Paris Saint-Germain";
        position.textContent = "";
        stats.innerHTML = "5th";
        playerImage.src = "/FIFA/football_img/players/donnarumma.webp";
    } else if (selectedPlayer === "13") { // BEST GOALKEEPERS 2005-2025
        title.innerHTML = "FIFA TOP 5 GOALKEEPERS<br> 2005 to 2025";
        nation.textContent = "Italy";
        club.textContent = "Juventus";
        position.textContent = "";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/buffon.webp";
    } else if (selectedPlayer === "14") {
        title.innerHTML = "FIFA TOP 5 GOALKEEPERS<br> 2005 to 2025";
        nation.textContent = "Spain";
        club.textContent = "Real Madrid";
        position.textContent = "";
        stats.innerHTML = "2nd";
        playerImage.src = "/FIFA/football_img/players/casillas.webp";
    } else if (selectedPlayer === "15") {
        title.innerHTML = "FIFA TOP 5 GOALKEEPERS<br> 2005 to 2025";
        nation.textContent = "Germany";
        club.textContent = "Bayern Munich";
        position.textContent = "";
        stats.innerHTML = "3rd";
        playerImage.src = "/FIFA/football_img/players/neuer.webp";
    } else if (selectedPlayer === "16") {
        title.innerHTML = "FIFA TOP 5 GOALKEEPERS<br> 2005 to 2025";
        nation.textContent = "Belgium";
        club.textContent = "Real Madrid";
        position.textContent = "";
        stats.innerHTML = "4th";
        playerImage.src = "/FIFA/football_img/players/courtois.webp";
    } else if (selectedPlayer === "17") {
        title.innerHTML = "FIFA TOP 5 GOALKEEPERS<br> 2005 to 2025";
        nation.textContent = "Brazil";
        club.textContent = "Liverpool";
        position.textContent = "";
        stats.innerHTML = "5th";
        playerImage.src = "/FIFA/football_img/players/alisson.webp";
    } else if (selectedPlayer === "18") { // top fifa, nhl, nba 200combined5-2025
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "Argentina";
        club.textContent = "Inter Miami";
        position.textContent = "Forward";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/messi.webp";
        switchTheme("fifa");
        document.querySelector(".short").style.background = " grey";
        
    }
    else if (selectedPlayer === "19") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "USA";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "SF / PF";
        stats.innerHTML = "2nd";
        playerImage.src = "/NBA/basket_img/players/l james.jpg";
        switchTheme("nba");
        document.querySelector(".short").style.background = " grey";
        
    }
    else if (selectedPlayer === "20") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "Portugal";
        club.textContent = "Al-Nassr";
        position.textContent = "Forward";
        stats.innerHTML = "3rd";
        playerImage.src = "/FIFA/football_img/players/c ronaldo.webp";
        switchTheme("fifa");
        document.querySelector(".short").style.background = " grey";
        
    }
    else if (selectedPlayer === "21") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "Canada";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Center";
        stats.innerHTML = "4th";
        playerImage.src = "/NHL/hockey_img/players/crosby.jpg";
        switchTheme("nhl");
        document.querySelector(".short").style.background = " grey";
        
    }
    else if (selectedPlayer === "22") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "USA";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "SG / SF";
        stats.innerHTML = "5th";
        playerImage.src = "/NBA/basket_img/players/k bryant.jpg";
        switchTheme("nba");
        document.querySelector(".short").style.background = " grey";
        
    }
    else if (selectedPlayer === "23") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "Russia";
        club.textContent = "Washington Capitals";
        position.textContent = "Left Wing";
        stats.innerHTML = "6th";
        playerImage.src = "/NHL/hockey_img/players/ovechkin.jpg";
        switchTheme("nhl");
        document.querySelector(".short").style.background = " grey";
        
    }
    else if (selectedPlayer === "24") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "7th";
        playerImage.src = "/NHL/hockey_img/players/mcdavid.jpg";
        switchTheme("nhl");
        document.querySelector(".short").style.background = " grey";
        
    }
    else if (selectedPlayer === "25") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "USA";
        club.textContent = "Golden State Warriors";
        position.textContent = "PG / SG" ;
        stats.innerHTML = "8th";
        playerImage.src = "/NBA/basket_img/players/s curry.jpg";
        switchTheme("nba");
        document.querySelector(".short").style.background = " grey";
        
    }
    else if (selectedPlayer === "26") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "Brazil";
        club.textContent = "Santos";
        position.textContent = "Forward";
        stats.innerHTML = "9th";
        playerImage.src = "/FIFA/football_img/players/neymar.webp";
        switchTheme("fifa");
        document.querySelector(".short").style.background = " grey";
        
    }
    else if (selectedPlayer === "27") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED 2005 to 2025";
        nation.textContent = "USA";
        club.textContent = "Phoeniz Suns";
        position.textContent = "SF / PF";
        stats.innerHTML = "10th";
        playerImage.src = "/NBA/basket_img/players/k durant.jpg";
        switchTheme("nba");
        document.querySelector(".short").style.background = " grey";
        
    }
    else if (selectedPlayer === "28") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED IN 2025";
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "1st";
        playerImage.src = "/NHL/hockey_img/players/mcdavid.jpg";
        switchTheme("nhl");
        document.querySelector(".short").style.background = "lightgrey";
        document.querySelector(".playerInfo").style.border = "3px solid white"
    }

    else if (selectedPlayer === "29") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED IN 2025";
        nation.textContent = "Egypt";
        club.textContent = "Liverpool";
        position.textContent = "Right Winger";
        stats.innerHTML = "2nd";
        playerImage.src = "/FIFA/football_img/players/salah.webp";
        switchTheme("fifa");
        document.querySelector(".short").style.background = "lightgrey";
        document.querySelector(".playerInfo").style.border = "3px solid white"
    }

    else if (selectedPlayer === "30") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED IN 2025";
        nation.textContent = "Serbia";
        club.textContent = "Denver Nuggets";
        position.textContent = "C / PF";
        stats.innerHTML = "3rd";
        playerImage.src = "/NBA/basket_img/players/n jokic.jpg";
        switchTheme("nba");
        document.querySelector(".short").style.background = "lightgrey";
        document.querySelector(".playerInfo").style.border = "3px solid white"
    }

    else if (selectedPlayer === "31") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED IN 2025";
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Right Winger";
        stats.innerHTML = "4th";
        playerImage.src = "/FIFA/football_img/players/l yamal.webp";
        switchTheme("fifa");
        document.querySelector(".short").style.background = "lightgrey";
        document.querySelector(".playerInfo").style.border = "3px solid white"
    }

    else if (selectedPlayer === "32") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED IN 2025";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Center";
        stats.innerHTML = "5th";
        playerImage.src = "/NHL/hockey_img/players/mackinnon.jpg";
        switchTheme("nhl");
        document.querySelector(".short").style.background = "lightgrey";
        document.querySelector(".playerInfo").style.border = "3px solid white"
    }

    else if (selectedPlayer === "33") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED IN 2025";
        nation.textContent = "Argentina";
        club.textContent = "Inter Miami";
        position.textContent = "Forward";
        stats.innerHTML = "6th";
        playerImage.src = "/FIFA/football_img/players/messi.webp";
        switchTheme("fifa");
        document.querySelector(".short").style.background = "lightgrey";
        document.querySelector(".playerInfo").style.border = "3px solid white"
    }

    else if (selectedPlayer === "34") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED IN 2025";
        nation.textContent = "Canada";
        club.textContent = "Oklahoma City Thunder";
        position.textContent = "PG / SG";
        stats.innerHTML = "7th";
        playerImage.src = "/NBA/basket_img/players/s gilgeous-a.jpg";
        switchTheme("nba");
        document.querySelector(".short").style.background = "lightgrey";
        document.querySelector(".playerInfo").style.border = "3px solid white"
    }

    else if (selectedPlayer === "35") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED IN 2025";
        nation.textContent = "France";
        club.textContent = "Real Madrid";
        position.textContent = "Forward";
        stats.innerHTML = "8th";
        playerImage.src = "/FIFA/football_img/players/mbappe.webp";
        switchTheme("fifa");
        document.querySelector(".short").style.background = "lightgrey";
        document.querySelector(".playerInfo").style.border = "3px solid white"
    }

    else if (selectedPlayer === "36") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED IN 2025";
        nation.textContent = "Portugal";
        club.textContent = "Al Nassr";
        position.textContent = "Striker";
        stats.innerHTML = "9th";
        playerImage.src = "/FIFA/football_img/players/c ronaldo.webp";
        switchTheme("fifa");
        document.querySelector(".short").style.background = "lightgrey";
        document.querySelector(".playerInfo").style.border = "3px solid white"
    }

    else if (selectedPlayer === "37") {
        title.innerHTML = "TOP 10 FIFA, NHL, NBA<BR>COMBINED IN 2025";
        nation.textContent = "Greece";
        club.textContent = "Milwaukee Bucks";
        position.textContent = "PF / C";
        stats.innerHTML = "10th";
        playerImage.src = "/NBA/basket_img/players/g antetoko..jpg";
        switchTheme("nba");
        document.querySelector(".short").style.background = "lightgrey";
        document.querySelector(".playerInfo").style.border = "3px solid white"
    }
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
