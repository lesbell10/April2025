const playerDropdown = document.querySelector(".yearSelector");
let selectedPlayer = playerDropdown.value;

document.addEventListener("DOMContentLoaded", () => {
    // Load the saved year from localStorage
    const savedYear = localStorage.getItem("selectedYear");
    if (savedYear) {
        playerDropdown.value = savedYear;
        selectedPlayer = savedYear;  // Update selectedPlayer
        displayPlayerInfo();  // Automatic<br>ally update the player info based on the saved year     
    }
});

function displayPlayerInfo() {
    document.body.classList.add("nhl-color");
    const birthDate = document.querySelector(".birthDate");
    const nation = document.querySelector(".nation");
    const club = document.querySelector(".club");
    const position = document.querySelector(".position");
    const playerImage = document.querySelector(".playerImage")
    const stats = document.querySelector(".stats")
    const sidepic = document.querySelector(".sidepic")
    const title = document.querySelector(".title")

    sidepic.src = "/NHL/hockey_img/logos/quebec.png"

    // if (selectedPlayer === "100") {
    //     birthDate.textContent = "";
    //     nation.textContent = "";
    //     club.textContent = "";
    //     position.textContent = "";
    //     playerImage.src = "";
    // } 

    nation.textContent = ""
    club.textContent = ""
    stats.innerHTML = ""

    // sidepic.style.bottom = "80px"
    // stats.style.bottom = "190px"
    // document.querySelector(".playerInfo").style.height = "675px"

    title.style.fontSize = "34px"

    // SINCE 2005
    if (selectedPlayer === "0") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "4th - 89 pts";
        playerImage.src = "/NHL/hockey_img/players/mcdavid.jpg";
    }

    else if (selectedPlayer === "1") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Center";
        stats.innerHTML = "Legend - 3x Stanley Cup Champion";
        playerImage.src = "/NHL/hockey_img/players/crosby.jpg";
    }

    else if (selectedPlayer === "2") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Russia";
        club.textContent = "Washington Capitals";
        position.textContent = "Left Wing";
        stats.innerHTML = "2nd All-Time Goals - 800+ Goals";
        playerImage.src = "/NHL/hockey_img/players/ovechkin.jpg";
    }

    else if (selectedPlayer === "3") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Goaltender";
        stats.innerHTML = "Vezina Trophy Winner - Legendary Netminder";
        playerImage.src = "/NHL/hockey_img/players/price.jpg";
    }

    else if (selectedPlayer === "4") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Right Wing";
        stats.innerHTML = "Hart Trophy Winner - Elite Scorer";
        playerImage.src = "/NHL/hockey_img/players/kucherov.jpg";
    }

    else if (selectedPlayer === "5") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Germany";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "Consistent Top 5 in Points - McDavid Duo";
        playerImage.src = "/NHL/hockey_img/players/draisaitl.jpg";
    }

    else if (selectedPlayer === "6") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Center";
        stats.innerHTML = "Speed + Power - 2022 Cup Winner";
        playerImage.src = "/NHL/hockey_img/players/mackinnon.jpg";
    }

    else if (selectedPlayer === "7") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Slovakia";
        club.textContent = "Boston Bruins";
        position.textContent = "Defenseman";
        stats.innerHTML = "Towering Presence - Norris Winner";
        playerImage.src = "/NHL/hockey_img/players/chara.jpg";
    }

    else if (selectedPlayer === "8") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "USA";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Right Wing";
        stats.innerHTML = "Art Ross Winner - 3x Stanley Cup";
        playerImage.src = "/NHL/hockey_img/players/kane.jpg";
    }

    else if (selectedPlayer === "9") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Russia";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Center";
        stats.innerHTML = "3x Cup Champ - Crosby's Wingman";
        playerImage.src = "/NHL/hockey_img/players/malkin.jpg";
    }

    else if (selectedPlayer === "10") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Defenseman";
        stats.innerHTML = "2022 Norris + Conn Smythe Winner";
        playerImage.src = "/NHL/hockey_img/players/makar.jpg";
    }

    else if (selectedPlayer === "11") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "USA";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Center";
        stats.innerHTML = "Rocket Richard Winner - 60 Goal Season";
        playerImage.src = "/NHL/hockey_img/players/matthews.jpg";
    }

    else if (selectedPlayer === "12") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Sweden";
        club.textContent = "New York Rangers";
        position.textContent = "Goaltender";
        stats.innerHTML = "The King - Vezina Trophy Winner";
        playerImage.src = "/NHL/hockey_img/players/lundqvist.jpg";
    }

    else if (selectedPlayer === "13") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Sweden";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Defenseman";
        stats.innerHTML = "Shutdown Defender - Stanley Cup Leader";
        playerImage.src = "/NHL/hockey_img/players/hedman.jpg";
    }

    else if (selectedPlayer === "14") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Sweden";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Defenseman";
        stats.innerHTML = "Norris Winner - Offensive D-man";
        playerImage.src = "/NHL/hockey_img/players/karlsson.jpg";
    }

    else if (selectedPlayer === "15") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Center";
        stats.innerHTML = "Goal Scorer - Franchise Leader";
        playerImage.src = "/NHL/hockey_img/players/stamkos.jpg";
    }

    else if (selectedPlayer === "16") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Russia";
        club.textContent = "New York Rangers";
        position.textContent = "Left Wing";
        stats.innerHTML = "Top Playmaker - Consistent Points";
        playerImage.src = "/NHL/hockey_img/players/panarin.jpg";
    }

    else if (selectedPlayer === "17") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Center";
        stats.innerHTML = "Legendary Leader - 400+ Goals";
        playerImage.src = "/NHL/hockey_img/players/lecavalier.jpg";
    }

    else if (selectedPlayer === "18") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Russia";
        club.textContent = "Minnesota Wild";
        position.textContent = "Left Wing";
        stats.innerHTML = "Dynamic Talent - Future Superstar";
        playerImage.src = "/NHL/hockey_img/players/kaprizov.jpg";
    }

    else if (selectedPlayer === "19") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Minnesota Wild";
        position.textContent = "Goaltender";
        stats.innerHTML = "All-Time Wins Leader - 3x Cup Champion";
        playerImage.src = "/NHL/hockey_img/players/fleury.jpg";
    }

    else if (selectedPlayer === "20") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "San Jose Sharks";
        position.textContent = "Center";
        stats.innerHTML = "Veteran Playmaker - 1500+ Games";
        playerImage.src = "/NHL/hockey_img/players/thornton.jpg";
    }

    else if (selectedPlayer === "21") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Defenseman";
        stats.innerHTML = "Hard Shot - Fearless Leader";
        playerImage.src = "/NHL/hockey_img/players/weber.jpg";
    }

    else if (selectedPlayer === "22") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Center";
        stats.innerHTML = "Captain Serious - 3x Stanley Cup Champ";
        playerImage.src = "/NHL/hockey_img/players/toews.jpg";
    }

    else if (selectedPlayer === "23") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Boston Bruins";
        position.textContent = "Left Wing";
        stats.innerHTML = "Pest + Scorer - Clutch Player";
        playerImage.src = "/NHL/hockey_img/players/marchand.jpg";
    }

    else if (selectedPlayer === "24") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Los Angeles Kings";
        position.textContent = "Defenseman";
        stats.innerHTML = "2x Cup Winner - Workhorse Defender";
        playerImage.src = "/NHL/hockey_img/players/doughty.jpg";
    }

    else if (selectedPlayer === "25") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Russia";
        club.textContent = "Atlanta Thrashers / New Jersey Devils";
        position.textContent = "Left Wing";
        stats.innerHTML = "Prolific Scorer - Sniper Elite";
        playerImage.src = "/NHL/hockey_img/players/kovalchuk.jpg";
    }

    else if (selectedPlayer === "26") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Sweden";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Left Wing";
        stats.innerHTML = "Twins Chemistry - Elite Passer";
        playerImage.src = "/NHL/hockey_img/players/danielsedin.jpg";
    }

    else if (selectedPlayer === "27") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Sweden";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Center";
        stats.innerHTML = "Twins Chemistry - Franchise Captain";
        playerImage.src = "/NHL/hockey_img/players/henriksedin.jpg";
    }

    else if (selectedPlayer === "28") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Defenseman";
        stats.innerHTML = "3x Cup Winner - Norris Trophy";
        playerImage.src = "/NHL/hockey_img/players/keith.jpg";
    }

    else if (selectedPlayer === "29") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "USA";
        club.textContent = "Los Angeles Kings";
        position.textContent = "Goaltender";
        stats.innerHTML = "2x Stanley Cup - Conn Smythe Winner";
        playerImage.src = "/NHL/hockey_img/players/quick.jpg";
    }
    // 2024-2025
