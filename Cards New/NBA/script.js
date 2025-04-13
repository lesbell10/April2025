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

    // sidepic.style.bottom = "55px"
    // stats.style.bottom = "200px"
    // document.querySelector(".playerInfo").style.height = "675px"
    // club.style.fontSize = "30px"
    document.querySelector("select").style.fontSize = "20px"

    // SINCE 2005
    if (selectedPlayer === "0") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #1";
        nation.textContent = "USA";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "SF, PF";
        stats.innerHTML = "1st";
        playerImage.src = "/NBA/basket_img/players/l james.jpg";
    }

    else if (selectedPlayer === "1") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #1";
        nation.textContent = "USA";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "SG";
        stats.innerHTML = "2nd";
        playerImage.src = "/NBA/basket_img/players/k bryant.jpg";
    }

    else if (selectedPlayer === "2") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #1";
        nation.textContent = "USA";
        club.textContent = "Golden State Warriors";
        position.textContent = "PG";
        stats.innerHTML = "3rd";
        playerImage.src = "/NBA/basket_img/players/s curry.jpg";
    }

    else if (selectedPlayer === "3") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #1";
        nation.textContent = "USA";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "Center";
        stats.innerHTML = "4th";
        playerImage.src = "/NBA/basket_img/players/s o'neal.jpg";
    }

    else if (selectedPlayer === "4") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #1";
        nation.textContent = "USA";
        club.textContent = "Phoenix Suns";
        position.textContent = "SF, PF";
        stats.innerHTML = "5th";
        playerImage.src = "/NBA/basket_img/players/k durant.jpg";
    }

    else if (selectedPlayer === "5") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #2";
        nation.textContent = "USA";
        club.textContent = "San Antonio Spurs";
        position.textContent = "PF, C";
        stats.innerHTML = "6th";
        playerImage.src = "/NBA/basket_img/players/t duncan.jpg";
    }

    else if (selectedPlayer === "6") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #2";
        nation.textContent = "Serbia";
        club.textContent = "Denver Nuggets";
        position.textContent = "C, PF";
        stats.innerHTML = "7th";
        playerImage.src = "/NBA/basket_img/players/n jokic.jpg";
    }

    else if (selectedPlayer === "7") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #2";
        nation.textContent = "Greece";
        club.textContent = "Milwaukee Bucks";
        position.textContent = "PF, C";
        stats.innerHTML = "8th";
        playerImage.src = "/NBA/basket_img/players/g antetoko..jpg";
    }

    else if (selectedPlayer === "8") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #2";
        nation.textContent = "Canada";
        club.textContent = "Oklahoma City Thunder";
        position.textContent = "SG, PG";
        stats.innerHTML = "9th";
        playerImage.src = "/NBA/basket_img/players/s gilgeous-a.jpg";
    }

    else if (selectedPlayer === "9") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #2";
        nation.textContent = "USA";
        club.textContent = "Miami Heat";
        position.textContent = "SG";
        stats.innerHTML = "10th";
        playerImage.src = "/NBA/basket_img/players/d wade.jpg";
    }

    else if (selectedPlayer === "10") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #3";
        nation.textContent = "Cameroon";
        club.textContent = "Philadelphia 76ers";
        position.textContent = "Center";
        stats.innerHTML = "11th";
        playerImage.src = "/NBA/basket_img/players/j embiid.jpg";
    }

    else if (selectedPlayer === "11") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #3";
        nation.textContent = "USA";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "PF, C";
        stats.innerHTML = "12th";
        playerImage.src = "/NBA/basket_img/players/a davis.jpg";
    }

    else if (selectedPlayer === "12") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #3";
        nation.textContent = "USA";
        club.textContent = "LA Clippers";
        position.textContent = "SG, PG";
        stats.innerHTML = "13th";
        playerImage.src = "/NBA/basket_img/players/j harden.jpg";
    }

    else if (selectedPlayer === "13") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #3";
        nation.textContent = "Slovenia";
        club.textContent = "Dallas Mavericks";
        position.textContent = "PG, SG";
        stats.innerHTML = "14th";
        playerImage.src = "/NBA/basket_img/players/l doncic.jpg";
    }

    else if (selectedPlayer === "14") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #3";
        nation.textContent = "USA";
        club.textContent = "San Antonio Spurs";
        position.textContent = "PG";
        stats.innerHTML = "15th";
        playerImage.src = "/NBA/basket_img/players/c paul.jpg";
    }

    else if (selectedPlayer === "15") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #4";
        nation.textContent = "USA";
        club.textContent = "LA Clippers";
        position.textContent = "SF, SG";
        stats.innerHTML = "16th";
        playerImage.src = "/NBA/basket_img/players/k leonard.jpg";
    }

    else if (selectedPlayer === "16") {
        document.querySelector("select").style.fontSize = "19.5px"
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #4";
        nation.textContent = "USA";
        club.textContent = "Denver Nuggets";
        position.textContent = "PG";
        stats.innerHTML = "17th";
        playerImage.src = "/NBA/basket_img/players/r westbrook.jpg";
    }

    else if (selectedPlayer === "17") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #4";
        nation.textContent = "USA";
        club.textContent = "New York Knicks";
        position.textContent = "SF, PF";
        stats.innerHTML = "18th";
        playerImage.src = "/NBA/basket_img/players/c anthony.jpg";
    }

    else if (selectedPlayer === "18") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #4";
        nation.textContent = "USA";
        club.textContent = "LA Clippers";
        position.textContent = "SF, SG";
        stats.innerHTML = "19th";
        playerImage.src = "/NBA/basket_img/players/p george.jpg";
    }

    else if (selectedPlayer === "19") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #4";
        nation.textContent = "USA";
        club.textContent = "Boston Celtics";
        position.textContent = "SF, PF";
        stats.innerHTML = "20th";
        playerImage.src = "/NBA/basket_img/players/j tatum.jpg";
    }

    else if (selectedPlayer === "20") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #5";
        nation.textContent = "USA";
        club.textContent = "Milwaukee Bucks";
        position.textContent = "PG";
        stats.innerHTML = "21st";
        playerImage.src = "/NBA/basket_img/players/d lillard.jpg";
    }

    else if (selectedPlayer === "21") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #5";
        nation.textContent = "USA";
        club.textContent = "Phoenix Suns";
        position.textContent = "SG";
        stats.innerHTML = "22nd";
        playerImage.src = "/NBA/basket_img/players/d booker.jpg";
    }

    else if (selectedPlayer === "22") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #5";
        nation.textContent = "USA";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "Center";
        stats.innerHTML = "23rd";
        playerImage.src = "/NBA/basket_img/players/d howard.jpg";
    }

    else if (selectedPlayer === "23") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #5";
        nation.textContent = "USA";
        club.textContent = "Boston Celtics";
        position.textContent = "PF, C";
        stats.innerHTML = "24th";
        playerImage.src = "/NBA/basket_img/players/k garnett.jpg";
    }

    else if (selectedPlayer === "24") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #5"
        nation.textContent = "USA";
        club.textContent = "Toronto Raptors";
        position.textContent = "SG, SF";
        stats.innerHTML = "25th";
        playerImage.src = "/NBA/basket_img/players/v carter.jpg";
    }

    else if (selectedPlayer === "25") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #6";
        nation.textContent = "Canada";
        club.textContent = "Phoenix Suns";
        position.textContent = "PG";
        stats.innerHTML = "26th";
        playerImage.src = "/NBA/basket_img/players/s nash.jpg";
    }

    else if (selectedPlayer === "26") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #6";
        nation.textContent = "USA";
        club.textContent = "Orlando Magic";
        position.textContent = "SG, SF";
        stats.innerHTML = "27th";
        playerImage.src = "/NBA/basket_img/players/t mcgrady.jpg";
    }

    else if (selectedPlayer === "27") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #6";
        nation.textContent = "USA";
        club.textContent = "Golden State Warriors";
        position.textContent = "SF, SG";
        stats.innerHTML = "28th";
        playerImage.src = "/NBA/basket_img/players/j butler.jpg";
    }

    else if (selectedPlayer === "28") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #6";
        nation.textContent = "USA";
        club.textContent = "Sacramento Kings";
        position.textContent = "Center";
        stats.innerHTML = "29th";
        playerImage.src = "/NBA/basket_img/players/d cousins.jpg";
    }

    else if (selectedPlayer === "29") {
        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005 #6";
        nation.textContent = "USA";
        club.textContent = "Miami Heat";
        position.textContent = "PF, C";
        stats.innerHTML = "30th";
        playerImage.src = "/NBA/basket_img/players/c bosh.jpg";
    }
    // 2024-2025
    else if (selectedPlayer === "30") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #1";
        nation.textContent = "Canada";
        club.textContent = "Oklahoma City Thunder";
        position.textContent = "SG, PG";
        stats.innerHTML = "1st";
        playerImage.src = "/NBA/basket_img/players/s gilgeous-a.jpg";
    }

    else if (selectedPlayer === "31") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #1";
        nation.textContent = "Serbia";
        club.textContent = "Denver Nuggets";
        position.textContent = "C, PF";
        stats.innerHTML = "2nd";
        playerImage.src = "/NBA/basket_img/players/n jokic.jpg";
    }

    else if (selectedPlayer === "32") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #1";
        nation.textContent = "Greece";
        club.textContent = "Milwaukee Bucks";
        position.textContent = "PF, C";
        stats.innerHTML = "3rd";
        playerImage.src = "/NBA/basket_img/players/g antetoko..jpg";
    }

    else if (selectedPlayer === "33") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #1";
        nation.textContent = "Slovenia";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "PG, SG";
        stats.innerHTML = "4th";
        playerImage.src = "/NBA/basket_img/players/l doncic.jpg";
    }

    else if (selectedPlayer === "34") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #1";
        nation.textContent = "USA";
        club.textContent = "Boston Celtics";
        position.textContent = "SF, PF";
        stats.innerHTML = "5th";
        playerImage.src = "/NBA/basket_img/players/j tatum.jpg";
    }

    else if (selectedPlayer === "35") {
        document.querySelector("select").style.fontSize = "19.5px"
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #2";
        nation.textContent = "France";
        club.textContent = "San Antonio Spurs";
        position.textContent = "C, PF";
        stats.innerHTML = "6th";
        playerImage.src = "/NBA/basket_img/players/v wemban..jpg";
    }

    else if (selectedPlayer === "36") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #2";
        nation.textContent = "USA";
        club.textContent = "Minnesota Timberwolves";
        position.textContent = "SG, SF";
        stats.innerHTML = "7th";
        playerImage.src = "/NBA/basket_img/players/a edwards.jpg";
    }

    else if (selectedPlayer === "37") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #2";
        nation.textContent = "USA";
        club.textContent = "Phoenix Suns";
        position.textContent = "SF, PF";
        stats.innerHTML = "8th";
        playerImage.src = "/NBA/basket_img/players/k durant.jpg";
    }

    else if (selectedPlayer === "38") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #2";
        nation.textContent = "USA";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "SF, PF";
        stats.innerHTML = "9th";
        playerImage.src = "/NBA/basket_img/players/l james.jpg";
    }

    else if (selectedPlayer === "39") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #2";
        nation.textContent = "USA";
        club.textContent = "Golden State Warriors";
        position.textContent = "PG";
        stats.innerHTML = "10th";
        playerImage.src = "/NBA/basket_img/players/s curry.jpg";
    }

    else if (selectedPlayer === "40") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #3";
        nation.textContent = "USA";
        club.textContent = "Philadelphia 76ers";
        position.textContent = "Center";
        stats.innerHTML = "11th";
        playerImage.src = "/NBA/basket_img/players/j embiid.jpg";
    }
    
    else if (selectedPlayer === "41") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #3";
        nation.textContent = "USA";
        club.textContent = "Dallas Mavericks";
        position.textContent = "PF, C";
        stats.innerHTML = "12th";
        playerImage.src = "/NBA/basket_img/players/a davis.jpg";
    }

    else if (selectedPlayer === "42") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #3";
        nation.textContent = "USA";
        club.textContent = "Cleveland Cavaliers";
        position.textContent = "SG";
        stats.innerHTML = "13th";
        playerImage.src = "/NBA/basket_img/players/d mitchell.jpg";
    }

    else if (selectedPlayer === "43") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #3";
        nation.textContent = "USA";
        club.textContent = "Boston Celtics";
        position.textContent = "SF";
        stats.innerHTML = "14th";
        playerImage.src = "/NBA/basket_img/players/j brown.jpg";
    }

    else if (selectedPlayer === "44") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #3";
        nation.textContent = "USA";
        club.textContent = "Milwaukee Bucks";
        position.textContent = "PG";
        stats.innerHTML = "15th";
        playerImage.src = "/NBA/basket_img/players/d lillard.jpg";
    }

    else if (selectedPlayer === "45") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #4";
        nation.textContent = "USA";
        club.textContent = "New York Knicks";
        position.textContent = "PG";
        stats.innerHTML = "16th";
        playerImage.src = "/NBA/basket_img/players/j brunson.jpg";
    }

    else if (selectedPlayer === "46") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #4";
        nation.textContent = "USA";
        club.textContent = "LA Clippers";
        position.textContent = "SG, PG";
        stats.innerHTML = "17th";
        playerImage.src = "/NBA/basket_img/players/j harden.jpg";
    }

    else if (selectedPlayer === "47") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #4";
        nation.textContent = "USA";
        club.textContent = "Atlanta Hawks";
        position.textContent = "PG";
        stats.innerHTML = "18th";
        playerImage.src = "/NBA/basket_img/players/t young.jpg";
    }

    else if (selectedPlayer === "48") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #4";
        nation.textContent = "USA";
        club.textContent = "Dallas Mavericks";
        position.textContent = "PG, SG";
        stats.innerHTML = "19th";
        playerImage.src = "/NBA/basket_img/players/k irving.jpg";
    }

    else if (selectedPlayer === "49") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #4";
        nation.textContent = "USA";
        club.textContent = "Memphis Grizzlies";
        position.textContent = "PF, C";
        stats.innerHTML = "20th";
        playerImage.src = "/NBA/basket_img/players/j jackson jr.jpg";
    }

    else if (selectedPlayer === "50") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #5";
        nation.textContent = "USA";
        club.textContent = "Sacramento Kings";
        position.textContent = "PG";
        stats.innerHTML = "21st";
        playerImage.src = "/NBA/basket_img/players/d fox.jpg";
    }

    else if (selectedPlayer === "51") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #5";
        nation.textContent = "USA";
        club.textContent = "New York Knicks";
        position.textContent = "C, PF";
        stats.innerHTML = "22nd";
        playerImage.src = "/NBA/basket_img/players/ka towns.jpg";
    }

    else if (selectedPlayer === "52") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #5";
        nation.textContent = "USA";
        club.textContent = "Phoenix Suns";
        position.textContent = "SG";
        stats.innerHTML = "23rd";
        playerImage.src = "/NBA/basket_img/players/d booker.jpg";
    }

    else if (selectedPlayer === "53") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #5";
        nation.textContent = "USA";
        club.textContent = "Memphis Grizzlies";
        position.textContent = "PG";
        stats.innerHTML = "24th";
        playerImage.src = "/NBA/basket_img/players/j morant.jpg";
    }

    else if (selectedPlayer === "54") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #5";
        nation.textContent = "USA";
        club.textContent = "Orlando Magic";
        position.textContent = "PF, SF";
        stats.innerHTML = "25th";
        playerImage.src = "/NBA/basket_img/players/p banchero.jpg";
    }

    else if (selectedPlayer === "55") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #6";
        nation.textContent = "USA";
        club.textContent = "Charlotte Hornets";
        position.textContent = "PG";
        stats.innerHTML = "26th";
        playerImage.src = "/NBA/basket_img/players/la ball.jpg";
    }

    else if (selectedPlayer === "56") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #6";
        nation.textContent = "USA";
        club.textContent = "Cleveland Cavaliers";
        position.textContent = "PF, C";
        stats.innerHTML = "27th";
        playerImage.src = "/NBA/basket_img/players/e mobley.jpg";
    }

    else if (selectedPlayer === "57") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #6";
        nation.textContent = "USA";
        club.textContent = "Indiana Pacers";
        position.textContent = "PG";
        stats.innerHTML = "28th";
        playerImage.src = "/NBA/basket_img/players/t haliburton.jpg";
    }

    else if (selectedPlayer === "58") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #6";
        nation.textContent = "USA";
        club.textContent = "LA Clippers";
        position.textContent = "SF, SG";
        stats.innerHTML = "29th";
        playerImage.src = "/NBA/basket_img/players/k leonard.jpg";
    }

    else if (selectedPlayer === "59") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2024-2025 #6";
        nation.textContent = "USA";
        club.textContent = "Detroit Pistons";
        position.textContent = "PG, SG";
        stats.innerHTML = "30th";
        playerImage.src = "/NBA/basket_img/players/c cunningham.jpg";
    }
    // IN 2030
    else if (selectedPlayer === "60") {
        document.querySelector("select").style.fontSize = "19.5px"
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2030 #1";
        nation.textContent = "France";
        club.textContent = "San Antonio Spurs";
        position.textContent = "C, PF";
        stats.innerHTML = "1st";
        playerImage.src = "/NBA/basket_img/players/v wemban..jpg";
    }

    else if (selectedPlayer === "61") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2030 #1";
        nation.textContent = "Canada";
        club.textContent = "Oklahoma City Thunder";
        position.textContent = "SG, PG";
        stats.innerHTML = "2nd";
        playerImage.src = "/NBA/basket_img/players/s gilgeous-a.jpg";
    }

    else if (selectedPlayer === "62") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2030 #1";
        nation.textContent = "Slovenia";
        club.textContent = "Los Angeles Lakers";
        position.textContent = "PG, SG";
        stats.innerHTML = "3rd";
        playerImage.src = "/NBA/basket_img/players/l doncic.jpg";
    }

    else if (selectedPlayer === "63") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2030 #1";
        nation.textContent = "Greece";
        club.textContent = "Milwaukee Bucks";
        position.textContent = "PF, C";
        stats.innerHTML = "4th";
        playerImage.src = "/NBA/basket_img/players/g antetoko..jpg";
    }

    else if (selectedPlayer === "64") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2030 #1";
        nation.textContent = "Serbia";
        club.textContent = "Denver Nuggets";
        position.textContent = "C, PF";
        stats.innerHTML = "5th";
        playerImage.src = "/NBA/basket_img/players/n jokic.jpg";
    }

    else if (selectedPlayer === "65") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2030 #2";
        nation.textContent = "USA";
        club.textContent = "Minnesota Timberwolves";
        position.textContent = "SG, SF";
        stats.innerHTML = "6th";
        playerImage.src = "/NBA/basket_img/players/a edwards.jpg";
    }

    else if (selectedPlayer === "66") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2030 #2";
        nation.textContent = "USA";
        club.textContent = "Boston Celtics";
        position.textContent = "SF, PF";
        stats.innerHTML = "7th";
        playerImage.src = "/NBA/basket_img/players/j tatum.jpg";
    }

    else if (selectedPlayer === "67") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2030 #2";
        nation.textContent = "USA";
        club.textContent = "Oklahoma City Thunder";
        position.textContent = "C, PF";
        stats.innerHTML = "8th";
        playerImage.src = "/NBA/basket_img/players/c holmgren.jpg";
    }

    else if (selectedPlayer === "68") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2030 #2";
        nation.textContent = "USA";
        club.textContent = "Memphis Grizzlies";
        position.textContent = "PG";
        stats.innerHTML = "9th";
        playerImage.src = "/NBA/basket_img/players/j morant.jpg";
    }

    else if (selectedPlayer === "69") {
        title.innerHTML = "NBA BEST PLAYERS<BR>IN 2030 #2";
        nation.textContent = "USA";
        club.textContent = "Orlando Magic";
        position.textContent = "PF, SF";
        stats.innerHTML = "10th";
        playerImage.src = "/NBA/basket_img/players/p banchero.jpg";
    }

    else if (selectedPlayer === "70") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #3";
        nation.textContent = "USA";
        club.textContent = "Portland Trail Blazers";
        position.textContent = "PG";
        stats.innerHTML = "11th";
        playerImage.src = "/NBA/basket_img/players/s henderson.jpg";
    }

    else if (selectedPlayer === "71") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #3";
        nation.textContent = "USA";
        club.textContent = "Detroit Pistons";
        position.textContent = "PG, SG";
        stats.innerHTML = "12th";
        playerImage.src = "/NBA/basket_img/players/c cunningham.jpg";
    }

    else if (selectedPlayer === "72") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #3";
        nation.textContent = "USA";
        club.textContent = "Indiana Pacers";
        position.textContent = "PG";
        stats.innerHTML = "13th";
        playerImage.src = "/NBA/basket_img/players/t haliburton.jpg";
    }

    else if (selectedPlayer === "73") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #3";
        nation.textContent = "USA";
        club.textContent = "Phoenix Suns";
        position.textContent = "SG";
        stats.innerHTML = "14th";
        playerImage.src = "/NBA/basket_img/players/d booker.jpg";
    }

    else if (selectedPlayer === "74") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #3";
        nation.textContent = "USA";
        club.textContent = "Miami Heat";
        position.textContent = "C, PF";
        stats.innerHTML = "15th";
        playerImage.src = "/NBA/basket_img/players/b adebayo.jpg";
    }

    else if (selectedPlayer === "75") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #4";
        nation.textContent = "USA";
        club.textContent = "Cleveland Cavaliers";
        position.textContent = "PF, C";
        stats.innerHTML = "16th";
        playerImage.src = "/NBA/basket_img/players/e mobley.jpg";
    }

    else if (selectedPlayer === "76") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #4";
        nation.textContent = "USA";
        club.textContent = "Detroit Pistons";
        position.textContent = "SG";
        stats.innerHTML = "17th";
        playerImage.src = "/NBA/basket_img/players/j ivey.jpg";
    }

    else if (selectedPlayer === "77") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #4";
        nation.textContent = "USA";
        club.textContent = "New Orleans Pelicans";
        position.textContent = "PF, SF";
        stats.innerHTML = "18th";
        playerImage.src = "/NBA/basket_img/players/z williamson.jpg";
    }

    else if (selectedPlayer === "78") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #4";
        nation.textContent = "Germany";
        club.textContent = "Orlando Magic";
        position.textContent = "SF, PF";
        stats.innerHTML = "19th";
        playerImage.src = "/NBA/basket_img/players/f wagner.jpg";
    }

    else if (selectedPlayer === "79") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #4";
        nation.textContent = "USA";
        club.textContent = "Houston Rockets";
        position.textContent = "SG";
        stats.innerHTML = "20th";
        playerImage.src = "/NBA/basket_img/players/j green.jpg";
    }

    else if (selectedPlayer === "80") {
        document.querySelector("select").style.fontSize = "19.5px"
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #5";
        nation.textContent = "Canada";
        club.textContent = "Indiana Pacers";
        position.textContent = "SG";
        stats.innerHTML = "21st";
        playerImage.src = "/NBA/basket_img/players/b mathurin.jpg";
    }

    else if (selectedPlayer === "81") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #5";
        nation.textContent = "USA";
        club.textContent = "Sacramento Kings";
        position.textContent = "SF, PF";
        stats.innerHTML = "22nd";
        playerImage.src = "/NBA/basket_img/players/k murray.jpg";
    }

    else if (selectedPlayer === "82") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #5";
        nation.textContent = "USA";
        club.textContent = "Houston Rockets";
        position.textContent = "PF";
        stats.innerHTML = "23rd";
        playerImage.src = "/NBA/basket_img/players/j smith jr.jpg";
    }

    else if (selectedPlayer === "83") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #5";
        nation.textContent = "USA";
        club.textContent = "Charlotte Hornets";
        position.textContent = "SF";
        stats.innerHTML = "24th";
        playerImage.src = "/NBA/basket_img/players/b miller.jpg";
    }

    else if (selectedPlayer === "84") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #5";
        nation.textContent = "USA";
        club.textContent = "Houston Rockets";
        position.textContent = "PG";
        stats.innerHTML = "25th";
        playerImage.src = "/NBA/basket_img/players/am thompson.jpg";
    }

    else if (selectedPlayer === "85") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #6";
        nation.textContent = "USA";
        club.textContent = "Detroit Pistons";
        position.textContent = "SG";
        stats.innerHTML = "26th";
        playerImage.src = "/NBA/basket_img/players/au thompson.jpg";
    }

    else if (selectedPlayer === "86") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #6";
        nation.textContent = "USA";
        club.textContent = "Cleveland Cavaliers";
        position.textContent = "PG";
        stats.innerHTML = "27th";
        playerImage.src = "/NBA/basket_img/players/d garland.jpg";
    }

    else if (selectedPlayer === "87") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #6";
        nation.textContent = "Australia";
        club.textContent = "Oklahoma City Thunder";
        position.textContent = "PG, SG";
        stats.innerHTML = "28th";
        playerImage.src = "/NBA/basket_img/players/j giddey.jpg";
    }

    else if (selectedPlayer === "88") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #6";
        nation.textContent = "Canada";
        club.textContent = "Toronto Raptors";
        position.textContent = "SF, SG";
        stats.innerHTML = "29th";
        playerImage.src = "/NBA/basket_img/players/rj barrett.jpg";
    }

    else if (selectedPlayer === "89") {
        title.innerHTML = "BEST NBA PLAYERS<BR>IN 2030 #6";
        nation.textContent = "USA";
        club.textContent = "Utah Jazz";
        position.textContent = "Center";
        stats.innerHTML = "30th";
        playerImage.src = "/NBA/basket_img/players/w kessler.jpg";
    }
    // document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, darkorange 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
