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
    title.style.fontSize = "41px"
    document.querySelector("select").style.fontSize = "32px";
    PG.style.fontSize = "30px";
    SG.style.fontSize = "30px";
    SF.style.fontSize = "30px";
    PF.style.fontSize = "30px";
    C.style.fontSize = "30px";

    sidepic.style.width = "155px"
    sidepic.style.borderRadius = "15px"

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
        sidepic.style.border = "3px solid black"
        C.style.left = "44.5%";
        SF.style.left = "56.5%";
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

    if (selectedYear === "28") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "J Tatum";
        SF.textContent = "P Banchero";
        PF.textContent = "KA Towns";
        C.textContent = "K Porzingis";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "42 PTS";
        SG3.textContent = "32 PTS";
        SF3.textContent = "33 PTS";
        PF3.textContent = "34 PTS";
        C3.textContent = "34 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "54.5%"
        C.style.left = "44.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "29") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "D Garland";
        SG.textContent = "J Morant";
        SF.textContent = "J Williams";
        PF.textContent = "L James";
        C.textContent = "O Okongwu";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "28 PTS";
        SG3.textContent = "28 PTS";
        SF3.textContent = "26 PTS";
        PF3.textContent = "28 PTS";
        C3.textContent = "30 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56%"
        C.style.left = "44.25%";
        sidepic.style.border = "3px solid black"
    }


    if (selectedYear === "30") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "L Doncic";
        SG.textContent = "J Harden";
        SF.textContent = "S Sharpe";
        PF.textContent = "L James";
        C.textContent = "K Filipowski";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "45 PTS";
        SG3.textContent = "35 PTS";
        SF3.textContent = "37 PTS";
        PF3.textContent = "27 PTS";
        C3.textContent = "30 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "44.2%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "31") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "S Curry";
        SG.textContent = "J Dowting Jr";
        SF.textContent = "J Williams";
        PF.textContent = "T Vukcevic";
        C.textContent = "J Nurkic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "30 PTS";
        SG3.textContent = "30 PTS";
        SF3.textContent = "33 PTS";
        PF3.textContent = "24 PTS";
        C3.textContent = "26 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "55.5%"
        C.style.left = "46.5%";
        SG.style.left = "480px"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "32") {

        title.innerHTML = "<br>NBA BEST POINTERS #2"

        PG.textContent = "S Curry";
        SG.textContent = "T Maxey";
        SF.textContent = "D Bane";
        PF.textContent = "L Markkanen";
        C.textContent = "J Randle";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "26.4 PPG";
        SG3.textContent = "25.9 PPG";
        SF3.textContent = "23.7 PPG";
        PF3.textContent = "23.2 PPG";
        C3.textContent = "24.0 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "46.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "33") {

        title.innerHTML = "<br>NBA BEST POINTERS #2"

        PG.textContent = "D Fox";
        SG.textContent = "D Mitchell";
        SF.textContent = "D DeRozan";
        PF.textContent = "L James";
        C.textContent = "A Davis";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "26.6 PPG";
        SG3.textContent = "26.6 PPG";
        SF3.textContent = "24.0 PPG";
        PF3.textContent = "25.7 PPG";
        C3.textContent = "24.7 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "55%"
        C.style.left = "46.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "34") {

        title.innerHTML = "<br>NBA BEST POINTERS #1"

        PG.textContent = "J Brunson";
        SG.textContent = "D Booker";
        SF.textContent = "A Edwards";
        PF.textContent = "J Tatum";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "28.7 PPG";
        SG3.textContent = "27.1 PPG";
        SF3.textContent = "26.9 PPG";
        PF3.textContent = "26.9 PPG";
        C3.textContent = "26.4 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "55.5%"
        C.style.left = "46.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "35") {

        title.innerHTML = "<br>NBA BEST POINTERS #1"

        PG.textContent = "L Doncic";
        SG.textContent = "S Gilgeous-A";
        SF.textContent = "K Durant";
        PF.textContent = "G Antetoko.";
        C.textContent = "J Embiid";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "33.9 PPG";
        SG3.textContent = "30.1 PPG";
        SF3.textContent = "27.1 PPG";
        PF3.textContent = "30.4 PPG";
        C3.textContent = "34.7 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "46.5%";
        SG.style.left = "480px"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "36") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "J Morant";
        SG.textContent = "C Cunningham";
        SF.textContent = "A Edwards";
        PF.textContent = "Z Risacher";
        C.textContent = "J Randle";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "36 PTS";
        SG3.textContent = "36 PTS";
        SF3.textContent = "44 PTS";
        PF3.textContent = "38 PTS";
        C3.textContent = "31 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "55%"
        C.style.left = "46.5%";
        SG.style.left = "470px"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "37") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "T Young";
        SG.textContent = "T Jerome";
        SF.textContent = "D Bane";
        PF.textContent = "G Antetoko.";
        C.textContent = "KA Towns";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "24 PTS";
        SG3.textContent = "24 PTS";
        SF3.textContent = "28 PTS";
        PF3.textContent = "28 PTS";
        C3.textContent = "25 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "45.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "38") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "L Doncic";
        SG.textContent = "C Cunningham";
        SF.textContent = "Aa Wiggins";
        PF.textContent = "A Gordon";
        C.textContent = "R Gobert";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "39 PTS";
        SG3.textContent = "36 PTS";
        SF3.textContent = "35 PTS";
        PF3.textContent = "33 PTS";
        C3.textContent = "35 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "54%"
        C.style.left = "46.5%";
        SG.style.left = "32.25%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "39") {

        title.innerHTML = "<br>NBA BEST PLAYERS"

        PG.textContent = "T Young";
        SG.textContent = "I Joe";
        SF.textContent = "C Whitmore";
        PF.textContent = "K Leonard";
        C.textContent = "G Antetoko.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "36 PTS";
        SG3.textContent = "32 PTS";
        SF3.textContent = "34 PTS";
        PF3.textContent = "28 PTS";
        C3.textContent = "32 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "56.5%"
        C.style.left = "44.5%";
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "40") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 1-5"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "T Young";
        SG.textContent = "D Daniels";
        SF.textContent = "D Hunter";
        PF.textContent = "J Johnson";
        C.textContent = "O Okongwu";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "24.2 PPG";
        SG3.textContent = "14.1 PPG";
        SF3.textContent = "19.0 PPG";
        PF3.textContent = "18.9 PPG";
        C3.textContent = "13.4 PPG";

        sidepic.src = "/NBA/basket_img/logos/atlanta.gif";
        sidepic.style.border = "3px solid black";
        message.innerHTML = "30+ Games"
        C.style.left = "44.5%";
        SF.style.left = "56.5%";
    }

    if (selectedYear === "41") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 1-5"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "P Pritchard";
        SG.textContent = "D White";
        SF.textContent = "J Brown";
        PF.textContent = "J Tatum";
        C.textContent = "K Porzingis";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "14.3 PPG";
        SG3.textContent = "16.4 PPG";
        SF3.textContent = "22.2 PPG";
        PF3.textContent = "26.8 PPG";
        C3.textContent = "19.5 PPG";

        sidepic.src = "/NBA/basket_img/logos/boston.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "45%";
        SF.style.left = "56.5%";
    }

    if (selectedYear === "42") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 1-5"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "Ke Johnson";
        SG.textContent = "Z Williams";
        SF.textContent = "C Johnson";
        PF.textContent = "T Watford";
        C.textContent = "N Claxton";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "10.6 PPG";
        SG3.textContent = "10.0 PPG";
        SF3.textContent = "18.8 PPG";
        PF3.textContent = "10.2 PPG";
        C3.textContent = "10.3 PPG";

        sidepic.src = "/NBA/basket_img/logos/brooklyn.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "45.5%";
        SF.style.left = "56.5%";
    }

    if (selectedYear === "43") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 1-5"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "La Ball";
        SG.textContent = "N Smith Jr";
        SF.textContent = "Mil Bridges";
        PF.textContent = "J Nurkic";
        C.textContent = "M Williams";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "25.2 PPG";
        SG3.textContent = "9.9 PPG";
        SF3.textContent = "20.3 PPG";
        PF3.textContent = "9.2 PPG";
        C3.textContent = "15.3 PPG";

        sidepic.src = "/NBA/basket_img/logos/charlotte.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "45%";
        SF.style.left = "54%";
    }

    if (selectedYear === "44") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 1-5"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "C White";
        SG.textContent = "A Dosunmu";
        SF.textContent = "K Huerter";
        PF.textContent = "J Giddey";
        C.textContent = "N Vucevic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "20.4 PPG";
        SG3.textContent = "12.3 PPG";
        SF3.textContent = "13.2 PPG";
        PF3.textContent = "14.6 PPG";
        C3.textContent = "18.5 PPG";

        sidepic.src = "/NBA/basket_img/logos/chicago.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "45.5%";
        SF.style.left = "55.5%";
    }

    if (selectedYear === "45") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 6-10"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "D Garland";
        SG.textContent = "D Mitchell";
        SF.textContent = "C LeVert";
        PF.textContent = "E Mobley";
        C.textContent = "J Allen";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "20.6 PPG";
        SG3.textContent = "24.0 PPG";
        SF3.textContent = "10.2 PPG";
        PF3.textContent = "18.5 PPG";
        C3.textContent = "13.5 PPG";

        sidepic.src = "/NBA/basket_img/logos/cleveland.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46.5%";
        SF.style.left = "56.5%";
    }

    if (selectedYear === "46") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 6-10"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "K Irving";
        SG.textContent = "K Thompson";
        SF.textContent = "N Marshall";
        PF.textContent = "PJ Washington";
        C.textContent = "A Davis";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "24.7 PPG";
        SG3.textContent = "14.0 PPG";
        SF3.textContent = "13.2 PPG";
        PF3.textContent = "14.7 PPG";
        C3.textContent = "20.0 PPG";

        sidepic.src = "/NBA/basket_img/logos/dallas.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46.5%";
        SF.style.left = "54.5%";
        SG.style.left = "480px"
    }

    if (selectedYear === "47") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 6-10"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "J Murray";
        SG.textContent = "C Braun";
        SF.textContent = "M Porter Jr";
        PF.textContent = "A Gordon";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "21.4 PPG";
        SG3.textContent = "15.4 PPG";
        SF3.textContent = "18.2 PPG";
        PF3.textContent = "14.7 PPG";
        C3.textContent = "29.6 PPG";

        sidepic.src = "/NBA/basket_img/logos/denver.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46.5%";
        SF.style.left = "54%";
    }

    if (selectedYear === "48") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 6-10"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "C Cunningham";
        SG.textContent = "J Ivey";
        SF.textContent = "M Beasley";
        PF.textContent = "T Harris";
        C.textContent = "J Duren";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "26.1 PPG";
        SG3.textContent = "17.6 PPG";
        SF3.textContent = "16.3 PPG";
        PF3.textContent = "13.7 PPG";
        C3.textContent = "11.8 PPG";

        sidepic.src = "/NBA/basket_img/logos/detroit.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46.5%";
        SF.style.left = "55.5%";
    }

    if (selectedYear === "49") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 6-10"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "S Curry";
        SG.textContent = "B Podziemski";
        SF.textContent = "J Butler III";
        PF.textContent = "J Kuminga";
        C.textContent = "D Green";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "24.5 PPG";
        SG3.textContent = "11.7 PPG";
        SF3.textContent = "17.9 PPG";
        PF3.textContent = "15.3 PPG";
        C3.textContent = "9.0 PPG";

        sidepic.src = "/NBA/basket_img/logos/golden state.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46.5%";
        SF.style.left = "55%";
        SG.style.left ="480px"
    }

    if (selectedYear === "50") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 11-15"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "F VanVleet";
        SG.textContent = "J Green";
        SF.textContent = "Am Thompson";
        PF.textContent = "J Smith Jr";
        C.textContent = "A Sengun";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "14.1 PPG";
        SG3.textContent = "21.0 PPG";
        SF3.textContent = "14.1 PPG";
        PF3.textContent = "12.2 PPG";
        C3.textContent = "19.1 PPG";

        sidepic.src = "/NBA/basket_img/logos/houston.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46.5%";
        SF.style.left = "50.5%";
    }

    if (selectedYear === "51") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 11-15"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "T Haliburton";
        SG.textContent = "B Mathurin";
        SF.textContent = "A Nesmith";
        PF.textContent = "P Siakam";
        C.textContent = "M Turner";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "18.6 PPG";
        SG3.textContent = "16.1 PPG";
        SF3.textContent = "12.0 PPG";
        PF3.textContent = "20.2 PPG";
        C3.textContent = "15.6 PPG";

        sidepic.src = "/NBA/basket_img/logos/indiana.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46.5%";
        SF.style.left = "55%";
    }

    if (selectedYear === "52") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 11-15"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "J Harden";
        SG.textContent = "N Powell";
        SF.textContent = "Bog Bogdanovic";
        PF.textContent = "K Leonard";
        C.textContent = "I Zubac";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "22.8 PPG";
        SG3.textContent = "21.8 PPG";
        SF3.textContent = "11.4 PPG";
        PF3.textContent = "21.5 PPG";
        C3.textContent = "16.8 PPG";

        sidepic.src = "/NBA/basket_img/logos/la clippers.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46.5%";
        SF.style.left = "49%";
    }

    if (selectedYear === "53") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 11-15"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "L Doncic";
        SG.textContent = "A Reaves";
        SF.textContent = "D Knecht";
        PF.textContent = "L James";
        C.textContent = "R Hachimura";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "28.2 PPG";
        SG3.textContent = "20.2 PPG";
        SF3.textContent = "9.1 PPG";
        PF3.textContent = "24.4 PPG";
        C3.textContent = "13.1 PPG";

        sidepic.src = "/NBA/basket_img/logos/la lakers.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "44.5%";
        SF.style.left = "56%";
        C.style.fontSize = "27px";
    }

    if (selectedYear === "54") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 11-15"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "J Morant";
        SG.textContent = "D Bane";
        SF.textContent = "J Wells";
        PF.textContent = "J Jackson Jr";
        C.textContent = "S Aldama";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "23.2 PPG";
        SG3.textContent = "19.2 PPG";
        SF3.textContent = "10.4 PPG";
        PF3.textContent = "22.2 PPG";
        C3.textContent = "12.5 PPG";

        sidepic.src = "/NBA/basket_img/logos/memphis.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46.5%";
        SF.style.left = "56.5%";
    }

    if (selectedYear === "55") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 16-20"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "T Rozier";
        SG.textContent = "T Herro";
        SF.textContent = "Du Robinson";
        PF.textContent = "N Jovic";
        C.textContent = "B Adebayo";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "10.6 PPG";
        SG3.textContent = "23.9 PPG";
        SF3.textContent = "11.0 PPG";
        PF3.textContent = "10.7 PPG";
        C3.textContent = "18.1 PPG";

        sidepic.src = "/NBA/basket_img/logos/miami.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "45%";
        SF.style.left = "52.5%";
    }

    if (selectedYear === "56") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 16-20"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "D Lillard";
        SG.textContent = "K Porter Jr";
        SF.textContent = "K Kuzma";
        PF.textContent = "G Antetoko.";
        C.textContent = "B Portis";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "24.9 PPG";
        SG3.textContent = "11.7 PPG";
        SF3.textContent = "14.5 PPG";
        PF3.textContent = "30.4 PPG";
        C3.textContent = "13.9 PPG";

        sidepic.src = "/NBA/basket_img/logos/milwaukee.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46.5%";
        SF.style.left = "56.5%";
    }

    if (selectedYear === "57") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 16-20"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "D DiVincenzo";
        SG.textContent = "A Edwards";
        SF.textContent = "J McDaniels";
        PF.textContent = "J Randle";
        C.textContent = "N Reid";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "11.7 PPG";
        SG3.textContent = "27.6 PPG";
        SF3.textContent = "12.2 PPG";
        PF3.textContent = "18.7 PPG";
        C3.textContent = "14.2 PPG";

        sidepic.src = "/NBA/basket_img/logos/minnesota.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46.5%";
        SF.style.left = "53.5%";
    }

    if (selectedYear === "58") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 16-20"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "D Murray";
        SG.textContent = "CJ McCollum";
        SF.textContent = "T Murphy III";
        PF.textContent = "Z Williamson";
        C.textContent = "K Olynyk";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "17.5 PPG";
        SG3.textContent = "21.1 PPG";
        SF3.textContent = "21.2 PPG";
        PF3.textContent = "24.6 PPG";
        C3.textContent = "10.7 PPG";

        sidepic.src = "/NBA/basket_img/logos/new orleans.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46.5%";
        SF.style.left = "53%";
        SG.style.left = "33%"
    }

    if (selectedYear === "59") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 16-20"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "J Brunson";
        SG.textContent = "Mik Bridges";
        SF.textContent = "OG Anunoby";
        PF.textContent = "J Hart";
        C.textContent = "KA Towns";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "26.0 PPG";
        SG3.textContent = "17.6 PPG";
        SF3.textContent = "18.0 PPG";
        PF3.textContent = "13.6 PPG";
        C3.textContent = "24.4 PPG";

        sidepic.src = "/NBA/basket_img/logos/new york.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46%";
        SF.style.left = "52.5%";
    }

    if (selectedYear === "60") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 21-25"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "Aa Wiggins";
        SF.textContent = "J Williams";
        PF.textContent = "C Holmgren";
        C.textContent = "I Hartenstein";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "32.7 PPG";
        SG3.textContent = "12.0 PPG";
        SF3.textContent = "21.6 PPG";
        PF3.textContent = "15.0 PPG";
        C3.textContent = "11.2 PPG";

        sidepic.src = "/NBA/basket_img/logos/oklahoma city.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "44.5%";
        SF.style.left = "56.5%";
        C.style.fontSize = "27px";
    }

    if (selectedYear === "61") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 21-25"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "A Black";
        SG.textContent = "J Suggs";
        SF.textContent = "F Wagner";
        PF.textContent = "P Banchero";
        C.textContent = "M Wagner";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "9.4 PPG";
        SG3.textContent = "16.2 PPG";
        SF3.textContent = "24.2 PPG";
        PF3.textContent = "25.9 PPG";
        C3.textContent = "12.9 PPG";

        sidepic.src = "/NBA/basket_img/logos/orlando.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "45.5%";
        SF.style.left = "56%";
    }

    if (selectedYear === "62") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 21-25"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "T Maxey";
        SG.textContent = "Q Grimes";
        SF.textContent = "P George";
        PF.textContent = "G Yabusele";
        C.textContent = "A Drummond";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "26.3 PPG";
        SG3.textContent = "21.9 PPG";
        SF3.textContent = "16.2 PPG";
        PF3.textContent = "11.0 PPG";
        C3.textContent = "7.3 PPG";

        sidepic.src = "/NBA/basket_img/logos/philadelphia.gif";
        sidepic.style.border = "3px solid black";
        SF.style.left = "56%"
        C.style.left = "44.25%";
        C.style.fontSize = "27px"
    }

    if (selectedYear === "63") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 21-25"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "D Booker";
        SG.textContent = "B Beal";
        SF.textContent = "G Allen";
        PF.textContent = "K Durant";
        C.textContent = "N Richards";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "25.6 PPG";
        SG3.textContent = "17.0 PPG";
        SF3.textContent = "10.6 PPG";
        PF3.textContent = "26.6 PPG";
        C3.textContent = "9.5 PPG";

        sidepic.src = "/NBA/basket_img/logos/phoenix.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "45.5%";
        SF.style.left = "56.5%";
    }

    if (selectedYear === "64") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 21-25"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "A Simons";
        SG.textContent = "S Sharpe";
        SF.textContent = "D Avdija";
        PF.textContent = "J Grant";
        C.textContent = "D Ayton";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "19.3 PPG";
        SG3.textContent = "18.5 PPG";
        SF3.textContent = "16.9 PPG";
        PF3.textContent = "14.4 PPG";
        C3.textContent = "14.4 PPG";

        sidepic.src = "/NBA/basket_img/logos/portland.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46.5%";
        SF.style.left = "56.5%";
    }

    if (selectedYear === "65") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 26-30"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "M Monk";
        SG.textContent = "Z LaVine";
        SF.textContent = "D DeRozan";
        PF.textContent = "K Murray";
        C.textContent = "D Sabonis";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "17.2 PPG";
        SG3.textContent = "22.4 PPG";
        SF3.textContent = "22.2 PPG";
        PF3.textContent = "12.4 PPG";
        C3.textContent = "19.1 PPG";

        sidepic.src = "/NBA/basket_img/logos/sacramento.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "45.5%";
        SF.style.left = "54.5%";
    }

    if (selectedYear === "66") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 26-30"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "D Fox";
        SG.textContent = "S Castle";
        SF.textContent = "D Vassell";
        PF.textContent = "K Johnson";
        C.textContent = "V Wemban.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "19.7 PPG";
        SG3.textContent = "14.7 PPG";
        SF3.textContent = "16.3 PPG";
        PF3.textContent = "12.7 PPG";
        C3.textContent = "24.3 PPG";

        sidepic.src = "/NBA/basket_img/logos/san antonio.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "44.5%";
        SF.style.left = "56%";
    }

    if (selectedYear === "67") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 26-30"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "I Quickley";
        SG.textContent = "G Dick";
        SF.textContent = "RJ Barrett";
        PF.textContent = "S Barnes";
        C.textContent = "J Poeltl";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "17.1 PPG";
        SG3.textContent = "14.4 PPG";
        SF3.textContent = "21.1 PPG";
        PF3.textContent = "19.3 PPG";
        C3.textContent = "14.5 PPG";

        sidepic.src = "/NBA/basket_img/logos/toronto.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46.5%";
        SF.style.left = "55.5%";
    }

    if (selectedYear === "68") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 26-30"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "C Sexton";
        SG.textContent = "K George";
        SF.textContent = "L Markkanen";
        PF.textContent = "J Collins";
        C.textContent = "W Kessler";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "18.4 PPG";
        SG3.textContent = "16.8 PPG";
        SF3.textContent = "19.0 PPG";
        PF3.textContent = "19.0 PPG";
        C3.textContent = "11.1 PPG";

        sidepic.src = "/NBA/basket_img/logos/utah.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "45.5%";
        SF.style.left = "52.5%";
    }

    if (selectedYear === "69") {
        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25 TEAM 26-30"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "J Poole";
        SG.textContent = "B Coulibaly";
        SF.textContent = "C Kispert";
        PF.textContent = "K Kuzma";
        C.textContent = "A Sarr";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "20.5 PPG";
        SG3.textContent = "12.3 PPG";
        SF3.textContent = "11.6 PPG";
        PF3.textContent = "15.2 PPG";
        C3.textContent = "13.0 PPG";

        sidepic.src = "/NBA/basket_img/logos/washington.gif";
        sidepic.style.border = "3px solid black";
        C.style.left = "46.5%";
        SF.style.left = "56%";
    }
    if (selectedYear === "70") {

        title.innerHTML = "<br>DREAM TEAM"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "L Doncic";
        SG.textContent = "D Wade";
        SF.textContent = "G Antetoko.";
        PF.textContent = "A Davis";
        C.textContent = "J Embiid";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "46.5%";
        SF.style.left = "53.5%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "71") {

        title.innerHTML = "<br>DREAM TEAM"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "S Curry";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "46.5%";
        SF.style.left = "56.5%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "72") {

        title.innerHTML = "<br>DREAM TEAM"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "S Curry";
        SG.textContent = "A Edwards";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "V Wemban.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "44.5%";
        SF.style.left = "56.5%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "73") {

        title.innerHTML = "<br>DREAM TEAM"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "L Doncic";
        SF.textContent = "J Tatum";
        PF.textContent = "G Antetoko.";
        C.textContent = "N Jokic";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "46.5%";
        SF.style.left = "56.5%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "74") {

        title.innerHTML = "<br>DREAM TEAM"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "J Morant";
        SG.textContent = "A Edwards";
        SF.textContent = "J Tatum";
        PF.textContent = "P Banchero";
        C.textContent = "C Holmgren";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "44.25%";
        SF.style.left = "56.5%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "75") {

        title.innerHTML = "<br>DREAM TEAM"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "L Doncic";
        SF.textContent = "G Antetoko.";
        PF.textContent = "N Jokic";
        C.textContent = "V Wemban.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "44.5%";
        SF.style.left = "53.5%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "76") {

        title.innerHTML = "<br>NBA BEST PLAYERS"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "D Lillard";
        SG.textContent = "J Green";
        SF.textContent = "T Martin";
        PF.textContent = "G Antetoko.";
        C.textContent = "M Williams";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "28 PTS";
        SG3.textContent = "24 PTS";
        SF3.textContent = "23 PTS";
        PF3.textContent = "29 PTS";
        C3.textContent = "24 PTS";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "44.5%";
        SF.style.left = "56.5%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "77") {

        title.innerHTML = "<br>NBA BEST PLAYERS"
        document.querySelector("select").style.fontSize = "32px";

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
        C.style.left = "46%";
        SF.style.left = "56%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "78") {

        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "K George";
        SG.textContent = "C Sexton";
        SF.textContent = "L Markkanen";
        PF.textContent = "J Collins";
        C.textContent = "W Kessler";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/utah.gif";
        C.style.left = "45.75%";
        SF.style.left = "53%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "79") {

        title.innerHTML = "NBA BEST PLAYERS<br>2005 to 2025"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "D Williams";
        SG.textContent = "D Mitchell";
        SF.textContent = "G Hayward";
        PF.textContent = "C Boozer";
        C.textContent = "R Gobert";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/utah.gif";
        C.style.left = "46.5%";
        SF.style.left = "55%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "80") {

        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "M Conley";
        SG.textContent = "A Edwards";
        SF.textContent = "J McDaniels";
        PF.textContent = "J Randle";
        C.textContent = "R Gobert";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/minnesota.gif";
        C.style.left = "46.5%";
        SF.style.left = "54%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "81") {

        title.innerHTML = "NBA BEST PLAYERS<br>2005 to 2025"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "Z LaVine";
        SG.textContent = "A Edwards";
        SF.textContent = "J Butler";
        PF.textContent = "K Garnett";
        C.textContent = "KA Towns";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/minnesota.gif";
        C.style.left = "46%";
        SF.style.left = "56.5%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "82") {

        title.innerHTML = "NBA BEST PLAYERS<BR>U24 YEARS OLD IN 2025"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "S Henderson";
        SG.textContent = "J Green";
        SF.textContent = "S Barnes";
        PF.textContent = "E Mobley";
        C.textContent = "C Holmgren";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "44.5%";
        SF.style.left = "56.5%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "83") {

        title.innerHTML = "NBA BEST PLAYERS<BR>U24 YEARS OLD IN 2025"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "T Maxey";
        SG.textContent = "A Edwards";
        SF.textContent = "F Wagner";
        PF.textContent = "P Banchero";
        C.textContent = "V Wemban.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "44.5%";
        SF.style.left = "56.5%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "84") {

        title.innerHTML = "NBA BEST PLAYERS<BR>OVER 34 IN 2025"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "J Butler";
        PF.textContent = "L James";
        C.textContent = "K Durant";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "46.5%";
        SF.style.left = "56.5%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "85") {

        title.innerHTML = "NBA BEST PLAYERS<BR>OVER 34 IN 2025"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "C Paul";
        SG.textContent = "M Conley";
        SF.textContent = "D DeRozan";
        PF.textContent = "A Horford";
        C.textContent = "B Lopez";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "46.5%";
        SF.style.left = "54.5%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "86") {

        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "Z Risacher";
        SG.textContent = "B Coulibaly";
        SF.textContent = "T Salaun";
        PF.textContent = "V Wemban.";
        C.textContent = "R Gobert";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/france.webp";
        C.style.left = "46.5%";
        SF.style.left = "56.5%"
        sidepic.style.border = "3px solid black"
        sidepic.style.borderRadius = "50%"
    }

    if (selectedYear === "87") {

        title.innerHTML = "NBA BEST PLAYERS<br>SINCE 2005"
        document.querySelector("select").style.fontSize = "32px";

        PG.textContent = "T Parker";
        SG.textContent = "E Fournier";
        SF.textContent = "N Batum";
        PF.textContent = "R Gobert";
        C.textContent = "J Noah";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/france.webp";
        C.style.left = "46.5%";
        SF.style.left = "56.5%"
        sidepic.style.border = "3px solid black"
        sidepic.style.borderRadius = "50%"
    }

    if (selectedYear === "300") {

        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25"
        document.querySelector("select").style.fontSize = "32px";

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
        C.style.left = "46.5%";
        SF.style.left = "56.5%"
        sidepic.style.border = "3px solid black"
    }

    if (selectedYear === "300") {

        title.innerHTML = "NBA BEST PLAYERS<br>IN 2024-25"
        document.querySelector("select").style.fontSize = "32px";

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
        C.style.left = "46.5%";
        SF.style.left = "56.5%"
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

// PG3.textContent = " PTS";
// SG3.textContent = " PTS";
// SF3.textContent = " PTS";
// PF3.textContent = " PTS";
// C3.textContent = " PTS";