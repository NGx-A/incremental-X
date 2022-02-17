let game = {
    version: "v0.2.3",
    currentTab: "main",
    tabs: [],

    x: 5,
    xPerSecond: 0,
    y: 0,
    totalY: 0,

    masteryLevel: 0,
    masteryExp: 0,
    masteryReq: 30,
    masteryMultiplier: 1,
    masteryBonusExp: 0,
    perksUsed: 0,
    
    upgrade1: {
        baseCost: 5,
        cost: 5,
        level: 0,
        extraLevel: 0,
        costScaling: 1.15,
        baseCostScaling: 1.15,
        effect: 1,
        totalEffect: 1,
        baseEffect: 1,
        superChargedLevel: 0
    },
    upgrade2: {
        baseCost: 15,
        cost: 15,
        level: 0,
        extraLevel: 0,
        costScaling: 1.35,
        baseCostScaling: 1.35,
        effect: 1,
        totalEffect: 1,
        baseEffect: 1,
        superChargedLevel: 0
    },
    upgrade3: {
        baseCost: 500,
        cost: 500,
        level: 0,
        extraLevel: 0,
        costScaling: 1.65,
        baseCostScaling: 1.65,
        effect: 0,
        totalEffect: 1,
        baseEffect: 0.2,
        superChargedLevel: 0
    },
    upgrade4: {
        baseCost: 2.5e3,
        cost: 2.5e3,
        level: 0,
        extraLevel: 0,
        costScaling: 2.75,
        baseCostScaling: 2.75,
        effect: 0.02,
        totalEffect: 0,
        baseEffect: 0.02,
        superChargedLevel: 0
    }, 
    upgrade5: {
        baseCost: 1e4,
        cost: 1e4,
        level: 0,
        extraLevel: 0,
        costScaling: 1,
        baseCostScaling: 1,
        effect: 0,
        totalEffect: 0,
        baseEffect: 0,
        superChargedLevel: 0
    }, 
    upgrade6: {
        baseCost: 1e4,
        cost: 1e4,
        level: 0,
        extraLevel: 0,
        costScaling: 1.45,
        baseCostScaling: 1.45,
        effect: 0.2,
        totalEffect: 0,
        baseEffect: 0.2,
        superChargedLevel: 0
    },
    upgrade7: {
        baseCost: 1e4,
        cost: 1e4,
        level: 0,
        extraLevel: 0,
        costScaling: 1.45,
        baseCostScaling: 1.45,
        effect: 0,
        totalEffect: 0,
        baseEffect: 0,
        superChargedLevel: 0
    },
    upgrade8: {
        baseCost: 1e4,
        cost: 1e4,
        level: 0,
        extraLevel: 0,
        costScaling: 1.45,
        baseCostScaling: 1.45,
        effect: 0,
        totalEffect: 0,
        baseEffect: 0,
        superChargedLevel: 0
    },
    upgrade9: {
        baseCost: 1e4,
        cost: 1e4,
        level: 0,
        extraLevel: 0,
        costScaling: 1.45,
        baseCostScaling: 1.45,
        effect: 0,
        totalEffect: 0,
        baseEffect: 0,
        superChargedLevel: 0
    }
}
let lastUpdate = Date.now()
game.tabs = document.querySelectorAll(".tab")

const gameLoop = () => {
    let diff = (Date.now() - lastUpdate) / 1000

    game.x += game.xPerSecond * diff

    //Check if can prestige
    if(game.x >= 1e6) document.querySelectorAll(".prestige")[0].style.display = "grid"

    lastUpdate = Date.now()
}

const buyUpgrade = (number) => {
    if(game.x < game['upgrade' + number].cost) return
    if(number == 5 && game.upgrade5.level >= 1) return

    game.x -= game['upgrade' + number].cost
    game['upgrade' + number].level++
    game['upgrade' + number].cost *= game['upgrade' + number].costScaling

    //Supercharge check
    if(game['upgrade' + number].level >= 101) {
        game['upgrade' + number].level = 0
        game['upgrade' + number].costScaling = ((game['upgrade' + number].costScaling - 1) * 1.5) + 1
        game['upgrade' + number].superChargedLevel++
        game['upgrade' + number].cost = game['upgrade' + number].baseCost * (game['upgrade' + number].superChargedLevel + 4)
    }

    setUpgradeStats()    
    
    //Set mastery bonus xp
    if(yUpgrade[2].bought) {
        if(game.masteryLevel >= 3) game.masteryBonusExp = 0.2 + game.upgrade6.totalEffect * 2
        else game.masteryBonusExp = game.upgrade6.totalEffect * 2
    }
    else if(game.masteryLevel >= 3) game.masteryBonusExp = 0.2 + game.upgrade6.totalEffect
    else game.masteryBonusExp = game.upgrade6.totalEffect
    

    gainMastery(parseInt(number)) 
    game.xPerSecond = Math.pow(game.upgrade1.totalEffect * game.upgrade2.totalEffect * game.masteryMultiplier * yUpgrade[4].multiplier, game.upgrade4.totalEffect) 
}

