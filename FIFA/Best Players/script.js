import { Everything } from "/FIFA/FIFAMaster 3.js";

// Position Elements - Team 1
const STL = document.querySelector('.STL');
const STL2 = document.querySelector('.STL2');
const STC = document.querySelector('.STC');
const STC2 = document.querySelector('.STC2');
const STR = document.querySelector('.STR');
const STR2 = document.querySelector('.STR2');
const LW = document.querySelector('.LW');
const LW2 = document.querySelector('.LW2');
const LF = document.querySelector('.LF');
const LF2 = document.querySelector('.LF2');
const AMLC = document.querySelector('.AMLC');
const AMLC2 = document.querySelector('.AMLC2');
const AMC = document.querySelector('.AMC');
const AMC2 = document.querySelector('.AMC2');
const AMRC = document.querySelector('.AMRC');
const AMRC2 = document.querySelector('.AMRC2');
const RF = document.querySelector('.RF');
const RF2 = document.querySelector('.RF2');
const RW = document.querySelector('.RW');
const RW2 = document.querySelector('.RW2');
const WL = document.querySelector('.WL');
const WL2 = document.querySelector('.WL2');
const LCM = document.querySelector('.LCM');
const LCM2 = document.querySelector('.LCM2');
const CM = document.querySelector('.CM');
const CM2 = document.querySelector('.CM2');
const RCM = document.querySelector('.RCM');
const RCM2 = document.querySelector('.RCM2');
const WR = document.querySelector('.WR');
const WR2 = document.querySelector('.WR2');
const DM = document.querySelector('.DM');
const DM2 = document.querySelector('.DM2');
const LB = document.querySelector('.LB');
const LB2 = document.querySelector('.LB2');
const LCB = document.querySelector('.LCB');
const LCB2 = document.querySelector('.LCB2');
const CB = document.querySelector('.CB');
const CB2 = document.querySelector('.CB2');
const RCB = document.querySelector('.RCB');
const RCB2 = document.querySelector('.RCB2');
const RB = document.querySelector('.RB');
const RB2 = document.querySelector('.RB2');
const GK = document.querySelector('.GK');
const GK2 = document.querySelector('.GK2');

// UI Elements
const teamSelector = document.querySelector(".teamSelector");
const sidepic = document.querySelector(".sidepic");
const title = document.querySelector(".title");

document.addEventListener("DOMContentLoaded", () => {
    const savedTeam = localStorage.getItem("selectedTeam");
    if (savedTeam) {
        teamSelector.value = savedTeam;
        updatePlayerInfo();
    }
});

teamSelector.addEventListener("change", () => {
    localStorage.setItem("selectedTeam", teamSelector.value);
    updatePlayerInfo();
});

let selectedTeam = 0;

function Three_Def() {
    if (CB.textContent !== "") {
        LCB.style.left = "23%";
        LCB2.style.left = "23%";
        RCB.style.left = "67%";
        RCB2.style.left = "67%";
    }
}

function setPlayerImage(element, imgElement) {
    if (element.textContent !== "") {
        imgElement.src = "/FIFA/football_img/players/" + element.textContent + ".webp";
        imgElement.style.border = '1px solid';
    } else {
        imgElement.src = "";
        imgElement.style.border = 'none';
    }
}

