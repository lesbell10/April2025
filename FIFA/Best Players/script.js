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

function Three_Mid() {
    if (CM.textContent !== "") {
        LCM.style.left = "21%";
        LCM2.style.left = "21%";
        RCM.style.left = "67%";
        RCM2.style.left = "67%";
    }
}

function Three_Def() {
    if (CB.textContent !== "") {
        LCB.style.left = "21%";
        LCB2.style.left = "21%";
        RCB.style.left = "67%";
        RCB2.style.left = "67%";
    }
}

function setPlayerImage(element, imgElement) {
    if (element.textContent !== "") {
        imgElement.src = "/FIFA/football_img/players/" + element.textContent + ".webp";
        imgElement.style.border = '1px solid black';
    } else {
        imgElement.src = "";
        imgElement.style.border = 'none';
    }
}

function updatePlayerInfo() {
    title.innerHTML = " FIFA<br>BEST PLAYERS";
    title.style.fontSize = "41px"
    sidepic.style.borderRadius = "10px";
    sidepic.style.border = "none";
    sidepic.style.width = "100px";
    sidepic.style.height = "100px";
    sidepic.style.bottom = "68%";
    sidepic.style.left = "715px";
    selectedTeam = teamSelector.value;
    Everything();

    if (selectedTeam == "0") {

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
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/roma.webp";

        RB.style.left = "88%"
        AMLC.style.left = "95px"
        WL.style.left = "-15px"
        RCM.style.left = "250px"
        LCB.style.left = "70px"
        CB.style.left = "170px"
        RCB.style.left = "300px"

        // RCM.style.left = "330px"
        // WL.style.left = "0"
        // WR.style.left = "455px"
        // AMLC.style.left = "155px"
        // LCB.style.left = "110px"
        // CB.style.left = "230px"
        sidepic.style.boxShadow = "none"
    }

    if (selectedTeam == "1") {

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
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/roma.webp";
        RB.style.left = "83%"
        sidepic.style.boxShadow = "none"
    }

    if (selectedTeam == "2") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-25"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "L Martinez";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "J Alvarez";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Messi";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "R De Paul";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Mac Allister";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Enzo F";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Acuna";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Li Martinez";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "C Romero";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Molina";
        setPlayerImage(RB, RB2);
        GK.textContent = "E Martinez";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/argentina.webp";
        RB.style.left = "83%"
        LCB.style.left = "90px"
        LCM.style.left = "90px"
        RW.style.left = "340px"
    }

    if (selectedTeam == "3") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>IN 2024-25"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Icardi";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "N Gonzalez";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Dybala";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "A Correa";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "G Rodriguez";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "L Paredes";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Tagliafico";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Balerdi";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Otamendi";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Montiel";
        setPlayerImage(RB, RB2);
        GK.textContent = "Musso";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/argentina.webp";
        RB.style.left = "82%"
        LCM.style.left = "80px"
        LB.style.left = "-15px"
    }

    if (selectedTeam == "4") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>EVERY YEAR"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Henry";
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
        RW.textContent = "Figo";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Makelele";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Zidane";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "A Cole";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Nesta";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Campbell";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Cafu";
        setPlayerImage(RB, RB2);
        GK.textContent = "Buffon";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "87%"
    }

    if (selectedTeam == "5") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>EVERY YEAR"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Shevchenko";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Pires";
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
        RCM.textContent = "Pirlo";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Maldini";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Ferdinand";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Nesta";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Cafu";
        setPlayerImage(RB, RB2);
        GK.textContent = "Dida";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "87%"
        LCB.style.left  = "100px"
    }

    if (selectedTeam == "6") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>EVERY YEAR"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Ronaldo";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Rivaldo";
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
        RW.textContent = "Beckham";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "G Silva";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Ballack";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "R Carlos";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Campbell";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Lucio";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Cafu";
        setPlayerImage(RB, RB2);
        GK.textContent = "Kahn";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "87%"
    }

    if (selectedTeam == "7") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>EVERY YEAR"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Owen";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Giggs";
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
        LCM.textContent = "Makelele";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Scholes";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "R Carlos";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Stam";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Hierro";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Cafu";
        setPlayerImage(RB, RB2);
        GK.textContent = "Kahn";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "87%"
    }

    if (selectedTeam == "8") {

        title.innerHTML = "DREAM TEAM"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Henry";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Neymar Jr";
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
        RW.textContent = "Salah";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Gerrard";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Iniesta";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "A Cole";
        setPlayerImage(LB, LB2);
        LCB.textContent = "van Dijk";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "T Silva";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Lahm";
        setPlayerImage(RB, RB2);
        GK.textContent = "Casillas";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "87%"
    }

    if (selectedTeam == "9") {

        title.innerHTML = "DREAM TEAM"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Ronaldo";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Ronaldinho";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Messi";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "C Ronaldo";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Busquets";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Zidane";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Marcelo";
        setPlayerImage(LB, LB2);
        LCB.textContent = "S Ramos";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Cannavaro";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "D Alves";
        setPlayerImage(RB, RB2);
        GK.textContent = "Buffon";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "87%"
    }

    if (selectedTeam == "10") {

        title.innerHTML = "DREAM TEAM"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Haaland";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Musiala";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "De Bruyne";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Raphinha";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Kimmich";
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
        LCB.textContent = "Saliba";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Rudiger";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Alexander-A";
        setPlayerImage(RB, RB2);
        GK.textContent = "Alisson";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "78%"
    }

    if (selectedTeam == "11") {

        title.innerHTML = "DREAM TEAM"

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
        AMC.textContent = "L Yamal";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Salah";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Rodri";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Bellingham";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "A Davies";
        setPlayerImage(LB, LB2);
        LCB.textContent = "R Dias";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "van Dijk";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Kounde";
        setPlayerImage(RB, RB2);
        GK.textContent = "Courtois";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "85%"
        LB.style.left = "-10px"
    }

    if (selectedTeam == "12") {

        title.innerHTML = "DREAM TEAM"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Endrick";
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
        RW.textContent = "Musiala";
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
        LB.textContent = "Lewis-S";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Scalvini";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Saliba";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Hakimi";
        setPlayerImage(RB, RB2);
        GK.textContent = "D Costa";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "87%"
    }

    if (selectedTeam == "13") {

        title.innerHTML = "DREAM TEAM"

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
        LB.textContent = "Balde";
        setPlayerImage(LB, LB2);
        LCB.textContent = "A Silva";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Cubarsi";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Alexander-A";
        setPlayerImage(RB, RB2);
        GK.textContent = "Mamardashvili";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "78%"
        LCM.style.left = "90px"
        GK.style.left = "140px"
    }

    if (selectedTeam == "14") {

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
        AMC.textContent = "Ozil";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Sane";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "E Can";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Goretzka";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Gosens";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Schlotterbeck";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Mertesacker";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Boateng";
        setPlayerImage(RB, RB2);
        GK.textContent = "ter Stegen";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/germany.webp";
        RB.style.left = "87%"
        LCB.style.left = "60px"
    }

    if (selectedTeam == "15") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>2005 to 2025"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Muller";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "";
        setPlayerImage(LW, LW2);
        LF.textContent = "Musiala";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "Wirtz";
        setPlayerImage(RF, RF2);
        RW.textContent = "";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Gundogan";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "Schwein.";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Kroos";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Lahm";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Hummels";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Rudiger";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Kimmich";
        setPlayerImage(RB, RB2);
        GK.textContent = "Neuer";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/germany.webp";
        RB.style.left = "82%"
        LCM.style.left = "37px"
    }

    if (selectedTeam == "16") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>2005 to 2025"

        STL.textContent = "Higuain";
        setPlayerImage(STL, STL2);
        STC.textContent = "";
        setPlayerImage(STC, STC2);
        STR.textContent = "L Martinez";
        setPlayerImage(STR, STR2);
        LW.textContent = "";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Dybala";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Pastore";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "Banega";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Riquelme";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Tagliafico";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Samuel";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Li Martinez";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Zabaleta";
        setPlayerImage(RB, RB2);
        GK.textContent = "S Romero";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/argentina.webp";
        sidepic.style.left = "700px"
        RB.style.left = "87%"
        LB.style.left = "-15px"
        LCM.style.left = "75px"
        STL.style.left = "120px"
    }

    if (selectedTeam == "17") {

        title.innerHTML = "FIFA BEST PLAYERS<BR>2005 to 2025"

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Aguero";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Di Maria";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Tevez";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Messi";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Mascherano";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "De Paul";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Rojo";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Otamendi";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Ayala";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Zanetti";
        setPlayerImage(RB, RB2);
        GK.textContent = "E Martinez";
        setPlayerImage(GK, GK2);
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/argentina.webp";
        sidepic.style.left = "700px"
        RB.style.left = "87%"
        LCM.style.left = "80px"
        LCB.style.left = "100px"
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
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "87%"
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
        Three_Mid()
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "87%"
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

const container = document.querySelector('.rectangle');
const xPositionDisplay = document.getElementById('x-position');

// Track mouse movement within the .short container
container.addEventListener('mousemove', (event) => {
    const containerRect = container.getBoundingClientRect();

    // Calculate the X-coordinate relative to the container
    const x = event.clientX - containerRect.left;

    // Display the X-coordinate
    xPositionDisplay.innerHTML = `left: ${x}px`;
});

// Clear the X display when the mouse leaves the container
container.addEventListener('mouseleave', () => {
    xPositionDisplay.innerHTML = '';
});