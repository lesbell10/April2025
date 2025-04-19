const teamSelector = document.querySelector(".teamSelector")
const FL = document.getElementById("FL");
const FL2 = document.getElementById("FL2");
const FC = document.getElementById("FC");
const FC2 = document.getElementById("FC2");
const FR = document.getElementById("FR");
const FR2 = document.getElementById("FR2");
const DL = document.getElementById("DL");
const DL2 = document.getElementById("DL2");
const DR = document.getElementById("DR");
const DR2 = document.getElementById("DR2");
const G = document.getElementById("G");
const G2 = document.getElementById("G2");
const FL3 = document.getElementById("FL3");
const FC3 = document.getElementById("FC3");
const FR3 = document.getElementById("FR3");
const DL3 = document.getElementById("DL3");
const DR3 = document.getElementById("DR3");
const G3 = document.getElementById("G3");
const sidepic = document.querySelector(".sidepic");
const manager = document.querySelector(".manager")

document.addEventListener("DOMContentLoaded", () => {
    // Load the saved team from localStorage
    const savedTeam = localStorage.getItem("selectedTeam");
    if (savedTeam) {
        teamSelector.value = savedTeam;
        updatePlayerInfo();  // Automatically update the player info based on the saved team
    }
});

teamSelector.addEventListener("change", () => {

    localStorage.setItem("selectedTeam", teamSelector.value);

    FL3.style.fontWeight = "400";
    FC3.style.fontWeight = "400";
    FR3.style.fontWeight = "400";
    DL3.style.fontWeight = "400";
    DR3.style.fontWeight = "400";
    G3.style.fontWeight = "400";

    updatePlayerInfo();
});

let selectedTeam = 0;

