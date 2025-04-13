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
    document.querySelector("select").style.fontSize = "20px"
    title.style.fontSize = "34px"

    // SINCE 2005
    if (selectedPlayer === "0") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #1";
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "1st";
        playerImage.src = "/NHL/hockey_img/players/mcdavid.jpg";
    }

    else if (selectedPlayer === "1") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #1";
        nation.textContent = "Canada";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Center";
        stats.innerHTML = "2nd";
        playerImage.src = "/NHL/hockey_img/players/crosby.jpg";
    }

    else if (selectedPlayer === "2") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #1";
        nation.textContent = "Russia";
        club.textContent = "Washington Capitals";
        position.textContent = "Left Wing";
        stats.innerHTML = "3rd";
        playerImage.src = "/NHL/hockey_img/players/ovechkin.jpg";
    }

    else if (selectedPlayer === "3") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #1";
        nation.textContent = "Canada";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Goaltender";
        stats.innerHTML = "4th";
        playerImage.src = "/NHL/hockey_img/players/price.jpg";
    }

    else if (selectedPlayer === "4") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #1";
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Right Wing";
        stats.innerHTML = "5th";
        playerImage.src = "/NHL/hockey_img/players/kucherov.jpg";
    }

    else if (selectedPlayer === "5") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #2";
        nation.textContent = "Germany";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "6th";
        playerImage.src = "/NHL/hockey_img/players/draisaitl.jpg";
    }

    else if (selectedPlayer === "6") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #2";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Center";
        stats.innerHTML = "7th";
        playerImage.src = "/NHL/hockey_img/players/mackinnon.jpg";
    }

    else if (selectedPlayer === "7") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #2";
        nation.textContent = "Slovakia";
        club.textContent = "Boston Bruins";
        position.textContent = "Defenseman";
        stats.innerHTML = "8th";
        playerImage.src = "/NHL/hockey_img/players/chara.jpg";
    }

    else if (selectedPlayer === "8") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #2";
        nation.textContent = "USA";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Right Wing";
        stats.innerHTML = "9th";
        playerImage.src = "/NHL/hockey_img/players/p kane.jpg";
    }

    else if (selectedPlayer === "9") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #2";
        nation.textContent = "Russia";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Center";
        stats.innerHTML = "10th";
        playerImage.src = "/NHL/hockey_img/players/malkin.jpg";
    }

    else if (selectedPlayer === "10") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #3";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Defenseman";
        stats.innerHTML = "11th";
        playerImage.src = "/NHL/hockey_img/players/makar.jpg";
    }

    else if (selectedPlayer === "11") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #3";
        nation.textContent = "Sweden";
        club.textContent = "New York Rangers";
        position.textContent = "Goaltender";
        stats.innerHTML = "12th";
        playerImage.src = "/NHL/hockey_img/players/lundqvist.jpg";
    }

    else if (selectedPlayer === "12") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #3";
        nation.textContent = "USA";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Center";
        stats.innerHTML = "13th";
        playerImage.src = "/NHL/hockey_img/players/matthews.jpg";
    }

    else if (selectedPlayer === "13") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #3";
        nation.textContent = "Sweden";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Defenseman";
        stats.innerHTML = "14th";
        playerImage.src = "/NHL/hockey_img/players/hedman.jpg";
    }

    else if (selectedPlayer === "14") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #3";
        nation.textContent = "Sweden";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Defenseman";
        stats.innerHTML = "15th";
        playerImage.src = "/NHL/hockey_img/players/e karlsson.jpg";
    }

    else if (selectedPlayer === "15") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #4";
        nation.textContent = "Canada";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Center";
        stats.innerHTML = "16th";
        playerImage.src = "/NHL/hockey_img/players/stamkos.jpg";
    }

    else if (selectedPlayer === "16") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #4";
        nation.textContent = "Russia";
        club.textContent = "New York Rangers";
        position.textContent = "Left Wing";
        stats.innerHTML = "17th";
        playerImage.src = "/NHL/hockey_img/players/panarin.jpg";
    }

    else if (selectedPlayer === "17") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #4";
        nation.textContent = "Canada";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Center";
        stats.innerHTML = "18th";
        playerImage.src = "/NHL/hockey_img/players/lecavalier.jpg";
    }

    else if (selectedPlayer === "18") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #4";
        nation.textContent = "Russia";
        club.textContent = "Minnesota Wild";
        position.textContent = "Left Wing";
        stats.innerHTML = "19th";
        playerImage.src = "/NHL/hockey_img/players/kaprizov.jpg";
    }

    else if (selectedPlayer === "19") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #4";
        nation.textContent = "Canada";
        club.textContent = "Minnesota Wild";
        position.textContent = "Goaltender";
        stats.innerHTML = "20th";
        playerImage.src = "/NHL/hockey_img/players/fleury.jpg";
    }

    else if (selectedPlayer === "20") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #5";
        nation.textContent = "Canada";
        club.textContent = "San Jose Sharks";
        position.textContent = "Center";
        stats.innerHTML = "21st";
        playerImage.src = "/NHL/hockey_img/players/thornton.jpg";
    }

    else if (selectedPlayer === "21") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #5";
        nation.textContent = "Canada";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Defenseman";
        stats.innerHTML = "22nd";
        playerImage.src = "/NHL/hockey_img/players/weber.jpg";
    }

    else if (selectedPlayer === "22") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #5";
        nation.textContent = "Canada";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Center";
        stats.innerHTML = "23rd";
        playerImage.src = "/NHL/hockey_img/players/j toews.jpg";
    }

    else if (selectedPlayer === "23") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #5";
        nation.textContent = "Canada";
        club.textContent = "Florida Panthers";
        position.textContent = "Left Wing";
        stats.innerHTML = "24th";
        playerImage.src = "/NHL/hockey_img/players/marchand.jpg";
    }

    else if (selectedPlayer === "24") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #5";
        nation.textContent = "Canada";
        club.textContent = "Los Angeles Kings";
        position.textContent = "Defenseman";
        stats.innerHTML = "25th";
        playerImage.src = "/NHL/hockey_img/players/doughty.jpg";
    }

    else if (selectedPlayer === "25") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #6";
        nation.textContent = "Russia";
        club.textContent = "Atlanta Thrashers";
        position.textContent = "Left Wing";
        stats.innerHTML = "26th";
        playerImage.src = "/NHL/hockey_img/players/kovalchuk.jpg";
    }

    else if (selectedPlayer === "26") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #6";
        nation.textContent = "Sweden";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Left Wing";
        stats.innerHTML = "27th";
        playerImage.src = "/NHL/hockey_img/players/d sedin.jpg";
    }

    else if (selectedPlayer === "27") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #6";
        nation.textContent = "Sweden";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Center";
        stats.innerHTML = "28th";
        playerImage.src = "/NHL/hockey_img/players/h sedin.jpg";
    }

    else if (selectedPlayer === "28") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #6";
        nation.textContent = "Canada";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Defenseman";
        stats.innerHTML = "29th";
        playerImage.src = "/NHL/hockey_img/players/keith.jpg";
    }

    else if (selectedPlayer === "29") {
        title.innerHTML = "NHL BEST PLAYERS<br>SINCE 2005 #6";
        nation.textContent = "USA";
        club.textContent = "New York Rangers";
        position.textContent = "Goaltender";
        stats.innerHTML = "30th";
        playerImage.src = "/NHL/hockey_img/players/quick.jpg";
    }
    // 2024-2025
    else if (selectedPlayer === "30") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #1";
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "1st";
        playerImage.src = "/NHL/hockey_img/players/mcdavid.jpg";
    }

    else if (selectedPlayer === "31") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #1";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Center";
        stats.innerHTML = "2nd";
        playerImage.src = "/NHL/hockey_img/players/mackinnon.jpg";
    }

    else if (selectedPlayer === "32") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #1";
        nation.textContent = "Germany";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "3rd";
        playerImage.src = "/NHL/hockey_img/players/draisaitl.jpg";
    }

    else if (selectedPlayer === "33") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #1";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Defenseman";
        stats.innerHTML = "4th";
        playerImage.src = "/NHL/hockey_img/players/makar.jpg";
    }

    else if (selectedPlayer === "34") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #1";
        nation.textContent = "USA";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Center";
        stats.innerHTML = "5th";
        playerImage.src = "/NHL/hockey_img/players/matthews.jpg";
    }

    else if (selectedPlayer === "35") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #2";
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Right Wing";
        stats.innerHTML = "6th";
        playerImage.src = "/NHL/hockey_img/players/kucherov.jpg";
    }

    else if (selectedPlayer === "36") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #2";
        nation.textContent = "Czech Republic";
        club.textContent = "Boston Bruins";
        position.textContent = "Right Wing";
        stats.innerHTML = "7th";
        playerImage.src = "/NHL/hockey_img/players/pastrnak.jpg";
    }

    else if (selectedPlayer === "37") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #2";
        nation.textContent = "Russia";
        club.textContent = "New York Rangers";
        position.textContent = "Left Wing";
        stats.innerHTML = "8th";
        playerImage.src = "/NHL/hockey_img/players/panarin.jpg";
    }

    else if (selectedPlayer === "38") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #2";
        nation.textContent = "USA";
        club.textContent = "Florida Panthers";
        position.textContent = "Left Wing";
        stats.innerHTML = "9th";
        playerImage.src = "/NHL/hockey_img/players/m tkachuk.jpg";
    }

    else if (selectedPlayer === "39") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #2";
        nation.textContent = "USA";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Defenseman";
        stats.innerHTML = "10th";
        playerImage.src = "/NHL/hockey_img/players/q hughes.jpg";
    }

    else if (selectedPlayer === "40") {
        document.querySelector("select").style.fontSize = "19.5px"
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #3";
        nation.textContent = "Finland";
        club.textContent = "Florida Panthers";
        position.textContent = "Center";
        stats.innerHTML = "11th";
        playerImage.src = "/NHL/hockey_img/players/barkov.jpg";
    }

    else if (selectedPlayer === "41") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #3";
        nation.textContent = "Canada";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Center";
        stats.innerHTML = "12th";
        playerImage.src = "/NHL/hockey_img/players/crosby.jpg";
    }

    else if (selectedPlayer === "42") {
        document.querySelector("select").style.fontSize = "19.5px"
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #3";
        nation.textContent = "USA";
        club.textContent = "Winnipeg Jets";
        position.textContent = "Goaltender";
        stats.innerHTML = "13th";
        playerImage.src = "/NHL/hockey_img/players/hellebuyck.jpg";
    }

    else if (selectedPlayer === "43") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #3";
        nation.textContent = "Russia";
        club.textContent = "Washington Capitals";
        position.textContent = "Left Wing";
        stats.innerHTML = "14th";
        playerImage.src = "/NHL/hockey_img/players/ovechkin.jpg";
    }

    else if (selectedPlayer === "44") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #3";
        nation.textContent = "USA";
        club.textContent = "Vegas Golden Knights";
        position.textContent = "Center";
        stats.innerHTML = "15th";
        playerImage.src = "/NHL/hockey_img/players/eichel.jpg";
    }

    else if (selectedPlayer === "45") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #4";
        nation.textContent = "Finland";
        club.textContent = "Dallas Stars";
        position.textContent = "Right Wing";
        stats.innerHTML = "16th";
        playerImage.src = "/NHL/hockey_img/players/rantanen.jpg";
    }

    else if (selectedPlayer === "46") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #4";
        nation.textContent = "Russia";
        club.textContent = "Minnesota Wild";
        position.textContent = "Left Wing";
        stats.innerHTML = "17th";
        playerImage.src = "/NHL/hockey_img/players/kaprizov.jpg";
    }

    else if (selectedPlayer === "47") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #4";
        nation.textContent = "Canada";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Right Wing";
        stats.innerHTML = "18th";
        playerImage.src = "/NHL/hockey_img/players/marner.jpg";
    }

    else if (selectedPlayer === "48") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #4";
        nation.textContent = "Switzerland";
        club.textContent = "Nashville Predators";
        position.textContent = "Defenseman";
        stats.innerHTML = "19th";
        playerImage.src = "/NHL/hockey_img/players/josi.jpg";
    }

    else if (selectedPlayer === "49") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #4";
        nation.textContent = "USA";
        club.textContent = "Winnipeg Jets";
        position.textContent = "Left Wing";
        stats.innerHTML = "20th";
        playerImage.src = "/NHL/hockey_img/players/k connor.jpg";
    }

    else if (selectedPlayer === "50") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #5";
        nation.textContent = "USA";
        club.textContent = "New York Rangers";
        position.textContent = "Defenseman";
        stats.innerHTML = "21st";
        playerImage.src = "/NHL/hockey_img/players/a fox.jpg";
    }

    else if (selectedPlayer === "51") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #5";
        nation.textContent = "Russia";
        club.textContent = "New York Rangers";
        position.textContent = "Goaltender";
        stats.innerHTML = "22nd";
        playerImage.src = "/NHL/hockey_img/players/shesterkin.jpg";
    }

    else if (selectedPlayer === "52") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #5";
        nation.textContent = "Canada";
        club.textContent = "Florida Panthers";
        position.textContent = "Left Wing";
        stats.innerHTML = "23rd";
        playerImage.src = "/NHL/hockey_img/players/marchand.jpg";
    }

    else if (selectedPlayer === "53") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #5";
        nation.textContent = "Finland";
        club.textContent = "Carolina Hurricanes";
        position.textContent = "Center";
        stats.innerHTML = "24th";
        playerImage.src = "/NHL/hockey_img/players/s aho.jpg";
    }

    else if (selectedPlayer === "54") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #5";
        nation.textContent = "Sweden";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Defenseman";
        stats.innerHTML = "25th";
        playerImage.src = "/NHL/hockey_img/players/hedman.jpg";
    }

    else if (selectedPlayer === "55") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #6";
        nation.textContent = "Canada";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Center";
        stats.innerHTML = "26th";
        playerImage.src = "/NHL/hockey_img/players/point.jpg";
    }

    else if (selectedPlayer === "56") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #6";
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Goaltender";
        stats.innerHTML = "27th";
        playerImage.src = "/NHL/hockey_img/players/vasilevskiy.jpg";
    }

    else if (selectedPlayer === "57") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #6";
        nation.textContent = "Sweden";
        club.textContent = "New Jersey Devils";
        position.textContent = "Right Wing";
        stats.innerHTML = "28th";
        playerImage.src = "/NHL/hockey_img/players/bratt.jpg";
    }

    else if (selectedPlayer === "58") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #6";
        nation.textContent = "Sweden";
        club.textContent = "Buffalo Sabres";
        position.textContent = "Defenseman";
        stats.innerHTML = "29th";
        playerImage.src = "/NHL/hockey_img/players/dahlin.jpg";
    }

    else if (selectedPlayer === "59") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2024-2025 #6";
        nation.textContent = "Sweden";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Right Wing";
        stats.innerHTML = "30th";
        playerImage.src = "/NHL/hockey_img/players/nylander.jpg";
    }
    // in 2030
    else if (selectedPlayer === "60") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2030 #1";
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "1st";
        playerImage.src = "/NHL/hockey_img/players/mcdavid.jpg";
    }

    else if (selectedPlayer === "61") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2030 #1";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Center";
        stats.innerHTML = "2nd";
        playerImage.src = "/NHL/hockey_img/players/mackinnon.jpg";
    }

    else if (selectedPlayer === "62") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2030 #1";
        nation.textContent = "Canada";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Center";
        stats.innerHTML = "3rd";
        playerImage.src = "/NHL/hockey_img/players/bedard.jpg";
    }

    else if (selectedPlayer === "63") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2030 #1";
        nation.textContent = "USA";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Center";
        stats.innerHTML = "4th";
        playerImage.src = "/NHL/hockey_img/players/matthews.jpg";
    }

    else if (selectedPlayer === "64") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2030 #1";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Defenseman";
        stats.innerHTML = "5th";
        playerImage.src = "/NHL/hockey_img/players/makar.jpg";
    }

    else if (selectedPlayer === "65") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2030 #2";
        nation.textContent = "Germany";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "6th";
        playerImage.src = "/NHL/hockey_img/players/draisaitl.jpg";
    }

    else if (selectedPlayer === "66") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2030 #2";
        nation.textContent = "USA";
        club.textContent = "New Jersey Devils";
        position.textContent = "Center";
        stats.innerHTML = "7th";
        playerImage.src = "/NHL/hockey_img/players/j hughes.jpg";
    }

    else if (selectedPlayer === "67") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2030 #2";
        nation.textContent = "Russia";
        club.textContent = "Minnesota Wild";
        position.textContent = "Left Wing";
        stats.innerHTML = "8th";
        playerImage.src = "/NHL/hockey_img/players/kaprizov.jpg";
    }

    else if (selectedPlayer === "68") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2030 #2";
        nation.textContent = "USA";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Defenseman";
        stats.innerHTML ="9th";
        playerImage.src = "/NHL/hockey_img/players/q hughes.jpg";
    }

    else if (selectedPlayer === "69") {
        title.innerHTML = "NHL BEST PLAYERS<BR>IN 2030 #2";
        nation.textContent = "Sweden";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Center";
        stats.innerHTML = "10th";
        playerImage.src = "/NHL/hockey_img/players/pettersson.jpg";
    }

    else if (selectedPlayer === "70") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #3";
        nation.textContent = "USA";
        club.textContent = "New York Rangers";
        position.textContent = "Defenseman";
        stats.innerHTML = "11th";
        playerImage.src = "/NHL/hockey_img/players/a fox.jpg";
    }

    else if (selectedPlayer === "71") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #3";
        nation.textContent = "Finland";
        club.textContent = "Dallas Stars";
        position.textContent = "Right Wing";
        stats.innerHTML = "12th";
        playerImage.src = "/NHL/hockey_img/players/rantanen.jpg";
    }

    else if (selectedPlayer === "72") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #3";
        nation.textContent = "Czech Republic";
        club.textContent = "Boston Bruins";
        position.textContent = "Right Wing";
        stats.innerHTML = "13th";
        playerImage.src = "/NHL/hockey_img/players/pastrnak.jpg";
    }

    else if (selectedPlayer === "73") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #3";
        nation.textContent = "Russia";
        club.textContent = "New York Rangers";
        position.textContent = "Goaltender";
        stats.innerHTML = "14th";
        playerImage.src = "/NHL/hockey_img/players/shesterkin.jpg";
    }

    else if (selectedPlayer === "74") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #3";
        nation.textContent = "USA";
        club.textContent = "Anaheim Ducks";
        position.textContent = "Center";
        stats.innerHTML = "15th";
        playerImage.src = "/NHL/hockey_img/players/zegras.jpg";
    }

    else if (selectedPlayer === "75") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #4";
        nation.textContent = "Canada";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Center";
        stats.innerHTML = "16th";
        playerImage.src = "/NHL/hockey_img/players/suzuki.jpg";
    }

    else if (selectedPlayer === "76") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #4";
        nation.textContent = "USA";
        club.textContent = "Ottawa Senators";
        position.textContent = "Left Wing";
        stats.innerHTML = "17th";
        playerImage.src = "/NHL/hockey_img/players/b tkachuk.jpg";
    }

    else if (selectedPlayer === "77") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #4";
        nation.textContent = "Finland";
        club.textContent = "Carolina Hurricanes";
        position.textContent = "Center";
        stats.innerHTML = "18th";
        playerImage.src = "/NHL/hockey_img/players/s aho.jpg";
    }

    else if (selectedPlayer === "78") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #4";
        nation.textContent = "USA";
        club.textContent = "Dallas Stars";
        position.textContent = "Left Wing";
        stats.innerHTML = "19th";
        playerImage.src = "/NHL/hockey_img/players/robertson.jpg";
    }

    else if (selectedPlayer === "79") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #4";
        nation.textContent = "USA";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Right Wing";
        stats.innerHTML = "20th";
        playerImage.src = "/NHL/hockey_img/players/caufield.jpg";
    }

    else if (selectedPlayer === "80") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #5";
        nation.textContent = "Sweden";
        club.textContent = "New Jersey Devils";
        position.textContent = "Right Wing";
        stats.innerHTML = "21st";
        playerImage.src = "/NHL/hockey_img/players/bratt.jpg";
    }

    else if (selectedPlayer === "81") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #5";
        nation.textContent = "USA";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Defenseman";
        stats.innerHTML = "22nd";
        playerImage.src = "/NHL/hockey_img/players/hutson.jpg";
    }

    else if (selectedPlayer === "82") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #5";
        nation.textContent = "USA";
        club.textContent = "Buffalo Sabres";
        position.textContent = "Center";
        stats.innerHTML = "23rd";
        playerImage.src = "/NHL/hockey_img/players/t thompson.jpg";
    }

    else if (selectedPlayer === "83") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #5";
        nation.textContent = "USA";
        club.textContent = "Dallas Stars";
        position.textContent = "Goaltender";
        stats.innerHTML = "24th";
        playerImage.src = "/NHL/hockey_img/players/oettinger.jpg";
    }

    else if (selectedPlayer === "84") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #5";
        nation.textContent = "Germany";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Defenseman";
        stats.innerHTML = "25th";
        playerImage.src = "/NHL/hockey_img/players/seider.jpg";
    }

    else if (selectedPlayer === "85") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #6";
        nation.textContent = "Slovakia";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Left Wing";
        stats.innerHTML = "26th";
        playerImage.src = "/NHL/hockey_img/players/slafkovsky.jpg";
    }

    else if (selectedPlayer === "86") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #6";
        nation.textContent = "Russia";
        club.textContent = "Columbus Blue Jackets";
        position.textContent = "Goaltender";
        stats.innerHTML = "27th";
        playerImage.src = "/NHL/hockey_img/players/tarasov.jpg";
    }

    else if (selectedPlayer === "87") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #6";
        nation.textContent = "Russia";
        club.textContent = "Philadelphia Flyers";
        position.textContent = "Right Wing";
        stats.innerHTML = "28th";
        playerImage.src = "/NHL/hockey_img/players/michkov.jpg";
    }

    else if (selectedPlayer === "88") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #6";
        nation.textContent = "Sweden";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Right Wing";
        stats.innerHTML = "29th";
        playerImage.src = "/NHL/hockey_img/players/raymond.jpg";
    }

    else if (selectedPlayer === "89") {
        title.innerHTML = "BEST NHL PLAYERS<BR>IN 2030 #6";
        nation.textContent = "Canada";
        club.textContent = "Buffalo Sabres";
        position.textContent = "Defenseman";
        stats.innerHTML = "30th";
        playerImage.src = "/NHL/hockey_img/players/power.jpg";
    }
    // document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, dodgerblue 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
