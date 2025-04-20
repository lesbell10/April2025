const teamSelector = document.querySelector(".teamSelector")
const SG = document.getElementById("SG");
const SG2 = document.getElementById("SG2");
const PG = document.getElementById("PG");
const PG2 = document.getElementById("PG2");
const SF = document.getElementById("SF");
const SF2 = document.getElementById("SF2");
const PF = document.getElementById("PF");
const PF2 = document.getElementById("PF2");
const C = document.getElementById("C");
const C2 = document.getElementById("C2");
const PG3 = document.getElementById("PG3");
const SG3 = document.getElementById("SG3");
const SF3 = document.getElementById("SF3");
const PF3 = document.getElementById("PF3");
const C3 = document.getElementById("C3");
const sidepic = document.querySelector(".sidepic");
const manager = document.querySelector(".manager")
const message = document.querySelector(".message")

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

    updatePlayerInfo();
});

let selectedTeam = 0;

function updatePlayerInfo() {

    selectedTeam = teamSelector.value;
    manager.style.fontSize = "46px";
    manager.textContent = "Head Coach: "
    // substitutes.innerHTML = "Substitutes: "
    message.style.display = "none"

    if (selectedTeam == "50") {

        PG.textContent = "S Gilgeous-Alexander";
        SG.textContent = "L Doncic";
        SF.textContent = "A Edwards";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "N Jokic";

        PG3.textContent = "32.7 PPG";
        SG3.textContent = "28.2 PPG";
        SF3.textContent = "27.6 PPG";
        PF3.textContent = "30.4 PPG";
        C3.textContent = "29.6 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/nba.gif"
        manager.innerHTML = "Best Head Coach: Erik Spoelstra"
        manager.style.fontSize = "42px";
        message.style.display = "block"
   }

    if (selectedTeam == "0") {

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
        manager.textContent += "Quin Snyder"
        message.style.display = "block"
    }    

    if (selectedTeam == "1") {

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
        manager.textContent += "Joe Mazzulla"
    }

    if (selectedTeam == "2") {

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
        manager.textContent += "Jordi Fernandez"
    }

    if (selectedTeam == "3") {

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
        manager.textContent += "Charles Lee"
    }

    if (selectedTeam == "4") {

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
        manager.textContent += "Billy Donovan"
   }

    if (selectedTeam == "5") {

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
        manager.textContent += "Kenny Atkinson"
    }

    if (selectedTeam == "6") {

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
        manager.textContent += "Jason Kidd"
    }

    if (selectedTeam == "7") {

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
        manager.textContent += "David Adelman"
    }

    if (selectedTeam == "8") {

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
        manager.textContent += "JB Bickerstaff"
    }

    if (selectedTeam == "9") {

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
        manager.textContent += "Steve Kerr"

    }

    if (selectedTeam == "10") {

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
        manager.textContent += "Ime Udoka"
    }

    if (selectedTeam == "11") {

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
        manager.textContent += "Rick Carlisle"
    }

    if (selectedTeam == "12") {

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
        manager.textContent += "Tyronn Lue"
    }

    if (selectedTeam == "13") {

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
        manager.textContent += "JJ Redick"
    }

    if (selectedTeam == "14") {

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
        manager.textContent += "Tuomas Iisalo"
    }

    if (selectedTeam == "15") {

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
        manager.textContent += "Erik Spoelstra"
    }

    if (selectedTeam == "16") {

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
        manager.textContent += "Doc Rivers"
    }
    

    if (selectedTeam == "17") {

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
        manager.textContent += "Chris Finch"
    }

    if (selectedTeam == "18") {

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
        manager.textContent += "Willie Green"
    }

    if (selectedTeam == "19") {

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
        manager.textContent += "Tom Thibodeau"
    }

    if (selectedTeam == "20") {

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
        manager.textContent += "Mark Daigneault"
    }

    if (selectedTeam == "21") {

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
        manager.textContent += "Jamahl Mosley"
   }

    if (selectedTeam == "22") {

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
        manager.textContent += "Nick Nurse"
    }

    if (selectedTeam == "23") {

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
        manager.textContent += "Mike Budenholzer"
    }

    if (selectedTeam == "24") {

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
        manager.textContent += "Chauncey Billups"
    }

    if (selectedTeam == "25") {

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
        manager.textContent += "Doug Christie"
    }

    if (selectedTeam == "26") {

        PG.textContent = "D Fox";
        SG.textContent = "S Castle";
        SF.textContent = "D Vassell";
        PF.textContent = "K Johnson";
        C.textContent = "V Wembanyama";

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
        manager.textContent += "Gregg Popovich"
    }

    if (selectedTeam == "27") {

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
        manager.textContent += "Darko Rajakovic"
    }

    if (selectedTeam == "28") {

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
        manager.textContent += "Will Hardy"
    }

    if (selectedTeam == "29") {

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
        manager.textContent += "Brian Keefe"
    }
}