function updatePlayerInfo() {

    selectedTeam = teamSelector.value;
    manager.textContent = "Head Coach: "

    if (selectedTeam === "50") {

        FL.textContent = "Draisaitl";
        FC.textContent = "MacKinnon";
        FR.textContent = "Rantanen";
        DL.textContent = "Makar";
        DR.textContent = "Werenski";
        G.textContent = "Hellebuyck";

        FL3.textContent = "61 PTS";
        FC3.textContent = "66 PTS";
        FR3.textContent = "58 PTS";
        DL3.textContent = "49 PTS";
        DR3.textContent = "46 PTS";
        G3.textContent = "BEST STATS";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nhl.gif";
        manager.textContent = ""
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "0") {

        FL.textContent = "Vatrano";
        FC.textContent = "R Strome";
        FR.textContent = "Terry";
        DL.textContent = "LaCombe";
        DR.textContent = "Zellweger";
        G.textContent = "Dostal";

        FL3.textContent = "23 PTS";
        FC3.textContent = "24 PTS";
        FR3.textContent = "33 PTS";
        DL3.textContent = "18 PTS";
        DR3.textContent = "12 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/anaheim.gif";
        manager.textContent += "Greg Cronin"
        FR3.style.fontWeight = "1000";
    }

    if (selectedTeam == "1") {

        FL.textContent = "Marchand";
        FC.textContent = "Zacha";
        FR.textContent = "Pastrnak";
        DL.textContent = "McAvoy";
        DR.textContent = "Lohrei";
        G.textContent = "Swayman";

        FL3.textContent = "32 PTS";
        FC3.textContent = "20 PTS";
        FR3.textContent = "40 PTS";
        DL3.textContent = "18 PTS";
        DR3.textContent = "16 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/boston.gif";
        manager.textContent += "Joe Sacco"
        FR3.style.fontWeight = "1000";
    }

    if (selectedTeam == "2") {

        FL.textContent = "Zucker";
        FC.textContent = "T Thompson";
        FR.textContent = "Tuch";
        DL.textContent = "Dahlin";
        DR.textContent = "Byram";
        G.textContent = "Luukkonen";

        FL3.textContent = "31 PTS";
        FC3.textContent = "34 PTS";
        FR3.textContent = "30 PTS";
        DL3.textContent = "29 PTS";
        DR3.textContent = "22 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/buffalo.gif";
        manager.textContent += "Lindy Ruff"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "3") {

        FL.textContent = "Kadri";
        FC.textContent = "Huberdeau";
        FR.textContent = "Zary";
        DL.textContent = "Weegar";
        DR.textContent = "R Andersson";
        G.textContent = "Wolf";

        FL3.textContent = "29 PTS";
        FC3.textContent = "31 PTS";
        FR3.textContent = "22 PTS";
        DL3.textContent = "22 PTS";
        DR3.textContent = "18 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/calgary.gif";
        manager.textContent += "Ryan Huska"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "4") {

        FL.textContent = "S Aho";
        FC.textContent = "Necas";
        FR.textContent = "Svechnikov";
        DL.textContent = "Gostisbehere";
        DR.textContent = "Orlov";
        G.textContent = "Kochetkov";

        FL3.textContent = "43 PTS";
        FC3.textContent = "47 PTS";
        FR3.textContent = "29 PTS";
        DL3.textContent = "27 PTS";
        DR3.textContent = "18 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/carolina.gif";
        manager.textContent += "Rod Brind'Amour"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "5") {

        FL.textContent = "T Bertuzzi";
        FC.textContent = "Bedard";
        FR.textContent = "Teravainen";
        DL.textContent = "A Vlasic";
        DR.textContent = "S Jones";
        G.textContent = "Mrazek";

        FL3.textContent = "22 PTS";
        FC3.textContent = "37 PTS";
        FR3.textContent = "26 PTS";
        DL3.textContent = "17 PTS";
        DR3.textContent = "14 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/chicago.gif";
        manager.textContent += "Anders Sorensen"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "6") {

        FL.textContent = "Mittelstadt";
        FC.textContent = "MacKinnon";
        FR.textContent = "Rantanen";
        DL.textContent = "Makar";
        DR.textContent = "D Toews";
        G.textContent = "Georgiev";

        FL3.textContent = "26 PTS";
        FC3.textContent = "66 PTS";
        FR3.textContent = "58 PTS";
        DL3.textContent = "49 PTS";
        DR3.textContent = "20 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/colorado.gif";
        manager.textContent += "Jared Bednar"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "7") {

        FL.textContent = "Voronkov";
        FC.textContent = "Monahan";
        FR.textContent = "Marchenko";
        DL.textContent = "Werenski";
        DR.textContent = "Provorov";
        G.textContent = "Merzlikins";

        FL3.textContent = "28 PTS";
        FC3.textContent = "41 PTS";
        FR3.textContent = "45 PTS";
        DL3.textContent = "46 PTS";
        DR3.textContent = "18 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/columbus.gif";
        manager.textContent += "Dean Evason"
        DL3.style.fontWeight = "1000";
    }

    if (selectedTeam == "8") {

        FL.textContent = "J Robertson";
        FC.textContent = "Duchene";
        FR.textContent = "Benn";
        DL.textContent = "Harley";
        DR.textContent = "Heiskanen";
        G.textContent = "Oettinger";

        FL3.textContent = "34 PTS";
        FC3.textContent = "38 PTS";
        FR3.textContent = "30 PTS";
        DL3.textContent = "21 PTS";
        DR3.textContent = "19 PTS";
        G3.textContent = "MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/dallas.gif";
        manager.textContent += "Peter DeBoer"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "9") {

        FL.textContent = "L Raymond";
        FC.textContent = "Larkin";
        FR.textContent = "DeBrincat";
        DL.textContent = "Seider";
        DR.textContent = "Edvinsson";
        G.textContent = "C Talbot";

        FL3.textContent = "44 PTS";
        FC3.textContent = "35 PTS";
        FR3.textContent = "35 PTS";
        DL3.textContent = "24 PTS";
        DR3.textContent = "16 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/detroit.gif";
        manager.textContent += "Derek Lalonde"
        FL3.style.fontWeight = "1000";
    }

    if (selectedTeam == "10") {

        FL.textContent = "Hyman";
        FC.textContent = "McDavid";
        FR.textContent = "Draisaitl";
        DL.textContent = "Bouchard";
        DR.textContent = "Ekholm";
        G.textContent = "S Skinner";

        FL3.textContent = "24 PTS";
        FC3.textContent = "58 PTS";
        FR3.textContent = "61 PTS";
        DL3.textContent = "31 PTS";
        DR3.textContent = "18 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/edmonton.gif";
        manager.textContent += "Kris Knoblauch"
        FR3.style.fontWeight = "1000";
    }

    if (selectedTeam == "11") {

        FL.textContent = "M Tkachuk";
        FC.textContent = "Reinhart";
        FR.textContent = "Barkov";
        DL.textContent = "Ekblad";
        DR.textContent = "Forsling";
        G.textContent = "Bobrovsky";

        FL3.textContent = "36 PTS";
        FC3.textContent = "46 PTS";
        FR3.textContent = "35 PTS";
        DL3.textContent = "20 PTS";
        DR3.textContent = "15 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/florida.gif";
        manager.textContent += "Paul Maurice"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "12") {

        FL.textContent = "Laferriere";
        FC.textContent = "Kopitar";
        FR.textContent = "Kempe";
        DL.textContent = "B Clarke";
        DR.textContent = "Gavrikov";
        G.textContent = "Kuemper";

        FL3.textContent = "26 PTS";
        FC3.textContent = "40 PTS";
        FR3.textContent = "39 PTS";
        DL3.textContent = "22 PTS";
        DR3.textContent = "16 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/los angeles.gif";
        manager.textContent += "Jim Hiller"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "13") {

        FL.textContent = "Kaprizov";
        FC.textContent = "Rossi";
        FR.textContent = "Boldy";
        DL.textContent = "Faber";
        DR.textContent = "Brodin";
        G.textContent = "Gustavsson";

        FL3.textContent = "50 PTS";
        FC3.textContent = "37 PTS";
        FR3.textContent = "35 PTS";
        DL3.textContent = "20 PTS";
        DR3.textContent = "16 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/minnesota.gif";
        manager.textContent += "John Hynes"
        FL3.style.fontWeight = "1000";
    }

    if (selectedTeam == "14") {

        FL.textContent = "Slafkovsky";
        FC.textContent = "Suzuki";
        FR.textContent = "Caufield";
        DL.textContent = "Hutson";
        DR.textContent = "Matheson";
        G.textContent = "Montembeault";

        FL3.textContent = "23 PTS";
        FC3.textContent = "42 PTS";
        FR3.textContent = "40 PTS";
        DL3.textContent = "31 PTS";
        DR3.textContent = "20 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/montreal.gif";
        manager.textContent += "Martin St Louis"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "15") {

        FL.textContent = "F Forsberg";
        FC.textContent = "Stamkos";
        FR.textContent = "Marchessault";
        DL.textContent = "Josi";
        DR.textContent = "Skjei";
        G.textContent = "Saros";

        FL3.textContent = "34 PTS";
        FC3.textContent = "25 PTS";
        FR3.textContent = "30 PTS";
        DL3.textContent = "27 PTS";
        DR3.textContent = "13 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nashville.gif";
        manager.textContent += "Andrew Brunette"
        FL3.style.fontWeight = "1000";
    }

    if (selectedTeam == "16") {

        FL.textContent = "Bratt";
        FC.textContent = "J Hughes";
        FR.textContent = "Hischier";
        DL.textContent = "Hamilton";
        DR.textContent = "L Hughes";
        G.textContent = "Markstrom";

        FL3.textContent = "47 PTS";
        FC3.textContent = "46 PTS";
        FR3.textContent = "34 PTS";
        DL3.textContent = "25 PTS";
        DR3.textContent = "17 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/new jersey.gif";
        manager.textContent += "Sheldon Keefe"
        FL3.style.fontWeight = "1000";
    }

    if (selectedTeam == "17") {

        FL.textContent = "A Lee";
        FC.textContent = "Horvat";
        FR.textContent = "Palmieri";
        DL.textContent = "Dobson";
        DR.textContent = "Pulock";
        G.textContent = "Sorokin";

        FL3.textContent = "33 PTS";
        FC3.textContent = "30 PTS";
        FR3.textContent = "27 PTS";
        DL3.textContent = "21 PTS";
        DR3.textContent = "15 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/ny islanders.gif";
        manager.textContent += "Patrick Roy"
        FL3.style.fontWeight = "1000";
    }

    if (selectedTeam == "18") {

        FL.textContent = "Panarin";
        FC.textContent = "Trocheck";
        FR.textContent = "Zibanejad";
        DL.textContent = "A Fox";
        DR.textContent = "B Schneider";
        G.textContent = "Shesterkin";

        FL3.textContent = "44 PTS";
        FC3.textContent = "28 PTS";
        FR3.textContent = "26 PTS";
        DL3.textContent = "33 PTS";
        DR3.textContent = "10 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/ny rangers.gif";
        manager.textContent += "Peter Laviolette"
        FL3.style.fontWeight = "1000";
    }

    if (selectedTeam == "19") {

        FL.textContent = "B Tkachuk";
        FC.textContent = "Stutzle";
        FR.textContent = "Batherson";
        DL.textContent = "J Sanderson";
        DR.textContent = "Chabot";
        G.textContent = "Ullmark";

        FL3.textContent = "38 PTS";
        FC3.textContent = "41 PTS";
        FR3.textContent = "36 PTS";
        DL3.textContent = "22 PTS";
        DR3.textContent = "18 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/ottawa.gif";
        manager.textContent += "Travis Green"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "20") {

        FL.textContent = "Tippett";
        FC.textContent = "Konecny";
        FR.textContent = "Michkov";
        DL.textContent = "Sanheim";
        DR.textContent = "Seeler";
        G.textContent = "Ersson";

        FL3.textContent = "24 PTS";
        FC3.textContent = "45 PTS";
        FR3.textContent = "29 PTS";
        DL3.textContent = "21 PTS";
        DR3.textContent = "12 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/philadelphia.gif";
        manager.textContent += "John Tortorella"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "21") {

        FL.textContent = "Malkin";
        FC.textContent = "Crosby";
        FR.textContent = "Rakell";
        DL.textContent = "E Karlsson";
        DR.textContent = "Grzelcyk";
        G.textContent = "Jarry";

        FL3.textContent = "32 PTS";
        FC3.textContent = "42 PTS";
        FR3.textContent = "33 PTS";
        DL3.textContent = "28 PTS";
        DR3.textContent = "21 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/pittsburgh.gif";
        manager.textContent += "Mike Sullivan"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "22") {

        FL.textContent = "Eklund";
        FC.textContent = "Granlund";
        FR.textContent = "Celebrini";
        DL.textContent = "Walman";
        DR.textContent = "Ceci";
        G.textContent = "Blackwood";

        FL3.textContent = "27 PTS";
        FC3.textContent = "35 PTS";
        FR3.textContent = "27 PTS";
        DL3.textContent = "25 PTS";
        DR3.textContent = "10 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/san jose.gif";
        manager.textContent += "Ryan Warsofsky"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "23") {

        FL.textContent = "McCann";
        FC.textContent = "Schwartz";
        FR.textContent = "Bjorkstrand";
        DL.textContent = "Montour";
        DR.textContent = "Dunn";
        G.textContent = "Daccord";

        FL3.textContent = "29 PTS";
        FC3.textContent = "26 PTS";
        FR3.textContent = "26 PTS";
        DL3.textContent = "22 PTS";
        DR3.textContent = "18 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/seattle.gif";
        manager.textContent += "Dave Hakstol"
        FL3.style.fontWeight = "1000";
    }

    if (selectedTeam == "24") {

        FL.textContent = "Holloway";
        FC.textContent = "Kyrou";
        FR.textContent = "R Thomas";
        DL.textContent = "Parayko";
        DR.textContent = "Broberg";
        G.textContent = "Binnington";

        FL3.textContent = "29 PTS";
        FC3.textContent = "35 PTS";
        FR3.textContent = "30 PTS";
        DL3.textContent = "23 PTS";
        DR3.textContent = "14 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/st louis.gif";
        manager.textContent += "Jim Montgomery"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "25") {

        FL.textContent = "Hagel";
        FC.textContent = "Point";
        FR.textContent = "Kucherov";
        DL.textContent = "Hedman";
        DR.textContent = "McDonagh";
        G.textContent = "Vasilevskiy";

        FL3.textContent = "48 PTS";
        FC3.textContent = "47 PTS";
        FR3.textContent = "62 PTS";
        DL3.textContent = "32 PTS";
        DR3.textContent = "14 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/tampa bay.gif";
        manager.textContent += "Jon Cooper"
        FR3.style.fontWeight = "1000";
    }

    if (selectedTeam == "26") {

        FL.textContent = "Nylander";
        FC.textContent = "Tavares";
        FR.textContent = "Marner";
        DL.textContent = "Rielly";
        DR.textContent = "Ekman-Larsson";
        G.textContent = "Woll";

        FL3.textContent = "43 PTS";
        FC3.textContent = "40 PTS";
        FR3.textContent = "56 PTS";
        DL3.textContent = "19 PTS";
        DR3.textContent = "15 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/toronto.gif";
        manager.textContent += "Craig Berube"
        FR3.style.fontWeight = "1000";
    }

    if (selectedTeam == "27") {

        FL.textContent = "Guenther";
        FC.textContent = "L Cooley";
        FR.textContent = "C Keller";
        DL.textContent = "Sergachev";
        DR.textContent = "Kesselring";
        G.textContent = "Vejmelka";

        FL3.textContent = "34 PTS";
        FC3.textContent = "35 PTS";
        FR3.textContent = "41 PTS";
        DL3.textContent = "29 PTS";
        DR3.textContent = "15 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/utah.gif";
        manager.textContent += "Andre Tourigny"
        FR3.style.fontWeight = "1000";
    }

    if (selectedTeam == "28") {

        FL.textContent = "DeBrusk";
        FC.textContent = "JT Miller";
        FR.textContent = "Garland";
        DL.textContent = "Q Hughes";
        DR.textContent = "Myers";
        G.textContent = "Lankinen";

        FL3.textContent = "29 PTS";
        FC3.textContent = "29 PTS";
        FR3.textContent = "30 PTS";
        DL3.textContent = "45 PTS";
        DR3.textContent = "10 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/vancouver.gif";
        manager.textContent += "Rick Tocchet"
        DL3.style.fontWeight = "1000";
    }

    if (selectedTeam == "29") {

        FL.textContent = "Barbashev";
        FC.textContent = "Eichel";
        FR.textContent = "Stone";
        DL.textContent = "S Theodore";
        DR.textContent = "Pietrangelo";
        G.textContent = "A Hill";

        FL3.textContent = "30 PTS";
        FC3.textContent = "53 PTS";
        FR3.textContent = "35 PTS";
        DL3.textContent = "33 PTS";
        DR3.textContent = "21 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/vegas.gif";
        manager.textContent += "Bruce Cassidy"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "30") {

        FL.textContent = "Dubois";
        FC.textContent = "D Strome";
        FR.textContent = "Protas";
        DL.textContent = "Chychrun";
        DR.textContent = "Carlson";
        G.textContent = "L Thompson";

        FL3.textContent = "33 PTS";
        FC3.textContent = "45 PTS";
        FR3.textContent = "36 PTS";
        DL3.textContent = "28 PTS";
        DR3.textContent = "26 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/washington.gif";
        manager.textContent += "Spencer Carbery"
        FC3.style.fontWeight = "1000";
    }

    if (selectedTeam == "31") {

        FL.textContent = "K Connor";
        FC.textContent = "Scheifele";
        FR.textContent = "Vilardi";
        DL.textContent = "Morrissey";
        DR.textContent = "Pionk";
        G.textContent = "Hellebuyck";

        FL3.textContent = "52 PTS";
        FC3.textContent = "46 PTS";
        FR3.textContent = "36 PTS";
        DL3.textContent = "37 PTS";
        DR3.textContent = "28 PTS";
        G3.textContent = " MOST GAMES";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/winnipeg.gif";
        manager.textContent += "Scott Arniel"
        FL3.style.fontWeight = "1000";
    }

    // substitutes.innerHTML = substitutes.innerHTML.replace(/,/g, ' •');
}