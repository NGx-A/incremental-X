let game = {
    version: "v0.4.0",
    currentTab: "main",
    tabs: [],

    x: 5,
    xPerSecond: 0,
    y: 0,
    totalY: 0,
    yPerSecond: 0,
    z: 0,
    totalZ: 0,

    masteryLevel: 0,
    masteryExp: 0,
    masteryReq: 100,
    superCharge: 0,
}

class mainUpgrade {
    constructor(baseCost, cost, level, maxLevel, baseCostScaling, costScaling, effect, totalEffect, superChargedLevel, superChargeBonus) {
        this.baseCost = baseCost
        this.cost = cost
        this.level = level
        this.maxLevel = maxLevel
        this.baseCostScaling = baseCostScaling
        this.costScaling = costScaling
        this.effect = effect
        this.totalEffect = totalEffect
        this.superChargedLevel = superChargedLevel
        this.superChargeBonus = superChargeBonus
    }
}

class mainSecondaryUpgrade {
    constructor(baseCost, cost, level, maxLevel, multiplier) {
        this.baseCost = baseCost
        this.cost = cost
        this.level = level
        this.maxLevel = maxLevel
        this.multiplier = multiplier
    }
}

//Innit main upgrades
let mUP1 = new mainUpgrade(5, 5, 0, 1e6, 1.15, 1.15, 0, 0, 0, 0.3333)
let mUP2 = new mainUpgrade(25, 25, 0, 1e6, 1.35, 1.35, 0, 0, 0, 0.15)
let mUP3 = new mainUpgrade(250, 250, 0, 1e6, 1.65, 1.65, 0, 0, 0, 0.05)
let mUP4 = new mainUpgrade(1000, 1000, 0, 1e6, 1.4, 1.4, 0, 0, 0, 0.1)
let mUP5 = new mainUpgrade(1.5e4, 1.5e4, 0, 1e6, 1.75, 1.75, 0, 0, 0, 0.025)
let mUP6 = new mainUpgrade(1e4, 1e4, 0, 1e6, 2, 2, 0, 0, 0, 0.3333)
let mUP7 = new mainUpgrade(1e6, 1e6, 0, 10, 2.5, 2.5, 0, 0, 0, 0.003333)
let mUP8 = new mainUpgrade(1e6, 1e6, 0, 10, 2.5, 2.5, 0, 0, 0, 0.003333)
let mUP9 = new mainUpgrade(1e6, 1e6, 0, 10, 2.5, 2.5, 0, 0, 0, 0.003333)

let mSUP1 = new mainSecondaryUpgrade(100, 100, 0, 1e6, 1)
let mSUP2 = new mainSecondaryUpgrade(100, 100, 0, 1e6, 1)
let mSUP3 = new mainSecondaryUpgrade(100, 100, 0, 1e6, 1)
let mSUP4 = new mainSecondaryUpgrade(100, 100, 0, 1e6, 1)
let mSUP5 = new mainSecondaryUpgrade(100, 100, 0, 1e6, 1)
let mSUP6 = new mainSecondaryUpgrade(100, 100, 0, 1e6, 1)

let mUP = [mUP1, mUP2, mUP3, mUP4, mUP5, mUP6, mUP7, mUP8, mUP9]
let mSUP = [mSUP1, mSUP2, mSUP3, mSUP4, mSUP5, mSUP6]

let lastUpdate = Date.now()
game.tabs = document.querySelectorAll(".tab")

const gameLoop = () => {
    let diff = (Date.now() - lastUpdate) / 1000

    game.yPerSecond = Math.pow(Math.sqrt(Math.log10(game.xPerSecond + 1)), 3) / 100 * yUP3.multiplier * yUP9.multiplier
    if(zUP4.level >= 1) {
        game.y += game.yPerSecond * diff
        game.totalY += game.yPerSecond * diff
    }
    game.xPerSecond = mUP1.totalEffect * mUP2.totalEffect * mUP4.totalEffect * yUP4.multiplier * ySUP2.multiplier
    game.x += game.xPerSecond * diff
    

    //Check if can prestige
    if(game.x >= 1e6) document.querySelector(".yprestige").style.display = "grid"
    if(game.y >= 1e4) document.querySelector(".zprestige").style.display = "grid"

    lastUpdate = Date.now()
}

const buyUpgrade = (number) => {
    if(game.x < mUP[number - 1].cost || mUP[number - 1].level >= mUP[number - 1].maxLevel) return

    game.x -= mUP[number - 1].cost
    mUP[number - 1].level++
    mUP[number - 1].cost *= mUP[number - 1].costScaling

    setUpgradeStats()    
    if(yUP1.level >= 1) {
        number >= 7 ? gainMastery(10) : gainMastery(parseInt(number))
    }
}

