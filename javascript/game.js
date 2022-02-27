let game = {
    version: "v0.3.3",
    currentTab: "main",
    tabs: [],

    x: 5,
    xPerSecond: 0,
    y: 0,
    totalY: 0,

    masteryLevel: 0,
    masteryExp: 0,
    masteryReq: 100,
    masteryMultiplier: 1,
    masteryBonusExp: 0,
    superCharge: 0,
    
    upgrade1: {
        baseCost: 5,
        cost: 5,
        level: 0,
        extraLevel: 0,
        costScaling: 1.15,
        baseCostScaling: 1.15,
        effect: 1,
        totalEffect: 0,
        baseEffect: 1,
        superChargedLevel: 0
    },
    upgrade2: {
        baseCost: 25,
        cost: 25,
        level: 0,
        extraLevel: 0,
        costScaling: 1.35,
        baseCostScaling: 1.35,
        effect: 0.5,
        totalEffect: 1,
        baseEffect: 0.5,
        superChargedLevel: 0
    },
    upgrade3: {
        baseCost: 250,
        cost: 250,
        level: 0,
        extraLevel: 0,
        costScaling: 1.65,
        baseCostScaling: 1.65,
        effect: 0.25,
        totalEffect: 0,
        baseEffect: 0.25,
        superChargedLevel: 0
    },
    upgrade4: {
        baseCost: 1000,
        cost: 1000,
        level: 0,
        extraLevel: 0,
        costScaling: 2.25,
        baseCostScaling: 2.25,
        effect: 0,
        totalEffect: 0,
        baseEffect: 0,
        superChargedLevel: 0
    }, 
    upgrade5: {
        baseCost: 1.5e4,
        cost: 1.5e4,
        level: 0,
        extraLevel: 0,
        costScaling: 1.75,
        baseCostScaling: 1.75,
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
        costScaling: 1.9,
        baseCostScaling: 1.9,
        effect: 0.2,
        totalEffect: 0,
        baseEffect: 0.2,
        superChargedLevel: 0
    },
    upgrade7: {
        baseCost: 1e6,
        cost: 1e6,
        level: 0,
        extraLevel: 0,
        costScaling: 2.5,
        baseCostScaling: 2.5,
        effect: 0.01,
        totalEffect: 0,
        baseEffect: 0.01,
        superChargedLevel: 0
    },
    upgrade8: {
        baseCost: 1e6,
        cost: 1e6,
        level: 0,
        extraLevel: 0,
        costScaling: 2.5,
        baseCostScaling: 2.5,
        effect: 0.01,
        totalEffect: 0,
        baseEffect: 0.01,
        superChargedLevel: 0
    },
    upgrade9: {
        baseCost: 1e6,
        cost: 1e6,
        level: 0,
        extraLevel: 0,
        costScaling: 2.5,
        baseCostScaling: 2.5,
        effect: 0.01,
        totalEffect: 1,
        baseEffect: 0.01,
        superChargedLevel: 0
    },
}
let lastUpdate = Date.now()
game.tabs = document.querySelectorAll(".tab")

const gameLoop = () => {
    let diff = (Date.now() - lastUpdate) / 1000

    game.x += game.xPerSecond * diff

    Math.log10(game.xPerSecond + 1) * 5 / 100 * game.upgrade9.totalEffect  <= 0.30 + game.upgrade4.superChargedLevel * 0.05 ? game.upgrade4.effect = Math.log10(game.xPerSecond + 1) * 5 / 100 * game.upgrade9.totalEffect  : game.upgrade4.effect = 0.30 + game.upgrade4.superChargedLevel * 0.05
    game.upgrade4.totalEffect = Math.pow(game.upgrade4.effect + 1, game.upgrade4.level + yUpgrade.secondary[1].level)

    game.xPerSecond = game.upgrade1.totalEffect * game.upgrade2.totalEffect * game.upgrade4.totalEffect * yUpgrade.primary[4].multiplier * (1 + yUpgrade.secondary[2].level * 2)

    

    //Check if can prestige
    if(game.x >= 1e6) document.querySelectorAll(".prestige")[0].style.display = "grid"

    lastUpdate = Date.now()
}

const buyUpgrade = (number) => {
    if(game.x < game['upgrade' + number].cost) return
    if(number >= "7" && game['upgrade' + number].level >= 10) return


    game.x -= game['upgrade' + number].cost
    game['upgrade' + number].level++
    game['upgrade' + number].cost *= game['upgrade' + number].costScaling

    setUpgradeStats()    
    if(yUpgrade.primary[1].bought) gainMastery(parseInt(number))
}

