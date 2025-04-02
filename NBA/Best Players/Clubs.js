const yearSelector = document.querySelector(".yearSelector")
let selectedYear = 0;
selectedYear = yearSelector.value;

const sidepic = document.querySelector(".sidepic");
const message = document.querySelector(".message")
const SG = document.getElementById("SG");
const SG2 = document.getElementById("SG2");
const SG3 = document.getElementById("SG3");
const PG = document.getElementById("PG");
const PG2 = document.getElementById("PG2");
const PG3 = document.getElementById("PG3");
const SF = document.getElementById("SF");
const SF2 = document.getElementById("SF2");
const SF3 = document.getElementById("SF3");
const PF = document.getElementById("PF");
const PF2 = document.getElementById("PF2");
const PF3 = document.getElementById("PF3");
const C = document.getElementById("C");
const C2 = document.getElementById("C2");
const C3 = document.getElementById("C3");
const title = document.querySelector(".title")

document.addEventListener("DOMContentLoaded", () => {

    // Load the saved year from localStorage
    const savedYear = localStorage.getItem("selectedYear");
    if (savedYear) {
        yearSelector.value = savedYear;
        selectedYear = savedYear;  // Update selectedPlayer
        updatePlayerInfo();  // Automatically update the player info based on the saved year     
    }
});

yearSelector.addEventListener("change", () => {

    title.innerHTML = " NBA BEST PLAYERS"
    title.style.fontSize = "46px"

    PG.style.left = "45.5%";
    SG.style.left = "34.5%";
    SF.style.left = "57.5%";
    PF.style.left = "38%";
    C.style.left = "48.5%";

    // PG3.style.left = "885px";
    // SG3.style.left ="695px";
    // SF3.style.left  = "58%";
    // PF3.style.left = "765px";
    // C3.style.left = "940px";

    PG3.textContent = "";
    SG3.textContent = "";
    SF3.textContent = "";
    PF3.textContent = "";
    C3.textContent = "";

    selectedYear = yearSelector.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", yearSelector.value);

    updatePlayerInfo();
});

