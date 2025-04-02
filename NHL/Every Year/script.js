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

    FL.style.left = "46%"
    FC.style.left = "61%"
    FR.style.left = "76%"
    DL.style.left = "53.5%"
    DR.style.left = "68.5%"
    G.style.left = "61%"

    FL2.style.border = "2px solid"
    FC2.style.border = "2px solid"
    FR2.style.border = "2px solid"
    DL2.style.border = "2px solid"
    DR2.style.border = "2px solid"
    G2.style.border = "2px solid"

    message.innerHTML = ""
    sidepic.style.border = "none"

    if (selectedPlayer === "0") {

        FL.textContent = "McDavid";
        FC.textContent = "MacKinnon";
        FR.textContent = "Kucherov";
        DL.textContent = "Q Hughes";
        DR.textContent = "Makar";
        G.textContent = "Hellebuyck";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "132 PTS";
        FC3.textContent = "140 PTS";
        FR3.textContent = "144 PTS";
        DL3.textContent = "92 PTS";
        DR3.textContent = "90 PTS";
        G3.textContent = "SAVES: 92.1%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }
    
    if (selectedPlayer === "1") {

        FL.textContent = "Draisaitl";
        FC.textContent = "McDavid";
        FR.textContent = "Pastrnak";
        DL.textContent = "E Karlsson";
        DR.textContent = "Morrissey";
        G.textContent = "Ullmark";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "128 PTS";
        FC3.textContent = "153 PTS";
        FR3.textContent = "113 PTS";
        DL3.textContent = "101 PTS";
        DR3.textContent = "76 PTS";
        G3.textContent = "SAVES: 93.8%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }
    
    if (selectedPlayer === "2") {

        FL.textContent = "J Gaudreau";
        FC.textContent = "McDavid";
        FR.textContent = "Huberdeau";
        DL.textContent = "Josi";
        DR.textContent = "Makar";
        G.textContent = "Shesterkin";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "115 PTS";
        FC3.textContent = "123 PTS";
        FR3.textContent = "115 PTS";
        DL3.textContent = "96 PTS";
        DR3.textContent = "86 PTS";
        G3.textContent = "SAVES: 93.5%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FL.style.left = "530px"
        FR.style.left = "890px"
    }
    
    if (selectedPlayer === "3") {

        FL.textContent = "Marchand";
        FC.textContent = "McDavid";
        FR.textContent = "Draisaitl";
        DL.textContent = "Barrie";
        DR.textContent = "A Fox";
        G.textContent = "Fleury";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "69 PTS";
        FC3.textContent = "105 PTS";
        FR3.textContent = "84 PTS";
        DL3.textContent = "48 PTS";
        DR3.textContent = "47 PTS";
        G3.textContent = "SAVES: 92.8%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }
    
    if (selectedPlayer === "4") {

        FL.textContent = "Draisaitl";
        FC.textContent = "McDavid";
        FR.textContent = "Pastrnak";
        DL.textContent = "Carlson";
        DR.textContent = "Josi";
        G.textContent = "Rask";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "110 PTS";
        FC3.textContent = "97 PTS";
        FR3.textContent = "95 PTS";
        DL3.textContent = "75 PTS";
        DR3.textContent = "65 PTS";
        G3.textContent = "SAVES: 92.9%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "5") {

        FL.textContent = "P Kane";
        FC.textContent = "McDavid";
        FR.textContent = "Kucherov";
        DL.textContent = "Burns";
        DR.textContent = "Giordano";
        G.textContent = "Bishop";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "110 PTS";
        FC3.textContent = "116 PTS";
        FR3.textContent = "128 PTS";
        DL3.textContent = "83 PTS";
        DR3.textContent = "74 PTS";
        G3.textContent = "SAVES: 93.4%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "6") {

        FL.textContent = "Kucherov";
        FC.textContent = "McDavid";
        FR.textContent = "Giroux";
        DL.textContent = "Carlson";
        DR.textContent = "Klingberg";
        G.textContent = "Luongo";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "100 PTS";
        FC3.textContent = "108 PTS";
        FR3.textContent = "102 PTS";
        DL3.textContent = "68 PTS";
        DR3.textContent = "67 PTS";
        G3.textContent = "SAVES: 92.9%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "7") {

        FL.textContent = "McDavid";
        FC.textContent = "Crosby";
        FR.textContent = "P Kane";
        DL.textContent = "Burns";
        DR.textContent = "Hedman";
        G.textContent = "Bobrovsky";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "100 PTS";
        FC3.textContent = "89 PTS";
        FR3.textContent = "89 PTS";
        DL3.textContent = "76 PTS";
        DR3.textContent = "72 PTS";
        G3.textContent = "SAVES: 93.1%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "8") {

        FL.textContent = "Benn";
        FC.textContent = "Crosby";
        FR.textContent = "P Kane";
        DL.textContent = "E Karlsson";
        DR.textContent = "Burns";
        G.textContent = "Holtby";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "89 PTS";
        FC3.textContent = "85 PTS";
        FR3.textContent = "106 PTS";
        DL3.textContent = "82 PTS";
        DR3.textContent = "75 PTS";
        G3.textContent = "SAVES: 92.2%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "9") {

        FL.textContent = "Benn";
        FC.textContent = "Crosby";
        FR.textContent = "Tavares";
        DL.textContent = "E Karlsson";
        DR.textContent = "PK Subban";
        G.textContent = "Price";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "87 PTS";
        FC3.textContent = "84 PTS";
        FR3.textContent = "86 PTS";
        DL3.textContent = "66 PTS";
        DR3.textContent = "60 PTS";
        G3.textContent = "SAVES: 93.3%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "10") {

        FL.textContent = "Getzlaf";
        FC.textContent = "Crosby";
        FR.textContent = "Giroux";
        DL.textContent = "E Karlsson";
        DR.textContent = "Keith";
        G.textContent = "Varlamov";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "87 PTS";
        FC3.textContent = "104 PTS";
        FR3.textContent = "86 PTS";
        DL3.textContent = "74 PTS";
        DR3.textContent = "61 PTS";
        G3.textContent = "SAVES: 92.7%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "11") {

        FL.textContent = "Ovechkin";
        FC.textContent = "Stamkos";
        FR.textContent = "St Louis";
        DL.textContent = "Letang";
        DR.textContent = "PK Subban";
        G.textContent = "Lundqvist";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "56 PTS";
        FC3.textContent = "57 PTS";
        FR3.textContent = "60 PTS";
        DL3.textContent = "38 PTS";
        DR3.textContent = "38 PTS";
        G3.textContent = "SAVES: 92.6%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "300") {

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

        FL3.textContent = " PTS";
        FC3.textContent = " PTS";
        FR3.textContent = " PTS";
        DL3.textContent = " PTS";
        DR3.textContent = " PTS";
        G3.textContent = "SAVES: 100%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, dodgerblue 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    updatePlayerInfo();
});

const xPositionDisplay = document.getElementById('x-position');
const carousel = document.querySelector('.carousel');
const scaleFactor = 0.6;

document.addEventListener('mousemove', (event) => {
    const rect = carousel.getBoundingClientRect();

    // Get mouse X relative to carousel's left edge
    const relativeX = event.clientX - rect.left;

    // Remove the scale effect to get actual unscaled position
    const trueX = Math.round(relativeX / scaleFactor);

    xPositionDisplay.innerHTML = `left: ${trueX + 240}px`;
});

document.addEventListener('mouseleave', () => {
    xPositionDisplay.innerHTML = "";
});