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
    document.querySelector(".short").style.background = " linear-gradient(135deg, darkgrey 20%, #00ff66 100%)";
    document.querySelector(".playerInfo").style.border = "1px solid white"
    document.querySelector("select").style.fontSize = "20px"

    // SINCE 2005
    if (selectedPlayer === "0") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #1";
        nation.textContent = "Argentina";
        club.textContent = "Inter Miami";
        position.textContent = "Forward";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/messi.webp";
    }

    else if (selectedPlayer === "1") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #1";
        nation.textContent = "Brazil";
        club.textContent = "Real Madrid";
        position.textContent = "Striker";
        stats.innerHTML = "2nd";
        playerImage.src = "/FIFA/football_img/players/ronaldo.webp";
    }

    else if (selectedPlayer === "2") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #1";
        nation.textContent = "Portugal";
        club.textContent = "Al Nassr";
        position.textContent = "Striker";
        stats.innerHTML = "3rd";
        playerImage.src = "/FIFA/football_img/players/c ronaldo.webp";
    }

    else if (selectedPlayer === "3") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #1";
        nation.textContent = "Brazil";
        club.textContent = "Barcelona";
        position.textContent = "Forward";
        stats.innerHTML = "4th";
        playerImage.src = "/FIFA/football_img/players/ronaldinho.webp";
    }

    else if (selectedPlayer === "4") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #1";
        nation.textContent = "France";
        club.textContent = "Real Madrid";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "5th";
        playerImage.src = "/FIFA/football_img/players/zidane.webp";
    }

    else if (selectedPlayer === "5") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #2";
        nation.textContent = "France";
        club.textContent = "Arsenal";
        position.textContent = "Forward";
        stats.innerHTML = "6th";
        playerImage.src = "/FIFA/football_img/players/henry.webp";
    }

    else if (selectedPlayer === "6") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #2";
        nation.textContent = "Italy";
        club.textContent = "Real Madrid";
        position.textContent = "Centre Back";
        stats.innerHTML = "7th";
        playerImage.src = "/FIFA/football_img/players/cannavaro.webp";
    }

    else if (selectedPlayer === "7") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #2";
        nation.textContent = "Brazil";
        club.textContent = "Santos";
        position.textContent = "Forward";
        stats.innerHTML = "8th";
        playerImage.src = "/FIFA/football_img/players/neymar.webp";
    }

    else if (selectedPlayer === "8") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #2";
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "9th";
        playerImage.src = "/FIFA/football_img/players/iniesta.webp";
    }

    else if (selectedPlayer === "9") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #2";
        nation.textContent = "Italy";
        club.textContent = "Juventus";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "10th";
        playerImage.src = "/FIFA/football_img/players/buffon.webp";
    }

    else if (selectedPlayer === "10") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #3";
        nation.textContent = "Sweden";
        club.textContent = "AC Milan";
        position.textContent = "Forward";
        stats.innerHTML = "11th";
        playerImage.src = "/FIFA/football_img/players/ibrahimovic.webp";
    }

    else if (selectedPlayer === "11") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #3";
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "12th";
        playerImage.src = "/FIFA/football_img/players/xavi.webp";
    }

    else if (selectedPlayer === "12") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #3";
        nation.textContent = "Spain";
        club.textContent = "Real Madrid";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "13th";
        playerImage.src = "/FIFA/football_img/players/casillas.webp";
    }

    else if (selectedPlayer === "13") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #3";
        nation.textContent = "Belgium";
        club.textContent = "Manchester City";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "14th";
        playerImage.src = "/FIFA/football_img/players/de bruyne.webp";
    }

    else if (selectedPlayer === "14") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #3";
        nation.textContent = "Brazil";
        club.textContent = "AC Milan";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "15th";
        playerImage.src = "/FIFA/football_img/players/kaka.webp";
    }

    else if (selectedPlayer === "15") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #4";
        nation.textContent = "Egypt";
        club.textContent = "Liverpool";
        position.textContent = "Right Winger";
        stats.innerHTML = "16th";
        playerImage.src = "/FIFA/football_img/players/salah.webp";
    }

    else if (selectedPlayer === "16") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #4";
        nation.textContent = "Brazil";
        club.textContent = "Barcelona";
        position.textContent = "Right Back";
        stats.innerHTML = "17th";
        playerImage.src = "/FIFA/football_img/players/d alves.webp";
    }

    else if (selectedPlayer === "17") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #4";
        nation.textContent = "Belgium";
        club.textContent = "Chelsea";
        position.textContent = "Left Winger";
        stats.innerHTML = "18th";
        playerImage.src = "/FIFA/football_img/players/e hazard.webp";
    }

    else if (selectedPlayer === "18") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #4";
        nation.textContent = "Spain";
        club.textContent = "Monterrey";
        position.textContent = "Centre Back";
        stats.innerHTML = "19th";
        playerImage.src = "/FIFA/football_img/players/s ramos.webp";
    }

    else if (selectedPlayer === "19") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #4";
        nation.textContent = "France";
        club.textContent = "Real Madrid";
        position.textContent = "Forward";
        stats.innerHTML = "20th";
        playerImage.src = "/FIFA/football_img/players/mbappe.webp";
    }

    else if (selectedPlayer === "20") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #5";
        nation.textContent = "Spain";
        club.textContent = "Manchester City";
        position.textContent = "Defensive Midfielder";
        stats.innerHTML = "21st";
        playerImage.src = "/FIFA/football_img/players/rodri.webp";
    }

    else if (selectedPlayer === "21") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #5";
        nation.textContent = "Poland";
        club.textContent = "Barcelona";
        position.textContent = "Striker";
        stats.innerHTML = "22nd";
        playerImage.src = "/FIFA/football_img/players/lewandowski.webp";
    }

    else if (selectedPlayer === "22") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #5";
        nation.textContent = "Netherlands";
        club.textContent = "Liverpool";
        position.textContent = "Centre Back";
        stats.innerHTML = "23rd";
        playerImage.src = "/FIFA/football_img/players/van dijk.webp";
    }

    else if (selectedPlayer === "23") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #5";
        nation.textContent = "France";
        club.textContent = "Al-Ittihad";
        position.textContent = "Striker";
        stats.innerHTML = "24th";
        playerImage.src = "/FIFA/football_img/players/benzema.webp";
    }

    else if (selectedPlayer === "24") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #5";
        nation.textContent = "Serbia";
        club.textContent = "Manchester United";
        position.textContent = "Centre Back";
        stats.innerHTML = "25th";
        playerImage.src = "/FIFA/football_img/players/vidic.webp";
    }

    else if (selectedPlayer === "25") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #6";
        nation.textContent = "England";
        club.textContent = "Liverpool";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "26th";
        playerImage.src = "/FIFA/football_img/players/gerrard.webp";
    }

    else if (selectedPlayer === "26") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #6";
        nation.textContent = "Germany";
        club.textContent = "Bayern Munich";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "27th";
        playerImage.src = "/FIFA/football_img/players/neuer.webp";
    }

    else if (selectedPlayer === "27") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #6";
        nation.textContent = "Croatia";
        club.textContent = "Real Madrid";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "28th";
        playerImage.src = "/FIFA/football_img/players/modric.webp";
    }

    else if (selectedPlayer === "28") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #6";
        nation.textContent = "Ukraine";
        club.textContent = "AC Milan";
        position.textContent = "Striker";
        stats.innerHTML = "29th";
        playerImage.src = "/FIFA/football_img/players/shevchenko.webp";
    }

    else if (selectedPlayer === "29") {
        title.innerHTML = "FIFA BEST PLAYERS<br>SINCE 2005 #6";
        nation.textContent = "England";
        club.textContent = "Manchester United";
        position.textContent = "Centre Back";
        stats.innerHTML = "30th";
        playerImage.src = "/FIFA/football_img/players/ferdinand.webp";
    }
    // 2024-2025

    else if (selectedPlayer === "30") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #1";
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Right Winger";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/yamal.webp";
    }
    
    else if (selectedPlayer === "31") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #1";
        nation.textContent = "Egypt";
        club.textContent = "Liverpool";
        position.textContent = "Right Winger";
        stats.innerHTML = "2nd";
        playerImage.src = "/FIFA/football_img/players/salah.webp";
    }

    else if (selectedPlayer === "32") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #1";
        nation.textContent = "France";
        club.textContent = "Real Madrid";
        position.textContent = "Forward";
        stats.innerHTML = "3rd";
        playerImage.src = "/FIFA/football_img/players/mbappe.webp";
    }

    else if (selectedPlayer === "33") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #1";
        nation.textContent = "Spain";
        club.textContent = "Manchester City";
        position.textContent = "Defensive Midfielder";
        stats.innerHTML = "4th";
        playerImage.src = "/FIFA/football_img/players/rodri.webp";
    }

    else if (selectedPlayer === "34") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #1";
        nation.textContent = "England";
        club.textContent = "Real Madrid";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "5th";
        playerImage.src = "/FIFA/football_img/players/bellingham.webp";
    }

    else if (selectedPlayer === "35") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #2"
        nation.textContent = "Brazil";
        club.textContent = "Real Madrid";
        position.textContent = "Left Winger";
        stats.innerHTML = "6th";
        playerImage.src = "/FIFA/football_img/players/vinicius jr.webp";
    }

    else if (selectedPlayer === "36") {
         title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #2"
        nation.textContent = "Norway";
        club.textContent = "Manchester City";
        position.textContent = "Striker";
        stats.innerHTML = "7th";
        playerImage.src = "/FIFA/football_img/players/haaland.webp";
    }

    else if (selectedPlayer === "37") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #2"
        nation.textContent = "Netherlands";
        club.textContent = "Liverpool";
        position.textContent = "Centre Back";
        stats.innerHTML = "8th";
        playerImage.src = "/FIFA/football_img/players/van dijk.webp";
    }

    else if (selectedPlayer === "38") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #2"
        nation.textContent = "Brazil";
        club.textContent = "Barcelona";
        position.textContent = "Right Winger";
        stats.innerHTML = "9th";
        playerImage.src = "/FIFA/football_img/players/raphinha.webp";
    }

    else if (selectedPlayer === "39") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #2"
        nation.textContent = "Belgium";
        club.textContent = "Real Madrid";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "10th";
        playerImage.src = "/FIFA/football_img/players/courtois.webp";
    }

    else if (selectedPlayer === "40") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #3"
        nation.textContent = "Belgium";
        club.textContent = "Manchester City";
        position.textContent = "Attaciking Midfielder";
        stats.innerHTML = "11th";
        playerImage.src = "/FIFA/football_img/players/de bruyne.webp";
    }

    else if (selectedPlayer === "41") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #3"
        nation.textContent = "England";
        club.textContent = "Bayern Munich";
        position.textContent = "Striker";
        stats.innerHTML = "12th";
        playerImage.src = "/FIFA/football_img/players/kane.webp";
    }

    else if (selectedPlayer === "42") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #3"
        nation.textContent = "Brazil";
        club.textContent = "Liverpool";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "13th";
        playerImage.src = "/FIFA/football_img/players/alisson.webp";
    }

    else if (selectedPlayer === "43") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #3"
        nation.textContent = "Germany";
        club.textContent = "Bayern Munich";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "14th";
        playerImage.src = "/FIFA/football_img/players/musiala.webp";
    }

    else if (selectedPlayer === "44") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #3"
        nation.textContent = "Norway";
        club.textContent = "Arsenal";
        position.textContent = "Ataacking Midfielder";
        stats.innerHTML = "15th";
        playerImage.src = "/FIFA/football_img/players/odegaard.webp";
    }

    else if (selectedPlayer === "45") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #4"
        nation.textContent = "Germany";
        club.textContent = "Bayer Leverkusen";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "16th";
        playerImage.src = "/FIFA/football_img/players/wirtz.webp";
    }

    else if (selectedPlayer === "46") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #4"
        nation.textContent = "England";
        club.textContent = "Arsenal";
        position.textContent = "Right Winger";
        stats.innerHTML = "17th";
        playerImage.src = "/FIFA/football_img/players/saka.webp";
    }

    else if (selectedPlayer === "47") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #4"
        nation.textContent = "Poland";
        club.textContent = "Barcelona";
        position.textContent = "Striker";
        stats.innerHTML = "18th";
        playerImage.src = "/FIFA/football_img/players/lewandowski.webp";
    }

    else if (selectedPlayer === "48") {
        document.querySelector("select").style.fontSize = "19.5px"
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #4"
        nation.textContent = "Germany";
        club.textContent = "Barcelona";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "19th";
        playerImage.src = "/FIFA/football_img/players/ter stegen.webp";
    }

    else if (selectedPlayer === "49") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #4"
        nation.textContent = "Germany";
        club.textContent = "Real Madrid";
        position.textContent = "Centre Back";
        stats.innerHTML = "20th";
        playerImage.src = "/FIFA/football_img/players/rudiger.webp";
    }

    else if (selectedPlayer === "50") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #5"
        nation.textContent = "Italy";
        club.textContent = "Paris Saint-Germain";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "21st";
        playerImage.src = "/FIFA/football_img/players/donnarumma.webp";
    }

    else if (selectedPlayer === "51") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #5"
        nation.textContent = "Portugal";
        club.textContent = "Manchester City";
        position.textContent = "Centre Back";
        stats.innerHTML = "22nd";
        playerImage.src = "/FIFA/football_img/players/r dias.webp";
    }

    else if (selectedPlayer === "52") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #5"
        nation.textContent = "Germany";
        club.textContent = "Bayern Munich";
        position.textContent = "Defensive Midfielder";
        stats.innerHTML = "23rd";
        playerImage.src = "/FIFA/football_img/players/kimmich.webp";
    }

    else if (selectedPlayer === "53") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #5"
        nation.textContent = "Uruguay";
        club.textContent = "Real Madrid";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "24th";
        playerImage.src = "/FIFA/football_img/players/valverde.webp";
    }

    else if (selectedPlayer === "54") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #5"
        nation.textContent = "Slovenia";
        club.textContent = "Atletico Madrid";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "25th";
        playerImage.src = "/FIFA/football_img/players/oblak.webp";
    }

    else if (selectedPlayer === "55") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #6";
        nation.textContent = "France";
        club.textContent = "Atletico Madrid";
        position.textContent = "Forward";
        stats.innerHTML = "26th";
        playerImage.src = "/FIFA/football_img/players/griezmann.webp";
    }

    else if (selectedPlayer === "56") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #6";
        nation.textContent = "France";
        club.textContent = "Barcelona";
        position.textContent = "Right Back";
        stats.innerHTML = "27th";
        playerImage.src = "/FIFA/football_img/players/kounde.webp";
    }

    else if (selectedPlayer === "57") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #6";
        nation.textContent = "England";
        club.textContent = "Liverpool";
        position.textContent = "Right Back";
        stats.innerHTML = "28th";
        playerImage.src = "/FIFA/football_img/players/alexander-arnold.webp";
    }

    else if (selectedPlayer === "58") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #6";
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "29th";
        playerImage.src = "/FIFA/football_img/players/pedri.webp";
    }

    else if (selectedPlayer === "59") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-2025 #6";
        nation.textContent = "France";
        club.textContent = "Paris Saint-Germain";
        position.textContent = "Forward";
        stats.innerHTML = "30th";
        playerImage.src = "/FIFA/football_img/players/o dembele.webp";
    }
    // IN 2030
    else if (selectedPlayer === "60") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #1";
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Right Winger";
        stats.innerHTML = "1st";
        playerImage.src = "/FIFA/football_img/players/yamal.webp";
    }

    else if (selectedPlayer === "61") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #1";
        nation.textContent = "France";
        club.textContent = "Real Madrid";
        position.textContent = "Forward";
        stats.innerHTML = "2nd";
        playerImage.src = "/FIFA/football_img/players/mbappe.webp";
    }

    else if (selectedPlayer === "62") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #1";
        nation.textContent = "England";
        club.textContent = "Real Madrid";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "3rd";
        playerImage.src = "/FIFA/football_img/players/bellingham.webp";
    }

    else if (selectedPlayer === "63") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #1";
        nation.textContent = "Brazil";
        club.textContent = "Real Madrid";
        position.textContent = "Forward";
        stats.innerHTML = "4th";
        playerImage.src = "/FIFA/football_img/players/vinicius jr.webp";
    }

    else if (selectedPlayer === "64") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #1";
        nation.textContent = "Norway";
        club.textContent = "Manchester City";
        position.textContent = "Striker";
        stats.innerHTML = "5th";
        playerImage.src = "/FIFA/football_img/players/haaland.webp";
    }

    else if (selectedPlayer === "65") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #2";
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "6th";
        playerImage.src = "/FIFA/football_img/players/pedri.webp";
    }

    else if (selectedPlayer === "66") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #2";
        nation.textContent = "Germany";
        club.textContent = "Bayern Munich";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "7th";
        playerImage.src = "/FIFA/football_img/players/musiala.webp";
    }

    else if (selectedPlayer === "67") {
          title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #2";
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Centre Back";
        stats.innerHTML = "8th";
        playerImage.src = "/FIFA/football_img/players/cubarsi.webp";
    }

    else if (selectedPlayer === "68") {
             title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #2";
        nation.textContent = "France";
        club.textContent = "Real Madrid";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "9th";
        playerImage.src = "/FIFA/football_img/players/camavinga.webp";
    }

    else if (selectedPlayer === "69") {
              title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #2";
        nation.textContent = "Germany";
        club.textContent = "Bayer Leverkusen";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "10th";
        playerImage.src = "/FIFA/football_img/players/wirtz.webp";
    }

    else if (selectedPlayer === "70") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #3";
        nation.textContent = "Georgia";
        club.textContent = "Paris Saint-Germain";
        position.textContent = "Left Winger";
        stats.innerHTML = "11th";
        playerImage.src = "/FIFA/football_img/players/kvaratskhelia.webp";
    }

    else if (selectedPlayer === "71") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #3";
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "12th";
        playerImage.src = "/FIFA/football_img/players/gavi.webp";
    }

    else if (selectedPlayer === "72") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #3";
        nation.textContent = "Portugal";
        club.textContent = "Benfica";
        position.textContent = "Centre Back";
        stats.innerHTML = "13th";
        playerImage.src = "/FIFA/football_img/players/a silva.webp";
    }

    else if (selectedPlayer === "73") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #3";
        nation.textContent = "Portugal";
        club.textContent = "AC Milan";
        position.textContent = "Left Winger";
        stats.innerHTML = "14th";
        playerImage.src = "/FIFA/football_img/players/r leao.webp";
    }

    else if (selectedPlayer === "74") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #3";
        nation.textContent = "Georgia";
        club.textContent = "Valencia";
        position.textContent = "Goalkeeper";
        stats.innerHTML = "15th";
        playerImage.src = "/FIFA/football_img/players/mamardashvili.webp";
    }

    else if (selectedPlayer === "75") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #4";
        nation.textContent = "France";
        club.textContent = "Real Madrid";
        position.textContent = "Defensive Midfielder";
        stats.innerHTML = "16th";
        playerImage.src = "/FIFA/football_img/players/tchouameni.webp";
    }

    else if (selectedPlayer === "76") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #4";
        nation.textContent = "Spain";
        club.textContent = "Athletic Club";
        position.textContent = "Left Winger";
        stats.innerHTML = "17th";
        playerImage.src = "/FIFA/football_img/players/n williams.webp";
    }

    else if (selectedPlayer === "77") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #4";
        nation.textContent = "France";
        club.textContent = "Paris Saint-Germain";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "18th";
        playerImage.src = "/FIFA/football_img/players/zaire-emery.webp";
    }

    else if (selectedPlayer === "78") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #4";
        nation.textContent = "England";
        club.textContent = "Arsenal";
        position.textContent = "Left Back";
        stats.innerHTML = "19th";
        playerImage.src = "/FIFA/football_img/players/lewis-skelly.webp";
    }

    else if (selectedPlayer === "79") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #4";
        nation.textContent = "Portugal";
        club.textContent = "Paris Saint-Germain";
        position.textContent = "Central Midfielder";
        stats.innerHTML = "20th";
        playerImage.src = "/FIFA/football_img/players/j neves.webp";
    }

    else if (selectedPlayer === "80") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #5";
        nation.textContent = "Netherlands";
        club.textContent = "RB Leipzig";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "21st";
        playerImage.src = "/FIFA/football_img/players/x simons.webp";
    }

    else if (selectedPlayer === "81") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #5";
        nation.textContent = "Belgium";
        club.textContent = "Manchester City";
        position.textContent = "Left Winger";
        stats.innerHTML = "22nd";
        playerImage.src = "/FIFA/football_img/players/doku.webp";
    }

    else if (selectedPlayer === "82") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #5";
        nation.textContent = "Italy";
        club.textContent = "Atalanta";
        position.textContent = "Centre Back";
        stats.innerHTML = "23rd";
        playerImage.src = "/FIFA/football_img/players/scalvini.webp";
    }

    else if (selectedPlayer === "83") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #5";
        nation.textContent = "Spain";
        club.textContent = "Barcelona";
        position.textContent = "Left Back";
        stats.innerHTML = "24th";
        playerImage.src = "/FIFA/football_img/players/balde.webp";
    }

    else if (selectedPlayer === "84") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #5";
        nation.textContent = "Brazil";
        club.textContent = "Manchester City";
        position.textContent = "Right Winger";
        stats.innerHTML = "25th";
        playerImage.src = "/FIFA/football_img/players/savinho.webp";
    }

    else if (selectedPlayer === "85") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #6";
        nation.textContent = "Nigeria";
        club.textContent = "Galatasaray";
        position.textContent = "Striker";
        stats.innerHTML = "26th";
        playerImage.src = "/FIFA/football_img/players/osimhen.webp";
    }

    else if (selectedPlayer === "86") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #6";
        nation.textContent = "Croatia";
        club.textContent = "Manchester City";
        position.textContent = "Left Back";
        stats.innerHTML = "27th";
        playerImage.src = "/FIFA/football_img/players/gvardiol.webp";
    }

    else if (selectedPlayer === "87") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #6";
        nation.textContent = "Brazil";
        club.textContent = "Real Madrid";
        position.textContent = "Striker";
        stats.innerHTML = "28th";
        playerImage.src = "/FIFA/football_img/players/endrick.webp";
    }

    else if (selectedPlayer === "88") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #6";
        nation.textContent = "Argentina";
        club.textContent = "Atletico Madrid";
        position.textContent = "Forward";
        stats.innerHTML = "29th";
        playerImage.src = "/FIFA/football_img/players/alvarez.webp";
    }

    else if (selectedPlayer === "89") {
        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2030 #6";
        nation.textContent = "Turkey";
        club.textContent = "Real Madrid";
        position.textContent = "Attacking Midfielder";
        stats.innerHTML = "30th";
        playerImage.src = "/FIFA/football_img/players/guler.webp";
    }
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
