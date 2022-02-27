const prestige = () => {
    if(game.x >= 1e6) {
        yUpgrade.primary[3].bought ?  game.y += Math.floor(Math.floor(Math.log10(game.x) - 5) * 2 * yUpgrade.primary[9].multiplier) : game.y += Math.floor(Math.floor(Math.log10(game.x) - 5) * yUpgrade.primary[9].multiplier)
        yUpgrade.primary[3].bought ? game.totalY += Math.floor(Math.floor(Math.log10(game.x) - 5) * 2 * yUpgrade.primary[9].multiplier) : game.totalY += Math.floor(Math.floor(Math.log10(game.x) - 5) * yUpgrade.primary[9].multiplier)

        if(game.totalY >= 50) document.querySelector(".ySecondary-left").style.display = "block"
        if(game.totalY >= 50) document.querySelector(".ySecondary-right").style.display = "block"

        if(yUpgrade.primary[4].bought) yUpgrade.primary[4].multiplier = Math.sqrt(game.y + 1)

        document.querySelector(".y").style.display = "inline"
        document.querySelectorAll(".navBtn")[2].style.display = "block"
        document.querySelectorAll(".prestige")[0].style.display = "none"


        game.x = 5
        for(i = 1; i < 10; i++) {
            i <= 6 ? game['upgrade' + i].cost = game['upgrade' + i].baseCost * (1 - yUpgrade.secondary[5].level * 0.03) 
            : game['upgrade' + i].cost = game['upgrade' + i].baseCost
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
        game.masteryReq = 100 - yUpgrade.secondary[6].level * 3
        game.masteryMultiplier = 1
        game.masteryBonusExp = 0
        yUpgrade.primary[5].bought ? game.superCharge = 1 : game.superCharge = 0
        gainMastery(0)
    }
}

let yUpgrade = {
    primary: {
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
        },
        8: {                //Unlock more upgrades
            cost: 30,
            bought: false,
            enabled: false
        },
        9: {                //Unlock more upgrades
            cost: 50,
            bought: false,
            multiplier: 1,
        },
    },   
    secondary: {
        1: {
            level: 0,
            max: 100
        },
        2: {
            level: 0,
            max: 100
        },
        3: {
            level: 0,
            max: 3
        },
        4: {
            level: 0,
            max: 5
        },
        5: {
            level: 0,
            max: 5
        },
        6: {
            level: 0,
            max: 5
        }
    }
}


//Y prestige related
const buyYUpgrade = (number) => {
    if(!yUpgrade.primary[number].bought && game.y >= yUpgrade.primary[number].cost) {
        game.y -= yUpgrade.primary[number].cost
        yUpgrade.primary[number].bought = true
        document.querySelector("#yUpgrade" + number + "Cost").textContent = `Max`
        if(number == 5) game.superCharge++
    }
    if(yUpgrade.primary[4].bought) yUpgrade.primary[4].multiplier = Math.sqrt(game.y + 1)
    if(yUpgrade.primary[1].bought) document.querySelectorAll(".navBtn")[3].style.display = "inline"
    if(yUpgrade.primary[1].bought) {
        document.querySelectorAll(".center")[0].style.display = "flex"
        document.querySelectorAll(".upgrade")[5].style.display = "grid"
    }
    
    if(yUpgrade.primary[7].bought) {
        document.querySelectorAll(".upgrade")[6].style.display = "grid"
        document.querySelectorAll(".upgrade")[7].style.display = "grid"
        document.querySelectorAll(".upgrade")[8].style.display = "grid"

        document.querySelectorAll(".mastery")[7].style.display = "grid"
        document.querySelectorAll(".mastery")[8].style.display = "grid"
        document.querySelectorAll(".mastery")[9].style.display = "grid"
    }
    if(yUpgrade.primary[8].bought && number == 8) {
        yUpgrade.primary[8].enabled ? yUpgrade.primary[8].enabled = false : yUpgrade.primary[8].enabled = true
    }
}

const buyYSecondary = (number) => {
    if(game.y < yUpgrade.secondary[number].level * 5 + 10 || yUpgrade.secondary[number].level >= yUpgrade.secondary[number].max) return
    game.y -= yUpgrade.secondary[number].level * 5 + 10
    yUpgrade.secondary[number].level++
    setUpgradeStats()
}

setInterval(() => {
    if(yUpgrade.primary[8].enabled) {
        buyUpgrade('1')
        buyUpgrade('2')
        buyUpgrade('3')
        buyUpgrade('4')
        buyUpgrade('5')
        buyUpgrade('6')
        buyUpgrade('7')
        buyUpgrade('8')
        buyUpgrade('9')
    }
}, 250);