function updatePlayerInfo() {
    title.innerHTML = " FIFA<br>BEST PLAYERS";
    sidepic.style.borderRadius = "10px";
    sidepic.style.border = "none";
    sidepic.style.width = "120px";
    sidepic.style.height = "120px";
    sidepic.style.bottom = "69%"

    selectedTeam = teamSelector.value;
    Everything();

    if (selectedTeam == "0") {

        title.innerHTML = "BEST<br>FIFA PLAYERS"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Haaland";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Vinicius Jr";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Yamal";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Mbappe";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Camavinga";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Bellingham";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "A Balde";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Saliba";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Cubarsi";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "J Timber";
        setPlayerImage(RB, RB2);
        GK.textContent = "Donnarumma";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
    }

    if (selectedTeam == "1") {

        title.innerHTML = "BEST <br>FIFA PLAYERS"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Osimhen";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Kvaratskhelia";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Musiala";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Foden";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "D Rice";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Pedri";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "A Davies";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Bastoni";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Araujo";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Kounde";
        setPlayerImage(RB, RB2);
        GK.textContent = "D Costa";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        LW.style.left = "0"
    }

    if (selectedTeam == "2") {

        title.innerHTML = "BEST <br>FIFA PLAYERS"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Marmoush";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "R Leao";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Wirtz";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Saka";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Zaire-Emery";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Gavi";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Gvardiol";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Konate";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "A Gray";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Gusto";
        setPlayerImage(RB, RB2);
        GK.textContent = "Mamardashvili";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        LCM.style.left = "100px"
    }

    if (selectedTeam == "3") {

        title.innerHTML = "NATIONS LEAGUE<br>QUARTER-FINALS"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Oyarzabal";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "N Williams";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Olmo";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "L Yamal";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "F Ruiz";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Zubimendi";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Cucurella";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Huijsen";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Le Normand";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Mingueza";
        setPlayerImage(RB, RB2);
        GK.textContent = "U Simon";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/spain.webp";
        RB.style.left = "82%"
        sidepic.style.width = "130px"
        sidepic.style.height = "130px"
        sidepic.style.borderRadius = "50%"
    }

    if (selectedTeam == "4") {

        title.innerHTML = "NATIONS LEAGUE<br>QUARTER-FINALS"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Depay";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Gakpo";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "J Kluivert";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Frimpong";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "F de Jong";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Reijnders";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Maatsen";
        setPlayerImage(LB, LB2);
        LCB.textContent = "van Dijk";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "van Hecke";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Geertruida";
        setPlayerImage(RB, RB2);
        GK.textContent = "Verbruggen";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/netherlands.webp";
        RB.style.left = "80%"
        sidepic.style.width = "130px"
        sidepic.style.height = "130px"
        sidepic.style.borderRadius = "50%"
    }

    if (selectedTeam == "6") {

        title.innerHTML = "FIFA BEST<BR>PLAYERS 2024-25"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Dovbyk";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "Pellegrini";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "Dybala";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "";
        setPlayerImage(RW, RW2);
        WL.textContent = "Angelino";
        setPlayerImage(WL, WL2);
        LCM.textContent = "L Paredes";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "M Kone";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "Saelema.";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Ndicka";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "Hummels";
        setPlayerImage(CB, CB2);
        RCB.textContent = "G Mancini";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "";
        setPlayerImage(RB, RB2);
        GK.textContent = "Svilar";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/roma.webp";
        RB.style.left = "88%"
        RCM.style.left = "330px"
        WL.style.left = "0"
        WR.style.left = "455px"
        AMLC.style.left = "155px"
        LCB.style.left = "110px"
        CB.style.left = "230px"
        sidepic.style.boxShadow = "none"
    }

    if (selectedTeam == "7") {

        title.innerHTML = "FIFA BEST PLAYERS <BR>2005 to 2025"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Dzeko";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Cassano";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Totti";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Salah";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "De Rossi";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Pjanic";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Kolarov";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Manolas";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Rudiger";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Maicon";
        setPlayerImage(RB, RB2);
        GK.textContent = "Alisson";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/roma.webp";
        RB.style.left = "83%"
        sidepic.style.boxShadow = "none"
    }

    if (selectedTeam == "8") {

        title.innerHTML = "FIFA BEST<BR>PLAYERS 2024-25"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Kane";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Foden";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Bellingham";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Saka";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "D Rice";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Gallagher";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Lewis-S";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Guehi";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Stones";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Alexander-A";
        setPlayerImage(RB, RB2);
        GK.textContent = "Pickford";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/england.webp";
        RB.style.left = "76%"
        sidepic.style.borderRadius = "50%"
    }

    if (selectedTeam == "9") {

        title.innerHTML = "FIFA BEST<BR>PLAYERS 2024-25"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Rashford";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Grealish";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "C Jones";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Palmer";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Mount";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Maddison";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "L Shaw";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Tomori";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Konsa";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Walker";
        setPlayerImage(RB, RB2);
        GK.textContent = "Ramsdale";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/england.webp";
        RB.style.left = "88%"
        sidepic.style.borderRadius = "50%"
    }

    if (selectedTeam == "10") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>EVERY YEAR"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Rooney";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "C Ronaldo";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Iniesta";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Messi";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Schwein.";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Xavi";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Lahm";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Pique";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Vidic";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "S Ramos";
        setPlayerImage(RB, RB2);
        GK.textContent = "Casillas";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "88%"
    }

    if (selectedTeam == "11") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>EVERY YEAR"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "D Villa";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "C Ronaldo";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Rooney";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Messi";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Gerrard";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Xavi";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Chiellini";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Puyol";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Vidic";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Maicon";
        setPlayerImage(RB, RB2);
        GK.textContent = "Casillas";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "88%"
    }

    if (selectedTeam == "12") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>EVERY YEAR"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Torres";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "C Ronaldo";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Rooney";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Messi";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Gerrard";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Fabregas";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Lahm";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Puyol";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Vidic";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "D Alves";
        setPlayerImage(RB, RB2);
        GK.textContent = "Casillas";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "88%"
    }

    if (selectedTeam == "13") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>EVERY YEAR"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Ibrahimovic";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "C Ronaldo";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Kaka";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Messi";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Pirlo";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Gerrard";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Lahm";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Puyol";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Nesta";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "D Alves";
        setPlayerImage(RB, RB2);
        GK.textContent = "Buffon";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "88%"
    }

    if (selectedTeam == "14") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>2005 to 2025"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Rooney";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Sterling";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Lampard";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Beckham";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Carrick";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Gerrard";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "A Cole";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Ferdinand";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Terry";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Walker";
        setPlayerImage(RB, RB2);
        GK.textContent = "J Hart";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/england.webp";
        sidepic.style.border = "3px solid black"
        sidepic.style.borderRadius = "50%"
        RB.style.left = "85%"
    }

    if (selectedTeam == "15") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>2005 to 2025"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Kane";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Rashford";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Bellingham";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Saka";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "J Henderson";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "D Rice";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "L Shaw";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Maguire";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Campbell";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Alexander-";
        setPlayerImage(RB, RB2);
        GK.textContent = "Pickford";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/england.webp";
        RB.style.left = "75%"
    }

    if (selectedTeam == "16") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-25"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Havertz";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Musiala";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Wirtz";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Sane";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Kimmich";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Gundogan";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Raum";
        setPlayerImage(LB, LB2);
        LCB.textContent = "J Tah";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Rudiger";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Henrichs";
        setPlayerImage(RB, RB2);
        GK.textContent = "ter Stegen";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/germany.webp";
        RB.style.left = "80%"
    }

    if (selectedTeam == "17") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-25"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Fullkrug";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Gnabry";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Brandt";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Adeyemi";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Goretzka";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Andrich";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Mittelstadt";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Schlotterbeck";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "E Can";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Groß";
        setPlayerImage(RB, RB2);
        GK.textContent = "Neuer";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/germany.webp";
        RB.style.left = "89%"
        LB.style.left = "-20px"
        LCB.style.left = "120px"
    }

        if (selectedTeam == "18") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>EVERY YEAR"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Ibrahimovic";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Ronaldinho";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Kaka";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "C Ronaldo";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Essien";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Xavi";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Evra";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Vidic";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Pepe";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Maicon";
        setPlayerImage(RB, RB2);
        GK.textContent = "Buffon";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
            RB.style.left = "83%"
            RW.style.left = "440px"
    }

    if (selectedTeam == "19") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>EVERY YEAR"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Drogba";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Ronaldinho";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Kaka";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Totti";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Pirlo";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Xavi";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Evra";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Ferdinand";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Cannavaro";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "S Ramos";
        setPlayerImage(RB, RB2);
        GK.textContent = "Buffon";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "80%"
    }

    if (selectedTeam == "20") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>EVERY YEAR"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Henry";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Robben";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Ronaldinho";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Beckham";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Vieira";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Xavi";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "A Cole";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Cannavaro";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Puyol";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Lahm";
        setPlayerImage(RB, RB2);
        GK.textContent = "Cech";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "88%"
    }

    if (selectedTeam == "21") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>EVERY YEAR"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Eto'o";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Ronaldinho";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Zidane";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Figo";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Vieira";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Gerrard";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Zambrotta";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Terry";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Cannavaro";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Cafu";
        setPlayerImage(RB, RB2);
        GK.textContent = "Dida";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "87%"
        LB.style.left = "-20px"
    }

    if (selectedTeam == "22") {

        title.innerHTML = "FIFA BEST PLAYERS<BR> IN 2024-25"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "C Ronaldo";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "R Leao";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "B Fernandes";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "B Silva";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Palhinha";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Vitinha";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "N Mendes";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Inacio";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "R Dias";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Cancelo";
        setPlayerImage(RB, RB2);
        GK.textContent = "D Costa";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/portugal.webp";
        RB.style.left = "83%"
    }

    if (selectedTeam == "23") {

        title.innerHTML = "FIFA BEST PLAYERS<BR> IN 2024-25"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "D Jota";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "P Goncalves";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "J Felix";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "P Neto";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "R Neves";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "J Neves";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "R Guerreiro";
        setPlayerImage(LB, LB2);
        LCB.textContent = "D Pereira";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "A Silva";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "M Nunes";
        setPlayerImage(RB, RB2);
        GK.textContent = "J Sa";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/portugal.webp";
        RB.style.left = "80%"
        LB.style.left = "-20px"
    }

    if (selectedTeam == "24") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>2005 to 2025"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "C Ronaldo";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Quaresma";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "B Silva";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "B Fernandes";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "J Moutinho";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Deco";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "R Guerreiro";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Pepe";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Carvalho";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Cancelo";
        setPlayerImage(RB, RB2);
        GK.textContent = "R Patricio";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/portugal.webp";
        RB.style.left = "83%"
        LCM.style.left = "60px"
        CM.style.left = "230px"
        LB.style.left = "-20px"
        RB.style.left = "465px"
    }

    if (selectedTeam == "25") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>2005 to 2025"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "D Jota";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "R Leao";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Nani";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "M Veloso";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "W Carvalho";
        setPlayerImage(CM, CM2);
        RCM.textContent = "R Neves";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "N Mendes";
        setPlayerImage(LB, LB2);
        LCB.textContent = "D Pereira";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "R Dias";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Semedo";
        setPlayerImage(RB, RB2);
        GK.textContent = "J Sa";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/portugal.webp";
        RB.style.left = "83%"
        LCM.style.left = "100px"
        CM.style.left = "210px"
        RB.style.left = "460px"
    }

    if (selectedTeam == "26") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>2005 to 2025"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Klose";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Sane";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Ozil";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Reus";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Schwein.";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Kroos";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Lahm";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Rudiger";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Hummels";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Kimmich";
        setPlayerImage(RB, RB2);
        GK.textContent = "Neuer";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/germany.webp";
        RB.style.left = "79%"
    }

    if (selectedTeam == "27") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>2005 to 2025"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Havertz";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Gnabry";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Brandt";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Muller";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Goretzka";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Gundogan";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "J Hector";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Boateng";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Mertesacker";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Henrichs";
        setPlayerImage(RB, RB2);
        GK.textContent = "ter Stegen";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/germany.webp";
        RB.style.left = "79%"
    }

    if (selectedTeam == "28") {

        title.innerHTML = "FIFA BEST LINEUPS<BR> IN MARCH 2025 #1"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Haaland";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Doku";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Foden";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "B Silva";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "Nico G";
        setPlayerImage(CM, CM2);
        RCM.textContent = "De Bruyne";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Gvardiol";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Khusanov";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "R Dias";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "R Lewis";
        setPlayerImage(RB, RB2);
        GK.textContent = "Ederson";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/man city.webp";
        RB.style.left = "83%"
        LCM.style.left = "140px"
    }

    if (selectedTeam == "29") {

        title.innerHTML = "FIFA BEST LINEUPS<BR> IN MARCH 2025 #1"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Mbappe";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Vinicius Jr";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Rodrygo";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Bellingham";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "Tchouameni";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Modric";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "F Garcia";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Rudiger";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Asencio";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "L Vazquez";
        setPlayerImage(RB, RB2);
        GK.textContent = "Courtois";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/real madrid.webp";
        RB.style.left = "77%"
        LCM.style.left = "75px"
        CM.style.left = "200px"
    }

    if (selectedTeam == "30") {

        title.innerHTML = "FIFA BEST LINEUPS<BR> IN MARCH 2025 #1"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "O Dembele";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Barcola";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "D Doue";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "F Ruiz";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "Vitinha";
        setPlayerImage(CM, CM2);
        RCM.textContent = "J Neves";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "N Mendes";
        setPlayerImage(LB, LB2);
        LCB.textContent = "L Beraldo";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "W Pacho";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Hakimi";
        setPlayerImage(RB, RB2);
        GK.textContent = "Donnarumma";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/psg.webp";
        RB.style.left = "83%"
    }

    if (selectedTeam == "31") {

        title.innerHTML = "FIFA BEST LINEUPS<BR> IN MARCH 2025 #2"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Kane";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Sane";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Musiala";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Olise";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Goretzka";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Kimmich";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "A Davies";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Upamecano";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Dier";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Stanisic";
        setPlayerImage(RB, RB2);
        GK.textContent = "Urbig";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/bayern.webp";
        RB.style.left = "82%"
        LCB.style.left = "130px"
    }

      if (selectedTeam == "32") {

        title.innerHTML = "FIFA BEST LINEUPS<BR> IN MARCH 2025 #2"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
          STC.textContent = "D Jota";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "L Diaz";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Szoboszlai";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Salah";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Mac Allister";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Gravenberch";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Robertson";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Konate";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "van Dijk";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Alexander-A";
        setPlayerImage(RB, RB2);
        GK.textContent = "Alisson";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/liverpool.webp";
          RB.style.left = "73%"
          LB.style.left = "-10px"
    }

    if (selectedTeam == "33") {

        title.innerHTML = "FIFA BEST LINEUPS<BR> IN MARCH 2025 #2"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Lewandowski";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Raphinha";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Olmo";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "L Yamal";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "F de Jong";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Pedri";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Balde";
        setPlayerImage(LB, LB2);
        LCB.textContent = "I Martinez";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Araujo";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Kounde";
        setPlayerImage(RB, RB2);
        GK.textContent = "Szczesny";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/barcelona.webp";
        RB.style.left = "82%"
    }

    if (selectedTeam == "34") {

        title.innerHTML = "FIFA BEST LINEUPS<BR> IN MARCH 2025 #3"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Merino";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Trossard";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Nwaneri";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Odegaard";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "Partey";
        setPlayerImage(CM, CM2);
        RCM.textContent = "D Rice";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Lewis-Skelly";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Gabriel M";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Saliba";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "J Timber";
        setPlayerImage(RB, RB2);
        GK.textContent = "D Raya";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/arsenal.webp";
        RB.style.left = "80%"
        LB.style.left = "-30px"
        LCM.style.left = "95px"
    }

    if (selectedTeam == "35") {

        title.innerHTML = "FIFA BEST LINEUPS<BR> IN MARCH 2025 #3"

        STL.textContent = "L Martinez";
        setPlayerImage(STL, STL2);
        STC.textContent = "";
        setPlayerImage(STC, STC2);
        STR.textContent = "M Thuram";
        setPlayerImage(STR, STR2);
        LW.textContent = "";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "";
        setPlayerImage(RW, RW2);
        WL.textContent = "C Augusto";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Mkhita.";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "Calhanoglu";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Barella";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "Dumfries";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Bastoni";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "Acerbi";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Pavard";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "";
        setPlayerImage(RB, RB2);
        GK.textContent = "Sommer";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/inter.webp";
        RB.style.left = "83%"
        STL.style.left = "130px"
        LCM.style.left = "130px"
        WL.style.left = "-30px"
        CM.style.left = "210px"
        WR.style.left = "450px"
        RCM.style.left = "335px"
    }

    if (selectedTeam == "36") {

        title.innerHTML = "FIFA BEST LINEUPS<BR> IN MARCH 2025 #3"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Nkunku";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Sancho";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Palmer";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "P Neto";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Caicedo";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Enzo F";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Cucurella";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Colwill";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Adarabioyo";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "R James";
        setPlayerImage(RB, RB2);
        GK.textContent = "R Sanchez";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/chelsea.webp";
        RB.style.left = "81%"
    }

    if (selectedTeam == "37") {

        title.innerHTML = "FIFA BEST LINEUPS<BR> IN MARCH 2025 #4"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "K Muani";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "K Yildiz";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "McKennie";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "N Gonzalez";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Locatelli";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "K Thuram";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Cambiaso";
        setPlayerImage(LB, LB2);
        LCB.textContent = "L Kelly";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Kalulu";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "T Weah";
        setPlayerImage(RB, RB2);
        GK.textContent = "Di Gregorio";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/juventus.webp";
        RB.style.left = "83%"
        RW.style.left = "430px"
    }

    if (selectedTeam == "38") {

        title.innerHTML = "FIFA BEST LINEUPS<BR> IN MARCH 2025 #4"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Hojlund";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "B Fernandes";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "Garnacho";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "";
        setPlayerImage(RW, RW2);
        WL.textContent = "Mazraoui";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Casemiro";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Eriksen";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "Dalot";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Heaven";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "de Ligt";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Lindelof";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "";
        setPlayerImage(RB, RB2);
        GK.textContent = "Onana";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/man utd.webp";
        RB.style.left = "83%"
        AMLC.style.left = "110px"
        WL.style.left = "0"
        LCB.style.left = "120px"
    }

    if (selectedTeam == "39") {

        title.innerHTML = "FIFA BEST LINEUPS<BR> IN MARCH 2025 #4"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "S Gimenez";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "R Leao";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "J Felix";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Pulisic";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Y Fofana";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Reijnders";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "T Hernan.";
        setPlayerImage(LB, LB2);
        LCB.textContent = "S Pavlovic";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Gabbia";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Walker";
        setPlayerImage(RB, RB2);
        GK.textContent = "Maignan";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/ac milan.webp";
        RB.style.left = "83%"
    }

    if (selectedTeam == "40") {

        title.innerHTML = "FIFA BEST<BR>PLAYERS IN 2025"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Opoku";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "C Clarke";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "Duke";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "";
        setPlayerImage(RW, RW2);
        WL.textContent = "Yankov";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Piette";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "N Saliba";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "J Marshall";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "";
        setPlayerImage(LB, LB2);
        LCB.textContent = "F Alvarez";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "Waterman";
        setPlayerImage(CB, CB2);
        RCB.textContent = "G Campbell";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "";
        setPlayerImage(RB, RB2);
        GK.textContent = "Sirois";
        setPlayerImage(GK, GK2);
        Three_Def()
        sidepic.src = "/FIFA/football_img/logos/montreal.png";
        RB.style.left = "83%"
        AMLC.style.left = "170px"
        RCM.style.left = "305px"
        WR.style.left = "440px"
        LCB.style.left = "80px"
        CB.style.left = "222px" 

        sidepic.style.width = "130px";
        sidepic.style.height = "130px";
        sidepic.style.bottom = "68%"

    }

    if (selectedTeam == "41") {

        title.innerHTML = "FIFA BEST<BR>PLAYERS IN 2025"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "D Kerr";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "Insigne";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "Bernardeschi";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "";
        setPlayerImage(RW, RW2);
        WL.textContent = "Spicer";
        setPlayerImage(WL, WL2);
        LCM.textContent = "D Flores";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Osorio";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "Laryea";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Petretta";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "K Long";
        setPlayerImage(CB, CB2);
        RCB.textContent = "N Gomis";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "";
        setPlayerImage(RB, RB2);
        GK.textContent = "S Johnson";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/toronto.png";
        RB.style.left = "83%"
        AMLC.style.left = "180px"
        LCB.style.left = "115px"

        sidepic.style.width = "130px";
        sidepic.style.height = "130px";
        sidepic.style.bottom = "68%"
    }

    if (selectedTeam == "42") {

        title.innerHTML = "FIFA BEST<BR>PLAYERS IN 2025"

        STL.textContent = "Br White";
        setPlayerImage(STL, STL2);
        STC.textContent = "";
        setPlayerImage(STC, STC2);
        STR.textContent = "Gauld";
        setPlayerImage(STR, STR2);
        LW.textContent = "";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "";
        setPlayerImage(RW, RW2);
        WL.textContent = "A Ahmed";
        setPlayerImage(WL, WL2);
        LCM.textContent = "P Vite";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "Cubas";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Berhalter";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "Sabbi";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Utvik";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "Veselinovic";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Laborda";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "";
        setPlayerImage(RB, RB2);
        GK.textContent = "Takaoka";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/vancouver.png";
        RB.style.left = "83%"
        STL.style.left = "170px"
        WL.style.left = "0"
        RCM.style.left = "335px"
        LCB.style.left = "120px"
        CB.style.left = "210px"

        sidepic.style.width = "130px";
        sidepic.style.height = "130px";
        sidepic.style.bottom = "68%"
    }

    if (selectedTeam == "300") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>2005 to 2025"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "";
        setPlayerImage(LB, LB2);
        LCB.textContent = "";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "";
        setPlayerImage(RB, RB2);
        GK.textContent = "";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "83%"
    }

    if (selectedTeam == "300") {

        title.innerHTML = "FIFA BEST PLAYERS<BR> IN 2024-25"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "";
        setPlayerImage(LB, LB2);
        LCB.textContent = "";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "";
        setPlayerImage(RB, RB2);
        GK.textContent = "";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "83%"
    }

    // if (RB.textContent.length === 6) {
    //     RB.style.left = "495px"
    // } else if (RB.textContent.length > 6 && RB.textContent.length < 9) {
    //     RB.style.left = "475px"
    // } else if (RB.textContent.length > 8 && RB.textContent.length < 10) {
    //     RB.style.left = "440px"
    // } else {
    //     RB.style.left = "420px"
    // }

    // substitutes.innerHTML = substitutes.innerHTML.replace(/,/g, ' •');
}

// const container = document.querySelector('.carousel');
// const xPositionDisplay = document.getElementById('x-position');

// // Track mouse movement within the .short container
// container.addEventListener('mousemove', (event) => {
//     const containerRect = container.getBoundingClientRect();

//     // Calculate the X-coordinate relative to the container
//     const x = event.clientX - containerRect.left;

//     // Display the X-coordinate
//     xPositionDisplay.innerHTML = `left: ${x}px`;
// });

// // Clear the X display when the mouse leaves the container
// container.addEventListener('mouseleave', () => {
//     xPositionDisplay.innerHTML = '';
// });