const setUpgradeStats = () => {
//Set upgrade effects
    if(yUpgrade[1].bought) game.upgrade1.effect = (game.upgrade1.baseEffect + game.upgrade1.superChargedLevel / 2) * game.upgrade3.totalEffect * 2
    else game.upgrade1.effect = (game.upgrade1.baseEffect + game.upgrade1.superChargedLevel / 2) * game.upgrade3.totalEffect 
    game.upgrade2.effect = 0.125 + game.upgrade2.superChargedLevel * 0.025
    game.upgrade3.effect = game.upgrade3.baseEffect + game.upgrade3.superChargedLevel * 0.05

//total effects
    game.upgrade1.totalEffect = (game.upgrade1.level + game.upgrade1.extraLevel) * game.upgrade1.effect
    if(game.upgrade5.level != 1) game.upgrade2.totalEffect = 1 + game.upgrade2.effect * (game.upgrade2.level + game.upgrade2.extraLevel)
    else game.upgrade2.totalEffect = Math.pow(1 + game.upgrade2.effect, game.upgrade2.level + game.upgrade2.extraLevel)
    game.upgrade3.totalEffect = 1 + game.upgrade3.effect * (game.upgrade3.level + game.upgrade3.extraLevel)
    game.upgrade4.totalEffect = 1 + game.upgrade4.effect * (game.upgrade4.level + game.upgrade4.extraLevel)
    game.upgrade6.totalEffect = game.upgrade6.effect * (game.upgrade6.level + game.upgrade6.extraLevel)
}

const gainMastery = (amount) => {
    if(yUpgrade[2].bought) game.masteryExp += (amount + game.masteryBonusExp) * 2
    else game.masteryExp += amount + game.masteryBonusExp
    if(game.masteryExp >= game.masteryReq) {
        game.masteryExp -= game.masteryReq
        game.masteryReq += 10 * (game.masteryLevel + 1)
        game.masteryLevel++
    }
    domRoot.style.setProperty('--progressBarWidth', `${game.masteryExp / game.masteryReq * 100}%`)
    domRoot.style.setProperty('--progressBarText', `"${game.masteryLevel}"`)
    document.querySelector(".masteryProgress").textContent = `${format(game.masteryExp, 1)} EXP / ${format(game.masteryReq, 0)} EXP`

    masteryPerks()
}

const masteryPerks = () => {
    if(game.masteryLevel >= 1 && game.masteryLevel < 7) document.querySelectorAll(".mastery-container")[game.masteryLevel - 1].style.display = "grid"

    if(game.masteryLevel >= 1 && game.perksUsed < 1) {
        game.perksUsed = 1
        game.masteryMultiplier *= 1.15
    }
    if(game.masteryLevel >= 2 && game.perksUsed < 2) {
        game.perksUsed = 2
        for(i = 0; i < 6; i++) {
            game["upgrade" + (i + 1)].costScaling -= (game["upgrade" + (i + 1)].costScaling - 1) * 0.1
            game["upgrade" + (i + 1)].cost = game["upgrade" + (i + 1)].baseCost * Math.pow(game["upgrade" + (i + 1)].costScaling, game["upgrade" + (i + 1)].level)
        }
    }
    if(game.masteryLevel >= 3 && game.perksUsed < 3) {
        game.perksUsed = 3
        game.expMultiplier += 0.3 + game.upgrade6.effect
    }
    if(game.masteryLevel >= 4 && game.perksUsed < 4) {
        game.perksUsed = 4
        game.masteryMultiplier *= 1.25
    }
    if(game.masteryLevel >= 5 && game.perksUsed < 5) {
        game.perksUsed = 5
    }
    if(game.masteryLevel >= 6) {
        game.masteryMultiplier = 1.25 * 1.15 * Math.pow(1.07, game.masteryLevel)
    }
}

const openTab = (id) => {
    game.currentTab = id

    for(i = 0; i < game.tabs.length; i++) {
        document.querySelectorAll(".tab")[i].style.display = "none"
    }

    document.querySelector(`#${game.currentTab}`).style.display = "grid"
    if(game.currentTab == "mastery") document.querySelector(`#${game.currentTab}`).style.display = "flex"
}

setInterval(gameLoop, 50)






 