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

    PG.style.left = "46%";
    SG.style.left = "36%";
    SF.style.left = "57.5%"
    PF.style.left = "39%";
    C.style.left = "47.5%";

    PG3.style.left = "46.5%";
    SG3.style.left = "36.5%";
    SF3.style.left = "58%";
    PF3.style.left = "40%";
    C3.style.left = "48.5%";

    // Load the saved year from localStorage
    const savedYear = localStorage.getItem("selectedYear");
    if (savedYear) {
        yearSelector.value = savedYear;
        selectedYear = savedYear;  // Update selectedPlayer
        updatePlayerInfo();  // Automatically update the player info based on the saved year     
    }
});

yearSelector.addEventListener("change", () => {

    selectedYear = yearSelector.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", yearSelector.value);

    updatePlayerInfo();
});

function updatePlayerInfo() {

    message.innerHTML = ""

    if (selectedYear === "0") {

        PG.textContent = "L Doncic";
        SG.textContent = "S Gilgeous-A";
        SF.textContent = "K Durant";
        PF.textContent = "G Antetokounmpo";
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
    }

    if (selectedYear === "1") {

        PG.textContent = "D Lillard";
        SG.textContent = "L Doncic";
        SF.textContent = "J Tatum";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "J Embiid";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "32.2 PTS/G";
        SG3.textContent = "32.4 PTS/G";
        SF3.textContent = "30.1 PTS/G";
        PF3.textContent = "31.1 PTS/G";
        C3.textContent = "33.1 PTS/G";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }

    if (selectedYear === "2") {

        PG.textContent = "L Doncic";
        SG.textContent = "L James";
        SF.textContent = "K Durant";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "J Embiid";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "28.4 PTS/G";
        SG3.textContent = "30.3 PTS/G";
        SF3.textContent = "29.9 PTS/G";
        PF3.textContent = "29.9 PTS/G";
        C3.textContent = "30.6 PTS/G";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }

    if (selectedYear === "3") {

        PG.textContent = "S Curry";
        SG.textContent = "B Beal";
        SF.textContent = "Z LaVine";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "J Embiid";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "32.0 PTS/G";
        SG3.textContent = "31.3 PTS/G";
        SF3.textContent = "27.4 PTS/G";
        PF3.textContent = "28.1 PTS/G";
        C3.textContent = "28.5 PTS/G";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }

    if (selectedYear === "4") {

        PG.textContent = "J Harden";
        SG.textContent = "B Beal";
        SF.textContent = "L Doncic";
        PF.textContent = "K Leonard";
        C.textContent = "G Antetoko.";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "34.3 PPG";
        SG3.textContent = "30.5 PPG";
        SF3.textContent = "28.8 PPG";
        PF3.textContent = "26.6 PPG";
        C3.textContent = "29.5 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "920px"
    }
    if (selectedYear === "5") {

        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "P George";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "J Embiid";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "27.3 PPG";
        SG3.textContent = "36.1 PPG";
        SF3.textContent = "28.0 PPG";
        PF3.textContent = "27.7 PPG";
        C3.textContent = "27.5 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }
    if (selectedYear === "6") {

        PG.textContent = "D Lillard";
        SG.textContent = "J Harden";
        SF.textContent = "L James";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "A Davis";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "26.9 PPG";
        SG3.textContent = "30.4 PPG";
        SF3.textContent = "27.5 PPG";
        PF3.textContent = "26.9 PPG";
        C3.textContent = "28.1 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }
    if (selectedYear === "7") {

        PG.textContent = "R Westbrook";
        SG.textContent = "J Harden";
        SF.textContent = "D DeRozan";
        PF.textContent = "A Davis";
        C.textContent = "D Cousins";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "31.6 PPG";
        SG3.textContent = "29.1 PPG";
        SF3.textContent = "27.3 PPG";
        PF3.textContent = "28.0 PPG";
        C3.textContent = "27.0 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        C.style.left = "930px"
    }

    if (selectedYear === "8") {

        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "L James";
        PF.textContent = "K Durant";
        C.textContent = "D Cousins";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "30.1 PPG";
        SG3.textContent = "29.0 PPG";
        SF3.textContent = "25.3 PPG";
        PF3.textContent = "28.2 PPG";
        C3.textContent = "26.9 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }

    if (selectedYear === "9") {

        PG.textContent = "R Westbrook";
        SG.textContent = "J Harden";
        SF.textContent = "L James";
        PF.textContent = "C Anthony";
        C.textContent = "A Davis";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "28.1 PPG";
        SG3.textContent = "27.4 PPG";
        SF3.textContent = "25.3 PPG";
        PF3.textContent = "24.2 PPG";
        C3.textContent = "24.4 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }

    if (selectedYear === "10") {

        PG.textContent = "S Curry";
        SG.textContent = "J Harden";
        SF.textContent = "L James";
        PF.textContent = "C Anthony";
        C.textContent = "K Durant";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "24.0 PPG";
        SG3.textContent = "25.4 PPG";
        SF3.textContent = "27.1 PPG";
        PF3.textContent = "27.4 PPG";
        C3.textContent = "32.0 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }

    if (selectedYear === "11") {

        PG.textContent = "J Harden";
        SG.textContent = "K Bryant";
        SF.textContent = "L James";
        PF.textContent = "C Anthony";
        C.textContent = "K Durant";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        PG3.textContent = "25.9 PPG";
        SG3.textContent = "27.3 PPG";
        SF3.textContent = "26.8 PPG";
        PF3.textContent = "28.7 PPG";
        C3.textContent = "28.1 PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
    }

    if (selectedYear === "300") {

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

        PG3.textContent = " PPG";
        SG3.textContent = " PPG";
        SF3.textContent = " PPG";
        PF3.textContent = " PPG";
        C3.textContent = " PPG";

        sidepic.src = "/NBA/basket_img/logos/nba.gif";
        SF.style.left = "57.5%"
    }

    // if (SF.textContent.length === 6) {
    //     SF.style.left = "1130px"
    // } else if (SF.textContent.length > 6 && SF.textContent.length < 9) {
    //     SF.style.left = "1110px"
    // } else if (SF.textContent.length > 8 && SF.textContent.length < 11) {
    //     SF.style.left = "1070px"
    // } else {
    //     SF.style.left = ""
    // }
}

const container = document.querySelector('.short');
const xPositionDisplay = document.getElementById('x-position');

// Track mouse movement on the entire document
container.addEventListener('mousemove', (event) => {
    const x = event.clientX; // Get the X-coordinate relative to the viewport
    xPositionDisplay.innerHTML = `left: ${x}px`;
});

// Clear the X display when the mouse leaves the window (optional)
container.addEventListener('mouseleave', () => {
    xPositionDisplay.innerHTML = "";
});
