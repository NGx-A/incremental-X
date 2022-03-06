const domRoot = document.querySelector(":root")
let rootStyles = getComputedStyle(domRoot)

const upgradeEffectText = document.querySelectorAll(".upgradeEffect")
const upgradeLevelText = document.querySelectorAll(".upgradeLevel")
const upgradeCostText = document.querySelectorAll(".upgradeCost")
const upgradeTotalEffectText = document.querySelectorAll(".upgradeTotalEffect")

const upgradeSecondaryLevelText = document.querySelectorAll(".mSecondaryLevel")
const upgradeSecondaryCostText = document.querySelectorAll(".mSecondaryCost")
const upgradeSecondaryEffectText = document.querySelectorAll(".mSecondaryEffect")

const masteryLevelText = document.querySelectorAll(".masteryLevel")
const masteryEffectText = document.querySelectorAll(".masteryEffect")

const yPrimaryCostText = document.querySelectorAll(".yUpgradeCost")

const ySecondaryLevelText = document.querySelectorAll(".ySecondaryLevel")
const ySecondaryCostText = document.querySelectorAll(".ySecondaryCost")
const ySecondaryEffectText = document.querySelectorAll(".ySecondaryEffect")

const updateUI = () => {
    document.querySelector(".x").textContent = `${format(game.x, 2)}x`
    document.querySelector(".x-s").textContent = `+${format(game.xPerSecond, 1)}x/s`
    document.querySelector(".y").textContent = `${format(game.y, 0)}y`
    document.querySelector(".y-s").textContent = `+${format(game.yPerSecond, 2)}y`
    document.querySelector(".z").textContent = `${format(game.z, 0)}z`
    document.querySelector("#superCharges").textContent = `Unspent super charges: ${game.superCharge}`

            
    for(i = 0; i < 9; i++) {
        if(i < 6) upgradeLevelText[i].textContent = `Level: ${mUP[i].level + ySUP1.level}`
        else upgradeLevelText[i].textContent = `Level: ${mUP[i].level}`
        upgradeCostText[i].textContent = `Cost: ${format(mUP[i].cost, 2)}`
        masteryLevelText[i].textContent = `Level: ${format(mUP[i].superChargedLevel)}`
        if(i >= 6 && mUP[i].level >= 10) upgradeLevelText[i].textContent = `Level: ${mUP[i].level} (Max)`
        if(mUP[i].superChargedLevel >= 3 + ySUP3.level) masteryLevelText[i].textContent = `Level: ${format(mUP[i].superChargedLevel)} (Max)`
        if(i >= 6 && mUP[i].superChargedLevel >= 3) masteryLevelText[i].textContent = `Level: ${format(mUP[i].superChargedLevel)} (Max)`
        yUP[i].level < yUP[i].maxLevel ? yPrimaryCostText[i].textContent = `Cost: ${yUP[i].cost}y` : yPrimaryCostText[i].textContent = `Max`
    }

    for(i = 0; i < ySecondaryLevelText.length; i++) {
        mSUP[i].level < mSUP[i].maxLevel ? upgradeSecondaryLevelText[i].textContent = `Level: ${mSUP[i].level}` : upgradeSecondaryLevelText[i].textContent = `Level: ${mSUP[i].level} (Max)`
        upgradeSecondaryCostText[i].textContent = `Cost: ${format(mSUP[i].cost)}x`
        upgradeSecondaryEffectText[i].textContent = `+${format((mSUP[i].multiplier - 1) * 100, 0)}% to upgrade ${i + 1}`

        ySUP[i].level < ySUP[i].maxLevel ? ySecondaryLevelText[i].textContent = `Level: ${ySUP[i].level}` : ySecondaryLevelText[i].textContent = `Level: ${ySUP[i].level} (Max)`
        ySecondaryCostText[i].textContent = `Cost: ${ySUP[i].cost}y`
    }

    upgradeEffectText[0].textContent = `+${format(mUP1.effect, 2)} x/s`
    upgradeEffectText[1].textContent = `+${format(mUP2.effect * 100, 1)}% x/s`
    upgradeEffectText[2].textContent = `+${format(mUP3.effect, 2)} to upgrade 1`
    upgradeEffectText[3].textContent = `+${format(mUP4.effect * 100, 2)}% x/s`
    upgradeEffectText[4].textContent = `Upgrade 3 raised to ${format(mUP5.effect + 1, 3)}`
    upgradeEffectText[5].textContent = `Gain +${format(mUP6.effect * 100)}% extra EXP`
    upgradeEffectText[6].textContent = `Upgrade scaling -${format(mUP7.effect * 100, 2)}%`
    upgradeEffectText[7].textContent = `Mastery scaling -${format(mUP8.effect * 100, 2)}%`
    upgradeEffectText[8].textContent = `All upgrades +${format(mUP9.effect * 100, 2)}%`

    upgradeTotalEffectText[0].textContent = `+${format(mUP1.totalEffect, 2)}x`
    upgradeTotalEffectText[1].textContent = `+${format((mUP2.totalEffect - 1) * 100, 1)}%`
    upgradeTotalEffectText[2].textContent = `+${format(mUP3.totalEffect, 2)}`
    upgradeTotalEffectText[3].textContent = `+${format((mUP4.totalEffect - 1) * 100, 2)}%`
    upgradeTotalEffectText[4].textContent = `^${format(mUP5.totalEffect, 3)}`
    upgradeTotalEffectText[5].textContent = `+${format((mUP6.totalEffect - 1) * 100)}% EXP`
    upgradeTotalEffectText[6].textContent = `-${format(mUP7.totalEffect * 100, 2)}% `
    upgradeTotalEffectText[7].textContent = `-${format(mUP8.totalEffect * 100, 2)}% `
    upgradeTotalEffectText[8].textContent = `+${format((mUP9.totalEffect - 1) * 100, 2)}% `

    

    //Mastery
    masteryEffectText[0].textContent = `x${Math.round(mUP1.superChargedLevel * mUP1.superChargeBonus * 100)}%`
    masteryEffectText[1].textContent = `+${format(mUP2.superChargedLevel * mUP2.superChargeBonus * 100)}%`
    masteryEffectText[2].textContent = `+${format(mUP3.superChargedLevel * mUP3.superChargeBonus, 2)}`
    masteryEffectText[3].textContent = `x${format(mUP4.superChargedLevel * mUP4.superChargeBonus * 100, 0)}%`
    masteryEffectText[4].textContent = `+${format(mUP5.superChargedLevel * mUP5.superChargeBonus, 3)}`
    masteryEffectText[5].textContent = `x${format(mUP6.superChargedLevel * mUP6.superChargeBonus * 100)}%`
    masteryEffectText[6].textContent = `+${format(mUP7.superChargedLevel * mUP7.superChargeBonus * 100, 2)}%`
    masteryEffectText[7].textContent = `+${format(mUP8.superChargedLevel * mUP8.superChargeBonus * 100, 2)}%`
    masteryEffectText[8].textContent = `+${format(mUP9.superChargedLevel * mUP9.superChargeBonus * 100, 2)}%`

    ySecondaryEffectText[0].textContent = `+${ySUP1.level * ySUP1.multiplier} upgrade level(s)`
    ySecondaryEffectText[1].textContent = `x${ySUP2.multiplier} x/s`
    ySecondaryEffectText[2].textContent = `+${ySUP3.level} mastery cap`
    ySecondaryEffectText[3].textContent = `+${format((ySUP4.multiplier - 1) * 100, 0)}% EXP`
    ySecondaryEffectText[4].textContent = `-${format(ySUP5.level * ySUP5.multiplier * 100, 0)}% base cost`
    ySecondaryEffectText[5].textContent = `-${format(ySUP6.level * ySUP6.multiplier * 100, 0)}% mastery base`

    game.x >= 1e6 ? document.querySelector("#yPrestigeGain").textContent = `Gain +${Math.floor(Math.floor(Math.log10(game.x) - 5) * yUP3.multiplier * yUP9.multiplier)}y`
     : document.querySelector("#yPrestigeGain").textContent = `Gain +0y`

    game.y >= 1e4 ? document.querySelector("#zPrestigeGain").textContent = `Gain +${Math.floor(game.y / 1e4)}z` : document.querySelector("#zPrestigeGain").textContent = "Gain +0z"

    if(yUP4.level >= 1) {
        document.querySelector("#yUpgrade4Effect").textContent = `x${format(Math.sqrt(game.y + 1), 2)}`
    }
    if(yUP9.level >= 1) {
        document.querySelector("#yUpgrade9Effect").textContent = `x${format(yUP9.multiplier, 2)}`
    }

    document.title = `Incremental X - ${format(game.x, 0)}x`
}

