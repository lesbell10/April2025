import { Everything } from "/FIFA/FIFAMaster 2.js";

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
const substitutes = document.querySelector(".substitutes");
const manager = document.querySelector(".manager");

document.addEventListener("DOMContentLoaded", () => {
    // Load the saved team from localStorage
    const savedTeam = localStorage.getItem("selectedTeam");
    if (savedTeam) {
        teamSelector.value = savedTeam;
        updatePlayerInfo();  // Automatically update the player info based on the saved team
    }
});

// function WiderLCM() {
//     if (CM.textContent !== "") {
//         LCM.style.left = "";
//         LCM.style.right = "590px";
//     }
// }

function Three_Def() {

    if (CB.textContent != "") {
        LCB.style.left = "23%"
        LCB2.style.left = "23%"
        RCB.style.left = "67%"
        RCB2.style.left = "67%"
    }

    if (twoCB.textContent != "") {
        twoLCB.style.left = "23%"
        twoLCB2.style.left = "23%"
        twoRCB.style.left = "67%"
        twoRCB2.style.left = "67%"
    }
}

teamSelector.addEventListener("change", () => {

    localStorage.setItem("selectedTeam", teamSelector.value);

    sidepic.style.width = "475px"
    sidepic.style.height = "475px"
    sidepic.style.top = "38%"
    sidepic.style.left = "8%"
    substitutes.style.fontSize = "37px";

    document.querySelector(".title").style.fontSize = "50px";

    updatePlayerInfo();

    // WiderLCM();

    // WiderLCB();
});

let selectedTeam= 0;