else if (selectedPlayer === "30") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "Captain - Elite Skater & Playmaker";
        playerImage.src = "/NHL/hockey_img/players/mcdavid.jpg";
    }

    else if (selectedPlayer === "31") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Center";
        stats.innerHTML = "Explosive Speed - Hart Trophy Winner";
        playerImage.src = "/NHL/hockey_img/players/mackinnon.jpg";
    }

    else if (selectedPlayer === "32") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Germany";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "Consistent Scorer - 100+ Point Seasons";
        playerImage.src = "/NHL/hockey_img/players/draisaitl.jpg";
    }

    else if (selectedPlayer === "33") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Defenseman";
        stats.innerHTML = "Norris + Conn Smythe Winner";
        playerImage.src = "/NHL/hockey_img/players/makar.jpg";
    }

    else if (selectedPlayer === "34") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "USA";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Center";
        stats.innerHTML = "Rocket Richard Winner - Goal Machine";
        playerImage.src = "/NHL/hockey_img/players/matthews.jpg";
    }

    else if (selectedPlayer === "35") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Right Wing";
        stats.innerHTML = "MVP-Level Scorer - 100+ Points";
        playerImage.src = "/NHL/hockey_img/players/kucherov.jpg";
    }

    else if (selectedPlayer === "36") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Czech Republic";
        club.textContent = "Boston Bruins";
        position.textContent = "Right Wing";
        stats.innerHTML = "Sniper - Consistent 40+ Goals";
        playerImage.src = "/NHL/hockey_img/players/pastrnak.jpg";
    }

    else if (selectedPlayer === "37") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Russia";
        club.textContent = "New York Rangers";
        position.textContent = "Left Wing";
        stats.innerHTML = "Playmaker - Point Per Game Machine";
        playerImage.src = "/NHL/hockey_img/players/panarin.jpg";
    }

    else if (selectedPlayer === "38") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "USA";
        club.textContent = "Florida Panthers";
        position.textContent = "Left Wing";
        stats.innerHTML = "Power Forward - Intensity + Skill";
        playerImage.src = "/NHL/hockey_img/players/tkachuk.jpg";
    }

    else if (selectedPlayer === "39") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "USA";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Defenseman";
        stats.innerHTML = "Skating & Vision - 2024 Norris Contender";
        playerImage.src = "/NHL/hockey_img/players/hughes.jpg";
    }

    else if (selectedPlayer === "40") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Finland";
        club.textContent = "Florida Panthers";
        position.textContent = "Center";
        stats.innerHTML = "Two-Way Star - Panthers Captain";
        playerImage.src = "/NHL/hockey_img/players/barkov.jpg";
    }

    else if (selectedPlayer === "41") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Pittsburgh Penguins";
        position.textContent = "Center";
        stats.innerHTML = "3x Cup Champion - NHL Legend";
        playerImage.src = "/NHL/hockey_img/players/crosby.jpg";
    }

    else if (selectedPlayer === "42") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "USA";
        club.textContent = "Winnipeg Jets";
        position.textContent = "Goaltender";
        stats.innerHTML = "Vezina Winner - Backbone of the Jets";
        playerImage.src = "/NHL/hockey_img/players/hellebuyck.jpg";
    }

    else if (selectedPlayer === "43") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Russia";
        club.textContent = "Washington Capitals";
        position.textContent = "Left Wing";
        stats.innerHTML = "800+ Goals - 2nd All-Time Scorer";
        playerImage.src = "/NHL/hockey_img/players/ovechkin.jpg";
    }

    else if (selectedPlayer === "44") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "USA";
        club.textContent = "Vegas Golden Knights";
        position.textContent = "Center";
        stats.innerHTML = "Clutch Performer - Cup Champion";
        playerImage.src = "/NHL/hockey_img/players/eichel.jpg";
    }

    else if (selectedPlayer === "45") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Finland";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Right Wing";
        stats.innerHTML = "Size + Skill - 90+ Points";
        playerImage.src = "/NHL/hockey_img/players/rantanen.jpg";
    }

    else if (selectedPlayer === "46") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Russia";
        club.textContent = "Minnesota Wild";
        position.textContent = "Left Wing";
        stats.innerHTML = "Creative, Electric, Must-Watch";
        playerImage.src = "/NHL/hockey_img/players/kaprizov.jpg";
    }

    else if (selectedPlayer === "47") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Right Wing";
        stats.innerHTML = "Smart & Slick - Point Per Game Guy";
        playerImage.src = "/NHL/hockey_img/players/marner.jpg";
    }

    else if (selectedPlayer === "48") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Switzerland";
        club.textContent = "Nashville Predators";
        position.textContent = "Defenseman";
        stats.innerHTML = "Offensive D-man - Norris Trophy Winner";
        playerImage.src = "/NHL/hockey_img/players/josi.jpg";
    }

    else if (selectedPlayer === "49") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "USA";
        club.textContent = "Winnipeg Jets";
        position.textContent = "Left Wing";
        stats.innerHTML = "Fast & Accurate - Top Sniper";
        playerImage.src = "/NHL/hockey_img/players/kconnor.jpg";
    }

    else if (selectedPlayer === "50") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "USA";
        club.textContent = "New York Rangers";
        position.textContent = "Defenseman";
        stats.innerHTML = "Smooth & Smart - Norris Caliber";
        playerImage.src = "/NHL/hockey_img/players/fox.jpg";
    }

    else if (selectedPlayer === "51") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Russia";
        club.textContent = "New York Rangers";
        position.textContent = "Goaltender";
        stats.innerHTML = "Vezina Winner - Quick Reflexes";
        playerImage.src = "/NHL/hockey_img/players/shesterkin.jpg";
    }

    else if (selectedPlayer === "52") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Boston Bruins";
        position.textContent = "Left Wing";
        stats.innerHTML = "Aggressive + Skilled - Key Bruin";
        playerImage.src = "/NHL/hockey_img/players/marchand.jpg";
    }

    else if (selectedPlayer === "53") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Finland";
        club.textContent = "Carolina Hurricanes";
        position.textContent = "Center";
        stats.innerHTML = "Fast, Smart & Creative";
        playerImage.src = "/NHL/hockey_img/players/aho.jpg";
    }

    else if (selectedPlayer === "54") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Canada";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Center";
        stats.innerHTML = "Speed & Finish - Clutch Performer";
        playerImage.src = "/NHL/hockey_img/players/point.jpg";
    }

    else if (selectedPlayer === "55") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Sweden";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Defenseman";
        stats.innerHTML = "Defensive Beast - Norris Caliber";
        playerImage.src = "/NHL/hockey_img/players/hedman.jpg";
    }

    else if (selectedPlayer === "56") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Russia";
        club.textContent = "Tampa Bay Lightning";
        position.textContent = "Goaltender";
        stats.innerHTML = "Cup Winner - Vezina Caliber";
        playerImage.src = "/NHL/hockey_img/players/vasilevskiy.jpg";
    }

    else if (selectedPlayer === "57") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Sweden";
        club.textContent = "New Jersey Devils";
        position.textContent = "Right Wing";
        stats.innerHTML = "Fast & Underrated - Breakout Year";
        playerImage.src = "/NHL/hockey_img/players/bratt.jpg";
    }

    else if (selectedPlayer === "58") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Sweden";
        club.textContent = "Buffalo Sabres";
        position.textContent = "Defenseman";
        stats.innerHTML = "Young, Fast, Skilled - Norris Future";
        playerImage.src = "/NHL/hockey_img/players/dahlin.jpg";
    }

    else if (selectedPlayer === "59") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2024-25";
        nation.textContent = "Sweden";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Right Wing";
        stats.innerHTML = "Scoring Winger - Smooth Sniper";
        playerImage.src = "/NHL/hockey_img/players/nylander.jpg";
    }
    // in 2030
