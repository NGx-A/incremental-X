const prestige = (prestigeType) => {
    if(prestigeType == "y" && game.x >= 1e6) {
        if(yUpgrade[3].bought) game.y += Math.floor(Math.log10(game.x) - 5) * 2
        else game.y += Math.floor(Math.log10(game.x) - 5)
        game.totalY += Math.floor(Math.log10(game.x) - 5)

        if(yUpgrade[4].bought) yUpgrade[4].multiplier = Math.sqrt(game.y + 1)

        document.querySelector(".y").style.display = "inline"
        document.querySelectorAll(".navBtn")[3].style.display = "block"
        document.querySelectorAll(".prestige")[0].style.display = "none"


        game.x = 5
        for(i = 1; i < 8; i++) {
            game['upgrade' + i].cost = game['upgrade' + i].baseCost
            game['upgrade' + i].level = 0
            game['upgrade' + i].extraLevel = 0
            game['upgrade' + i].costScaling = game['upgrade' + i].baseCostScaling
            game['upgrade' + i].effect = game['upgrade' + i].baseEffect
            game['upgrade' + i].superChargedLevel = 0
        }

        setUpgradeStats()

        prevX = 0
        game.xPerSecond = 0
        game.masteryLevel = 0
        game.masteryExp = 0
        game.masteryReq = 100
        game.masteryMultiplier = 1
        game.masteryBonusExp = 0
        yUpgrade[5].bought ? game.superCharge = 1 : game.superCharge = 0
        gainMastery(0)
    }
}

let yUpgrade = {
    1: {                //Mastery
        cost: 1,
        bought: false
    },
    2: {                //x2 upgrade 1
        cost: 1,
        bought: false
    },
    3: {                //x2 y gain
        cost: 2,
        bought: false
    },
    4: {                //boost x by y 
        cost: 5,
        bought: false,
        multiplier: 1
    },
    5: {                //start with super charges
        cost: 10,
        bought: false
    },
    6: {                //x2 EXP
        cost: 10,
        bought: false
    },
    7: {                //Unlock more upgrades
        cost: 15,
        bought: false
    }
}

//Y prestige related
const buyYUpgrade = (number) => {
    if(!yUpgrade[number].bought && game.y >= yUpgrade[number].cost) {
        game.y -= yUpgrade[number].cost
        yUpgrade[number].bought = true
        document.querySelector("#yUpgrade" + number + "Cost").textContent = `Maxed`
        if(number == 5) game.superCharge++
    }
    if(yUpgrade[4].bought) yUpgrade[4].multiplier = Math.sqrt(game.y + 1)
    if(yUpgrade[1].bought) document.querySelectorAll(".navBtn")[2].style.display = "inline"
    if(yUpgrade[7].bought) {
        document.querySelectorAll(".upgrade")[6].style.display = "grid"
        document.querySelectorAll(".upgrade")[7].style.display = "grid"
       //document.querySelectorAll(".upgrade")[8].style.display = "grid"

        document.querySelectorAll(".master")[7].style.display = "grid"
        document.querySelectorAll(".master")[8].style.display = "grid"
    }
}

