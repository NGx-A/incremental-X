let game = {
    version: "v0.3.1",
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
        baseCost: 15,
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
        costScaling: 1.45,
        baseCostScaling: 1.45,
        effect: 0.2,
        totalEffect: 0,
        baseEffect: 0.2,
        superChargedLevel: 0
    },
    upgrade7: {
        x: 0,
        effect: 0
    },
    upgrade8: {
        x: 0,
        effect: 0
    },
    upgrade9: {
        x: 0,
        effect: 0
    }
}
let lastUpdate = Date.now()
game.tabs = document.querySelectorAll(".tab")

const gameLoop = () => {
    let diff = (Date.now() - lastUpdate) / 1000

    game.x += game.xPerSecond * diff

    game.upgrade4.effect = Math.log10(game.xPerSecond + 1) * (5 + game.upgrade4.superChargedLevel) / 100
    game.upgrade4.totalEffect = Math.pow(game.upgrade4.effect + 1, game.upgrade4.level)

    game.xPerSecond = game.upgrade1.totalEffect * game.upgrade2.totalEffect * game.upgrade4.totalEffect * yUpgrade[4].multiplier

    //Check if can prestige
    if(game.x >= 1e6) document.querySelectorAll(".prestige")[0].style.display = "grid"

    lastUpdate = Date.now()
}

const buyUpgrade = (number) => {
    if(game.x < game['upgrade' + number].cost) return

    game.x -= game['upgrade' + number].cost
    game['upgrade' + number].level++
    game['upgrade' + number].cost *= game['upgrade' + number].costScaling

    setUpgradeStats()    
    if(yUpgrade[1].bought) gainMastery(parseInt(number))
}

const depositX = (number) => {
    game['upgrade' + number].x += game.x
    game.x = 0
    setUpgradeStats()
}

const setUpgradeStats = () => {
    if(yUpgrade[2].bought) game.upgrade1.effect = (1 + game.upgrade1.superChargedLevel + game.upgrade3.totalEffect) * 2
    else game.upgrade1.effect = 1 + game.upgrade1.superChargedLevel + game.upgrade3.totalEffect
    game.upgrade2.effect = 0.5 + game.upgrade2.superChargedLevel * 0.25
    game.upgrade3.effect = Math.pow((0.25 + game.upgrade3.superChargedLevel * 0.05) + 1, game.upgrade5.totalEffect) - 1
    game.upgrade5.effect = 0.03 + game.upgrade5.superChargedLevel * 0.025
    game.upgrade6.effect = 0.2 + game.upgrade6.superChargedLevel * 0.2

    game.upgrade1.totalEffect = game.upgrade1.level* game.upgrade1.effect
    game.upgrade2.totalEffect = 1 + game.upgrade2.level * game.upgrade2.effect
    game.upgrade3.totalEffect = game.upgrade3.effect * game.upgrade3.level
    game.upgrade5.totalEffect = 1 + game.upgrade5.effect * game.upgrade5.level
    game.upgrade6.totalEffect = game.upgrade6.effect * game.upgrade6.level
}

const gainMastery = (amount) => {
    if(yUpgrade[6].bought) game.masteryExp += (amount + game.upgrade6.totalEffect) * 2
    else game.masteryExp += amount + game.upgrade6.totalEffect

    while(game.masteryExp >= game.masteryReq) {
        game.masteryExp -= game.masteryReq
        game.masteryReq += 25 * (game.masteryLevel + 1)
        game.masteryLevel++
        game.superCharge++
    }
    
    domRoot.style.setProperty('--progressBarWidth', `${game.masteryExp / game.masteryReq * 100}%`)
    domRoot.style.setProperty('--progressBarText', `"${game.masteryLevel}"`)
    document.querySelector(".masteryProgress").textContent = `${format(game.masteryExp, 1)} EXP / ${format(game.masteryReq, 0)} EXP`
}

const superCharge = (number) => {
    if(game.superCharge < 1) return
    game['upgrade' + number].superChargedLevel++
    game.superCharge-- 
    setUpgradeStats()
}


const openTab = (id) => {
    game.currentTab = id

    for(i = 0; i < game.tabs.length; i++) {
        document.querySelectorAll(".tab")[i].style.display = "none"
    }

    document.querySelector(`#${game.currentTab}`).style.display = "grid"
}

setInterval(gameLoop, 50)