const updateSettingsUI = () => {
    setting.offlineProduction ?  document.querySelector("#offProd").textContent = `Offline production ON` : document.querySelector("#offProd").textContent = `Offline production OFF`
}

//Event listeners
document.addEventListener("keydown", e => {
    if(game.currentTab == "main") {
        if(e.key == "1") buyUpgrade('1')
        if(e.key == "2") buyUpgrade('2')
        if(e.key == "3") buyUpgrade('3')
        if(e.key == "4" || e.key == "q") buyUpgrade('4')
        if(e.key == "5" || e.key == "w") buyUpgrade('5')
        if(e.key == "6" || e.key == "e") buyUpgrade('6')
        if(e.key == "7") buyUpgrade('7')
        if(e.key == "8") buyUpgrade('8')
        if(e.key == "9") buyUpgrade('9')
    }
    if(game.currentTab == "mastery") {
        if(e.key == "1") superCharge('1')
        if(e.key == "2") superCharge('2')
        if(e.key == "3") superCharge('3')
        if(e.key == "4" || e.key == "q") superCharge('4')
        if(e.key == "5" || e.key == "w") superCharge('5')
        if(e.key == "6" || e.key == "e") superCharge('6')
        if(e.key == "7") superCharge('7')
        if(e.key == "8") superCharge('8')
        if(e.key == "9") superCharge('9')
    }
    if(game.currentTab == "y") {
        if(e.key == "1") buyYUpgrade('1')
        if(e.key == "2") buyYUpgrade('2')
        if(e.key == "3") buyYUpgrade('3')
        if(e.key == "4" || e.key == "q") buyYUpgrade('4')
        if(e.key == "5" || e.key == "w") buyYUpgrade('5')
        if(e.key == "6" || e.key == "e") buyYUpgrade('6')
        if(e.key == "7") buyYUpgrade('7')
        if(e.key == "8") buyYUpgrade('8')
        if(e.key == "9") buyYUpgrade('9')
    }
})

document.querySelector(".version").textContent = game.version

setInterval(updateUI, 50)