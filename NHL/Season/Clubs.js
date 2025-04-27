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
        FR.textContent = "Kucherov";
        DL.textContent = "Makar";
        DR.textContent = "Werenski";
        G.textContent = "Hellebuyck";

        FL3.textContent = "106 PTS";
        FC3.textContent = "116 PTS";
        FR3.textContent = "121 PTS";
        DL3.textContent = "92 PTS";
        DR3.textContent = "82 PTS";
        G3.textContent = "BEST STATS";

        FL2.src = "/NHL/hockey_img/players/" + FL.textContent + ".jpg";
        FC2.src = "/NHL/hockey_img/players/" + FC.textContent + ".jpg";
        FR2.src = "/NHL/hockey_img/players/" + FR.textContent + ".jpg";
        DL2.src = "/NHL/hockey_img/players/" + DL.textContent + ".jpg";
        DR2.src = "/NHL/hockey_img/players/" + DR.textContent + ".jpg";
        G2.src = "/NHL/hockey_img/players/" + G.textContent + ".jpg";

        sidepic.src = "/NHL/hockey_img/logos/nhl.gif";
        manager.textContent = "Best Head Coach: Spencer Carbery"
    }

    if (selectedTeam == "0") {

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
        manager.textContent += "Vacant"
    }

    if (selectedTeam == "1") {

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
        manager.textContent += "Joe Sacco"
    }

    if (selectedTeam == "2") {

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
        manager.textContent += "Lindy Ruff"
    }

    if (selectedTeam == "3") {

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
        manager.textContent += "Ryan Huska"
    }

    if (selectedTeam == "4") {

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
        manager.textContent += "Rod Brind'Amour"
    }

    if (selectedTeam == "5") {

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
        manager.textContent += "Anders Sorensen"
    }

    if (selectedTeam == "6") {

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
        manager.textContent += "Jared Bednar"
    }

    if (selectedTeam == "7") {

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
        manager.textContent += "Dean Evason"
    }

    if (selectedTeam == "8") {

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
        manager.textContent += "Peter DeBoer"
    }

    if (selectedTeam == "9") {

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
        manager.textContent += "Todd McLellan"
    }

    if (selectedTeam == "10") {

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
        manager.textContent += "Kris Knoblauch"
    }

    if (selectedTeam == "11") {

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
        manager.textContent += "Paul Maurice"
    }

    if (selectedTeam == "12") {

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
        manager.textContent += "Jim Hiller"
    }

    if (selectedTeam == "13") {

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
        manager.textContent += "John Hynes"
    }

    if (selectedTeam == "14") {

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
        manager.textContent += "Martin St Louis"
    }

    if (selectedTeam == "15") {

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
        manager.textContent += "Andrew Brunette"
    }

    if (selectedTeam == "16") {

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
        manager.textContent += "Sheldon Keefe"
    }

    if (selectedTeam == "17") {

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
        manager.textContent += "Patrick Roy"
    }

    if (selectedTeam == "18") {

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
        manager.textContent += "Vacant"
    }

    if (selectedTeam == "19") {

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
        manager.textContent += "Travis Green"
    }

    if (selectedTeam == "20") {

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
        manager.textContent += "Brad Shaw"
    }

    if (selectedTeam == "21") {

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
        manager.textContent += "Mike Sullivan"
    }

    if (selectedTeam == "22") {

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
        manager.textContent += "Ryan Warsofsky"
    }

    if (selectedTeam == "23") {

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
        manager.textContent += "Vacant"
    }

    if (selectedTeam == "24") {

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
        manager.textContent += "Jim Montgomery"
    }

    if (selectedTeam == "25") {

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
        manager.textContent += "Jon Cooper"
    }

    if (selectedTeam == "26") {

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
        manager.textContent += "Craig Berube"
    }

    if (selectedTeam == "27") {

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
        manager.textContent += "Andre Tourigny"
    }

    if (selectedTeam == "28") {

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
        manager.textContent += "Rick Tocchet"
    }

    if (selectedTeam == "29") {

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
        manager.textContent += "Bruce Cassidy"
    }

    if (selectedTeam == "30") {

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
        manager.textContent += "Spencer Carbery"
    }

    if (selectedTeam == "31") {

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
        manager.textContent += "Scott Arniel"
    }
    // substitutes.innerHTML = substitutes.innerHTML.replace(/,/g, ' •');
}