function updatePlayerInfo() {

    selectedTeam =teamSelector.value;

    manager.innerHTML = "Manager:<br>"
    substitutes.innerHTML = "Substitutes:<br>"

    Everything();

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
        LW.textContent = "Savinho";
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
        CM.textContent = "Kovacic";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Gundogan";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Gvardiol";
        setPlayerImage(LB, LB2);
        LCB.textContent = "R Dias";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Akanji";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "R Lewis";
        setPlayerImage(RB, RB2);
        GK.textContent = "Ederson";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/man city.png";
        manager.innerHTML += "Pep Guardiola"
        substitutes.innerHTML += "Ortega, Stones, Walker, De Bruyne, M Nunes,  Grealish, Doku"
    }

    if (selectedTeam == "1") {

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
        RCM.textContent = "Valverde";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "F Mendy";
        setPlayerImage(LB, LB2);
        LCB.textContent = "E Militao";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Rudiger";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "L Vazquez";
        setPlayerImage(RB, RB2);
        GK.textContent = "Courtois";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/madrid.png";
        manager.innerHTML += "Carlo Ancelotti"
        substitutes.innerHTML += "A Lunin, Carvajal, F Garcia, Camavinga, Modric, A Guler, B Diaz"
        LCM.style.left = "206px";
    }

    if (selectedTeam == "2") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Barcola";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "O Dembele";
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
        RW.textContent = "Kang-In";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "J Neves";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "Vitinha";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Zaire-Emery";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "N Mendes";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Marquinhos";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "W Pacho";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Hakimi";
        setPlayerImage(RB, RB2);
        GK.textContent = "Donnarumma";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/psg.png";
        manager.innerHTML += "Luis Enrique"
        substitutes.innerHTML += "Safonov, Skriniar, L Beraldo, Fabian,  Asensio, D Doue, K Muani"
        LCM.style.left = "260px";
    }

    if (selectedTeam == "3") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Kane";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Gnabry";
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
        LCM.textContent = "R Guerreiro";
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
        RCB.textContent = "Min Jae";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Laimer";
        setPlayerImage(RB, RB2);
        GK.textContent = "Neuer";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/bayern.png";
        manager.innerHTML += "Vincent Kompany"
        substitutes.innerHTML += "Peretz, E Dier, Boey, Goretzka, A Pavlovic,  Coman, Sane"
    }

    if (selectedTeam == "4") {

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
        AMC.textContent = "D Olmo";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "L Yamal";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Casado";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Pedri";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "A Balde";
        setPlayerImage(LB, LB2);
        LCB.textContent = "I Martinez";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Cubarsi";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Kounde";
        setPlayerImage(RB, RB2);
        GK.textContent = "I Pena";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/barca.png";
        manager.innerHTML += "Hansi Flick"
        substitutes.innerHTML += "ter Stegen, E Garcia, G Martin, F de Jong, Gavi, F Lopez, F Torres"
    }

    if (selectedTeam == "5") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "L Diaz";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Gakpo";
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
        LCM.textContent = "Gravenberch";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Mac Allister";
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
        RB.textContent = "Alexander-A"
        setPlayerImage(RB, RB2);
        GK.textContent = "Kelleher";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/liverpool.png";
        manager.innerHTML += "Arne Slot"
        substitutes.innerHTML += "Alisson, J Gomez, Quansah, Tsimikas, C Jones, D Jota, D Nunez"
        RB.style.left = "830px";
    }

    if (selectedTeam == "6") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Havertz";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Martinelli";
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
        RW.textContent = "Saka";
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
        LB.textContent = "J Timber";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Gabriel M";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Saliba";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "B White";
        setPlayerImage(RB, RB2);
        GK.textContent = "D Raya";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/arsenal.png";
        manager.innerHTML += "Mikel Arteta"
        substitutes.innerHTML += "Neto, Calafiori, Kiwior, Jorginho, M Merino, Trossard, G Jesus"
        LCM.style.left = "225px";
    }

    if (selectedTeam == "7") {

        STL.textContent = "M Thuram";
        setPlayerImage(STL, STL2);
        STC.textContent = "";
        setPlayerImage(STC, STC2);
        STR.textContent = "La Martinez";
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
        WL.textContent = "Dimarco";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Mkhitaryan";
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
        LCB.textContent = "Bisseck";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "Bastoni";
        setPlayerImage(CB, CB2);
        RCB.textContent = "de Vrij";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "";
        setPlayerImage(RB, RB2);
        GK.textContent = "Sommer";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/inter.png";
        manager.innerHTML += "Simone Inzaghi"
        substitutes.innerHTML += "J Martinez, Acerbi, C Augusto, Darmian, Frattesi, Zielinski, Taremi"
        WL.style.left = "10px";
        LCM.style.left = "200px";
        CM.style.left = "405px";
        STL.style.left = "300px";
        LCB.style.left = "265px";
        CB.style.left = "440px";
        Three_Def();
    }

    if (selectedTeam == "8") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "N Jackson";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "P Neto";
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
        RW.textContent = "Madueke";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Caicedo";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "E Fernandez";
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
        RB.textContent = "Gusto";
        setPlayerImage(RB, RB2);
        GK.textContent = "R Sanchez";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/chelsea.png";
        manager.innerHTML += "Enzo Maresca"
        substitutes.innerHTML += "F Jorgensen, Disasi, W Fofana, R Veiga, Sancho, Nkunku, J Felix"
    }

    if (selectedTeam == "9") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Vlahovic";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "K Yildiz";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Koopmeiners";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "F Conceicao";
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
        LCB.textContent = "Gatti";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Kalulu";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Savona";
        setPlayerImage(RB, RB2);
        GK.textContent = "Di Gregorio";
        setPlayerImage(GK, GK2);

        sidepic.style.width = "300px"
        sidepic.style.height = "300px"
        sidepic.style.top = "45%"
        sidepic.style.left = "12%"

        sidepic.src = "/FIFA/football_img/logos/juve.png";
        manager.innerHTML += "Thiago Motta"
        substitutes.innerHTML += "Perin, Bremer, Danilo, Fagioli, McKennie, Mbangula, T Weah"
    }

    if (selectedTeam == "10") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Rashford";
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
        AMRC.textContent = "A Diallo";
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
        RCM.textContent = "Mainoo";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "Dalot";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Li Martinez";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "Maguire";
        setPlayerImage(CB, CB2);
        RCB.textContent = "de Ligt";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "";
        setPlayerImage(RB, RB2);
        GK.textContent = "Onana";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/man utd.png";
        manager.innerHTML += "Ruben Amorim"
        substitutes.innerHTML += "Bayindir, J Evans, Yoro, Ugarte, Eriksen, Garnacho, Hojlund"
        AMLC.style.left = "255px";
        LCB.style.left = "185px";
        CB.style.left = "430px";
    }

    if (selectedTeam == "11") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Morata";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "R Leao";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Loftus-Cheek";
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
        LB.textContent = "T Hernandez";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Gabbia";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Thiaw";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "E Royal";
        setPlayerImage(RB, RB2);
        GK.textContent = "Maignan";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/milan.png";
        manager.innerHTML += "Sergio Conceicao"
        substitutes.innerHTML += "Torriani, Tomori, Terracciano, Y Musah, Bennacer, Chukwueze, T Abraham"
        substitutes.style.fontSize = "34px";
    }

    if (selectedTeam == "12") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Solanke";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "H Son";
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
        RW.textContent = "B Johnson";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Kulusevski";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "P Sarr";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Maddison";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Udogie";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Dragusin";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "A Gray";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "P Porro";
        setPlayerImage(RB, RB2);
        GK.textContent = "Vicario";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/tottenham.png";
        manager.innerHTML += "Ange Postecoglu"
        substitutes.innerHTML += "F Forster, C Romero, van de Ven, Bissouma, Bergvall,  Odobert, Werner"
        substitutes.style.fontSize = "35px";
        LCM.style.left = "200px";
    }

    if (selectedTeam == "13") {

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
        WL.textContent = "Zalewski";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Cristante";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "M Kone";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "Celik";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Angelino";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "NDicka";
        setPlayerImage(CB, CB2);
        RCB.textContent = "G Mancini";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "";
        setPlayerImage(RB, RB2);
        GK.textContent = "Svilar";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/roma.png";
        manager.innerHTML += "Claudio Ranieri"
        substitutes.innerHTML += "M Ryan, Hermoso, Saelemaekers, L Paredes, Pisilli, M Soule, El Shaaarawy"
        substitutes.style.fontSize = "33px";
        AMLC.style.left = "325px";
        LCB.style.left = "240px";
        CB.style.left = "440px";
    }

    if (selectedTeam == "14") {

        STL.textContent = "Sorloth";
        setPlayerImage(STL, STL2);
        STC.textContent = "";
        setPlayerImage(STC, STC2);
        STR.textContent = "Griezmann";
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
        WL.textContent = "J Alvarez";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Koke";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "P Barrios";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "R De Paul";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "J Galan";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Witsel";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "J Gimenez";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "M Llorente";
        setPlayerImage(RB, RB2);
        GK.textContent = "Oblak";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/atletico.png";
        manager.innerHTML += "Diego Simeone"
        substitutes.innerHTML += "J Musso, Lenglet, R Mandava, Molina, Gallagher, S Lino, Giu Simeone"
        substitutes.style.fontSize = "35px";
    }

    if (selectedTeam == "15") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Lukaku";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Kvaratskhelia";
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
        RW.textContent = "Politano";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "McTominay";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "Lobotka";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Z Anguissa";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "M Olivera";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Buongiorno";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Rrahmani";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Di Lorenzo";
        setPlayerImage(RB, RB2);
        GK.textContent = "Meret";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/napoli.png";
        manager.innerHTML += "Antonio Conte"
        substitutes.innerHTML += "Caprile, J Jesus, Spinazzola, Mazzocchi, B Gilmour, D Neres, Raspadori"
        substitutes.style.fontSize = "34px";
        LCM.style.left = "190px";
    }

    if (selectedTeam == "16") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Boniface";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "Wirtz";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "A Garcia";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "";
        setPlayerImage(RW, RW2);
        WL.textContent = "Grimaldo";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Xhaka";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Andrich";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "Frimpong";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Hincapie";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "J Tah";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Tapsoba";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "";
        setPlayerImage(RB, RB2);
        GK.textContent = "Hradecky";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/leverkusen.png";
        manager.innerHTML += "Xabi Alonso"
        substitutes.innerHTML += "Kovar, Mukiele, Tella, E Palacios, Hofmann, Terrier, Schick"
        LCB.style.left = "250px";
    }

    if (selectedTeam == "17") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Osimhen";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "B Yilmaz";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Mertens";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Akgun";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Torreira";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "G Sara";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Jakobs";
        setPlayerImage(LB, LB2);
        LCB.textContent = "D Sanchez";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Bardakci";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Jelert";
        setPlayerImage(RB, RB2);
        GK.textContent = "Muslera";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/galatasaray.png";
        manager.innerHTML += "Okan Buruk"
        substitutes.innerHTML += "Guvenc, Nelsson, Ayhan, Kutlu, Demirbay, Sallai, Icardi"
    }

    if (selectedTeam == "18") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Guirassy";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Beier";
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
        RW.textContent = "Gittens";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Brandt";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "Groß";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Sabitzer";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Bensebaini";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Schlotterbeck";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "E Can";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Ryerson";
        setPlayerImage(RB, RB2);
        GK.textContent = "Kobel";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/dortmund.png";
        manager.innerHTML += "Nuri Sahin"
        substitutes.innerHTML += "Meyer, Sule, Anton, Nmecha, G Reyna, Malen, Adeyemi"
    }

    if (selectedTeam == "19") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Omorodion";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Galeno";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Nico G";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "E Pepe";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Varela";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "M Fernandes";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "F Moura";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Ze Pedro";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "N Perez";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "J Mario";
        setPlayerImage(RB, RB2);
        GK.textContent = "D Costa";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/porto.png";
        manager.innerHTML += "Vitor Bruno"
        substitutes.innerHTML += "C Ramos, T Djalo, J Lopes, Eustaquio, Otavio, F Vieira, Loader"
    }

    if (selectedTeam == "20") {

        STL.textContent = "Openda";
        setPlayerImage(STL, STL2);
        STC.textContent = "";
        setPlayerImage(STC, STC2);
        STR.textContent = "Sesko";
        setPlayerImage(STR, STR2);
        LW.textContent = "";
        setPlayerImage(LW, LW2);
        LF.textContent = "Nusa";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "Baumgartner";
        setPlayerImage(RF, RF2);
        RW.textContent = "";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Haidara";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Kampl";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "Henrichs";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Lukeba";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Orban";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "Geertruida";
        setPlayerImage(RB, RB2);
        GK.textContent = "Gulacsi";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/leipzig.png";
        manager.innerHTML += "Marco Rose"
        substitutes.innerHTML += "Vandervoordt, Klostermann, Raum, Vermeeren, Seiwald, X Simons, Y Poulsen"
        substitutes.style.fontSize = "32px";
    }

    if (selectedTeam == "21") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Pavlidis";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Akturkoglu";
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
        RW.textContent = "Di Maria";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Kokcu";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "Florentino";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Aursnes";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "A Carreras";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Otamendi";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "T Araujo";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "A Bah";
        setPlayerImage(RB, RB2);
        GK.textContent = "Trubin";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/benfica.png";
        manager.innerHTML += "Bruno Lage"
        substitutes.innerHTML += "S Soares, A Silva, Beste, R Sanches, Barreiro, Prestianni, Amdouni"
    }
    if (selectedTeam == "22") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Retegui";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "Lookman";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "De Ketelaere";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "";
        setPlayerImage(RW, RW2);
        WL.textContent = "Ruggeri";
        setPlayerImage(WL, WL2);
        LCM.textContent = "de Roon";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Ederson J";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "Bellanova";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Kolasinac";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "Djimsiti";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Hien";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "";
        setPlayerImage(RB, RB2);
        GK.textContent = "Carnesecchi";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/atalanta.png";
        manager.innerHTML += "Gian Piero Gasperini"
        substitutes.innerHTML += "J Musso, Kossounou, Zappacosta, Brescianini, Pasalic, Zaniolo, Scamacca"
        substitutes.style.fontSize = "33px";
        AMLC.style.left = "320px";
        LCB.style.left = "215px";
        CB.style.left = "440px";
    }  

    if (selectedTeam == "23") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Gyokeres";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "Quenda";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "Trincao";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "Catamo";
        setPlayerImage(RW, RW2);
        WL.textContent = "";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Hjulmand";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Morita";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "M Reis";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Debast";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "";
        setPlayerImage(CB, CB2);
        RCB.textContent = "Diomande";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "J St Juste";
        setPlayerImage(RB, RB2);
        GK.textContent = "F Israel";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/sporting.png";
        manager.innerHTML += "Rui Borges"
        substitutes.innerHTML += "Kovacevic, Inacio, Esgaio, Braganca, P Goncalves, M Araujo, Harder"
        substitutes.style.fontSize = "36px";
    }

    if (selectedTeam == "24") {

        STL.textContent = "";
        setPlayerImage(STL, STL2);
        STC.textContent = "Maupay";
        setPlayerImage(STC, STC2);
        STR.textContent = "";
        setPlayerImage(STR, STR2);
        LW.textContent = "";
        setPlayerImage(LW, LW2);
        LF.textContent = "";
        setPlayerImage(LF, LF2);
        AMLC.textContent = "Wahi";
        setPlayerImage(AMLC, AMLC2);
        AMC.textContent = "";
        setPlayerImage(AMC, AMC2);
        AMRC.textContent = "Greenwood";
        setPlayerImage(AMRC, AMRC2);
        RF.textContent = "";
        setPlayerImage(RF, RF2);
        RW.textContent = "";
        setPlayerImage(RW, RW2);
        WL.textContent = "Merlin";
        setPlayerImage(WL, WL2);
        LCM.textContent = "Rabiot";
        setPlayerImage(LCM, LCM2);
        CM.textContent = "";
        setPlayerImage(CM, CM2);
        RCM.textContent = "Hojbjerg";
        setPlayerImage(RCM, RCM2);
        WR.textContent = "L Henrique";
        setPlayerImage(WR, WR2);
        // DM.textContent = "";
        // setPlayerImage(DM, DM2);
        LB.textContent = "";
        setPlayerImage(LB, LB2);
        LCB.textContent = "Kondogbia";
        setPlayerImage(LCB, LCB2);
        CB.textContent = "Balerdi";
        setPlayerImage(CB, CB2);
        RCB.textContent = "A Murillo";
        setPlayerImage(RCB, RCB2);
        RB.textContent = "";
        setPlayerImage(RB, RB2);
        GK.textContent = "Rulli";
        setPlayerImage(GK, GK2);

        sidepic.src = "/FIFA/football_img/logos/marseille.png";
        manager.innerHTML += "Roberto De Zerbi"
        substitutes.innerHTML += "De Lange, Cornelius, Brassier, I Kone, Rongier, Harit, U Garcia, "
        LCB.style.left = "210px";
    }

    substitutes.innerHTML = substitutes.innerHTML.replace(/,/g, ' •');
}