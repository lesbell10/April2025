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
    title.style.fontSize = "41px"
    document.querySelector("select").style.fontSize = "32px";
    sidepic.style.border = "none"
    sidepic.style.borderRadius = "15px"
    sidepic.style.boxShadow = "none"
    sidepic.style.width = "130px"
    sidepic.style.top = "730px"
    sidepic.style.left = "695px"

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
        FR.style.left = "830px"
    }

    if (selectedPlayer === "13") {

        title.innerHTML = "<br>NHL BEST POINTERS #2"

        FL.textContent = "JTMiller";
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

    if (selectedPlayer === "16") {

        title.innerHTML = "DREAM TEAM"

        FL.textContent = "MacKinnon";
        FC.textContent = "Draisaitl";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "E Karlsson";
        G.textContent = "Lundqvist";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "850px"
        FL.style.left = "490px"
    }

    if (selectedPlayer === "17") {

        title.innerHTML = "DREAM TEAM"

        FL.textContent = "Ovechkin";
        FC.textContent = "McDavid";
        FR.textContent = "Crosby";
        DL.textContent = "Chara";
        DR.textContent = "Makar";
        G.textContent = "Price";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "18") {

        title.innerHTML = "DREAM TEAM"

        FL.textContent = "Matthews";
        FC.textContent = "Draisaitl";
        FR.textContent = "Pastrnak";
        DL.textContent = "Josi";
        DR.textContent = "A Fox";
        G.textContent = "Shesterkin";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "19") {

        title.innerHTML = "DREAM TEAM"

        FL.textContent = "MacKinnon";
        FC.textContent = "McDavid";
        FR.textContent = "Kucherov";
        DL.textContent = "Makar";
        DR.textContent = "Q Hughes";
        G.textContent = "Hellebuyck";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "850px"
        FL.style.left = "490px"
    }

    if (selectedPlayer === "20") {

        title.innerHTML = "DREAM TEAM"

        FL.textContent = "Kaprizov";
        FC.textContent = "Draisaitl";
        FR.textContent = "J Hughes";
        DL.textContent = "Hutson";
        DR.textContent = "Seider";
        G.textContent = "Oettinger";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "21") {

        title.innerHTML = "DREAM TEAM"

        FL.textContent = "MacKinnon";
        FC.textContent = "McDavid";
        FR.textContent = "Bedard";
        DL.textContent = "Makar";
        DR.textContent = "Q Hughes";
        G.textContent = "Shesterkin";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "850px"
        FL.style.left = "490px"
    }

    if (selectedPlayer === "22") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25"

        FL.textContent = "K Connor";
        FC.textContent = "Scheifele";
        FR.textContent = "Ehlers";
        DL.textContent = "Morrissey";
        DR.textContent = "Pionk";
        G.textContent = "Hellebuyck";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/winnipeg.gif";
        FR.style.left = "850px"
        sidepic.style.borderRadius = "20px"
        sidepic.style.border = "3px solid black"
    }

    if (selectedPlayer === "23") {

        title.innerHTML = "NHL BEST PLAYERS<br>2005 to 2025"

        FL.textContent = "Kovalchuk";
        FC.textContent = "Scheifele";
        FR.textContent = "Wheeler";
        DL.textContent = "Byfuglien";
        DR.textContent = "Morrissey";
        G.textContent = "Hellebuyck";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/winnipeg.gif";
        sidepic.style.borderRadius = "20px"
        sidepic.style.border = "3px solid black"
        FR.style.left = "850px"
    }

    if (selectedPlayer === "24") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25"

        FL.textContent = "B Tkachuk";
        FC.textContent = "Stutzle";
        FR.textContent = "Batherson";
        DL.textContent = "Sanderson";
        DR.textContent = "Chabot";
        G.textContent = "Ullmark";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/ottawa.gif";
        sidepic.style.borderRadius = "20px"
        sidepic.style.border = "3px solid black"
        FR.style.left = "825px"
    }

    if (selectedPlayer === "25") {

        title.innerHTML = "NHL BEST PLAYERS<br>2005 to 2025"

        FL.textContent = "Heatley";
        FC.textContent = "Spezza";
        FR.textContent = "Alfredsson";
        DL.textContent = "E Karlsson";
        DR.textContent = "Redden";
        G.textContent = "C Anderson";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/ottawa.gif";
        sidepic.style.borderRadius = "20px"
        sidepic.style.border = "3px solid black"
        FR.style.left = "820px"
    }

    if (selectedPlayer === "26") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25"

        FL.textContent = "Peterka";
        FC.textContent = "T Thompson";
        FR.textContent = "Tuch";
        DL.textContent = "Dahlin";
        DR.textContent = "Byram";
        G.textContent = "Luukkonen";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/buffalo.gif";
        sidepic.style.borderRadius = "20px"
        sidepic.style.border = "3px solid black"
        FR.style.left = "850px";
        FC.style.left = "650px";
    }

    if (selectedPlayer === "27") {

        title.innerHTML = "NHL BEST PLAYERS<br>2005 to 2025"

        FL.textContent = "Vanek";
        FC.textContent = "Eichel";
        FR.textContent = "Pominville";
        DL.textContent = "Dahlin";
        DR.textContent = "B Campbell";
        G.textContent = "R Miller";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/buffalo.gif";
        sidepic.style.borderRadius = "20px"
        sidepic.style.border = "3px solid black"
        FR.style.left = "820px"
    }

    if (selectedPlayer === "28") {

        title.innerHTML = "NHL PLAYERS<br>OF THE WEEK"

        FL.textContent = "Panarin";
        FC.textContent = "Celebrini";
        FR.textContent = "W Smith";
        DL.textContent = "Morrissey";
        DR.textContent = "A Fox";
        G.textContent = "Hellebuyck";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "7 PTS";
        FC3.textContent = "7 PTS";
        FR3.textContent = "7 PTS";
        DL3.textContent = "5 PTS";
        DR3.textContent = "5 PTS";
        G3.textContent = "SAVES: 93.1%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "29") {

        title.innerHTML = "NHL PLAYERS<br>OF THE WEEK"

        FL.textContent = "Hagel";
        FC.textContent = "McDavid";
        FR.textContent = "Kucherov";
        DL.textContent = "Chabot";
        DR.textContent = "Dahlin";
        G.textContent = "Greaves";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "8 PTS";
        FC3.textContent = "9 PTS";
        FR3.textContent = "7 PTS";
        DL3.textContent = "6 PTS";
        DR3.textContent = "6 PTS";
        G3.textContent = "SAVES: 96.8%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "830px"
    }

    if (selectedPlayer === "30") {

        title.innerHTML = "NHL BEST PLAYERS<BR>U24  YEARS OLD IN 2025"

        FL.textContent = "Guenther";
        FC.textContent = "Stutzle";
        FR.textContent = "Michkov";
        DL.textContent = "Sanderson";
        DR.textContent = "L Hughes";
        G.textContent = "Levi";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "31") {

        title.innerHTML = "NHL BEST PLAYERS<BR>U24  YEARS OLD IN 2025"

        FL.textContent = "Caufield";
        FC.textContent = "Bedard";
        FR.textContent = "J Hughes";
        DL.textContent = "Dahlin";
        DR.textContent = "Seider";
        G.textContent = "Wallstedt";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "830px"
    }

    if (selectedPlayer === "32") {

        title.innerHTML = "NHL BEST PLAYERS<BR>OVER 34 IN 2025"


        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Malkin";
        DL.textContent = "Burns";
        DR.textContent = "Letang";
        G.textContent = "Fleury";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "33") {

        title.innerHTML = "NHL BEST PLAYERS<BR>OVER 34 IN 2025"

        FL.textContent = "Perron";
        FC.textContent = "J Staal";
        FR.textContent = "Perry";
        DL.textContent = "R Suter";
        DR.textContent = "Vlasic";
        G.textContent = "Quick";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "34") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25"

        FL.textContent = "McTavish";
        FC.textContent = "R Strome";
        FR.textContent = "Terry";
        DL.textContent = "Trouba";
        DR.textContent = "Gudas";
        G.textContent = "Gibson";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/anaheim.gif";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "35") {

        title.innerHTML = "NHL BEST PLAYERS<br>2005 to 2025"

        FL.textContent = "Perry";
        FC.textContent = "Getzlaf";
        FR.textContent = "Selanne";
        DL.textContent = "Fowler";
        DR.textContent = "S Niedermayer";
        G.textContent = "Giguere";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/anaheim.gif";
        FR.style.left = "850px"
        DR.style.left = "745px"
    }


    if (selectedPlayer === "36") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 1-4";

        FL.textContent = "Vatrano";
        FC.textContent = "R Strome";
        FR.textContent = "Terry";
        DL.textContent = "LaCombe";
        DR.textContent = "Zellweger";
        G.textContent = "Dostal";

        FL3.textContent = "45 PTS";
        FC3.textContent = "52 PTS";
        FR3.textContent = "55 PTS";
        DL3.textContent = "43 PTS";
        DR3.textContent = "20 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/anaheim.gif";
        FR.style.left = "850px"
    }


    if (selectedPlayer === "37") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 1-4";

        FL.textContent = "E Lindholm";
        FC.textContent = "M Geekie";
        FR.textContent = "Pastrnak";
        DL.textContent = "Lohrei";
        DR.textContent = "McAvoy";
        G.textContent = "Swayman";

        FL3.textContent = "47 PTS";
        FC3.textContent = "57 PTS";
        FR3.textContent = "106 PTS";
        DL3.textContent = "33 PTS";
        DR3.textContent = "23 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/boston.gif";
        FR.style.left = "850px"
    }


    if (selectedPlayer === "38") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 1-4";

        FL.textContent = "Tuch";
        FC.textContent = "T Thompson";
        FR.textContent = "Peterka";
        DL.textContent = "Dahlin";
        DR.textContent = "O Power";
        G.textContent = "Luukkonen";

        FL3.textContent = "67 PTS";
        FC3.textContent = "72 PTS";
        FR3.textContent = "68 PTS";
        DL3.textContent = "68 PTS";
        DR3.textContent = "40 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/buffalo.gif";
        FR.style.left = "850px"
        FC.style.left = "650px"
    }


    if (selectedPlayer === "39") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 1-4";

        FL.textContent = "Huberdeau";
        FC.textContent = "Kadri";
        FR.textContent = "Coronato";
        DL.textContent = "Weegar";
        DR.textContent = "R Andersson";
        G.textContent = "Wolf";

        FL3.textContent = "62 PTS";
        FC3.textContent = "67 PTS";
        FR3.textContent = "47 PTS";
        DL3.textContent = "47 PTS";
        DR3.textContent = "31 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/calgary.gif";
        FR.style.left = "850px"
    }


    if (selectedPlayer === "40") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 5-8";

        FL.textContent = "S Aho";
        FC.textContent = "Necas";
        FR.textContent = "Svechnikov";
        DL.textContent = "Gostisbehere";
        DR.textContent = "Orlov";
        G.textContent = "Kochetkov";

        FL3.textContent = "74 PTS";
        FC3.textContent = "55 PTS";
        FR3.textContent = "48 PTS";
        DL3.textContent = "45 PTS";
        DR3.textContent = "28 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/carolina.gif";
        FR.style.left = "825px"
        DL.style.left = "570px"
    }


    if (selectedPlayer === "41") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 5-8";

        FL.textContent = "Donato";
        FC.textContent = "Bedard";
        FR.textContent = "Teravainen";
        DL.textContent = "A Vlasic";
        DR.textContent = "S Jones";
        G.textContent = "Soderblom";

        FL3.textContent = "62 PTS";
        FC3.textContent = "67 PTS";
        FR3.textContent = "58 PTS";
        DL3.textContent = "30 PTS";
        DR3.textContent = "27 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/chicago.gif";
        FR.style.left = "830px"
    }


    if (selectedPlayer === "42") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 5-8";

        FL.textContent = "Lehkonen";
        FC.textContent = "MacKinnon";
        FR.textContent = "Drouin";
        DL.textContent = "Makar";
        DR.textContent = "D Toews";
        G.textContent = "Blackwood";

        FL3.textContent = "45 PTS";
        FC3.textContent = "116 PTS";
        FR3.textContent = "37 PTS";
        DL3.textContent = "92 PTS";
        DR3.textContent = "44 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/colorado.gif";
        FR.style.left = "850px"
    }


    if (selectedPlayer === "43") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 5-8";

        FL.textContent = "K Johnson";
        FC.textContent = "Monahan";
        FR.textContent = "Marchenko";
        DL.textContent = "Werenski";
        DR.textContent = "Provorov";
        G.textContent = "Merzlikins";

        FL3.textContent = "57 PTS";
        FC3.textContent = "57 PTS";
        FR3.textContent = "74 PTS";
        DL3.textContent = "82 PTS";
        DR3.textContent = "33 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/columbus.gif";
        FR.style.left = "825px"
        FC.style.left = "675px"
    }


    if (selectedPlayer === "44") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 9-12";

        FL.textContent = "J Robertson";
        FC.textContent = "Duchene";
        FR.textContent = "Johnston";
        DL.textContent = "Harley";
        DR.textContent = "Lindell";
        G.textContent = "Oettinger";

        FL3.textContent = "80 PTS";
        FC3.textContent = "82 PTS";
        FR3.textContent = "71 PTS";
        DL3.textContent = "50 PTS";
        DR3.textContent = "26 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/dallas.gif";
        FR.style.left = "850px"
        FL.style.left = "490px"
    }


    if (selectedPlayer === "45") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 9-12";

        FL.textContent = "L Raymond";
        FC.textContent = "Larkin";
        FR.textContent = "DeBrincat";
        DL.textContent = "Seider";
        DR.textContent = "Edvinsson";
        G.textContent = "C Talbot";

        FL3.textContent = "80 PTS";
        FC3.textContent = "70 PTS";
        FR3.textContent = "70 PTS";
        DL3.textContent = "46 PTS";
        DR3.textContent = "31 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/detroit.gif";
        FR.style.left = "850px"
    }


    if (selectedPlayer === "46") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 9-12";

        FL.textContent = "Draisaitl";
        FC.textContent = "McDavid";
        FR.textContent = "Nugent-H";
        DL.textContent = "Bouchard";
        DR.textContent = "Ekholm";
        G.textContent = "S Skinner";

        FL3.textContent = "106 PTS";
        FC3.textContent = "100 PTS";
        FR3.textContent = "49 PTS";
        DL3.textContent = "67 PTS";
        DR3.textContent = "33 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/edmonton.gif";
        FR.style.left = "850px"
    }


    if (selectedPlayer === "47") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 9-12";

        FL.textContent = "M Tkachuk";
        FC.textContent = "Barkov";
        FR.textContent = "Reinhart";
        DL.textContent = "Ekblad";
        DR.textContent = "Forsling";
        G.textContent = "Bobrovsky";

        FL3.textContent = "57 PTS";
        FC3.textContent = "71 PTS";
        FR3.textContent = "81 PTS";
        DL3.textContent = "33 PTS";
        DR3.textContent = "31 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/florida.gif";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "48") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 13-16";

        FL.textContent = "Fiala";
        FC.textContent = "Kopitar";
        FR.textContent = "Kempe";
        DL.textContent = "B Clarke";
        DR.textContent = "Gavrikov";
        G.textContent = "Kuemper";

        FL3.textContent = "60 PTS";
        FC3.textContent = "67 PTS";
        FR3.textContent = "73 PTS";
        DL3.textContent = "33 PTS";
        DR3.textContent = "30 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/los angeles.gif";
        FR.style.left = "850px"
    }


    if (selectedPlayer === "49") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 13-16";

        FL.textContent = "Kaprizov";
        FC.textContent = "Rossi";
        FR.textContent = "Boldy";
        DL.textContent = "Spurgeon";
        DR.textContent = "Faber";
        G.textContent = "Gustavsson";

        FL3.textContent = "56 PTS";
        FC3.textContent = "60 PTS";
        FR3.textContent = "73 PTS";
        DL3.textContent = "32 PTS";
        DR3.textContent = "29 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/minnesota.gif";
        FR.style.left = "850px"
    }


    if (selectedPlayer === "50") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 13-16";

        FL.textContent = "Slafkovsky";
        FC.textContent = "Suzuki";
        FR.textContent = "Caufield";
        DL.textContent = "Hutson";
        DR.textContent = "Matheson";
        G.textContent = "Montembeault";

        FL3.textContent = "51 PTS";
        FC3.textContent = "89 PTS";
        FR3.textContent = "70 PTS";
        DL3.textContent = "66 PTS";
        DR3.textContent = "31 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/montreal.gif";
        FR.style.left = "850px"
    }


    if (selectedPlayer === "51") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 13-16";

        FL.textContent = "F Forsberg";
        FC.textContent = "Stamkos";
        FR.textContent = "Marchessault";
        DL.textContent = "Josi";
        DR.textContent = "Skjei";
        G.textContent = "Saros";

        FL3.textContent = "76 PTS";
        FC3.textContent = "53 PTS";
        FR3.textContent = "56 PTS";
        DL3.textContent = "38 PTS";
        DR3.textContent = "33 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nashville.gif";
        FR.style.left = "795px"
        FC.style.left = "670px"
        FL.style.left = "510px"
    }


    if (selectedPlayer === "52") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 17-20";

        FL.textContent = "Bratt";
        FC.textContent = "J Hughes";
        FR.textContent = "Hischier";
        DL.textContent = "L Hughes";
        DR.textContent = "Hamilton";
        G.textContent = "Markstrom";

        FL3.textContent = "88 PTS";
        FC3.textContent = "70 PTS";
        FR3.textContent = "69 PTS";
        DL3.textContent = "44 PTS";
        DR3.textContent = "40 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/new jersey.gif";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "53") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 17-20";

        FL.textContent = "A Lee";
        FC.textContent = "Horvat";
        FR.textContent = "Palmieri";
        DL.textContent = "Dobson";
        DR.textContent = "Pulock";
        G.textContent = "Sorokin";

        FL3.textContent = "54 PTS";
        FC3.textContent = "57 PTS";
        FR3.textContent = "48 PTS";
        DL3.textContent = "39 PTS";
        DR3.textContent = "23 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/ny islanders.gif";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "54") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 17-20";

        FL.textContent = "Panarin";
        FC.textContent = "Zibanejad";
        FR.textContent = "Trocheck";
        DL.textContent = "A Fox";
        DR.textContent = "K Miller";
        G.textContent = "Shesterkin";

        FL3.textContent = "89 PTS";
        FC3.textContent = "62 PTS";
        FR3.textContent = "59 PTS";
        DL3.textContent = "61 PTS";
        DR3.textContent = "27 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/ny rangers.gif";
        FR.style.left = "850px"
    }


    if (selectedPlayer === "55") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 17-20";

        FL.textContent = "B Tkachuk";
        FC.textContent = "Stutzle";
        FR.textContent = "Batherson";
        DL.textContent = "J Sanderson";
        DR.textContent = "Chabot";
        G.textContent = "Ullmark";

        FL3.textContent = "55 PTS";
        FC3.textContent = "79 PTS";
        FR3.textContent = "68 PTS";
        DL3.textContent = "57 PTS";
        DR3.textContent = "45 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/ottawa.gif";
        FR.style.left = "850px"
    }


    if (selectedPlayer === "56") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 21-24";

        FL.textContent = "Michkov";
        FC.textContent = "Couturier";
        FR.textContent = "Konecny";
        DL.textContent = "Sanheim";
        DR.textContent = "Drysdale";
        G.textContent = "Ersson";

        FL3.textContent = "63 PTS";
        FC3.textContent = "45 PTS";
        FR3.textContent = "76 PTS";
        DL3.textContent = "30 PTS";
        DR3.textContent = "20 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/philadelphia.gif";
        FR.style.left = "850px"
    }


    if (selectedPlayer === "57") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 21-24";

        FL.textContent = "Rust";
        FC.textContent = "Crosby";
        FR.textContent = "Rakell";
        DL.textContent = "E Karlsson";
        DR.textContent = "Grzelcyk";
        G.textContent = "Nedeljkovic";

        FL3.textContent = "65 PTS";
        FC3.textContent = "91 PTS";
        FR3.textContent = "70 PTS";
        DL3.textContent = "53 PTS";
        DR3.textContent = "40 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/pittsburgh.gif";
        FR.style.left = "850px"
    }


    if (selectedPlayer === "58") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 21-24";

        FL.textContent = "Eklund";
        FC.textContent = "Celebrini";
        FR.textContent = "Toffoli";
        DL.textContent = "Walman";
        DR.textContent = "Liljegren";
        G.textContent = "Georgiev";

        FL3.textContent = "58 PTS";
        FC3.textContent = "63 PTS";
        FR3.textContent = "54 PTS";
        DL3.textContent = "32 PTS";
        DR3.textContent = "17 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/san jose.gif";
        FR.style.left = "850px"
    }


    if (selectedPlayer === "59") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 21-24";

        FL.textContent = "McCann";
        FC.textContent = "Stephenson";
        FR.textContent = "Schwartz";
        DL.textContent = "Montour";
        DR.textContent = "Dunn";
        G.textContent = "Daccord";

        FL3.textContent = "61 PTS";
        FC3.textContent = "51 PTS";
        FR3.textContent = "49 PTS";
        DL3.textContent = "41 PTS";
        DR3.textContent = "39 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/seattle.gif";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "60") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 25-28";

        FL.textContent = "Holloway";
        FC.textContent = "R Thomas";
        FR.textContent = "Kyrou";
        DL.textContent = "Parayko";
        DR.textContent = "Fowler";
        G.textContent = "Binnington";

        FL3.textContent = "63 PTS";
        FC3.textContent = "81 PTS";
        FR3.textContent = "70 PTS";
        DL3.textContent = "36 PTS";
        DR3.textContent = "36 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/st louis.gif";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "61") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 25-28";

        FL.textContent = "Hagel";
        FC.textContent = "Point";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "D Raddysh";
        G.textContent = "Vasilevskiy";

        FL3.textContent = "90 PTS";
        FC3.textContent = "82 PTS";
        FR3.textContent = "121 PTS";
        DL3.textContent = "66 PTS";
        DR3.textContent = "37 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/tampa bay.gif";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "62") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 25-28";

        FL.textContent = "Nylander";
        FC.textContent = "Matthews";
        FR.textContent = "Marner";
        DL.textContent = "Rielly";
        DR.textContent = "Ekman-Larsson";
        G.textContent = "Woll";

        FL3.textContent = "84 PTS";
        FC3.textContent = "78 PTS";
        FR3.textContent = "102 PTS";
        DL3.textContent = "41 PTS";
        DR3.textContent = "29 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/toronto.gif";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "63") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 25-28";

        FL.textContent = "Schmaltz";
        FC.textContent = "L Cooley";
        FR.textContent = "C Keller";
        DL.textContent = "Sergachev";
        DR.textContent = "Kesselring";
        G.textContent = "Vejmelka";

        FL3.textContent = "63 PTS";
        FC3.textContent = "65 PTS";
        FR3.textContent = "90 PTS";
        DL3.textContent = "53 PTS";
        DR3.textContent = "29 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/utah.gif";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "64") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 29-32";

        FL.textContent = "DeBrusk";
        FC.textContent = "Boeser";
        FR.textContent = "Garland";
        DL.textContent = "Q Hughes";
        DR.textContent = "Hronek";
        G.textContent = "Lankinen";

        FL3.textContent = "48 PTS";
        FC3.textContent = "50 PTS";
        FR3.textContent = "50 PTS";
        DL3.textContent = "76 PTS";
        DR3.textContent = "33 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/vancouver.gif";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "65") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 29-32";

        FL.textContent = "Hertl";
        FC.textContent = "Eichel";
        FR.textContent = "Stone";
        DL.textContent = "S Theodore";
        DR.textContent = "Hanifin";
        G.textContent = "A Hill";

        FL3.textContent = "61 PTS";
        FC3.textContent = "94 PTS";
        FR3.textContent = "67 PTS";
        DL3.textContent = "57 PTS";
        DR3.textContent = "39 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/vegas.gif";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "66") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 29-32";

        FL.textContent = "Ovechkin";
        FC.textContent = "D Strome";
        FR.textContent = "Protas";
        DL.textContent = "Carlson";
        DR.textContent = "Chychrun";
        G.textContent = "L Thompson";

        FL3.textContent = "73 PTS";
        FC3.textContent = "82 PTS";
        FR3.textContent = "66 PTS";
        DL3.textContent = "51 PTS";
        DR3.textContent = "47 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/washington.gif";
        FR.style.left = "850px"
    }

    if (selectedPlayer === "67") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25 TEAMS 29-32";

        FL.textContent = "K Connor";
        FC.textContent = "Scheifele";
        FR.textContent = "Ehlers";
        DL.textContent = "Morrissey";
        DR.textContent = "Pionk";
        G.textContent = "Hellebuyck";

        FL3.textContent = "97 PTS";
        FC3.textContent = "87 PTS";
        FR3.textContent = "63 PTS";
        DL3.textContent = "62 PTS";
        DR3.textContent = "39 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/winnipeg.gif";
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

// Trackmousemovement on the entire document
container.addEventListener('mousemove', (event) => {
    const x = event.clientX; // Get the X-coordinate relative to the viewport
    xPositionDisplay.innerHTML = `left: ${x - 200}px`;
});

// Clear the X display when themouse leaves the window (optional)
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
