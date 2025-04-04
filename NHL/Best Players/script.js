const playerDropdown = document.querySelector(".yearSelector");
let selectedPlayer = playerDropdown.value;

const FL = document.getElementById("FL");
const FL2 = document.getElementById("FL2");
const FL3 = document.getElementById("FL3");
const FC = document.getElementById("FC");
const FC2 = document.getElementById("FC2");
const FC3 = document.getElementById("FC3");
const FR = document.getElementById("FR");
const FR2 = document.getElementById("FR2");
const FR3 = document.getElementById("FR3");
const DL = document.getElementById("DL");
const DL2 = document.getElementById("DL2");
const DL3 = document.getElementById("DL3");
const DR = document.getElementById("DR");
const DR2 = document.getElementById("DR2");
const DR3 = document.getElementById("DR3");
const G = document.getElementById("G");
const G2 = document.getElementById("G2");
const G3 = document.getElementById("G3");
const sidepic = document.querySelector(".sidepic");
const message = document.querySelector(".message")
const title = document.querySelector(".title")

document.addEventListener("DOMContentLoaded", () => {
    // Load the saved year from localStorage
    const savedYear = localStorage.getItem("selectedYear");
    if (savedYear) {
        playerDropdown.value = savedYear;
        selectedPlayer = savedYear;  // Update selectedPlayer
        updatePlayerInfo();  // Automatically update the player info based on the saved year
    }
});

function updatePlayerInfo() {

    selectedPlayer = playerDropdown.value;

    title.innerHTML = "NHL BEST<br>PLAYERS 2024-25"
    title.style.fontSize = "45px"
    sidepic.style.border = "none"
    sidepic.style.borderRadius = "0"
    sidepic.style.boxShadow = "none"
    sidepic.style.width = "163px"
    sidepic.style.top = "775px"
    sidepic.style.left = "690px"

    FL.style.left = "46%"
    FC.style.left = "61%"
    FR.style.left = "76%"
    DL.style.left = "53.5%"
    DR.style.left = "68.5%"
    G.style.left = "61%"

    FL2.style.border = "1px solid black"
    FC2.style.border = "1px solid black"
    FR2.style.border = "1px solid black"
    DL2.style.border = "1px solid black"
    DR2.style.border = "1px solid black"
    G2.style.border = "1px solid black"

    FL3.textContent = "";
    FC3.textContent = "";
    FR3.textContent = "";
    DL3.textContent = "";
    DR3.textContent = "";
    G3.textContent = "";

    message.innerHTML = ""

    if (selectedPlayer === "0") {

        title.innerHTML = "NHL BEST<br>PLAYERS 2024-25"

        FL.textContent = "Jarvis";
        FC.textContent = "S Aho";
        FR.textContent = "Svechnikov";
        DL.textContent = "Slavin";
        DR.textContent = "Orlov";
        G.textContent = "F Andersen";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/carolina.png";
        sidepic.style.borderRadius = "0"
        sidepic.style.width = "150px"
        sidepic.style.height = "auto"
        sidepic.style.top = "780px"
        sidepic.style.left = "700px"
    }


    if (selectedPlayer === "1") {

        title.innerHTML = "NHL BEST PLAYERS<br>2005 to 2025"


        FL.textContent = "E Staal";
        FC.textContent = "Brind'Amour";
        FR.textContent = "S Aho";
        DL.textContent = "Slavin";
        DR.textContent = "Pesce";
        G.textContent = "C Ward";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/carolina.png";
        sidepic.style.borderRadius = "0"
        sidepic.style.width = "150px"
        sidepic.style.height = "auto"
        sidepic.style.top = "780px"
        sidepic.style.left = "700px"
        FC.style.left = "640px"
    }

    if (selectedPlayer === "2") {

        title.innerHTML = "NHL BEST PLAYERS<br>OF THE WEEK"

        FL.textContent = "Tavares";
        FC.textContent = "Hintz";
        FR.textContent = "Kucherov";
        DL.textContent = "Hutson";
        DR.textContent = "McDonagh";
        G.textContent = "Vasilevskiy";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "8 PTS";
        FC3.textContent = "9 PTS";
        FR3.textContent = "11 PTS";
        DL3.textContent = "6 PTS";
        DR3.textContent = "5 PTS";
        G3.textContent = "SAVES: 97.5%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "3") {

        title.innerHTML = "NHL BEST PLAYERS<br>OF THE WEEK"

        FL.textContent = "R Thomas";
        FC.textContent = "P Suter";
        FR.textContent = "J Quinn";
        DL.textContent = "Hedman";
        DR.textContent = "LaCombe";
        G.textContent = "Oettinger";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "8 PTS";
        FC3.textContent = "8 PTS";
        FR3.textContent = "8 PTS";
        DL3.textContent = "5 PTS";
        DR3.textContent = "5 PTS";
        G3.textContent = "SAVES: 96.4%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        sidepic.style.borderRadius = "20px"
    }

    if (selectedPlayer === "4") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25"

        FL.textContent = "F Forsberg";
        FC.textContent = "Stamkos";
        FR.textContent = "Marches.";
        DL.textContent = "Josi";
        DR.textContent = "Skjei";
        G.textContent = "Saros";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nashville.png";
        sidepic.style.borderRadius = "20px"
        FL.style.left = "500px"
        FR.style.left = "835px"
        sidepic.style.border = "3px solid black"
    }

    if (selectedPlayer === "5") {

        title.innerHTML = "NHL BEST PLAYERS<br>2005 to 2025"

        FL.textContent = "F Forsberg"
        FC.textContent = "Legwand";
        FR.textContent = "Erat";
        DL.textContent = "Weber";
        DR.textContent = "Josi";
        G.textContent = "Rinne";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nashville.png";
        sidepic.style.borderRadius = "20px"
        sidepic.style.border = "3px solid black"
    }

    if (selectedPlayer === "300") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25"

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "300") {

        title.innerHTML = "NHL BEST PLAYERS<br>2005 to 2025"

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    // document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, dodgerblue 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    updatePlayerInfo();
});

const container = document.querySelector('.short');
const xPositionDisplay = document.getElementById('x-position');

// Track mouse movement on the entire document
container.addEventListener('mousemove', (event) => {
    const x = event.clientX; // Get the X-coordinate relative to the viewport
    xPositionDisplay.innerHTML = `left: ${x - 175}px`;
});

// Clear the X display when the mouse leaves the window (optional)
container.addEventListener('mouseleave', () => {
    xPositionDisplay.innerHTML = "";
});

// ---------- STATS -----------------

// FL3.textContent = " PTS";
// FC3.textContent = " PTS";
// FR3.textContent = " PTS";
// DL3.textContent = " PTS";
// DR3.textContent = " PTS";
// G3.textContent = "SAVES: 100%";