function updatePlayerInfo() {

    // title.innerHTML = "NBA MOST POINTS"

    message.innerHTML = ""

    if (selectedYear === "0") {

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "Z LaVine";
        SF.textContent = "J Williams";
        PF.textContent = "J McDaniels";
        C.textContent = "M Turner";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "39 PTS";
        SG3.textContent = "42 PTS";
        SF3.textContent = "27 PTS";
        PF3.textContent = "27 PTS";
        C3.textContent = "23 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "930px";
    }

    if (selectedYear === "1") {

        PG.textContent = "K Irving";
        SG.textContent = "J Morant";
        SF.textContent = "L James";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "J Jackson";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "35 PTS";
        SG3.textContent = "29 PTS";
        SF3.textContent = "27 PTS";
        PF3.textContent = "27 PTS";
        C3.textContent = "28 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "930px";
    }

    if (selectedYear === "2") {

        PG.textContent = "J Brunson";
        SG.textContent = "T Haliburton";
        SF.textContent = "S Sharpe";
        PF.textContent = "J Tatum";
        C.textContent = "W Kessler";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "34 PTS";
        SG3.textContent = "33 PTS";
        SF3.textContent = "36 PTS";
        PF3.textContent = "27 PTS";
        C3.textContent = "25 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "930px";
    }

    if (selectedYear === "3") {

        PG.textContent = "S Curry";
        SG.textContent = "D Booker";
        SF.textContent = "L James";
        PF.textContent = "P Banchero";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "56 PTS";
        SG3.textContent = "36 PTS";
        SF3.textContent = "33 PTS";
        PF3.textContent = "41 PTS";
        C3.textContent = "32 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }

    if (selectedYear === "4") {

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "D Mitchell";
        SF.textContent = "J Brown";
        PF.textContent = "J Tatum";
        C.textContent = "P Siakam";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "31 PTS";
        SG3.textContent = "41 PTS";
        SF3.textContent = "37 PTS";
        PF3.textContent = "46 PTS";
        C3.textContent = "36 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "930px";
    }

    if (selectedYear === "5") {

        PG.textContent = "S Curry";
        SG.textContent = "K Irving";
        SF.textContent = "Q Grimes";
        PF.textContent = "J Jackson Jr";
        C.textContent = "A Sengun";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "29 PTS";
        SG3.textContent = "31 PTS";
        SF3.textContent = "44 PTS";
        PF3.textContent = "42 PTS";
        C3.textContent = "30 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "930px";
    }

    if (selectedYear === "6") {

        PG.textContent = "A Edwards";
        SG.textContent = "S Castle";
        SF.textContent = "J Williams";
        PF.textContent = "K Leonard";
        C.textContent = "B Adebayo";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "44 PTS";
        SG3.textContent = "32 PTS";
        SF3.textContent = "41 PTS";
        PF3.textContent = "33 PTS";
        C3.textContent = "30 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "920px";
    }

    if (selectedYear === "7") {

        title.innerHTML = "NBA PLAYERS WITH MOST<br>PTS/G LAST MONTH"

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "S Curry";
        SF.textContent = "A Edwards";
        PF.textContent = "L James";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "31.7 PTS/G";
        SG3.textContent = "30.7 PTS/G";
        SF3.textContent = "30.7 PTS/G";
        PF3.textContent = "29.3 PTS/G";
        C3.textContent = "27.3 PTS/G";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";

        SF3.style.left = "1085px";
        PF3.style.left = "770px";
    }

    if (selectedYear === "8") {

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "A Simons";
        SF.textContent = "D Bane";
        PF.textContent = "Mil Bridges";
        C.textContent = "A Drummo.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "51 PTS";
        SG3.textContent = "34 PTS";
        SF3.textContent = "35 PTS";
        PF3.textContent = "35 PTS";
        C3.textContent = "25 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "920px";
    }

    if (selectedYear === "9") {

        title.innerHTML = "NBA PLAYERS WITH MOST<br>PTS/G LAST WEEK"

        PG.textContent = "S Curry";
        SG.textContent = "S Gilgeous-A";
        SF.textContent = "P Banchero";
        PF.textContent = "J Jackson";
        C.textContent = "J Collins";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "33.3 PTS/G";
        SG3.textContent = "32.0 PTS/G";
        SF3.textContent = "30.0 PTS/G";
        PF3.textContent = "29.3 PTS/G";
        C3.textContent = "29.0 PTS/G";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF3.style.left = "1085px";
        PF3.style.left = "770px";
    }

    if (selectedYear === "10") {

        PG.textContent = "D Vassell";
        SG.textContent = "L James";
        SF.textContent = "K Durant";
        PF.textContent = "P Banchero";
        C.textContent = "Z Williams.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "37 PTS";
        SG3.textContent = "34 PTS";
        SF3.textContent = "34 PTS";
        PF3.textContent = "41 PTS";
        C3.textContent = "37 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "920px";
    }

    if (selectedYear === "11") {

        PG.textContent = "P Pritchard";
        SG.textContent = "J Harden";
        SF.textContent = "D DeRozan";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "B Adebayo";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = " 43 PTS";
        SG3.textContent = "50 PTS";
        SF3.textContent = "35 PTS";
        PF3.textContent = "32 PTS";
        C3.textContent = "34 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "920px";
    }

    if (selectedYear === "12") {

        PG.textContent = "S Curry";
        SG.textContent = "C White";
        SF.textContent = "L James";
        PF.textContent = "J Tatum";
        C.textContent = "P Siakam";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "40 PTS";
        SG3.textContent = "44 PTS";
        SF3.textContent = "31 PTS";
        PF3.textContent = "35 PTS";
        C3.textContent = "35 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "930px";
    }

    if (selectedYear === "13") {

        PG.textContent = "D Booker";
        SG.textContent = "I Quickley";
        SF.textContent = "Z LaVine";
        PF.textContent = "Mil Bridges";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "34 PTS";
        SG3.textContent = "34 PTS";
        SF3.textContent = "36 PTS";
        PF3.textContent = "46 PTS";
        C3.textContent = "31 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }

    if (selectedYear === "14") {

        PG.textContent = "T Young";
        SG.textContent = "L Doncic";
        SF.textContent = "J Brown";
        PF.textContent = "J Tatum";
        C.textContent = "G Antetoko.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "36 PTS";
        SG3.textContent = "34 PTS";
        SF3.textContent = "31 PTS";
        PF3.textContent = "40 PTS";
        C3.textContent = "37 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "915px";
    }

    if (selectedYear === "15") {

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "A Simons";
        SF.textContent = "D DeRozan";
        PF.textContent = "N Marshall";
        C.textContent = "G Antetoko.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "40 PTS";
        SG3.textContent = "34 PTS";
        SF3.textContent = "31 PTS";
        PF3.textContent = "34 PTS";
        C3.textContent = "30 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "915px";
    }

    if (selectedYear === "16") {

        title.innerHTML = "NBA PLAYERS WITH MOST<br>PTS/G LAST WEEK"

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "J Poole";
        SF.textContent = "Mil Bridges";
        PF.textContent = "J Tatum";
        C.textContent = "G Antetoko.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "44.0 PTS/G";
        SG3.textContent = "34.0 PTS/G";
        SF3.textContent = "32.5 PTS/G";
        PF3.textContent = "37.5 PTS/G";
        C3.textContent = "31.3 PTS/G";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF3.style.left = "1085px";
        PF3.style.left = "770px";
        C.style.left = "915px";
    }

    if (selectedYear === "17") {

        PG.textContent = "J Murray";
        SG.textContent = "Q Grimes";
        SF.textContent = "Mil Bridges";
        PF.textContent = "K Durant";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "34 PTS";
        SG3.textContent = "35 PTS";
        SF3.textContent = "35 PTS";
        PF3.textContent = "35 PTS";
        C3.textContent = "35 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }

    if (selectedYear === "18") {

        PG.textContent = "D Garland";
        SG.textContent = "C Cunningham";
        SF.textContent = "C Thomas";
        PF.textContent = "K Leonard";
        C.textContent = "P Siakam";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "30 PTS";
        SG3.textContent = "27 PTS";
        SF3.textContent = "27 PTS";
        PF3.textContent = "29 PTS";
        C3.textContent = "25 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "930px";
    }

    if (selectedYear === "19") {

        PG.textContent = "T Young";
        SG.textContent = "S Gilgeous-A";
        SF.textContent = "Mik Bridges";
        PF.textContent = "J Tatum";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "35 PTS";
        SG3.textContent = "34 PTS";
        SF3.textContent = "33 PTS";
        PF3.textContent = "33 PTS";
        C3.textContent = "34 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }

    if (selectedYear === "20") {

        PG.textContent = "L Doncic";
        SG.textContent = "C Cunningham";
        SF.textContent = "A Reaves";
        PF.textContent = "P Banchero";
        C.textContent = "G Antetoko.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "45 PTS";
        SG3.textContent = "38 PTS";
        SF3.textContent = "28 PTS";
        PF3.textContent = "34 PTS";
        C3.textContent = "24 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "910px";
    }

    if (selectedYear === "21") {

        PG.textContent = "J Morant";
        SG.textContent = "A Reaves";
        SF.textContent = "D Knecht";
        PF.textContent = "P Banchero";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "44 PTS";
        SG3.textContent = "37 PTS";
        SF3.textContent = "32 PTS";
        PF3.textContent = "43 PTS";
        C3.textContent = "28 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }

    if (selectedYear === "22") {

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "J Green";
        SF.textContent = "A Nesmith";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "48 PTS";
        SG3.textContent = "28 PTS";
        SF3.textContent = "30 PTS";
        PF3.textContent = "34 PTS";
        C3.textContent = "40 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }

    if (selectedYear === "23") {

        PG.textContent = "L Doncic";
        SG.textContent = "J Harden";
        SF.textContent = "A Edwards";
        PF.textContent = "C Johnson";
        C.textContent = "PJ Washing.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "33 PTS";
        SG3.textContent = "31 PTS";
        SF3.textContent = "41 PTS";
        PF3.textContent = "28 PTS";
        C3.textContent = "29 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "910px";
    }

    if (selectedYear === "24") {

        title.innerHTML = "NBA PLAYERS WITH MOST<br>PTS/G LAST WEEK"

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "J Morant";
        SF.textContent = "A Edwards";
        PF.textContent = "P Banchero";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "34.5 PPG";
        SG3.textContent = "33.7 PPG";
        SF3.textContent = "32.7 PPG";
        PF3.textContent = "31.5 PPG";
        C3.textContent = "34.3 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF3.style.left = "1105px";
    }

    if (selectedYear === "25") {

        PG.textContent = "Q Grimes";
        SG.textContent = "D Bane";
        SF.textContent = "A Edwards";
        PF.textContent = "A Gordon";
        C.textContent = "O Toppin";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "46 PTS";
        SG3.textContent = "44 PTS";
        SF3.textContent = "38 PTS";
        PF3.textContent = "38 PTS";
        C3.textContent = "34 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }

    if (selectedYear === "26") {

        PG.textContent = "T Young";
        SG.textContent = "J Butler";
        SF.textContent = "K Leonard";
        PF.textContent = "K Porzingis";
        C.textContent = "I Zubac";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "31 PTS";
        SG3.textContent = "24 PTS";
        SF3.textContent = "33 PTS";
        PF3.textContent = "25 PTS";
        C3.textContent = "28 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }

    if (selectedYear === "27") {

        PG.textContent = "S Curry";
        SG.textContent = "K Irving";
        SF.textContent = "Q Grimes";
        PF.textContent = "J Jackson Jr";
        C.textContent = "A Sengun";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "29 PTS";
        SG3.textContent = "31 PTS";
        SF3.textContent = "44 PTS";
        PF3.textContent = "42 PTS";
        C3.textContent = "30 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%";
    }

    if (selectedYear === "28") {

        PG.textContent = "D Lillard";
        SG.textContent = "J Green";
        SF.textContent = "S Castle";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "M Williams";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "28 PTS";
        SG3.textContent = "24 PTS";
        SF3.textContent = "24 PTS";
        PF3.textContent = "29 PTS";
        C3.textContent = "24 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57%";
        C.style.left = "900px";
    }

    if (selectedYear === "29") {

        PG.textContent = "D Fox";
        SG.textContent = "D Vassell";
        SF.textContent = "T Martin";
        PF.textContent = "D DeRozan";
        C.textContent = "J Duren";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "20 PTS";
        SG3.textContent = "20 PTS";
        SF3.textContent = "23 PTS";
        PF3.textContent = "21 PTS";
        C3.textContent = "18 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57%";
    }

    if (selectedYear === "30") {

        PG.textContent = "C White";
        SG.textContent = "M Monk";
        SF.textContent = "S Barnes";
        PF.textContent = "B Mathurin";
        C.textContent = "G Antetoko.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "35 PTS";
        SG3.textContent = "34 PTS";
        SF3.textContent = "29 PTS";
        PF3.textContent = "28 PTS";
        C3.textContent = "28 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "910px"
    }

    if (selectedYear === "31") {

        PG.textContent = "La Ball";
        SG.textContent = "K Huerter";
        SF.textContent = "OG Anunoby";
        PF.textContent = "KA Towns";
        C.textContent = "N Vucevic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "25 PTS";
        SG3.textContent = "25 PTS";
        SF3.textContent = "25 PTS";
        PF3.textContent = "24 PTS";
        C3.textContent = "24 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57%";
    }

    if (selectedYear === "32") {

        PG.textContent = "F VanVleet";
        SG.textContent = "C Cunningham";
        SF.textContent = "S Dinwiddie";
        PF.textContent = "K Durant";
        C.textContent = "D Avdija";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "37 PTS";
        SG3.textContent = "35 PTS";
        SF3.textContent = "31 PTS";
        PF3.textContent = "42 PTS";
        C3.textContent = "36 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SG.style.left = "670px"
    }

    if (selectedYear === "33") {

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "J Harden";
        SF.textContent = "An Wiggins";
        PF.textContent = "P Banchero";
        C.textContent = "K Porzingis";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "30 PTS";
        SG3.textContent = "30 PTS";
        SF3.textContent = "30 PTS";
        PF3.textContent = "30 PTS";
        C3.textContent = "27 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "910px";
    }

    if (selectedYear === "34") {

        PG.textContent = "C White";
        SG.textContent = "L Doncic";
        SF.textContent = "M Buzelis";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "KA Towns";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "36 PTS";
        SG3.textContent = "34 PTS";
        SF3.textContent = "31 PTS";
        PF3.textContent = "32 PTS";
        C3.textContent = "31 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "1100px"
    }

    if (selectedYear === "35") {

        PG.textContent = "A Reaves";
        SG.textContent = "J Butler III";
        SF.textContent = "Mik Bridges";
        PF.textContent = "P Siakam";
        C.textContent = "T Watford";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "25 PTS";
        SG3.textContent = "25 PTS";
        SF3.textContent = "27 PTS";
        PF3.textContent = "26 PTS";
        C3.textContent = "26 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "1070px"
    }

    if (selectedYear === "36") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "J Murray";
        SG.textContent = "CJ McCollum";
        SF.textContent = "J Green";
        PF.textContent = "J Tatum";
        C.textContent = "An Wiggins";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "39 PTS";
        SG3.textContent = "40 PTS";
        SF3.textContent = "30 PTS";
        PF3.textContent = "30 PTS";
        C3.textContent = "42 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "910px";
        SF.style.left = "57.5%"
    }

    if (selectedYear === "37") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "T Young";
        SG.textContent = "T Herro";
        SF.textContent = "Q Grimes";
        PF.textContent = "K Leonard";
        C.textContent = "R Holland II";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "28 PTS";
        SG3.textContent = "29 PTS";
        SF3.textContent = "26 PTS";
        PF3.textContent = "25 PTS";
        C3.textContent = "26 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "910px";
        SF.style.left = "56.5%"
    }

    if (selectedYear === "38") {

        title.innerHTML = "NBA BEST POINTS<br>PER GAME EVERY YEAR"

        PG.textContent = "R Westbrook";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "K Love";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "23.6 PPG";
        SG3.textContent = "27.9 PPG";
        SF3.textContent = "27.1 PPG";
        PF3.textContent = "28.0 PPG";
        C3.textContent = "26.0 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "39") {

        title.innerHTML = "NBA BEST POINTS<br>PER GAME EVERY YEAR"

        PG.textContent = "D Wade";
        SG.textContent = "K Bryant";
        SF.textContent = "C Anthony";
        PF.textContent = "L James";
        C.textContent = "K Durant";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "25.5 PPG";
        SG3.textContent = "25.3 PPG";
        SF3.textContent = "25.6 PPG";
        PF3.textContent = "26.7 PPG";
        C3.textContent = "27.7 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "40") {

        title.innerHTML = "NBA BEST POINTS<br>PER GAME EVERY YEAR"

        PG.textContent = "D Wade";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "C Anthony";
        C.textContent = "K Durant";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "26.6 PPG";
        SG3.textContent = "27.0 PPG";
        SF3.textContent = "29.7 PPG";
        PF3.textContent = "28.2 PPG";
        C3.textContent = "30.1 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "41") {

        title.innerHTML = "NBA BEST POINTS<br>PER GAME EVERY YEAR"

        PG.textContent = "D Wade"
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "D Granger";
        C.textContent = "D Nowitzki";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "30.2 PPG";
        SG3.textContent = "26.8 PPG";
        SF3.textContent = "28.4 PPG";
        PF3.textContent = "25.8 PPG";
        C3.textContent = "25.9 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "47%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "42") {

        title.innerHTML = "<BR>NBA BEST PLAYERS"

        PG.textContent = "C White";
        SG.textContent = "L Doncic";
        SF.textContent = "F Wagner";
        PF.textContent = "K Durant";
        C.textContent = "G Antetoko.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "37 PTS";
        SG3.textContent = "32 PTS";
        SF3.textContent = "32 PTS";
        PF3.textContent = "38 PTS";
        C3.textContent = "31 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        sidepic.style.border = "3px solid black"
        SF.style.left = "57.5%"
        C.style.left = "46.5%";
    }

    if (selectedYear === "43") {

        title.innerHTML = "<BR>NBA BEST PLAYERS"

        PG.textContent = "J Murray";
        SG.textContent = "J Giddey";
        SF.textContent = "L James";
        PF.textContent = "J Tatum";
        C.textContent = "P Banchero";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "28 PTS";
        SG3.textContent = "26 PTS";
        SF3.textContent = "24 PTS";
        PF3.textContent = "25 PTS";
        C3.textContent = "30 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        sidepic.style.border = "3px solid black"
        SF.style.left = "57.5%"
        C.style.left = "47%";
    }


    if (selectedYear === "44") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "J Green";
        SF.textContent = "OG Anunoby";
        PF.textContent = "N Marshall";
        C.textContent = "P Banchero";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "32 PTS";
        SG3.textContent = "32 PTS";
        SF3.textContent = "35 PTS";
        PF3.textContent = "38 PTS";
        C3.textContent = "32 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "55%"
        C.style.left = "46.75%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "45") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "D Garland";
        SG.textContent = "M Sasser";
        SF.textContent = "D Vassell";
        PF.textContent = "K Murray";
        C.textContent = "B Adebayo";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "27 PTS";
        SG3.textContent = "27 PTS";
        SF3.textContent = "26 PTS";
        PF3.textContent = "28 PTS";
        C3.textContent = "27 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "47%";
        sidepic.style.border = "3px solid black"
    }


    if (selectedYear === "46") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "L Doncic";
        SG.textContent = "J Harden";
        SF.textContent = "K Durant";
        PF.textContent = "KA Towns";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "34 PTS";
        SG3.textContent = "29 PTS";
        SF3.textContent = "30 PTS";
        PF3.textContent = "34 PTS";
        C3.textContent = "39 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "47") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "A Reaves";
        SG.textContent = "K Leonard";
        SF.textContent = "OG Anunoby";
        PF.textContent = "K Porzingis";
        C.textContent = "B Lopez";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "24 PTS";
        SG3.textContent = "27 PTS";
        SF3.textContent = "28 PTS";
        PF3.textContent = "30 PTS";
        C3.textContent = "26 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "55%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "48") {

        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25"

        PG.textContent = "T Haliburton";
        SG.textContent = "A Nembhard";
        SF.textContent = "B Mathurin";
        PF.textContent = "P Siakam";
        C.textContent = "M Turner";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/indiana.gif";
        SF.style.left = "56.5%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "49") {

        title.innerHTML = "NBA BEST PLAYERS<br>2005 to 2025"

        PG.textContent = "V Oladipo";
        SG.textContent = "R Miller";
        SF.textContent = "P George";
        PF.textContent = "D Granger";
        C.textContent = "M Turner";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/indiana.gif";
        SF.style.left = "57.5%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "50") {

        title.innerHTML = "NBA BEST PLAYERS<br>OF THE WEEK"

        PG.textContent = "C White";
        SG.textContent = "Q Grimes";
        SF.textContent = "An Wiggins";
        PF.textContent = "P Banchero";
        C.textContent = "Z Williamson";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "30.3 PTS";
        SG3.textContent = "31.3 PTS";
        SF3.textContent = "36.0 PTS";
        PF3.textContent = "30.5 PTS";
        C3.textContent = "29.5 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "45.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "51") {

        title.innerHTML = "NBA BEST PLAYERS<br>OF THE WEEK"

        PG.textContent = "L Doncic";
        SG.textContent = "D Booker";
        SF.textContent = "A Edwards";
        PF.textContent = "J Tatum";
        C.textContent = "KA Towns";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "28.7 PTS";
        SG3.textContent = "28.3 PTS";
        SF3.textContent = "28.0 PTS";
        PF3.textContent = "28.0 PTS";
        C3.textContent = "27.5 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "52") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "T Herro";
        SF.textContent = "P Banchero";
        PF.textContent = "A Sengun";
        C.textContent = "J Allen";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "37 PTS";
        SG3.textContent = "36 PTS";
        SF3.textContent = "35 PTS";
        PF3.textContent = "33 PTS";
        C3.textContent = "29 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "53") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "T Young";
        SG.textContent = "A Reaves";
        SF.textContent = "Z LaVine";
        PF.textContent = "D Avdija";
        C.textContent = "J Jackson Jr";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "29 PTS";
        SG3.textContent = "30 PTS";
        SF3.textContent = "29 PTS";
        PF3.textContent = "24 PTS";
        C3.textContent = "27 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "46%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "54") {

        title.innerHTML = "NBA BEST<br>PLAYERS IN 2024-25"

        PG.textContent = "Z LaVine";
        SG.textContent = "M Monk";
        SF.textContent = "D DeRozan";
        PF.textContent = "K Murray";
        C.textContent = "D Sabonis";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/sacramento.gif";
        SF.style.left = "56.5%"
        C.style.left = "47%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "55") {

        title.innerHTML = "NBA BEST PLAYERS<br>2005 to 2025"

        PG.textContent = "D Fox";
        SG.textContent = "T Evans";
        SF.textContent = "B Hield";
        PF.textContent = "R Gay";
        C.textContent = "D Cousins";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/sacramento.gif";
        SF.style.left = "57.5%"
        C.style.left = "47.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "56") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "D Mitchell";
        SG.textContent = "T Hardaway Jr";
        SF.textContent = "OG Anunoby";
        PF.textContent = "K Leonard";
        C.textContent = "G Antetoko.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "38 PTS";
        SG3.textContent = "32 PTS";
        SF3.textContent = "31 PTS";
        PF3.textContent = "31 PTS";
        C3.textContent = "30 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "55%"
        C.style.left = "46%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "57") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "S Curry";
        SG.textContent = "Mik Bridges";
        SF.textContent = "K Durant";
        PF.textContent = "J Randle";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"

        PG3.textContent = "23 PTS";
        SG3.textContent = "26 PTS";
        SF3.textContent = "23 PTS";
        PF3.textContent = "25 PTS";
        C3.textContent = "27 PTS";
    }

    if (selectedYear === "58") {

        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25"

        PG.textContent = "J Morant";
        SG.textContent = "D Bane";
        SF.textContent = "S Aldama";
        PF.textContent = "J Jackson Jr";
        C.textContent = "Z Edey";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/memphis.gif";
        SF.style.left = "57.5%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "59") {

        title.innerHTML = "NBA BEST PLAYERS<br>2005 to 2025"

        PG.textContent = "J Morant";
        SG.textContent = "M Conley";
        SF.textContent = "T Allen";
        PF.textContent = "Z Randolph";
        C.textContent = "M Gasol";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/memphis.gif";
        SF.style.left = "57.5%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "60") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "T Herro";
        SF.textContent = "A Reaves";
        PF.textContent = "J Tatum";
        C.textContent = "M Buzelis";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "33 PTS";
        SG3.textContent = "30 PTS";
        SF3.textContent = "31 PTS";
        PF3.textContent = "29 PTS";
        C3.textContent = "28 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "47.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "61") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "L Doncic";
        SG.textContent = "C White";
        SF.textContent = "D Bane";
        PF.textContent = "L James";
        C.textContent = "N Vucevic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "29 PTS";
        SG3.textContent = "25 PTS";
        SF3.textContent = "29 PTS";
        PF3.textContent = "25 PTS";
        C3.textContent = "25 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "47%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "62") {

        title.innerHTML = "NBA MOST POINTS <BR>PER GAME EVERY YEAR"

        PG.textContent = "A Iverson";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "C Anthony";
        C.textContent = "A Stoudemire";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "26.4 PTS";
        SG3.textContent = "28.3 PTS";
        SF3.textContent = "30.0 PTS";
        PF3.textContent = "25.7 PTS";
        C3.textContent = "25.2 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "45%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "63") {

        title.innerHTML = "NBA MOST POINTS <BR>PER GAME EVERY YEAR"

        PG.textContent = "G Arenas";
        SG.textContent = "D Wade";
        SF.textContent = "K Bryant";
        PF.textContent = "L James";
        C.textContent = "C Anthony";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "28.4 PTS";
        SG3.textContent = "27.4 PTS";
        SF3.textContent = "36.1 PTS";
        PF3.textContent = "27.3 PTS";
        C3.textContent = "28.9 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "47%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "64") {

        title.innerHTML = "NBA MOST POINTS <BR>PER GAME EVERY YEAR"

        PG.textContent = "G Arenas";
        SG.textContent = "A Iverson";
        SF.textContent = "K Bryant";
        PF.textContent = "L James";
        C.textContent = "D Nowitzki";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "29.3 PTS";
        SG3.textContent = "33.0 PTS";
        SF3.textContent = "35.4 PTS";
        PF3.textContent = "31.4 PTS";
        C3.textContent = "26.6 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "46.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "65") {

        title.innerHTML = "NBA MOST POINTS <BR>PER GAME EVERY YEAR"

        PG.textContent = "A Iverson";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "A Stoudemire";
        C.textContent = "D Nowitzki";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "30.7 PTS";
        SG3.textContent = "27.6 PTS";
        SF3.textContent = "27.2 PTS";
        PF3.textContent = "26.0 PTS";
        C3.textContent = "26.1 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "46.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "66") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "J Green";
        SG.textContent = "N Powell";
        SF.textContent = "Z Risacher";
        PF.textContent = "D Avdija";
        C.textContent = "G Antetoko.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "33 PTS";
        SG3.textContent = "34 PTS";
        SF3.textContent = "36 PTS";
        PF3.textContent = "33 PTS";
        C3.textContent = "31 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "45.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "67") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "K Porter Jr";
        SG.textContent = "D Booker";
        SF.textContent = "RJ Barrett";
        PF.textContent = "OG Anunoby";
        C.textContent = "J Randle";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "28 PTS";
        SG3.textContent = "28 PTS";
        SF3.textContent = "31 PTS";
        PF3.textContent = "28 PTS";
        C3.textContent = "26 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "68") {

        title.innerHTML = "NBA BEST PLAYERS<br>OF THE WEEK"

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "L Doncic";
        SF.textContent = "OG Anunoby";
        PF.textContent = "G Antetoko.";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "34.0 PPG";
        SG3.textContent = "30.0 PPG";
        SF3.textContent = "30.5 PPG";
        PF3.textContent = "30.7 PPG";
        C3.textContent = "33.0 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "69") {

        title.innerHTML = "NBA BEST PLAYERS<br>OF THE WEEK"

        PG.textContent = "C White";
        SG.textContent = "D Mitchell";
        SF.textContent = "K Durant";
        PF.textContent = "K Leonard";
        C.textContent = "P Banchero";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "29.3 PPG";
        SG3.textContent = "29.0 PPG";
        SF3.textContent = "25.5 PPG";
        PF3.textContent = "29.0 PPG";
        C3.textContent = "30.3 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "46.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "70") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "J Poole";
        SG.textContent = "I Joe";
        SF.textContent = "D DeRozan";
        PF.textContent = "A Horford";
        C.textContent = "B Adebayo";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "35 PTS";
        SG3.textContent = "31 PTS";
        SF3.textContent = "31 PTS";
        PF3.textContent = "26 PTS";
        C3.textContent = "28 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56%"
        C.style.left = "47%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "71") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "J Morant";
        SF.textContent = "T Herro";
        PF.textContent = "Mil Bridges";
        C.textContent = "P Banchero";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "27 PTS";
        SG3.textContent = "26 PTS";
        SF3.textContent = "27 PTS";
        PF3.textContent = "26 PTS";
        C3.textContent = "26 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "46.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "300") {

        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25"

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "300") {

        title.innerHTML = "NBA BEST PLAYERS<br>2005 to 2025"

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"
    }
}


const xPositionDisplay = document.getElementById('x-position');
const carousel = document.querySelector('.carousel');
const scaleFactor = 0.8;

document.addEventListener('mousemove', (event) => {
    const rect = carousel.getBoundingClientRect();

    // Get mouse X relative to carousel's left edge
    const relativeX = event.clientX - rect.left;

    // Remove the scale effect to get actual unscaled position
    const trueX = Math.round(relativeX / scaleFactor);

    xPositionDisplay.innerHTML = `left: ${trueX + 36}px`;
});

document.addEventListener('mouseleave', () => {
    xPositionDisplay.innerHTML = "";
});

// -------------- STATS ------------------

// PG3.textContent = " PTS";
// SG3.textContent = " PTS";
// SF3.textContent = " PTS";
// PF3.textContent = " PTS";
// C3.textContent = " PTS";