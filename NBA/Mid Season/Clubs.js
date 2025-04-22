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

    PG3.style.fontWeight = "400";
    SG3.style.fontWeight = "400";
    SF3.style.fontWeight = "400";
    PF3.style.fontWeight = "400";
    C3.style.fontWeight = "400";

    updatePlayerInfo();
});

let selectedTeam = 0;

function updatePlayerInfo() {

    selectedTeam = teamSelector.value;
    manager.style.fontSize = "46px";
    manager.textContent = "Head Coach: "
    // substitutes.innerHTML = "Substitutes: "

    if (selectedTeam == "50") {

        PG.textContent = "La Ball";
        SG.textContent = "L Doncic";
        SF.textContent = "S Gilgeous-A";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "N Jokic";

        PG3.textContent = "29.5 PPG";
        SG3.textContent = "28.1 PPG";
        SF3.textContent = "31.6 PPG";
        PF3.textContent = "31.4 PPG";
        C3.textContent = "30.4 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg";

        sidepic.src = "/NBA/basket_img/logos/nba.gif"
        manager.innerHTML = "Best Head Coach: Kenny Atkinson"
        manager.style.fontSize = "42px";
        SF3.style.fontWeight = "1000";
    }

    if (selectedTeam == "0") {

        PG.textContent = "T Young";
        SG.textContent = "D Daniels";
        SF.textContent = "D Hunter";
        PF.textContent = "J Johnson";
        C.textContent = "O Okongwu";

        PG3.textContent = "23.1 PPG";
        SG3.textContent = "13.0 PPG";
        SF3.textContent = "19.4 PPG";
        PF3.textContent = "19.8 PPG";
        C3.textContent = "11.2 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/atlanta.gif";
        manager.textContent += "Quin Snyder"
        PG3.style.fontWeight = "1000";
    }    

    if (selectedTeam == "1") {

        PG.textContent = "D White";
        SG.textContent = "P Pritchard";
        SF.textContent = "J Brown";
        PF.textContent = "J Tatum";
        C.textContent = "K Porzingis";

        PG3.textContent = "16.1 PPG";
        SG3.textContent = "14.5 PPG";
        SF3.textContent = " 23.3 PPG";
        PF3.textContent = "27.8 PPG";
        C3.textContent = "18.8 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/boston.gif";
        manager.textContent += "Joe Mazzulla"
        PF3.style.fontWeight = "1000";
    }

    if (selectedTeam == "2") {

        PG.textContent = "D Schroder";
        SG.textContent = "C Thomas";
        SF.textContent = "Z Williams";
        PF.textContent = "C Johnson";
        C.textContent = "D Finney-Smith";

        PG3.textContent = "18.4 PPG";
        SG3.textContent = "24.7 PPG";
        SF3.textContent = "9.7 PPG";
        PF3.textContent = "19.6 PPG";
        C3.textContent = "10.4 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/brooklyn.gif";
        manager.textContent += "Jordi Fernandez"
        SG3.style.fontWeight = "1000";
    }

    if (selectedTeam == "3") {

        PG.textContent = "La Ball";
        SG.textContent = "Tr Mann";
        SF.textContent = "B Miller";
        PF.textContent = "Mil Bridges";
        C.textContent = "M Williams";

        PG3.textContent = "29.5 PPG";
        SG3.textContent = "14.1 PPG";
        SF3.textContent = "21.0 PPG";
        PF3.textContent = "18.4 PPG";
        C3.textContent = "14.5 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/charlotte.gif";
        manager.textContent += "Charles Lee"
        PG3.style.fontWeight = "1000";
    }

    if (selectedTeam == "4") {

        PG.textContent = "C White";
        SG.textContent = "A Dosunmu";
        SF.textContent = "Z LaVine";
        PF.textContent = "P Williams";
        C.textContent = "N Vucevic";

        PG3.textContent = "18.5 PPG";
        SG3.textContent = "12.3 PPG";
        SF3.textContent = "23.6 PPG";
        PF3.textContent = "9.3 PPG";
        C3.textContent = "20.6 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/chicago.gif";
        manager.textContent += "Billy Donovan"
        SF3.style.fontWeight = "1000";
    }

    if (selectedTeam == "5") {

        PG.textContent = "D Garland";
        SG.textContent = "D Mitchell";
        SF.textContent = "C LeVert";
        PF.textContent = "E Mobley";
        C.textContent = "J Allen";

        PG3.textContent = "21.0 PPG";
        SG3.textContent = "22.7 PPG";
        SF3.textContent = "11.1 PPG";
        PF3.textContent = "18.6 PPG";
        C3.textContent = "14.1 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/cleveland.gif";
        manager.textContent += "Kenny Atkinson"
        SG3.style.fontWeight = "1000";
    }

    if (selectedTeam == "6") {

        PG.textContent = "L Doncic";
        SG.textContent = "K Irving";
        SF.textContent = "K Thompson";
        PF.textContent = "PJ Washington";
        C.textContent = "D Gafford";

        PG3.textContent = "28.1 PPG";
        SG3.textContent = "23.9 PPG";
        SF3.textContent = "13.7 PPG";
        PF3.textContent = "13.1 PPG";
        C3.textContent = "11.7 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/dallas.gif";
        manager.textContent += "Jason Kidd"
        PG3.style.fontWeight = "1000";
    }

    if (selectedTeam == "7") {

        PG.textContent = "J Murray";
        SG.textContent = "C Braun";
        SF.textContent = "M Porter Jr";
        PF.textContent = "A Gordon";
        C.textContent = "N Jokic";

        PG3.textContent = "20.1 PPG";
        SG3.textContent = "13.6 PPG";
        SF3.textContent = "18.3 PPG";
        PF3.textContent = "13.5 PPG";
        C3.textContent = "30.4 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/denver.gif";
        manager.textContent += "Michael Malone"
        C3.style.fontWeight = "1000";
    }

    if (selectedTeam == "8") {

        PG.textContent = "C Cunningham";
        SG.textContent = "J Ivey";
        SF.textContent = "M Beasley";
        PF.textContent = "T Harris";
        C.textContent = "J Duren";

        PG3.textContent = "24.4 PPG";
        SG3.textContent = "17.6 PPG";
        SF3.textContent = "16.1 PPG";
        PF3.textContent = "13.2 PPG";
        C3.textContent = "9.7 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/detroit.gif";
        manager.textContent += "JB Bickerstaff"
        PG3.style.fontWeight = "1000";
    }

    if (selectedTeam == "9") {

        PG.textContent = "S Curry";
        SG.textContent = "D Schroder";
        SF.textContent = "B Hield";
        PF.textContent = "An Wiggins";
        C.textContent = "J Kuminga";

        PG3.textContent = "22.9 PPG";
        SG3.textContent = "10.2 PPG";
        SF3.textContent = "12.5 PPG";
        PF3.textContent = "16.8 PPG";
        C3.textContent = "16.8 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/golden state.gif";
        manager.textContent += "Steve Kerr"
        PG3.style.fontWeight = "1000";
    }

    if (selectedTeam == "10") {

        PG.textContent = "F VanVleet";
        SG.textContent = "J Green";
        SF.textContent = "D Brooks";
        PF.textContent = "J Smith Jr";
        C.textContent = "A Sengun";

        PG3.textContent = "15.0 PPG";
        SG3.textContent = "21.5 PPG";
        SF3.textContent = "13.0 PPG";
        PF3.textContent = "11.9 PPG";
        C3.textContent = "19.3 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/houston.gif";
        manager.textContent += "Ime Udoka"
        SG3.style.fontWeight = "1000";
    }

    if (selectedTeam == "11") {

        PG.textContent = "T Haliburton";
        SG.textContent = "A Nembhard";
        SF.textContent = "B Mathurin";
        PF.textContent = "P Siakam";
        C.textContent = "M Turner";

        PG3.textContent = "18.1 PPG";
        SG3.textContent = "10.7 PPG";
        SF3.textContent = "16.5 PPG";
        PF3.textContent = "20.1 PPG";
        C3.textContent = "15.4 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/indiana.gif";
        manager.textContent += "Rick Carlisle"
        PF3.style.fontWeight = "1000";

    }

    if (selectedTeam == "12") {

        PG.textContent = "J Harden";
        SG.textContent = "N Powell";
        SF.textContent = "A Coffey";
        PF.textContent = "D Jones Jr";
        C.textContent = "I Zubac";

        PG3.textContent = "21.4 PPG";
        SG3.textContent = "23.7 PPG";
        SF3.textContent = "10.4 PPG";
        PF3.textContent = "9.8 PPG";
        C3.textContent = "14.9 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/la clippers.gif";
        manager.textContent += "Tyronn Lue"
        SG3.style.fontWeight = "1000";

    }

    if (selectedTeam == "13") {

        PG.textContent = "D Russell";
        SG.textContent = "A Reaves";
        SF.textContent = "L James";
        PF.textContent = "R Hachimura";
        C.textContent = "A Davis";

        PG3.textContent = "12.4 PPG";
        SG3.textContent = "18.5 PPG";
        SF3.textContent = "23.8 PPG";
        PF3.textContent = "12.1 PPG";
        C3.textContent = "25.8 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/la lakers.gif";
        manager.textContent += "JJ Redick"
        C3.style.fontWeight = "1000";

    }

    if (selectedTeam == "14") {

        PG.textContent = "J Morant";
        SG.textContent = "D Bane";
        SF.textContent = "J Wells";
        PF.textContent = "S Aldama";
        C.textContent = "J Jackson Jr";

        PG3.textContent = "21.4 PPG";
        SG3.textContent = "17.3 PPG";
        SF3.textContent = "11.8 PPG";
        PF3.textContent = "13.3 PPG";
        C3.textContent = "22.6 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/memphis.gif";
        manager.textContent += "Taylor Jenkins"
        C3.style.fontWeight = "1000";

    }

    if (selectedTeam == "15") {

        PG.textContent = "T Rozier III";
        SG.textContent = "T Herro";
        SF.textContent = "J Butler";
        PF.textContent = "N Jovic";
        C.textContent = "B Adebayo";

        PG3.textContent = "11.8 PPG";
        SG3.textContent = "24.2 PPG";
        SF3.textContent = "17.6 PPG";
        PF3.textContent = "10.0 PPG";
        C3.textContent = "16.0 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/miami.gif";
        manager.textContent += "Erik Spoelstra"
        SG3.style.fontWeight = "1000";

    }

    if (selectedTeam == "16") {

        PG.textContent = "D Lillard";
        SG.textContent = "G Trent Jr";
        SF.textContent = "K Middleton";
        PF.textContent = "G Antetokounmpo";
        C.textContent = "B Portis";

        PG3.textContent = "25.0 PPG";
        SG3.textContent = "9.6 PPG";
        SF3.textContent = "12.6 PPG";
        PF3.textContent = "31.4 PPG";
        C3.textContent = "13.5 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/milwaukee.gif";
        manager.textContent += "Doc Rivers"
        PF3.style.fontWeight = "1000";

    }

    if (selectedTeam == "17") {

        PG.textContent = "D DiVincenzo";
        SG.textContent = "A Edwards";
        SF.textContent = "J Randle";
        PF.textContent = "R Gobert";
        C.textContent = "N Reid";

        PG3.textContent = "11.0 PPG";
        SG3.textContent = "26.1 PPG";
        SF3.textContent = "19.2 PPG";
        PF3.textContent = "10.0 PPG";
        C3.textContent = "13.2 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/minnesota.gif";
        manager.textContent += "Chris Finch"
        SG3.style.fontWeight = "1000";

    }

    if (selectedTeam == "18") {

        PG.textContent = "D Murray";
        SG.textContent = "CJ McCollum";
        SF.textContent = "T Murphy III";
        PF.textContent = "B Ingram";
        C.textContent = "H Jones";

        PG3.textContent = "16.8 PPG";
        SG3.textContent = "21.6 PPG";
        SF3.textContent = "21.5 PPG";
        PF3.textContent = "22.2 PPG";
        C3.textContent = "10.3 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/new orleans.gif";
        manager.textContent += "Willie Green"
        PF3.style.fontWeight = "1000";

    }

    if (selectedTeam == "19") {

        PG.textContent = "J Brunson";
        SG.textContent = "Mik Bridges";
        SF.textContent = "J Hart";
        PF.textContent = "OG Anunoby";
        C.textContent = "KA Towns";

        PG3.textContent = "26.0 PPG";
        SG3.textContent = "17.9 PPG";
        SF3.textContent = "14.2 PPG";
        PF3.textContent = "16.0 PPG";
        C3.textContent = "25.4 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/new york.gif";
        manager.textContent += "Tom Thibodeau"
        PG3.style.fontWeight = "1000";

    }

    if (selectedTeam == "20") {

        PG.textContent = "S Gilgeous-A";
        SG.textContent = "L Dort";
        SF.textContent = "Jal Williams"
        PF.textContent = "I Hartenstein";
        C.textContent = "C Holmgren";

        PG3.textContent = "31.6 PPG";
        SG3.textContent = "10.2 PPG";
        SF3.textContent = "20.6 PPG";
        PF3.textContent = "11.8 PPG";
        C3.textContent = "16.4 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/oklahoma city.gif";
        manager.textContent += "Mark Daigneault"
        PG3.style.fontWeight = "1000";

    }

    if (selectedTeam == "21") {

        PG.textContent = "J Suggs";
        SG.textContent = "K Caldwell-P";
        SF.textContent = "F Wagner";
        PF.textContent = "G Bitadze";
        C.textContent = "M Wagner";

        PG3.textContent = "16.4 PPG";
        SG3.textContent = "9.0 PPG";
        SF3.textContent = "24.4 PPG";
        PF3.textContent = "9.6 PPG";
        C3.textContent = "12.9 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/orlando.gif";
        manager.textContent += "Jamahl Mosley"
        SF3.style.fontWeight = "1000";
    }

    if (selectedTeam == "22") {

        PG.textContent = "T Maxey";
        SG.textContent = "P George";
        SF.textContent = "K Oubre Jr";
        PF.textContent = "G Yabusele";
        C.textContent = "J Embiid";

        PG3.textContent = "26.0 PPG";
        SG3.textContent = "17.2 PPG";
        SF3.textContent = "13.4 PPG";
        PF3.textContent = "10.1 PPG";
        C3.textContent = "24.4 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/philadelphia.gif";
        manager.textContent += "Nick Nurse"
        PG3.style.fontWeight = "1000";

    }

    if (selectedTeam == "23") {

        PG.textContent = "B Beal";
        SG.textContent = "D Booker";
        SF.textContent = "G Allen";
        PF.textContent = "K Durant";
        C.textContent = "J Nurkic";

        PG3.textContent = "17.5 PPG";
        SG3.textContent = "25.5 PPG";
        SF3.textContent = "11.2 PPG";
        PF3.textContent = "27.1 PPG";
        C3.textContent = "8.6 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/phoenix.gif";
        manager.textContent += "Mike Budenholzer"
        PF3.style.fontWeight = "1000";

    }

    if (selectedTeam == "24") {

        PG.textContent = "A Simons";
        SG.textContent = "S Sharpe";
        SF.textContent = "D Avdija";
        PF.textContent = "J Grant";
        C.textContent = "D Ayton";

        PG3.textContent = "18.2 PPG";
        SG3.textContent = "18.2 PPG";
        SF3.textContent = "14.0 PPG";
        PF3.textContent = "15.0 PPG";
        C3.textContent = "13.5 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/portland.gif";
        manager.textContent += "Chauncey Billups"
        PG3.style.fontWeight = "1000";
        SG3.style.fontWeight = "1000";
    }

    if (selectedTeam == "25") {

        PG.textContent = "D Fox";
        SG.textContent = "M Monk";
        SF.textContent = "D DeRozan";
        PF.textContent = "K Murray";
        C.textContent = "D Sabonis";

        PG3.textContent = "26.3 PPG";
        SG3.textContent = "17.5 PPG";
        SF3.textContent = "21.5 PPG";
        PF3.textContent = "12.1 PPG";
        C3.textContent = "20.6 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/sacramento.gif";
        manager.textContent += "Doug Christie"
        PG3.style.fontWeight = "1000";

    }

    if (selectedTeam == "26") {

        PG.textContent = "S Castle";
        SG.textContent = "D Vassell";
        SF.textContent = "K Johnson";
        PF.textContent = "J Sochan";
        C.textContent = "V Wembanyama";

        PG3.textContent = "11.6 PPG";
        SG3.textContent = "16.0 PPG";
        SF3.textContent = "12.4 PPG";
        PF3.textContent = "13.4 PPG";
        C3.textContent = "24.5 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/san antonio.gif";
        manager.textContent += "Gregg Popovich"
        C3.style.fontWeight = "1000";

    }

    if (selectedTeam == "27") {

        PG.textContent = "I Quickley";
        SG.textContent = "G Dick";
        SF.textContent = "RJ Barrett";
        PF.textContent = "S Barnes";
        C.textContent = "J Poeltl";

        PG3.textContent = "16.2 PPG";
        SG3.textContent = "16.1 PPG";
        SF3.textContent = "22.4 PPG";
        PF3.textContent = "19.9 PPG";
        C3.textContent = "14.8 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/toronto.gif";
        manager.textContent += "Darko Rajakovic"
        SF3.style.fontWeight = "1000";

    }

    if (selectedTeam == "28") {

        PG.textContent = "C Sexton";
        SG.textContent = "K George";
        SF.textContent = "L Markkanen";
        PF.textContent = "J Collins";
        C.textContent = "W Kessler";

        PG3.textContent = "18.3 PPG";
        SG3.textContent = "16.3 PPG";
        SF3.textContent = "20.1 PPG";
        PF3.textContent = "17.9 PPG";
        C3.textContent = "10.8 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/utah.gif";
        manager.textContent += "Will Hardy"
        SF3.style.fontWeight = "1000";

    }

    if (selectedTeam == "29") {

        PG.textContent = "M Brogdon";
        SG.textContent = "J Poole";
        SF.textContent = "B Coulibaly";
        PF.textContent = "K Kuzma";
        C.textContent = "A Sarr";

        PG3.textContent = "13.8 PPG";
        SG3.textContent = "21.4 PPG";
        SF3.textContent = "12.4 PPG";
        PF3.textContent = "14.1 PPG";
        C3.textContent = "11.8 PPG";

        PG2.src = "/NBA/basket_img/players/" + PG.textContent + ".jpg";
        SG2.src = "/NBA/basket_img/players/" + SG.textContent + ".jpg";
        SF2.src = "/NBA/basket_img/players/" + SF.textContent + ".jpg";
        PF2.src = "/NBA/basket_img/players/" + PF.textContent + ".jpg";
        C2.src = "/NBA/basket_img/players/" + C.textContent + ".jpg"

        sidepic.src = "/NBA/basket_img/logos/washington.gif";
        manager.textContent += "Brian Keefe"
        SG3.style.fontWeight = "1000";
    }
}