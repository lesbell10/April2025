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
    sidepic.style.top = "750px"
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

    if (selectedPlayer === "6") {

        title.innerHTML = "NHL BEST POINTERS<BR>EVERY YEAR"


        FL.textContent = "Kovalchuk";
        FC.textContent = "Sakic";
        FR.textContent = "St Louis";
        DL.textContent = "Gonchar";
        DR.textContent = "S Niedermayer";
        G.textContent = "Luongo";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "87 PTS";
        FC3.textContent = "87 PTS";
        FR3.textContent = "94 PTS";
        DL3.textContent = "58 PTS";
        DR3.textContent = "54 PTS";
        G3.textContent = "SAVES: 93.1%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FC.style.left = "700px"
        DR.style.left = "735px"
    }

    if (selectedPlayer === "7") {

        title.innerHTML = "NHL BEST POINTERS<BR>EVERY YEAR"


        FL.textContent = "M Naslund";
        FC.textContent = "Forsberg";
        FR.textContent = "Thornton";
        DL.textContent = "MacInnis";
        DR.textContent = "Gonchar";
        G.textContent = "Turco";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "104 PTS";
        FC3.textContent = "106 PTS";
        FR3.textContent = "101 PTS";
        DL3.textContent = "68 PTS";
        DR3.textContent = "67 PTS";
        G3.textContent = "SAVES: 93.2%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "830px"
    }

    if (selectedPlayer === "8") {

        title.innerHTML = "NHL BEST POINTERS<BR>EVERY YEAR"


        FL.textContent = "Bertuzzi";
        FC.textContent = "M Naslund";
        FR.textContent = "Iginla";
        DL.textContent = "Gonchar";
        DR.textContent = "Lidstrom";
        G.textContent = "J Theodore";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "85 PTS";
        FC3.textContent = "90 PTS";
        FR3.textContent = "96 PTS";
        DL3.textContent = "59 PTS";
        DR3.textContent = "59 PTS";
        G3.textContent = "SAVES: 93.1%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "9") {

        title.innerHTML = "NHL BEST POINTERS<BR>EVERY YEAR"


        FL.textContent = "Elias";
        FC.textContent = "Sakic";
        FR.textContent = "Jagr";
        DL.textContent = "Leetch";
        DR.textContent = "Lidstrom";
        G.textContent = "Hasek";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "96 PTS";
        FC3.textContent = "118 PTS";
        FR3.textContent = "121 PTS";
        DL3.textContent = "79 PTS";
        DR3.textContent = "71 PTS";
        G3.textContent = "SAVES: 92.1%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "10") {

        title.innerHTML = "NHL BEST PLAYERS<br>OF THE WEEK"

        FL.textContent = "Suzuki";
        FC.textContent = "Geekie";
        FR.textContent = "Pastrnak";
        DL.textContent = "Makar";
        DR.textContent = "Fowler";
        G.textContent = "A Forsberg";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "7 PTS";
        FC3.textContent = "9 PTS";
        FR3.textContent = "11 PTS";
        DL3.textContent = "7 PTS";
        DR3.textContent = "6 PTS";
        G3.textContent = "SAVES: 100%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "840px"
    }

    if (selectedPlayer === "11") {

        title.innerHTML = "NHL BEST PLAYERS<br>OF THE WEEK"

        FL.textContent = "Ovechkin";
        FC.textContent = "R Thomas";
        FR.textContent = "MacKinnon";
        DL.textContent = "Sanderson";
        DR.textContent = "Hutson";
        G.textContent = "Comrie";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "6 PTS";
        FC3.textContent = "7 PTS";
        FR3.textContent = "6 PTS";
        DL3.textContent = "5 PTS";
        DR3.textContent = "5 PTS";
        G3.textContent = "SAVES: 100%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FL.style.left = "500px"
        FC.style.left = "655px"
        FR.style.left = "805px"
    }

    if (selectedPlayer === "12") {

        title.innerHTML = "<br>NHL BEST POINTERS #2"

        FL.textContent = "Kaprizov";
        FC.textContent = "Reinhart";
        FR.textContent = "Nylander";
        DL.textContent = "Dobson";
        DR.textContent = "Morrissey";
        G.textContent = "Daccord";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";
        
        FL3.textContent = "96 PTS";
        FC3.textContent = "94 PTS";
        FR3.textContent = "98 PTS";
        DL3.textContent = "70 PTS";
        DR3.textContent = "69 PTS";
        G3.textContent = "SAVES: 91.6%"

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left ="830px"
    }

    if (selectedPlayer === "13") {

        title.innerHTML = "<br>NHL BEST POINTERS #2"

        FL.textContent = "JT Miller";
        FC.textContent = "Draisaitl";
        FR.textContent = "Rantanen";
        DL.textContent = "Hedman";
        DR.textContent = "A Fox";
        G.textContent = "Swayman";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "103 PTS";
        FC3.textContent = "106 PTS";
        FR3.textContent = "104 PTS";
        DL3.textContent = "76 PTS";
        DR3.textContent = "73 PTS";
        G3.textContent = "SAVES: 91.6%"

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "825px"
    }

    if (selectedPlayer === "14") {

        title.innerHTML = "<br>NHL BEST POINTERS #1"

        FL.textContent = "Panarin";
        FC.textContent = "Matthews";
        FR.textContent = "Pastrnak";
        DL.textContent = "Josi";
        DR.textContent = "Bouchard";
        G.textContent = "Demko";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "120 PTS";
        FC3.textContent = "107 PTS";
        FR3.textContent = "110 PTS";
        DL3.textContent = "85 PTS";
        DR3.textContent = "82 PTS";
        G3.textContent = "SAVES: 92.8%"

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "840px"
    }

    if (selectedPlayer === "15") {

        title.innerHTML = "<br>NHL BEST POINTERS #1"

        FL.textContent = "MacKinnon";
        FC.textContent = "McDavid";
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

        FL3.textContent = "140 PTS";
        FC3.textContent = "132 PTS";
        FR3.textContent = "144 PTS";
        DL3.textContent = "92 PTS";
        DR3.textContent = "90 PTS";
        G3.textContent = "SAVES: 92.1%"

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "830px"
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
        FR.style.left = "850px"
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
        FR.style.left = "850px"
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
    xPositionDisplay.innerHTML = `left: ${x - 200}px`;
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