const buySUpgrade = (number) => {
    if(game.x < mSUP[number - 1].cost || mSUP[number - 1].level >= mSUP[number - 1].maxLevel) return
    game.x -= mSUP[number - 1].cost
    mSUP[number - 1].level++
    mSUP[number - 1].cost = mSUP[number - 1].baseCost * Math.pow(5, mSUP[number - 1].level)
    
    setUpgradeStats()
    if(yUP1.level >= 1) gainMastery(10)
}

const setUpgradeStats = () => {
    //secondary upgrades
    for(i = 0; i < mSUP.length; i++) {
        mSUP[i].multiplier = Math.pow(1.1, mSUP[i].level)
    }

    //Primary upgrades
    mUP9.effect = 0.01 + mUP9.superChargedLevel * mUP9.superChargeBonus
    mUP9.totalEffect = 1 + mUP9.effect * mUP9.level
    mUP5.effect = (0.05 + mUP5.superChargedLevel * mUP5.superChargeBonus) * mUP9.totalEffect * mSUP5.multiplier
    mUP5.totalEffect = 1 + mUP5.effect * (mUP5.level + ySUP1.level)
    mUP3.effect = (Math.pow((0.25 + mUP3.superChargedLevel * mUP3.superChargeBonus) + 1, mUP5.totalEffect) - 1) * mUP9.totalEffect * mSUP3.multiplier
    mUP3.totalEffect = mUP3.effect * (mUP3.level + ySUP1.level)
    mUP1.effect = (1 + mUP3.totalEffect) * (1 + mUP1.superChargedLevel * mUP1.superChargeBonus) * mUP9.totalEffect * yUP2.multiplier * mSUP1.multiplier
    mUP2.effect = (0.5 + mUP2.superChargedLevel * mUP2.superChargeBonus) * mUP9.totalEffect * mSUP2.multiplier
    mUP4.effect = Math.pow(Math.sqrt(game.xPerSecond + 1), 0.2) / 10 * mUP9.totalEffect * (1 + mUP4.superChargeBonus * mUP4.superChargedLevel) * mSUP4.multiplier
    mUP6.effect = 0.25 * (1 + mUP6.superChargedLevel * mUP6.superChargeBonus) * mUP9.totalEffect * mSUP6.multiplier
    mUP7.effect = 0.01 + mUP7.superChargedLevel * mUP7.superChargeBonus 
    mUP8.effect = 0.01 + mUP8.superChargedLevel * mUP8.superChargeBonus
    mUP1.totalEffect = mUP1.effect * (mUP1.level + ySUP1.level) 
    mUP2.totalEffect = 1 + mUP2.effect * (mUP2.level + ySUP1.level)
    mUP4.totalEffect = 1 + mUP4.effect * (mUP4.level + ySUP1.level)
    mUP6.totalEffect = 1 + mUP6.effect * (mUP6.level + ySUP1.level)
    mUP7.totalEffect = mUP7.effect * mUP7.level
    mUP8.totalEffect = mUP8.effect * mUP8.level

    for(i = 0; i < 6 ; i++) {
        mUP[i].costScaling = (mUP[i].baseCostScaling - 1) * (1 - mUP7.totalEffect) + 1
        mUP[i].cost = mUP[i].baseCost * (1 - ySUP5.multiplier) * Math.pow(mUP[i].costScaling, mUP[i].level)
    }    
} 


const gainMastery = (amount) => {
    game.masteryExp += amount * mUP6.totalEffect * yUP6.multiplier * ySUP4.multiplier
    while(game.masteryExp >= game.masteryReq) {
        game.masteryExp -= game.masteryReq
        game.masteryLevel++
        game.superCharge += 1 + zUP2.level
    }
    game.masteryReq = (100 - ySUP6.multiplier) + 10 * Math.pow(game.masteryLevel, 2) * (1 - mUP8.totalEffect)
    yUP9.level >= 1 ? yUP9.multiplier = Math.sqrt(game.superCharge + 1) :  yUP9.multiplier = 1
    
    domRoot.style.setProperty('--progressBarWidth', `${game.masteryExp / game.masteryReq * 100}%`)
    document.querySelectorAll(".masteryProgress")[0].textContent = `${format(game.masteryExp, 1)} EXP / ${format(game.masteryReq, 0)} EXP - ${game.masteryLevel}`
}

const superCharge = (number) => {
    if(number >= 7 && mUP[number - 1].superChargedLevel >= 3) return
    if(game.superCharge < 1 || mUP[number - 1].superChargedLevel >= 3 + ySUP3.level) return
    mUP[number - 1].superChargedLevel++
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