const setUpgradeStats = () => {
    game.upgrade9.effect = 0.01 + game.upgrade9.superChargedLevel * 0.003333
    game.upgrade9.totalEffect = 1 + game.upgrade9.effect * game.upgrade9.level 

    game.upgrade5.effect = (0.03 + game.upgrade5.superChargedLevel * 0.025) * game.upgrade9.totalEffect 
    game.upgrade5.totalEffect = 1 + game.upgrade5.effect * (game.upgrade5.level + yUpgrade.secondary[1].level)
    game.upgrade3.effect = (Math.pow((0.25 + game.upgrade3.superChargedLevel * 0.05) + 1, game.upgrade5.totalEffect) - 1) * game.upgrade9.totalEffect
    game.upgrade3.totalEffect = game.upgrade3.effect * (game.upgrade3.level + yUpgrade.secondary[1].level)
    yUpgrade.primary[2].bought ? game.upgrade1.effect = (1 + game.upgrade3.totalEffect) * 2 * game.upgrade9.totalEffect * Math.round(1 + game.upgrade1.superChargedLevel * 0.33) : game.upgrade1.effect = (1 + game.upgrade3.totalEffect) * game.upgrade9.totalEffect * Math.round(1 + game.upgrade1.superChargedLevel * 0.33)
    game.upgrade2.effect = (0.5 + game.upgrade2.superChargedLevel * 0.15) * game.upgrade9.totalEffect
    
    game.upgrade6.effect = (0.25 + game.upgrade6.superChargedLevel * 0.1) * game.upgrade9.totalEffect 
    game.upgrade7.effect = 0.01 + game.upgrade7.superChargedLevel * 0.003333
    game.upgrade8.effect = 0.01 + game.upgrade8.superChargedLevel * 0.003333

    game.upgrade1.totalEffect = game.upgrade1.effect * (game.upgrade1.level + yUpgrade.secondary[1].level)
    game.upgrade2.totalEffect = 1 + game.upgrade2.effect * (game.upgrade2.level + yUpgrade.secondary[1].level)
    
    game.upgrade6.totalEffect = 1 + game.upgrade6.effect * (game.upgrade6.level + yUpgrade.secondary[1].level)
    game.upgrade7.totalEffect = game.upgrade7.effect * game.upgrade7.level
    game.upgrade8.totalEffect = game.upgrade8.effect * game.upgrade8.level
    

    for(i = 1; i < 6; i++) {
        game['upgrade' + i].costScaling = (game['upgrade' + i].baseCostScaling - 1) * (1 - game.upgrade7.totalEffect) + 1
        game['upgrade' + i].cost = game['upgrade' + i].baseCost * (1 - yUpgrade.secondary[5].level * 0.03) * Math.pow(game['upgrade' + i].costScaling, game['upgrade' + i].level)
    } 
}

let prevX = 0
const gainMastery = (amount) => {
    amount >= 7 ? amount = 7 : amount
    yUpgrade.primary[6].bought ? game.masteryExp += (amount * game.upgrade6.totalEffect * (1 + yUpgrade.secondary[4].level * 0.3)) * 2 : game.masteryExp += amount * game.upgrade6.totalEffect * (1 + yUpgrade.secondary[4].level * 0.3)
    while(game.masteryExp >= game.masteryReq) {
        game.masteryExp -= game.masteryReq
        prevX += game.masteryLevel
        game.masteryLevel++
        game.superCharge++
    }
    game.masteryReq = (100 - yUpgrade.secondary[6].level * 3) + 25 * (game.masteryLevel + prevX) * (1 - game.upgrade8.totalEffect)
    yUpgrade.primary[9].bought ? yUpgrade.primary[9].multiplier = Math.sqrt(game.superCharge + 1) : yUpgrade.primary[9].multiplier = 1
    
    domRoot.style.setProperty('--progressBarWidth', `${game.masteryExp / game.masteryReq * 100}%`)
    domRoot.style.setProperty('--progressBarText', `"${game.masteryLevel}"`)
    document.querySelector(".masteryProgress").textContent = `${format(game.masteryExp, 1)} EXP / ${format(game.masteryReq, 0)} EXP`
}

const superCharge = (number) => {
    if(number < 7) {
        if(game.superCharge < 1 || game['upgrade' + number].superChargedLevel >= 3 + yUpgrade.secondary[3].level) return
    } else if (game.superCharge < 1 || game['upgrade' + number].superChargedLevel >= 3) return
    game['upgrade' + number].superChargedLevel++
    game.superCharge-- 
    setUpgradeStats()
    gainMastery(0)
}


const openTab = (id) => {
    game.currentTab = id

    for(i = 0; i < game.tabs.length; i++) {
        document.querySelectorAll(".tab")[i].style.display = "none"
    }

    document.querySelector(`#${game.currentTab}`).style.display = "grid"
}

setInterval(gameLoop, 50)
