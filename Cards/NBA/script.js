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
    stats.style.fontSize = "32px"
    
    // sidepic.style.bottom = "55px"
    // stats.style.bottom = "200px"
    // document.querySelector(".playerInfo").style.height = "675px"
    // club.style.fontSize = "30px"
    // document.querySelector("select").style.fontSize = "24.5px"

    if (selectedPlayer === "0") {
        title.innerHTML= "TOP 5 NBA POINTS PER <br>GAME 2024-25"
        nation.textContent = "Canada";
        club.textContent = "Oklahoma City Thunder";
        position.textContent = "PG, SG";
        stats.innerHTML = "1st - 33.0 PPG";
        playerImage.src = "/NBA/basket_img/players/s gilgeous-a.jpg";
    } else if (selectedPlayer === "1") {
        title.innerHTML= "TOP 5 NBA POINTS PER <br>GAME 2024-25"
        nation.textContent = "Greece";
        club.textContent = "Milwaukee Bucks";
        position.textContent = "PF, SF";
        stats.innerHTML = "2nd - 30.2 PPG";
        playerImage.src = "/NBA/basket_img/players/g antetoko..jpg";
    } else if (selectedPlayer === "2") {
        title.innerHTML= "TOP 5 NBA POINTS PER <br>GAME 2024-25"
        nation.textContent = "Serbia";
        club.textContent = "Denver Nuggets";
        position.textContent = "C, PF";
        stats.innerHTML = "3rd - 29.1 PPG";
        playerImage.src = "/NBA/basket_img/players/n jokic.jpg";
    } else if (selectedPlayer === "3") {
        title.innerHTML= "TOP 5 NBA POINTS PER <br>GAME 2024-25"
        nation.textContent = "USA";
        club.textContent = "Minnesota Timberwolves";
        position.textContent = "SG, SF";
        stats.innerHTML = "4th - 27.6 PPG";
        playerImage.src = "/NBA/basket_img/players/a edwards.jpg";
    } else if (selectedPlayer === "4") {
        title.innerHTML= "TOP 5 NBA POINTS PER <br>GAME 2024-25"
        nation.textContent = "Slovenia";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "PG, SG";
        stats.innerHTML = "5th - 27.4 PPG";
        playerImage.src = "/NBA/basket_img/players/l doncic.jpg";
    } else if (selectedPlayer === "5") { // 3-pointers made per game
        title.innerHTML ="NBA TOP 5 3-POINTERS<BR>MADE PER GAME IN 2024-25"
    nation.textContent = "USA";
    club.textContent = "Golden State Warriors";
    position.textContent = "PG";
    stats.innerHTML = "1st - 4.4 3-PPG";
    playerImage.src = "/NBA/basket_img/players/s curry.jpg";
} else if (selectedPlayer === "6") {
    title.innerHTML ="NBA TOP 5 3-POINTERS<BR>MADE PER GAME IN 2024-25"
    nation.textContent = "USA";
    club.textContent = "Minnesota Timberwolves";
    position.textContent = "SG, SF";
    stats.innerHTML = "2nd - 3.99 3-PPG";
    playerImage.src = "/NBA/basket_img/players/a edwards.jpg";
} else if (selectedPlayer === "7") {
    title.innerHTML ="NBA TOP 5 3-POINTERS<BR>MADE PER GAME IN 2024-25"
    nation.textContent = "USA";
    club.textContent = "Detroit Pistons";
    position.textContent = "SG";
    stats.innerHTML = "3rd - 3.9 3-PPG";
    playerImage.src = "/NBA/basket_img/players/m beasley.jpg";
} else if (selectedPlayer === "8") {
    title.innerHTML ="NBA TOP 5 3-POINTERS<BR>MADE PER GAME IN 2024-25"
    nation.textContent = "USA";
    club.textContent = "Charlotte Hornets";
    position.textContent = "SF, SG";
    stats.innerHTML = "4th - 3.8 3-PPG";
    playerImage.src = "/NBA/basket_img/players/b miller.jpg";
} else if (selectedPlayer === "9") {
    title.innerHTML ="NBA TOP 5 3-POINTERS<BR>MADE PER GAME IN 2024-25"
    nation.textContent = "USA";
    club.textContent = "Charlotte Hornets";
    position.textContent = "PG";
    stats.innerHTML = "5th - 3.6 3-PPG";
    playerImage.src = "/NBA/basket_img/players/la ball.jpg";
    } else if (selectedPlayer === "10") { // 3-pointers made per game since 2005
        title.innerHTML = "NBA TOP 5 3-POINTERS<BR>MADE PER GAME 2005 to 2025";
        nation.textContent = "USA";
        club.textContent = "Golden State Warriors";
        position.textContent = "PG, SG";
        stats.innerHTML = "1st - 4.4 3-PPG";
        playerImage.src = "/NBA/basket_img/players/s curry.jpg";
    }
    else if (selectedPlayer === "11") {
        title.innerHTML = "NBA TOP 5 3-POINTERS<BR>MADE PER GAME 2005 to 2025";
        nation.textContent = "USA";
        club.textContent = "Dallas Mavericks";
        position.textContent = "SG, SF";
        stats.innerHTML = "2nd - 4.0 3-PPG";
        playerImage.src = "/NBA/basket_img/players/k thompson.jpg";
    }
    else if (selectedPlayer === "12") {
        title.innerHTML = "NBA TOP 5 3-POINTERS<BR>MADE PER GAME 2005 to 2025";
        nation.textContent = "USA";
        club.textContent = "Milwaukee Bucks";
        position.textContent = "PG, SG";
        stats.innerHTML = "3rd - 3.9 3-PPG";
        playerImage.src = "/NBA/basket_img/players/d lillard.jpg";
    }
    else if (selectedPlayer === "13") {
        title.innerHTML = "NBA TOP 5 3-POINTERS<BR>MADE PER GAME 2005 to 2025";
        nation.textContent = "Slovenia";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "PG, SG";
        stats.innerHTML = "4th - 3.8 3-PPG";
        playerImage.src = "/NBA/basket_img/players/l doncic.jpg";
    }
    else if (selectedPlayer === "14") {
        title.innerHTML = "NBA TOP 5 3-POINTERS<BR>MADE PER GAME 2005 to 2025";
        nation.textContent = "USA";
        club.textContent = "Charlotte Hornets";
        position.textContent = "PG, SG";
        stats.innerHTML = "5th - 3.6 3-PPG";
        playerImage.src = "/NBA/basket_img/players/la ball.jpg";
    }



    // document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, darkorange 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