else if (selectedPlayer === "60") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Canada";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "League Leader - Still Dominant";
        playerImage.src = "/NHL/hockey_img/players/mcdavid.jpg";
    }

    else if (selectedPlayer === "61") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Center";
        stats.innerHTML = "Captain - Explosive & Elite";
        playerImage.src = "/NHL/hockey_img/players/mackinnon.jpg";
    }

    else if (selectedPlayer === "62") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Canada";
        club.textContent = "Chicago Blackhawks";
        position.textContent = "Center";
        stats.innerHTML = "Rookie Sensation - Future Superstar";
        playerImage.src = "/NHL/hockey_img/players/bedard.jpg";
    }

    else if (selectedPlayer === "63") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "USA";
        club.textContent = "Toronto Maple Leafs";
        position.textContent = "Center";
        stats.innerHTML = "Goal Machine - Fan Favorite";
        playerImage.src = "/NHL/hockey_img/players/matthews.jpg";
    }

    else if (selectedPlayer === "64") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Canada";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Defenseman";
        stats.innerHTML = "Elite Mobility - Defensive QB";
        playerImage.src = "/NHL/hockey_img/players/makar.jpg";
    }

    else if (selectedPlayer === "65") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Germany";
        club.textContent = "Edmonton Oilers";
        position.textContent = "Center";
        stats.innerHTML = "Powerful Scorer - Elite Vision";
        playerImage.src = "/NHL/hockey_img/players/draisaitl.jpg";
    }

    else if (selectedPlayer === "66") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "USA";
        club.textContent = "New Jersey Devils";
        position.textContent = "Center";
        stats.innerHTML = "Breakout Speed & Control";
        playerImage.src = "/NHL/hockey_img/players/jhughes.jpg";
    }

    else if (selectedPlayer === "67") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Russia";
        club.textContent = "Minnesota Wild";
        position.textContent = "Left Wing";
        stats.innerHTML = "Playmaker - Creative Force";
        playerImage.src = "/NHL/hockey_img/players/kaprizov.jpg";
    }

    else if (selectedPlayer === "68") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "USA";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Defenseman";
        stats.innerHTML = "Norris Winner - Dynamic Skater";
        playerImage.src = "/NHL/hockey_img/players/qhughes.jpg";
    }

    else if (selectedPlayer === "69") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Sweden";
        club.textContent = "Vancouver Canucks";
        position.textContent = "Center";
        stats.innerHTML = "Offensive Leader - 2-Way Beast";
        playerImage.src = "/NHL/hockey_img/players/pettersson.jpg";
    }

    else if (selectedPlayer === "70") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "USA";
        club.textContent = "New York Rangers";
        position.textContent = "Defenseman";
        stats.innerHTML = "Steady D-core - Smart Plays";
        playerImage.src = "/NHL/hockey_img/players/fox.jpg";
    }

    else if (selectedPlayer === "71") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Finland";
        club.textContent = "Colorado Avalanche";
        position.textContent = "Right Wing";
        stats.innerHTML = "Big Frame - Clean Finish";
        playerImage.src = "/NHL/hockey_img/players/rantanen.jpg";
    }

    else if (selectedPlayer === "72") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Czech Republic";
        club.textContent = "Boston Bruins";
        position.textContent = "Right Wing";
        stats.innerHTML = "Elite Accuracy - Consistent Goals";
        playerImage.src = "/NHL/hockey_img/players/pastrnak.jpg";
    }

    else if (selectedPlayer === "73") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Russia";
        club.textContent = "New York Rangers";
        position.textContent = "Goaltender";
        stats.innerHTML = "Sharp Reflexes - Calm Presence";
        playerImage.src = "/NHL/hockey_img/players/shesterkin.jpg";
    }

    else if (selectedPlayer === "74") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "USA";
        club.textContent = "Anaheim Ducks";
        position.textContent = "Center";
        stats.innerHTML = "Stylish Dangles - NHL Showman";
        playerImage.src = "/NHL/hockey_img/players/zegras.jpg";
    }

    else if (selectedPlayer === "75") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Canada";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Center";
        stats.innerHTML = "Young Captain - Solid 2-Way Play";
        playerImage.src = "/NHL/hockey_img/players/suzuki.jpg";
    }

    else if (selectedPlayer === "76") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "USA";
        club.textContent = "Ottawa Senators";
        position.textContent = "Left Wing";
        stats.innerHTML = "Aggressive + Goal-Getter";
        playerImage.src = "/NHL/hockey_img/players/btkachuk.jpg";
    }

    else if (selectedPlayer === "77") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Finland";
        club.textContent = "Carolina Hurricanes";
        position.textContent = "Center";
        stats.innerHTML = "Creative Playmaker - All Situations";
        playerImage.src = "/NHL/hockey_img/players/aho.jpg";
    }

    else if (selectedPlayer === "78") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "USA";
        club.textContent = "Dallas Stars";
        position.textContent = "Left Wing";
        stats.innerHTML = "Rising Star - Big Goals in Big Games";
        playerImage.src = "/NHL/hockey_img/players/robertson.jpg";
    }

    else if (selectedPlayer === "79") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "USA";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Right Wing";
        stats.innerHTML = "Small Frame, Huge Shot";
        playerImage.src = "/NHL/hockey_img/players/caufield.jpg";
    }

    else if (selectedPlayer === "80") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Sweden";
        club.textContent = "New Jersey Devils";
        position.textContent = "Right Wing";
        stats.innerHTML = "Creative + Fast - Underrated Gem";
        playerImage.src = "/NHL/hockey_img/players/bratt.jpg";
    }

    else if (selectedPlayer === "81") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "USA";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Defenseman";
        stats.innerHTML = "Rising Young Star - Offensive Touch";
        playerImage.src = "/NHL/hockey_img/players/hutson.jpg";
    }

    else if (selectedPlayer === "82") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "USA";
        club.textContent = "Buffalo Sabres";
        position.textContent = "Center";
        stats.innerHTML = "Elite Frame - Powerful Shot";
        playerImage.src = "/NHL/hockey_img/players/thompson.jpg";
    }

    else if (selectedPlayer === "83") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "USA";
        club.textContent = "Dallas Stars";
        position.textContent = "Goaltender";
        stats.innerHTML = "Sharp Reactions - Franchise Netminder";
        playerImage.src = "/NHL/hockey_img/players/oettinger.jpg";
    }

    else if (selectedPlayer === "84") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Germany";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Defenseman";
        stats.innerHTML = "Hard-Hitting - Steady on the Blue Line";
        playerImage.src = "/NHL/hockey_img/players/seider.jpg";
    }

    else if (selectedPlayer === "85") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Slovakia";
        club.textContent = "Montreal Canadiens";
        position.textContent = "Left Wing";
        stats.innerHTML = "Physical Presence - Power Game";
        playerImage.src = "/NHL/hockey_img/players/slafkovsky.jpg";
    }

    else if (selectedPlayer === "86") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Russia";
        club.textContent = "Columbus Blue Jackets";
        position.textContent = "Goaltender";
        stats.innerHTML = "Tall, Agile, Great Upside";
        playerImage.src = "/NHL/hockey_img/players/tarasov.jpg";
    }

    else if (selectedPlayer === "87") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Russia";
        club.textContent = "Philadelphia Flyers";
        position.textContent = "Right Wing";
        stats.innerHTML = "Young Prodigy - Elite Shot";
        playerImage.src = "/NHL/hockey_img/players/michkov.jpg";
    }

    else if (selectedPlayer === "88") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Sweden";
        club.textContent = "Detroit Red Wings";
        position.textContent = "Right Wing";
        stats.innerHTML = "High IQ Winger - Smooth Finish";
        playerImage.src = "/NHL/hockey_img/players/raymond.jpg";
    }

    else if (selectedPlayer === "89") {
        title.innerHTML = "TOP NHL POINTERS<BR>IN 2030";
        nation.textContent = "Canada";
        club.textContent = "Buffalo Sabres";
        position.textContent = "Defenseman";
        stats.innerHTML = "Top Prospect - All-Around Game";
        playerImage.src = "/NHL/hockey_img/players/power.jpg";
    }
    // document.querySelector(".short").style.background = "linear-gradient(-45deg, grey 30%, dodgerblue 70%)";
}

document.querySelector(".yearSelector").addEventListener("change", () => {

    selectedPlayer = playerDropdown.value;  // Update selectedPlayer
    localStorage.setItem("selectedYear", playerDropdown.value);

    displayPlayerInfo();
});
