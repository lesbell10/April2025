import { Everything } from "/FIFA/FIFAMaster 3.js";

// first team
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

const teamSelector = document.querySelector(".teamSelector");
const sidepic = document.querySelector(".sidepic");
const message = document.querySelector(".message")
const title = document.querySelector(".title")

document.addEventListener("DOMContentLoaded", () => {
    // Load the saved team from localStorage
    const savedTeam = localStorage.getItem("selectedTeam");
    if (savedTeam) {
        teamSelector.value = savedTeam;
        updatePlayerInfo();  // Automatically update the player info based on the saved team
    }
});

function Three_Def() {

    if (CB.textContent != "") {
        LCB.style.left = "23%"
        LCB2.style.left = "23%"
        RCB.style.left = "67%"
        RCB2.style.left = "67%"
    }
}

// function WiderLCM() {
//     if (CM.textContent !== "") {
//         LCM.style.left = "";
//         LCM.style.right = "590px";
//     }
// }

teamSelector.addEventListener("change", () => {

    localStorage.setItem("selectedTeam", teamSelector.value)

    updatePlayerInfo();

    // WiderLCM();

    // WiderLCB();
});

let selectedTeam = 0;

function updatePlayerInfo() {

    // title.innerHTML = "BEST FIFA PLAYERS"
    message.innerHTML = ""
    // sidepic.style.bottom = "66%"
    sidepic.style.display = "block"

    selectedTeam = teamSelector.value;

    Everything();

    sidepic.style.border = "none"
    sidepic.style.width = "120px"
    sidepic.style.height = "120px"
    
    document.querySelector("select").style.padding = "10px"
    document.querySelector("select").style.fontSize = "35px"

    function setPlayerImage(element, imgElement) {
        if (element.textContent !== "") {
            imgElement.src = "/FIFA/football_img/players/" + element.textContent + ".webp";
            imgElement.style.border = '2px solid black'; // Add border if image source is set
        } else {
            imgElement.src = ""; // Sets src to empty if no player name
            imgElement.style.border = 'none'; // Remove border if no image source
        }
    }

    if (selectedTeam == "0") {

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
        AMC.textContent = "Messi";
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
        RCM.textContent = "De Bruyne";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Robertson";
        setPlayerImage(LB, LB2);
        LCB.textContent = "R Dias";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "van Dijk";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Kimmich";
        setPlayerImage(RB, RB2);
        GK.textContent = "Courtois";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
    }

    if (selectedTeam == "1") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Benzema";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Mbappe";
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
        RW.textContent = "Salah";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Casemiro";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "De Bruyne";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Cancelo";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Marquinhos";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "R Dias";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Kimmich";
        setPlayerImage(RB, RB2);
        GK.textContent = "Courtois";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
    }

    if (selectedTeam == "2") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Lewandowski";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "C Ronaldo";
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
        RW.textContent = "Salah";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Kante";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "De Bruyne";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Cancelo";
        setPlayerImage(LB, LB2);
        LCB.textContent = "R Dias";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "van Dijk";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Kimmich";
        setPlayerImage(RB, RB2);
        GK.textContent = "Neuer";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
    }

    if (selectedTeam == "3") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Lewandowski";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Neymar";
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
        LCM.textContent = "Casemiro";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "De Bruyne";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Robertson";
        setPlayerImage(LB, LB2);
        LCB.textContent = "van Dijk";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "S Ramos";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Kimmich";
        setPlayerImage(RB, RB2);
        GK.textContent = "Oblak";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RW.style.left = "405px"
    }

    if (selectedTeam == "4") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Lewandowski";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Neymar Jr";
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
        LCM.textContent = "Kante";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "De Bruyne";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Robertson";
        setPlayerImage(LB, LB2);
        LCB.textContent = "S Ramos";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "van Dijk";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Kimmich";
        setPlayerImage(RB, RB2);
        GK.textContent = "Oblak";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RW.style.left = "405px"
    }

    if (selectedTeam == "5") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "C Ronaldo";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Neymar Jr";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "E Hazard";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Messi";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Kante";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Modric";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Alba";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Chiellini";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "S Ramos";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Kimmich";
        setPlayerImage(RB, RB2);
        GK.textContent = "Oblak";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
    }

    if (selectedTeam == "6") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "L Suarez";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Neymar";
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
        LCM.textContent = "Kroos";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "De Bruyne";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Marcelo";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Hummels";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "S Ramos";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Azpilicueta";
        setPlayerImage(RB, RB2);
        GK.textContent = "Neuer";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RW.style.left = "405px"
    }

    if (selectedTeam == "7") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "L Suarez";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Neymar";
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
        LCM.textContent = "Pogba";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Modric";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Alaba";
        setPlayerImage(LB, LB2);
        LCB.textContent = "T Silva";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Boateng";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Carvajal";
        setPlayerImage(RB, RB2);
        GK.textContent = "Neuer";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RW.style.left = "405px"
    }

    if (selectedTeam == "8") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "L Suarez";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Neymar";
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
        LCM.textContent = "Kroos";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Iniesta";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Alaba";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Boateng";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "T Silva";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Lahm";
        setPlayerImage(RB, RB2);
        GK.textContent = "Neuer";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
    }

    if (selectedTeam == "9") {

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
        AMC.textContent = "Messi";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Robben";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Schwein.";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Iniesta";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Lahm";
        setPlayerImage(LB, LB2);
        LCB.textContent = "T Silva";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "S Ramos";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Boateng";
        setPlayerImage(RB, RB2);
        GK.textContent = "Neuer";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "480px"
    }

    if (selectedTeam == "10") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Ibrahimovic";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Ribery";
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
        LCM.textContent = "Schwein.";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Iniesta";
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
        RCB.textContent = "T Silva";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "S Ramos";
        setPlayerImage(RB, RB2);
        GK.textContent = "Neuer";
        setPlayerImage(GK, GK2);
        Three_Def()

        sidepic.src = "/FIFA/football_img/logos/fifa.webp";
        RB.style.left = "470px"
    }

    if (selectedTeam == "11") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Ibrahimovic";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Ribery";
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
        LB.textContent = "Lahm";
        setPlayerImage(LB, LB2);
        LCB.textContent = "T Silva";
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
        RB.style.left = "470px"
    }

    if (selectedTeam == "300") {

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
        RB.style.left = "88%"
    }

    substitutes.innerHTML = substitutes.innerHTML.replace(/,/g, ' •');

    if (RB.textContent.length === 6) {
        RB.style.left = "495px"
    } else if (RB.textContent.length > 6 && RB.textContent.length < 9) {
        RB.style.left = "475px"
    } else if (RB.textContent.length > 8 && RB.textContent.length < 10) {
        RB.style.left = "440px"
    } else {
        RB.style.left = "420px"
    }
}
