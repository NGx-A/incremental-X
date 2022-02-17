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
        for(i = 1; i < 7; i++) {
            game['upgrade' + i].cost = game['upgrade' + i].baseCost
            game['upgrade' + i].level = 0
            game['upgrade' + i].extraLevel = 0
            game['upgrade' + i].costScaling = game['upgrade' + i].baseCostScaling
            game['upgrade' + i].effect = game['upgrade' + i].baseEffect
            game['upgrade' + i].superChargedLevel = 0
        }

        setUpgradeStats()

        game.xPerSecond = 0
        game.masteryLevel = 0
        game.masteryExp = 0
        game.masteryReq = 30
        game.masteryMultiplier = 1
        game.masteryBonusExp = 0
        game.perksUsed = 0
        gainMastery(0)

        //Hide mastery divs
        for(i = 0; i < 6; i++) {
            document.querySelectorAll(".mastery-container")[i].style.display = "none"
        }
    }
}

let yUpgrade = {
    1: {
        cost: 1,
        bought: false
    },
    2: {
        cost: 1,
        bought: false
    },
    3: {
        cost: 3,
        bought: false
    },
    4: {
        cost: 5,
        bought: false,
        multiplier: 1
    },
    5: {
        cost: 5,
        bought: false
    }
}

//Y prestige related
const buyYUpgrade = (number) => {
    if(game.y >= yUpgrade[number].cost && !yUpgrade[number].bought) {
        game.y -= yUpgrade[number].cost
        yUpgrade[number].bought = true
        document.querySelector("#yUpgrade" + number + "Cost").textContent = `Maxed`
    }
    if(yUpgrade[4].bought) yUpgrade[4].multiplier = Math.sqrt(game.y + 1)
    if(yUpgrade[5].bought) {
        document.querySelectorAll(".upgrade")[6].style.display = "grid"
        document.querySelectorAll(".upgrade")[7].style.display = "grid"
        document.querySelectorAll(".upgrade")[8].style.display = "grid"
    }
}