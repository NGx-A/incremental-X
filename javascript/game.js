let game = {
    version: "v0.1.1",
    currentTab: "main",
    tabs: [],

    x: 5,
    xPerSecond: 0,

    masteryLevel: 0,
    masteryExp: 0,
    masteryReq: 15,
    masteryMultiplier: 1,
    masteryBonusExp: 0,
    perksUsed: 0,
    
    upgrade1: {
        baseCost: 5,
        cost: 5,
        level: 0,
        extraLevel: 0,
        costScaling: 1.15,
        effect: 1
    },
    upgrade2: {
        baseCost: 15,
        cost: 15,
        level: 0,
        extraLevel: 0,
        costScaling: 1.35,
        effect: 1
    },
    upgrade3: {
        baseCost: 1e3,
        cost: 1e3,
        level: 0,
        extraLevel: 0,
        costScaling: 1.5,
        effect: 1
    },
    upgrade4: {
        baseCost: 2.5e3,
        cost: 2.5e3,
        level: 0,
        extraLevel: 0,
        costScaling: 1.9,
        effect: 0.05
    }, 
    upgrade5: {
        baseCost: 1e4,
        cost: 1e4,
        level: 0,
        extraLevel: 0,
        costScaling: 0,
        effect: 0
    }, 
    upgrade6: {
        baseCost: 1e4,
        cost: 1e4,
        level: 0,
        extraLevel: 0,
        costScaling: 1.85,
        effect: 0
    }
}
let lastUpdate = Date.now()
game.tabs = document.querySelectorAll(".tab")

const gameLoop = () => {
    let diff = (Date.now() - lastUpdate) / 1000

    game.x += game.xPerSecond * diff

    lastUpdate = Date.now()
}

const buyUpgrade = (number) => {
    if(game.x < game['upgrade' + number].cost) return
    if(number == 5 && game.upgrade5.level >= 1) return

    game.x -= game['upgrade' + number].cost
    game['upgrade' + number].level++

    if(number != 5) {
        if(game.masteryLevel >= 5) game['upgrade' + number].extraLevel += 0.1
        game['upgrade' + number].cost *= game['upgrade' + number].costScaling
    }

    game.upgrade1.effect = ((game.upgrade3.level + game.upgrade3.extraLevel) * 0.2 + 1)
    if(game.upgrade5.level != 1) game.upgrade2.effect = (game.upgrade2.level + game.upgrade2.extraLevel) * 0.125 + 1
    else game.upgrade2.effect = Math.pow(1.125, game.upgrade2.level + game.upgrade2.extraLevel)
    upgrade1Effect = (game.upgrade1.level + game.upgrade1.extraLevel) * game.upgrade1.effect
    upgrade4Power = 1 + (game.upgrade4.level + game.upgrade4.extraLevel) * game.upgrade4.effect
    game.upgrade6.effect = (game.upgrade6.level + game.upgrade6.extraLevel) * 0.2

    if(game.masteryLevel >= 3) game.masteryBonusExp = 0.2 + game.upgrade6.effect
    else game.masteryBonusExp = game.upgrade6.effect

    if(number != 6) gainMastery(parseInt(number)) 
    game.xPerSecond = Math.pow(upgrade1Effect * game.upgrade2.effect * game.masteryMultiplier, upgrade4Power)
}

const gainMastery = (amount) => {
    game.masteryExp += amount + game.masteryBonusExp
    if(game.masteryExp >= game.masteryReq) {
        game.masteryExp -= game.masteryReq
        game.masteryReq += 5 + game.masteryLevel * 2
        game.masteryLevel++
    }
    domRoot.style.setProperty('--progressBarWidth', `${game.masteryExp / game.masteryReq * 100}%`)
    domRoot.style.setProperty('--progressBarText', `"${game.masteryLevel}"`)

    masteryPerks()
}

const masteryPerks = () => {
    if(game.masteryLevel >= 1 && game.masteryLevel < 6) document.querySelectorAll(".mastery-container")[game.masteryLevel - 1].style.display = "grid"

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






 