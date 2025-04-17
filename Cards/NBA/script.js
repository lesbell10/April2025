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
    document.body.classList.add("nba-color");
    const birthDate = document.querySelector(".birthDate");
    const nation = document.querySelector(".nation");
    const club = document.querySelector(".club");
    const position = document.querySelector(".position");
    const playerImage = document.querySelector(".playerImage")
    const stats = document.querySelector(".stats")
    const sidepic = document.querySelector(".sidepic")
    const title = document.querySelector(".title")

    // sidepic.src = "/NBA/basket_img/logos/golden state.gif"

    // if (selectedPlayer === "100") {
    //     birthDate.textContent = "";
    //     nation.textContent = "";
    //     club.textContent = "";
    //     position.innerHTML = "";
    //     playerImage.src = "";
    // } 

    nation.textContent = ""
    club.textContent = ""
    stats.innerHTML = ""
    title.style.fontSize = "36px"
    document.querySelector("select").style.fontSize = "26px"

    // sidepic.style.bottom = "55px"
    // stats.style.bottom = "200px"
    // document.querySelector(".playerInfo").style.height = "675px"
    // club.style.fontSize = "30px"

    if (selectedPlayer === "0") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH #1"
        nation.textContent = "Serbia";
        club.textContent = "Denver Nuggets";
        position.textContent = "C, PF";
        stats.innerHTML = "1st - 31.6 PPG";
        playerImage.src = "/NBA/basket_img/players/n jokic.jpg";
    } else if (selectedPlayer === "1") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH #1";
        nation.textContent = "Canada";
        club.textContent = "Oklahoma City Thunder";
        position.textContent = "SG, PG";
        stats.innerHTML = "1st - 34.7 PPG";
        playerImage.src = "/NBA/basket_img/players/s gilgeous-a.jpg";
    } else if (selectedPlayer === "2") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH #1";
        nation.textContent = "USA";
        club.textContent = "New York Knicks";
        position.textContent = "PG";
        stats.innerHTML = "2nd - 31.7 PPG";
        playerImage.src = "/NBA/basket_img/players/j brunson.jpg";
    } else if (selectedPlayer === "3") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH #1";
        nation.textContent = "Slovenia";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "PG, SG";
        stats.innerHTML = "3rd - 30.1 PPG";
        playerImage.src = "/NBA/basket_img/players/l doncic.jpg";
    } else if (selectedPlayer === "4") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH #1";
        nation.textContent = "Serbia";
        club.textContent = "Denver Nuggets";
        position.textContent = "C, PF";
        stats.innerHTML = "4th - 30.0 PPG";
        playerImage.src = "/NBA/basket_img/players/n jokic.jpg";
    } else if (selectedPlayer === "5") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH #1";
        nation.textContent = "USA";
        club.textContent = "Orlando Magic";
        position.textContent = "PF, SF";
        stats.innerHTML = "5th - 29.8 PPG";
        playerImage.src = "/NBA/basket_img/players/p banchero.jpg";
    }
    else if (selectedPlayer === "6") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH #2";
        nation.textContent = "USA";
        club.textContent = "Memphis Grizzlies";
        position.textContent = "PG";
        stats.innerHTML = "6th - 29.5 PPG";
        playerImage.src = "/NBA/basket_img/players/j morant.jpg";
    }
    else if (selectedPlayer === "7") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH #2";
        nation.textContent = "Greece";
        club.textContent = "Milwaukee Bucks";
        position.textContent = "PF, C";
        stats.innerHTML = "7th - 28.3 PPG";
        playerImage.src = "/NBA/basket_img/players/g antetoko..jpg";
    }
    else if (selectedPlayer === "8") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH #2";
        nation.textContent = "USA";
        club.textContent = "Boston Celtics";
        position.textContent = "SF, PF";
        stats.innerHTML = "8th - 27.9 PPG";
        playerImage.src = "/NBA/basket_img/players/j tatum.jpg";
    }
    else if (selectedPlayer === "9") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH #2";
        nation.textContent = "USA";
        club.textContent = "Chicago Bulls";
        position.textContent = "PG, SG";
        stats.innerHTML = "9th - 27.7 PPG";
        playerImage.src = "/NBA/basket_img/players/c white.jpg";
    }
    else if (selectedPlayer === "10") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH #2";
        nation.textContent = "USA";
        club.textContent = "Detroit Pistons";
        position.textContent = "PG, SG";
        stats.innerHTML = "10th - 27.3 PPG";
        playerImage.src = "/NBA/basket_img/players/c cunningham.jpg";
    }
    else if (selectedPlayer === "11") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH | #11 - #15";
        nation.textContent = "USA";
        club.textContent = "Minnesota Timberwolves";
        position.textContent = "SG, SF";
        stats.innerHTML = "11th - 26.6 PPG";
        playerImage.src = "/NBA/basket_img/players/a edwards.jpg";
    }
    else if (selectedPlayer === "12") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH | #11 - #15";
        nation.textContent = "USA";
        club.textContent = "Philadelphia 76ers";
        position.textContent = "SG";
        stats.innerHTML = "12th - 26.6 PPG";
        playerImage.src = "/NBA/basket_img/players/q grimes.jpg";
    }
    else if (selectedPlayer === "13") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH | #11 - #15";
        nation.textContent = "USA";
        club.textContent = "Phoenix Suns";
        position.textContent = "SF, PF";
        stats.innerHTML = "13th - 26.1 PPG";
        playerImage.src = "/NBA/basket_img/players/k durant.jpg";
    }
    else if (selectedPlayer === "14") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH | #11 - #15";
        nation.textContent = "USA";
        club.textContent = "Atlanta Hawks";
        position.textContent = "PG";
        stats.innerHTML = "14th - 25.3 PPG";
        playerImage.src = "/NBA/basket_img/players/t young.jpg";
    }
    else if (selectedPlayer === "15") {
        title.innerHTML = "TOP NBA POINTERS PER<br>GAME IN MARCH | #11 - #15";
        nation.textContent = "USA";
        club.textContent = "Los Angeles Clippers";
        position.textContent = "SG, PG";
        stats.innerHTML = "15th - 25.3 PPG";
        playerImage.src = "/NBA/basket_img/players/j harden.jpg";
    }
    else if (selectedPlayer === "16") {
        title.innerHTML = "NBA PLAYERS MOST<br>3 POINTS MADE IN 2024-25";
        nation.textContent = "USA";
        club.textContent = "Boston Celtics";
        position.textContent = "PG, SG";
        stats.innerHTML = "5th - 255 3PTS";
        playerImage.src = "/NBA/basket_img/players/P pritchard.jpg";
    }
    else if (selectedPlayer === "17") {
        title.innerHTML = "NBA PLAYERS MOST<br>3 POINTS MADE IN 2024-25";
        nation.textContent = "USA";
        club.textContent = "Boston Celtics";
        position.textContent = "PG, SG";
        stats.innerHTML = "4th - 265 3PTS";
        playerImage.src = "/NBA/basket_img/players/d white.jpg";
    }
    else if (selectedPlayer === "18") {
        title.innerHTML = "NBA PLAYERS MOST<br>3 POINTS MADE IN 2024-25";
        nation.textContent = "USA";
        club.textContent = "Golden State Warriors";
        position.textContent = "PG, SG";
        stats.innerHTML = "3rd - 311 3PTS";
        playerImage.src = "/NBA/basket_img/players/s curry.jpg";
    }
    else if (selectedPlayer === "19") {
        title.innerHTML = "NBA PLAYERS MOST<br>3 POINTS MADE IN 2024-25";
        nation.textContent = "USA";
        club.textContent = "Detroit Pistons";
        position.textContent = "SG, SF";
        stats.innerHTML = "2nd - 319 3PTS";
        playerImage.src = "/NBA/basket_img/players/m beasley.jpg";
    }
    else if (selectedPlayer === "20") {
        title.innerHTML = "NBA PLAYERS MOST<br>3 POINTS MADE IN 2024-25";
        nation.textContent = "USA";
        club.textContent = "Minnesota Timberwolves";
        position.textContent = "SG, SF";
        stats.innerHTML = "1st - 320 3PTS";
        playerImage.src = "/NBA/basket_img/players/a edwards.jpg";
    }
    else if (selectedPlayer === "21") {
        title.innerHTML = "NBA TOP 5 EUROPEAN<br>PLAYERS SINCE 2005";
        nation.textContent = "France";
        club.textContent = "San Antonio Spurs";
        position.textContent = "PG";
        stats.innerHTML = "5th";
        playerImage.src = "/NBA/basket_img/players/T parker.jpg";
    }
    else if (selectedPlayer === "22") {
        title.innerHTML = "NBA TOP 5 EUROPEAN<br>PLAYERS SINCE 2005";
        nation.textContent = "Slovenia";
        club.textContent = "Dallas Mavericks";
        position.textContent = "PG / SG";
        stats.innerHTML = "4th";
        playerImage.src = "/NBA/basket_img/players/l doncic.jpg";
    }
    else if (selectedPlayer === "23") {
        title.innerHTML = "NBA TOP 5 EUROPEAN<br>PLAYERS SINCE 2005";
        nation.textContent = "Serbia";
        club.textContent = "Denver Nuggets";
        position.textContent = "Center";
        stats.innerHTML = "3rd";
        playerImage.src = "/NBA/basket_img/players/n jokic.jpg";
    }
    else if (selectedPlayer === "24") {
        title.innerHTML = "NBA TOP 5 EUROPEAN<br>PLAYERS SINCE 2005";
        nation.textContent = "Germany";
        club.textContent = "Dallas Mavericks";
        position.textContent = "PF";
        stats.innerHTML = "2nd";
        playerImage.src = "/NBA/basket_img/players/d nowitzki.jpg";
    }
    else if (selectedPlayer === "25") {
        title.innerHTML = "NBA TOP 5 EUROPEAN<br>PLAYERS SINCE 2005";
        nation.textContent = "Greece";
        club.textContent = "Milwaukee Bucks";
        position.textContent = "PF / C";
        stats.innerHTML = "1st";
        playerImage.src = "/NBA/basket_img/players/g antetoko..jpg";
    }
    else if (selectedPlayer === "26") {
        title.innerHTML = "NBA TOP U24<br>PLAYERS IN 2025 #1";
        nation.textContent = "USA";
        club.textContent = "Houston Rockets";
        position.textContent = "SG / PG";
        stats.innerHTML = "10th";
        playerImage.src = "/NBA/basket_img/players/j green.jpg";
    }
    else if (selectedPlayer === "27") {
        title.innerHTML = "NBA TOP U24<br>PLAYERS IN 2025";
        nation.textContent = "USA";
        club.textContent = "Detroit Pistons";
        position.textContent = "PG / SG";
        stats.innerHTML = "9th";
        playerImage.src = "/NBA/basket_img/players/c cunningham.jpg";
    }
    else if (selectedPlayer === "28") {
        title.innerHTML = "NBA TOP U24<br>PLAYERS IN 2025 #1";
        nation.textContent = "USA";
        club.textContent = "Philadelphia 76ers";
        position.textContent = "SG / PG";
        stats.innerHTML = "8th";
        playerImage.src = "/NBA/basket_img/players/t maxey.jpg";
    }
    else if (selectedPlayer === "29") {
        title.innerHTML = "NBA TOP U24<br>PLAYERS IN 2025 #1";
        nation.textContent = "Germany";
        club.textContent = "Orlando Magic";
        position.textContent = "SF / PF";
        stats.innerHTML = "7th";
        playerImage.src = "/NBA/basket_img/players/f wagner.jpg";
    }
    else if (selectedPlayer === "30") {
        title.innerHTML = "NBA TOP U24<br>PLAYERS IN 2025 #1";
        nation.textContent = "USA";
        club.textContent = "Charlotte Hornets";
        position.textContent = "PG / SG";
        stats.innerHTML = "6th";
        playerImage.src = "/NBA/basket_img/players/la ball.jpg";
    }
    else if (selectedPlayer === "31") {
        title.innerHTML = "NBA TOP 5<br>UNDER 24 IN 2025";
        nation.textContent = "USA";
        club.textContent = "Oklahoma City Thunder";
        position.textContent = "C / PF";
        stats.innerHTML = "5th";
        playerImage.src = "/NBA/basket_img/players/c holmgren.jpg";
    }
    else if (selectedPlayer === "32") {
        title.innerHTML = "NBA TOP 5<br>UNDER 24 IN 2025";
        nation.textContent = "USA";
        club.textContent = "Orlando Magic";
        position.textContent = "PF / SF";
        stats.innerHTML = "4th";
        playerImage.src = "/NBA/basket_img/players/p banchero.jpg";
    }
    else if (selectedPlayer === "33") {
        document.querySelector("select").style.fontSize = "24.5px"
        title.innerHTML = "NBA TOP 5<br>UNDER 24 IN 2025";
        nation.textContent = "USA";
        club.textContent = "Indiana Pacers";
        position.textContent = "PG / SG";
        stats.innerHTML = "3rd";
        playerImage.src = "/NBA/basket_img/players/t haliburton.jpg";
    }
    else if (selectedPlayer === "34") {
        document.querySelector("select").style.fontSize = "24.5px"
        title.innerHTML = "NBA TOP 5<br>UNDER 24 IN 2025";
        nation.textContent = "USA";
        club.textContent = "Minnesota Timberwolves";
        position.textContent = "SG / SF";
        stats.innerHTML = "2nd";
        playerImage.src = "/NBA/basket_img/players/a edwards.jpg";
    }
    else if (selectedPlayer === "35") {
        document.querySelector("select").style.fontSize = "22px"
        title.innerHTML = "NBA TOP 5<br>UNDER 24 IN 2025";
        nation.textContent = "France";
        club.textContent = "San Antonio Spurs";
        position.textContent = "C / PF";
        stats.innerHTML = "1st";
        playerImage.src = "/NBA/basket_img/players/v wembanyama.jpg";
    }

    // document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, darkorange 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
