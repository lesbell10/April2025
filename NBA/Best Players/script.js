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
    title.style.fontSize = "45px"

    sidepic.style.width = "155px"

    PG.style.left = "45.5%";
    SG.style.left = "34.5%";
    SF.style.left = "57%";
    PF.style.left = "36.5%";
    C.style.left = "47%";

    // PG3.style.left = "885px";
    // SG3.style.left ="695px";
    // SF3.style.left  = "58%";
    // PF3.style.left = "765px";
    // C3.style.left = "940px";

    PG2.style.border = "3px solid black";
    SG2.style.border = "3px solid black";
    SF2.style.border = "3px solid black";
    PF2.style.border = "3px solid black"
    C2.style.border = "3px solid black";

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

    if (selectedYear === "1") {

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

    if (selectedYear === "2") {

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

    if (selectedYear === "3") {

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

    if (selectedYear === "4") {

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

    if (selectedYear === "5") {

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

    if (selectedYear === "6") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "S Curry";
        SG.textContent = "J Morant";
        SF.textContent = "D Booker";
        PF.textContent = "G Antetoko.";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "52 PTS !!!";
        SG3.textContent = "36 PTS";
        SF3.textContent = "39 PTS";
        PF3.textContent = "37 PTS";
        C3.textContent = "61 PTS !!!";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
        C.style.left = "48.5%";
        sidepic.style.border = "3px solid black"
        C2.style.border = "3px solid red"
    }

    if (selectedYear === "7") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "T Young";
        SG.textContent = "A Edwards";
        SF.textContent = "S Sharpe";
        PF.textContent = "D Avdija";
        C.textContent = "A Gordon";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "29 PTS";
        SG3.textContent = "34 PTS";
        SF3.textContent = "33 PTS";
        PF3.textContent = "32 PTS";
        C3.textContent = "30 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56%"
        C.style.left = "47.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "8") {

        title.innerHTML = "<br>NBA BEST PLAYERS"


        PG.textContent = "S Gilgeous-A";
        SG.textContent = "R Westbrook";
        SF.textContent = "D DeRozan";
        PF.textContent = "K Leonard";
        C.textContent = "A Davis";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "33 PTS";
        SG3.textContent = "30 PTS";
        SF3.textContent = "29 PTS";
        PF3.textContent = "28 PTS";
        C3.textContent = "34 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "54.5%"
        C.style.left = "47%";
        SG.style.left = "485px"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "9") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "T Young";
        SG.textContent = "D Mitchell";
        SF.textContent = "T Herro";
        PF.textContent = "OG Anunoby";
        C.textContent = "KA Towns";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "25 PTS";
        SG3.textContent = "27 PTS";
        SF3.textContent = "25 PTS";
        PF3.textContent = "23 PTS";
        C3.textContent = "25 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "46%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "10") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "S Curry";
        SG.textContent = "T Herro";
        SF.textContent = "S Sharpe";
        PF.textContent = "L James";
        C.textContent = "G Antetoko.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "37 PTS";
        SG3.textContent = "35 PTS";
        SF3.textContent = "36 PTS";
        PF3.textContent = "33 PTS";
        C3.textContent = "35 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "44.3%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "11") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "B Carrington";
        SG.textContent = "J Morant";
        SF.textContent = "A Reaves";
        PF.textContent = "P Banchero";
        C.textContent = "A Bona";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "32 PTS";
        SG3.textContent = "30 PTS";
        SF3.textContent = "31 PTS";
        PF3.textContent = "33 PTS";
        C3.textContent = "28 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57%"
        C.style.left = "47%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "12") {

        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25"

        PG.textContent = "T Young";
        SG.textContent = "D Daniels";
        SF.textContent = "C LeVert";
        PF.textContent = "J Johnson";
        C.textContent = "O Okongwu";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/atlanta.gif";
        SF.style.left = "56.5%"
        C.style.left = "44.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "13") {

        title.innerHTML = "NBA BEST PLAYERS<br>2005 to 2025"

        PG.textContent = "T Young";
        SG.textContent = "Jo Johnson";
        SF.textContent = "J Smith";
        PF.textContent = "P Millsap";
        C.textContent = "A Horford";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/atlanta.gif";
        SF.style.left = "56.5%"
        C.style.left = "45.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "14") {

        title.innerHTML = "NBA BEST POINTERS<BR>PER GAME EVERY YEAR"

        PG.textContent = "A Iverson";
        SG.textContent = "K Bryant";
        SF.textContent = "T McGrady";
        PF.textContent = "P Stojakovic";
        C.textContent = "K Garnett";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "26.4 PPG";
        SG3.textContent = "24.0 PPG";
        SF3.textContent = "28.0 PPG";
        PF3.textContent = "24.2 PPG";
        C3.textContent = "24.2 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "54.5%"
        C.style.left = "46%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "15") {

        title.innerHTML = "NBA BEST POINTERS<BR>PER GAME EVERY YEAR"

        PG.textContent = "A Iverson";
        SG.textContent = "K Bryant";
        SF.textContent = "T McGrady";
        PF.textContent = "P Pierce";
        C.textContent = "S O'Neal";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "27.6 PPG";
        SG3.textContent = "30.0 PPG";
        SF3.textContent = "25.9 PPG";
        PF3.textContent = "32.1 PPG";
        C3.textContent = "27.5 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "54.5%"
        C.style.left = "46%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "16") {

        title.innerHTML = "NBA BEST POINTERS<BR>PER GAME EVERY YEAR"

        PG.textContent = "A Iverson";
        SG.textContent = "T McGrady";
        SF.textContent = "P Pierce";
        PF.textContent = "T Duncan";
        C.textContent = "S O'Neal";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "31.4 PPG";
        SG3.textContent = "25.6 PPG";
        SF3.textContent = "26.1 PPG";
        PF3.textContent = "25.5 PPG";
        C3.textContent = "27.2 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "46%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "17") {

        title.innerHTML = "NBA BEST POINTERS<BR>PER GAME EVERY YEAR"

        PG.textContent = "A Iverson";
        SG.textContent = "K Bryant";
        SF.textContent = "J Stackhouse";
        PF.textContent = "V Carter";
        C.textContent = "S O'Neal";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "31.1 PPG";
        SG3.textContent = "28.5 PPG";
        SF3.textContent = "29.8 PPG";
        PF3.textContent = "27.6 PPG";
        C3.textContent = "28.7 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "52.5%"
        C.style.left = "46%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "18") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "S Curry";
        SG.textContent = "D Booker";
        SF.textContent = "L Doncic";
        PF.textContent = "D Avdija";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "36 PTS";
        SG3.textContent = "37 PTS";
        SF3.textContent = "35 PTS";
        PF3.textContent = "37 PTS";
        C3.textContent = "33 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "46%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "19") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "C White";
        SG.textContent = "J Green";
        SF.textContent = "J Williams";
        PF.textContent = "A Sengun";
        C.textContent = "N Vucevic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "31 PTS";
        SG3.textContent = "34 PTS";
        SF3.textContent = "33 PTS";
        PF3.textContent = "31 PTS";
        C3.textContent = "31 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "46%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "20") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "J Harden";
        SG.textContent = "D Bane";
        SF.textContent = "A Edwards";
        PF.textContent = "G Antetoko.";
        C.textContent = "B Adebayo";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "29 PTS";
        SG3.textContent = "38 PTS";
        SF3.textContent = "37 PTS";
        PF3.textContent = "36 PTS";
        C3.textContent = "31 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "45%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "21") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "C Cunningham";
        SG.textContent = "Q Grimes";
        SF.textContent = "K Leonard";
        PF.textContent = "A Davis";
        C.textContent = "KA Towns";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "25 PTS";
        SG3.textContent = "28 PTS";
        SF3.textContent = "29 PTS";
        PF3.textContent = "27 PTS";
        C3.textContent = "30 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "46.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "22") {

        title.innerHTML = "NBA BEST PLAYERS<br>OF THE WEEK"

        PG.textContent = "S Curry";
        SG.textContent = "D Booker";
        SF.textContent = "A Edwards";
        PF.textContent = "G Antetoko.";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "32.0 PPG";
        SG3.textContent = "38.7 PPG";
        SF3.textContent = "33.0 PPG";
        PF3.textContent = "36.0 PPG";
        C3.textContent = "45.0 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "54.5%"
        C.style.left = "46.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "23") {

        title.innerHTML = "NBA BEST PLAYERS<br>OF THE WEEK"

        PG.textContent = "J Morant";
        SG.textContent = "T Herro";
        SF.textContent = "D DeRozan";
        PF.textContent = "D Avdija";
        C.textContent = "P Banchero";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "30.7 PPG";
        SG3.textContent = "29.0 PPG";
        SF3.textContent = "27.5 PPG";
        PF3.textContent = "31.7 PPG";
        C3.textContent = "27.7 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "44.65%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "24") {
        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "C White";
        SG.textContent = "D Booker";
        SF.textContent = "Z LaVine";
        PF.textContent = "OG Anunoby";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "37 PTS";
        SG3.textContent = "40 PTS";
        SF3.textContent = "37 PTS";
        PF3.textContent = "32 PTS";
        C3.textContent = "41 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "46.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "25") {
        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "K George";
        SG.textContent = "L Doncic";
        SF.textContent = "C Braun";
        PF.textContent = "D Sabonis";
        C.textContent = "O Okongwu";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "35 PTS";
        SG3.textContent = "30 PTS";
        SF3.textContent = "30 PTS";
        PF3.textContent = "27 PTS";
        C3.textContent = "27 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "44.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "26") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "C Cunningham";
        SG.textContent = "Z LaVine";
        SF.textContent = "L Walker IV";
        PF.textContent = "D DeRozan";
        C.textContent = "D Sabonis";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "35 PTS";
        SG3.textContent = "43 PTS";
        SF3.textContent = "29 PTS";
        PF3.textContent = "37 PTS";
        C3.textContent = "19 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "54.5%"
        C.style.left = "45.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "27") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "T Herro";
        SG.textContent = "Q Grimes";
        SF.textContent = "Du Robinson";
        PF.textContent = "K Ware";
        C.textContent = "A Bona";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "20 PTS";
        SG3.textContent = "29 PTS";
        SF3.textContent = "21 PTS";
        PF3.textContent = "19 PTS";
        C3.textContent = "16 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "53%"
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
        SF.style.left = "56.5%"
        C.style.left = "46.5%";
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
        SF.style.left = "56.5%"
        C.style.left = "46.5%";
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