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
    title.style.fontSize = "46px"
    sidepic.style.border = "none"
    sidepic.style.width = "140px"
    sidepic.style.height = "140px"
    sidepic.style.bottom = "0px"

    FL.style.left = "46%"
    FC.style.left = "61%"
    FR.style.left = "76%"
    DL.style.left = "53.5%"
    DR.style.left = "68.5%"
    G.style.left = "61%"

    FL2.style.border = "1px solid white"
    FC2.style.border = "1px solid white"
    FR2.style.border = "1px solid white"
    DL2.style.border = "1px solid white"
    DR2.style.border = "1px solid white"
    G2.style.border = "1px solid white"

    FL3.textContent = "";
    FC3.textContent = "";
    FR3.textContent = "";
    DL3.textContent = "";
    DR3.textContent = "";
    G3.textContent = "";

    message.innerHTML = ""


    if (selectedPlayer === "0") {

        FL.textContent = "Foegele";
        FC.textContent = "Byfield";
        FR.textContent = "Kempe";
        DL.textContent = "Edmundson";
        DR.textContent = "Morrissey";
        G.textContent = "Hellebuyck";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "2 PTS";
        FC3.textContent = "4 ASTS";
        FR3.textContent = "2 ASTS";
        DL3.textContent = "1 GL";
        DR3.textContent = "1 GL";
        G3.textContent = "SAVES: 94.4%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        DL.style.left = "620px"
    }

    if (selectedPlayer === "1") {

        FL.textContent = "Brink";
        FC.textContent = "Suzuki";
        FR.textContent = "Pastrnak";
        DL.textContent = "Rielly";
        DR.textContent = "Vaakanainen";
        G.textContent = "Montembeault";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "4 PTS";
        FC3.textContent = "3 PTS";
        FR3.textContent = "3 PTS";
        DL3.textContent = "4 PTS";
        DR3.textContent = "3 PTS";
        G3.textContent = "SAVES: 100%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "2") {

        FL.textContent = "Necas";
        FC.textContent = "MacKinnon";
        FR.textContent = "Garland";
        DL.textContent = "Makar";
        DR.textContent = "Chabot";
        G.textContent = "Hellebuyck";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 ASTS";
        FC3.textContent = "3 PTS";
        FR3.textContent = "2 GLS";
        DL3.textContent = "2 ASTS ";
        DR3.textContent = "1 GL";
        G3.textContent = "SAVES: 96.0%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "3") {

        FL.textContent = "Barbashev";
        FC.textContent = "Malkin";
        FR.textContent = "Keller";
        DL.textContent = "E Karlsson";
        DR.textContent = "C Murphy";
        G.textContent = "Saros";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "4 PTS";
        FC3.textContent = "4 PTS";
        FR3.textContent = "5 PTS";
        DL3.textContent = "3 PTS";
        DR3.textContent = "3 ASTS";
        G3.textContent = "SAVES: 95.7%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "4") {

        FL.textContent = "J Robertson";
        FC.textContent = "Hintz";
        FR.textContent = "Colton";
        DL.textContent = "Kylington";
        DR.textContent = "Harley";
        G.textContent = "Stolarz";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 PTS";
        FC3.textContent = "4 ASTS";
        FR3.textContent = "3 PTS";
        DL3.textContent = "2 ASTS";
        DR3.textContent = "2 ASTS";
        G3.textContent = "SAVES: 94.3%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FL.style.left = "525px"
    }

    if (selectedPlayer === "5") {

        FL.textContent = "Donato";
        FC.textContent = "Nelson";
        FR.textContent = "P Kane";
        DL.textContent = "Montour";
        DR.textContent = "Del Galzo";
        G.textContent = "Bobrovsky";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 PTS";
        FC3.textContent = "3 PTS";
        FR3.textContent = "3 PTS";
        DL3.textContent = "2 PTS";
        DR3.textContent = "2 PTS";
        G3.textContent = "SAVES: 100%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "6") {

        FL.textContent = "Hintz";
        FC.textContent = "Crosby";
        FR.textContent = "Johnston";
        DL.textContent = "Slavin";
        DR.textContent = "Hanifin";
        G.textContent = "Quick";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "4 PTS";
        FC3.textContent = "3 GLS";
        FR3.textContent = "3 PTS";
        DL3.textContent = "2 PTS";
        DR3.textContent = "2 PTS";
        G3.textContent = "SAVES: 100%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "7") {

        title.innerHTML = "NHL PLAYERS WITH MOST<br>POINTS LAST MONTH"

        FL.textContent = "Hagel";
        FC.textContent = "Zibanejad";
        FR.textContent = "Keller";
        DL.textContent = "E Karlsson";
        DR.textContent = "Makar";
        G.textContent = "Vasilevskiy";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "13 PTS";
        FC3.textContent = "13 PTS";
        FR3.textContent = "13 PTS";
        DL3.textContent = "10 PTS";
        DR3.textContent = "10 PTS";
        G3.textContent = "SAVES: 94.1%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "8") {

        FL.textContent = "Dubois";
        FC.textContent = "Suzuki";
        FR.textContent = "Barkov";
        DL.textContent = "Sanderson";
        DR.textContent = "Matheson";
        G.textContent = "Shesterkin";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 PTS";
        FC3.textContent = "4 PTS";
        FR3.textContent = "2 GLS";
        DL3.textContent = " 3 ASTS";
        DR3.textContent = "2 PTS";
        G3.textContent = "SAVES: 100%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "9") {

        title.innerHTML = "NHL PLAYERS WITH MOST<br>POINTS LAST WEEK"

        FL.textContent = "Suzuki";
        FC.textContent = "Hintz";
        FR.textContent = "Pastrnak";
        DL.textContent = "Rielly";
        DR.textContent = "E Karlsson";
        G.textContent = "Vasilevskiy";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "7 PTS";
        FC3.textContent = "9 PTS";
        FR3.textContent = "6 PTS";
        DL3.textContent = "6 PTS";
        DR3.textContent = "5 PTS";
        G3.textContent = "SAVES: 97.3%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "10") {

        FL.textContent = "Guentzel";
        FC.textContent = "O'Reilly";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "LaCombe";
        G.textContent = "Wedgewood";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 PTS";
        FC3.textContent = "3 PTS";
        FR3.textContent = "3 PTS";
        DL3.textContent = "3 PTS";
        DR3.textContent = "3 ASTS";
        G3.textContent = "SAVES: 97.0%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "11") {

        FL.textContent = "Hertl";
        FC.textContent = "Eichel";
        FR.textContent = "Batherson";
        DL.textContent = "Hanifin";
        DR.textContent = "Sanderson";
        G.textContent = "A Hill";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "2 PTS";
        FC3.textContent = "2 PTS";
        FR3.textContent = "2 ASTS";
        DL3.textContent = "2 PTS";
        DR3.textContent = "2 ASTS";
        G3.textContent = "SAVES: 93.5%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "12") {

        FL.textContent = "Guentzel";
        FC.textContent = "MacKinnon";
        FR.textContent = "Barkov";
        DL.textContent = "Makar";
        DR.textContent = "E Bouchard";
        G.textContent = "Bobrovsky";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 GLS";
        FC3.textContent = "5 PTS";
        FR3.textContent = "3 PTS";
        DL3.textContent = "6 PTS";
        DR3.textContent = "2 PTS";
        G3.textContent = "SAVES: 100%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "13") {

        FL.textContent = "Ehlers";
        FC.textContent = "Protas";
        FR.textContent = "Stone";
        DL.textContent = "Morrissey";
        DR.textContent = "Fowler";
        G.textContent = "I Samsonov";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 PTS";
        FC3.textContent = "3 PTS";
        FR3.textContent = "3 PTS";
        DL3.textContent = "2 PTS";
        DR3.textContent = "2 ASTS";
        G3.textContent = "SAVES: 100%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "14") {

        FL.textContent = "Stamkos";
        FC.textContent = "Matthews";
        FR.textContent = "Nichushkin";
        DL.textContent = "Schmidt";
        DR.textContent = "Malinski";
        G.textContent = "Wolf";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 GLS";
        FC3.textContent = "3 ASTS";
        FR3.textContent = "4 PTS";
        DL3.textContent = "2 ASTS";
        DR3.textContent = "2 ASTS";
        G3.textContent = "SAVES: 100%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "15") {

        FL.textContent = "Fantilli";
        FC.textContent = "Hertl";
        FR.textContent = "Crosby";
        DL.textContent = "Carlson";
        DR.textContent = "Edmundson";
        G.textContent = "Dostal";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 GLS";
        FC3.textContent = "3 GLS";
        FR3.textContent = "2 GLS";
        DL3.textContent = "2 ASTS";
        DR3.textContent = "2 ASTS";
        G3.textContent = "SAVES: 96.9%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "16") {

        title.innerHTML = "NHL PLAYERS WITH MOST<br>POINTS LAST WEEK"

        FL.textContent = "Stamkos";
        FC.textContent = "MacKinnon";
        FR.textContent = "Guentzel";
        DL.textContent = "Makar";
        DR.textContent = "D Raddysh";
        G.textContent = "Bobrovsky";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "8 PTS";
        FC3.textContent = "9 PTS";
        FR3.textContent = "7 PTS";
        DL3.textContent = "8 PTS";
        DR3.textContent = "5 PTS";
        G3.textContent = "SAVES: 97.8%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "17") {

        FL.textContent = "MacKinnon";
        FC.textContent = "Thompson";
        FR.textContent = "Draisaitl";
        DL.textContent = "Nurse";
        DR.textContent = "Rielly";
        G.textContent = "Wedgewood";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "2 ASTS";
        FC3.textContent = "2 GLS";
        FR3.textContent = "2 ASTS";
        DL3.textContent = "1 GL";
        DR3.textContent = "1 AST";
        G3.textContent = "SAVES: 100%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "18") {

        FL.textContent = "Ovechkin";
        FC.textContent = "Protas";
        FR.textContent = "Slafkovsky";
        DL.textContent = "Hanifin";
        DR.textContent = "L Hughes";
        G.textContent = "Hellebuyck";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 ASTS";
        FC3.textContent = " 3 GLS";
        FR3.textContent = "3 PTS";
        DL3.textContent = "2 PTS";
        DR3.textContent = "2 PTS";
        G3.textContent = "SAVES: 92.5%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "19") {

        FL.textContent = "DeBrincat";
        FC.textContent = "Larkin";
        FR.textContent = "P Kane";
        DL.textContent = "Montour";
        DR.textContent = "Hutson";
        G.textContent = "Husso";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "4 PTS";
        FC3.textContent = "3 ASTS";
        FR3.textContent = "5 PTS";
        DL3.textContent = "4 PTS";
        DR3.textContent = "2 ASTS";
        G3.textContent = "SAVES: 92.3%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "20") {

        FL.textContent = "Bratt";
        FC.textContent = "Brink";
        FR.textContent = "Batherson";
        DL.textContent = "Pesce";
        DR.textContent = "Spurgeon";
        G.textContent = "A Hill";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 PTS";
        FC3.textContent = "3 PTS";
        FR3.textContent = "3 PTS";
        DL3.textContent = "2 PTS";
        DR3.textContent = "2 ASTS";
        G3.textContent = "SAVES: 100%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "21") {

        FL.textContent = "K Connor";
        FC.textContent = "Scheifele";
        FR.textContent = "Tolvanen";
        DL.textContent = "Marino";
        DR.textContent = "Montour";
        G.textContent = "Dostal";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 PTS";
        FC3.textContent = "3 ASTS";
        FR3.textContent = "3 PTS";
        DL3.textContent = "2 ASTS";
        DR3.textContent = "1 GL";
        G3.textContent = "SAVES: 100%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "22") {

        FL.textContent = "Bratt";
        FC.textContent = "Kyrou";
        FR.textContent = "Trocheck";
        DL.textContent = "Hedman";
        DR.textContent = "D Raddysh";
        G.textContent = "Kuemper";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 ASTS";
        FC3.textContent = "3 GLS";
        FR3.textContent = "2 GLS";
        DL3.textContent = "2 PTS";
        DR3.textContent = "2 PTS";
        G3.textContent = "SAVES: 100%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "23") {

        FL.textContent = "Nugent-H";
        FC.textContent = "Barkov";
        FR.textContent = "Kyrou";
        DL.textContent = "Makar";
        DR.textContent = "Faulk";
        G.textContent = "Mrazek";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 ASTS";
        FC3.textContent = "2 PTS";
        FR3.textContent = "3 ASTS";
        DL3.textContent = "3 PTS";
        DR3.textContent = "2 ASTS";
        G3.textContent = "SAVES: 100%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "24") {

        title.innerHTML = "NHL PLAYERS WITH MOST<br>POINTS LAST WEEK"

        FL.textContent = "Slafkovsky";
        FC.textContent = "Draisaitl";
        FR.textContent = "Bratt";
        DL.textContent = "Montour";
        DR.textContent = "L Hughes";
        G.textContent = "Kuemper";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "6 PTS";
        FC3.textContent = "6 PTS";
        FR3.textContent = "9 PTS";
        DL3.textContent = "6 PTS";
        DR3.textContent = "4 PTS";
        G3.textContent = "SAVES: 98.7%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        FL.style.left = "520px"
    }

    if (selectedPlayer === "25") {

        FL.textContent = "Nylander";
        FC.textContent = "Matthews";
        FR.textContent = "Kucherov";
        DL.textContent = "O Power";
        DR.textContent = "Spurgeon";
        G.textContent = "J Allen";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 PTS";
        FC3.textContent = "3 PTS";
        FR3.textContent = "2 PTS";
        DL3.textContent = "3 PTS";
        DR3.textContent = "2 ASTS";
        G3.textContent = "SAVES: 97.8%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "26") {

        FL.textContent = "Hyman";
        FC.textContent = "Dvorak";
        FR.textContent = "Boeser";
        DL.textContent = "Ekholm";
        DR.textContent = "A Larsson";
        G.textContent = "Pickard";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "3 PTS";
        FC3.textContent = "4 PTS";
        FR3.textContent = "3 PTS";
        DL3.textContent = "3 PTS";
        DR3.textContent = "3 PTS";
        G3.textContent = "SAVES: 96.7%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "27") {

        FL.textContent = "Holloway";
        FC.textContent = "Eichel";
        FR.textContent = "Boeser";
        DL.textContent = "Dobson";
        DR.textContent = "Harley";
        G.textContent = "Gustavsson";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "7 PTS";
        FC3.textContent = "7 PTS";
        FR3.textContent = "6 PTS";
        DL3.textContent = "6 PTS";
        DR3.textContent = "5 PTS";
        G3.textContent = "SAVES: 97.6%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "28") {

        FL.textContent = "F Forsberg";
        FC.textContent = "Nugent-H";
        FR.textContent = "Matthews";
        DL.textContent = "Faulk";
        DR.textContent = "Ekholm";
        G.textContent = "Hofer";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "6 PTS";
        FC3.textContent = "6 PTS";
        FR3.textContent = "6 PTS";
        DL3.textContent = "5 PTS";
        DR3.textContent = "5 PTS";
        G3.textContent = "SAVES: 96.0%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "29") {

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
        sidepic.style.height = "auto"
        sidepic.style.width = "160px"
    }

    if (selectedPlayer === "30") {

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
        sidepic.style.height = "auto"
        sidepic.style.width = "160px"
        FC.style.left = "970px"
    }

    if (selectedPlayer === "31") {

        title.innerHTML = "NHL BEST POINTERS<br>EVERY YEAR"

        FL.textContent = "Stamkos";
        FC.textContent = "Malkin";
        FR.textContent = "Giroux";
        DL.textContent = "E Karlsson";
        DR.textContent = "Byfuglien";
        G.textContent = "M Smith";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "97 PTS";
        FC3.textContent = "109 PTS";
        FR3.textContent = "93 PTS";
        DL3.textContent = "78 PTS";
        DR3.textContent = "53 PTS";
        G3.textContent = "SAVES: 93.0%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "32") {

        title.innerHTML = "NHL BEST POINTERS<br>EVERY YEAR"

        FL.textContent = "Perry";
        FC.textContent = "D Sedin";
        FR.textContent = "St Louis";
        DL.textContent = "Visnovsky";
        DR.textContent = "Lidstrom";
        G.textContent = "T Thomas";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "98 PTS";
        FC3.textContent = "104 PTS";
        FR3.textContent = "99 PTS";
        DL3.textContent = "68 PTS";
        DR3.textContent = "62 PTS";
        G3.textContent = "SAVES: 93.8%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "33") {

        title.innerHTML = "NHL BEST POINTERS<br>EVERY YEAR"

        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "H Sedin";
        DL.textContent = "M Green";
        DR.textContent = "Keith";
        G.textContent = "R Miller";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "109 PTS";
        FC3.textContent = "109 PTS";
        FR3.textContent = "112 PTS";
        DL3.textContent = "76 PTS";
        DR3.textContent = "69 PTS";
        G3.textContent = "SAVES: 92.9%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "34") {

        title.innerHTML = "NHL BEST POINTERS<br>EVERY YEAR"

        FL.textContent = "Ovechkin";
        FC.textContent = "Crosby";
        FR.textContent = "Malkin";
        DL.textContent = "M Green";
        DR.textContent = "Markov";
        G.textContent = "T Thomas";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "110 PTS";
        FC3.textContent = "103 PTS";
        FR3.textContent = "113 PTS";
        DL3.textContent = "73 PTS";
        DR3.textContent = "64 PTS";
        G3.textContent = "SAVES: 93.3%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "35") {

        title.innerHTML = "NHL BEST<br>PLAYERS IN 2024-25"

        FL.textContent = "Kaprizov";
        FC.textContent = "M Rossi";
        FR.textContent = "Boldy";
        DL.textContent = "Brodin";
        DR.textContent = "Faber";
        G.textContent = "Gustavsson";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/minnesota.png";
        sidepic.style.borderRadius = "20px"
        sidepic.style.height = "auto"
        sidepic.style.width = "160px"
        sidepic.style.border = "3px solid black"
    }

    if (selectedPlayer === "36") {

        title.innerHTML = "NHL BEST PLAYERS<br>2005 to 2025"

        FL.textContent = "Kaprizov";
        FC.textContent = "M Koivu";
        FR.textContent = "Parise";
        DL.textContent = "R Suter";
        DR.textContent = "Spurgeon";
        G.textContent = "Fleury";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/minnesota.png";
        sidepic.style.borderRadius = "20px"
        sidepic.style.height = "auto"
        sidepic.style.width = "160px"
        sidepic.style.border = "3px solid black"
    }

    if (selectedPlayer === "37") {

        title.innerHTML = "NHL BEST PLAYERS<br>IN 2024-25"

        FL.textContent = "Eklund";
        FC.textContent = "Celebrini";
        FR.textContent = "Toffoli";
        DL.textContent = "Walman";
        DR.textContent = "Ferraro";
        G.textContent = "Vanecek";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/san jose.gif";
        sidepic.style.borderRadius = "20px"
        sidepic.style.height = "auto"
        sidepic.style.width = "160px"
        sidepic.style.border = "3px solid black"
    }

    if (selectedPlayer === "38") {

        title.innerHTML = "NHL BEST PLAYERS<br>2005 to 2025"

        FL.textContent = "Marleau";
        FC.textContent = "Thornton";
        FR.textContent = "Pavelski";
        DL.textContent = "Burns";
        DR.textContent = "Vlasic";
        G.textContent = "Nabokov";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/san jose.gif";
        sidepic.style.borderRadius = "20px"
        sidepic.style.height = "auto"
        sidepic.style.width = "160px"
        sidepic.style.border = "3px solid black"
    }

    if (selectedPlayer === "39") {

        title.innerHTML = "NHL BEST POINTERS<BR>EVERY YEAR"

        FL.textContent = "Ovechkin";
        FC.textContent = "Malkin";
        FR.textContent = "Iginla";
        DL.textContent = "Lidstrom";
        DR.textContent = "Gonchar";
        G.textContent = "Giguere";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "112 PTS";
        FC3.textContent = "106 PTS";
        FR3.textContent = "98 PTS";
        DL3.textContent = "70 PTS";
        DR3.textContent = "65 PTS";
        G3.textContent = "SAVES: 92.2%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    if (selectedPlayer === "40") {

        title.innerHTML = "NHL BEST POINTERS<BR>EVERY YEAR"

        FL.textContent = "Lecavalier";
        FC.textContent = "Crosby";
        FR.textContent = "Thornton";
        DL.textContent = "S Niedermayer";
        DR.textContent = "Gonchar";
        G.textContent = "Brodeur";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "108 PTS";
        FC3.textContent = "120 PTS";
        FR3.textContent = "114 PTS";
        DL3.textContent = "69 PTS";
        DR3.textContent = "67 PTS";
        G3.textContent = "SAVES: 92.2%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
        DL.style.left = "48%"
    }

    if (selectedPlayer === "41") {

        title.innerHTML = "NHL BEST POINTERS<BR>EVERY YEAR"

        FL.textContent = "Ovechkin";
        FC.textContent = "Thornton";
        FR.textContent = "Jagr";
        DL.textContent = "Lidstrom";
        DR.textContent = "Zubov";
        G.textContent = "Kiprusoff";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        FL3.textContent = "106 PTS";
        FC3.textContent = "125 PTS";
        FR3.textContent = "123 PTS";
        DL3.textContent = "80 PTS";
        DR3.textContent = "71 PTS";
        G3.textContent = "SAVES: 92.3%";

        sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    }

    // if (selectedPlayer === "42") {

    //     title.innerHTML = "NHL BEST POINTERS<BR>EVERY YEAR"

    //     FL.textContent = "";
    //     FC.textContent = "";
    //     FR.textContent = "";
    //     DL.textContent = "";
    //     DR.textContent = "";
    //     G.textContent = "";

    //     FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
    //     FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
    //     FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
    //     DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
    //     DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
    //     G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

    //     FL3.textContent = " PTS";
    //     FC3.textContent = " PTS";
    //     FR3.textContent = " PTS";
    //     DL3.textContent = " PTS";
    //     DR3.textContent = " PTS";
    //     G3.textContent = "SAVES: 100%";

    //     sidepic.src = "/NHL/hockey_img/logos/nhl.png";
    // }

    if (selectedPlayer === "43") {

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

    if (selectedPlayer === "44") {

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
