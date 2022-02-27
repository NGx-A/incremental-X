const domRoot = document.querySelector(":root")
let rootStyles = getComputedStyle(domRoot)

const upgradeEffectText = document.querySelectorAll(".upgradeEffect")
const upgradeLevelText = document.querySelectorAll(".upgradeLevel")
const upgradeCostText = document.querySelectorAll(".upgradeCost")
const upgradeTotalEffectText = document.querySelectorAll(".upgradeTotalEffect")

const masteryLevelText = document.querySelectorAll(".masteryLevel")
const masteryEffectText = document.querySelectorAll(".masteryEffect")

const ySecondaryLevelText = document.querySelectorAll(".ySecondaryLevel")
const ySecondaryCostText = document.querySelectorAll(".ySecondaryCost")
const ySecondaryEffectText = document.querySelectorAll(".ySecondaryEffect")

const updateUI = () => {
    document.querySelector(".x").textContent = `${format(game.x, 2)}x`
    document.querySelector(".x-s").textContent = `+${format(game.xPerSecond, 1)}x/s`
    document.querySelector(".y").textContent = `${format(game.y, 0)}y`
    document.querySelector("#superCharges").textContent = `Unspent super charges: ${game.superCharge}`

            
    for(i = 0; i < 9; i++) {
        if(i < 6) upgradeLevelText[i].textContent = `Level: ${game['upgrade' + (i + 1)].level + yUpgrade.secondary[1].level}`
        else upgradeLevelText[i].textContent = `Level: ${game['upgrade' + (i + 1)].level}`
        upgradeCostText[i].textContent = `Cost: ${format(game['upgrade' + (i + 1)].cost, 2)}`
        masteryLevelText[i].textContent = `Level: ${format(game['upgrade' + (i + 1)].superChargedLevel)}`
        if(i >= 6 && game['upgrade' + (i + 1)].level >= 10) upgradeLevelText[i].textContent = `Level: ${game['upgrade' + (i + 1)].level} (Max)`
        if(game['upgrade' + (i + 1)].superChargedLevel >= 3 + yUpgrade.secondary[3].level) masteryLevelText[i].textContent = `Level: ${format(game['upgrade' + (i + 1)].superChargedLevel)} (Max)`
        if(i >= 6 && game['upgrade' + (i + 1)].superChargedLevel >= 3) masteryLevelText[i].textContent = `Level: ${format(game['upgrade' + (i + 1)].superChargedLevel)} (Max)`
    }

    for(i = 0; i < ySecondaryLevelText.length; i++) {
        ySecondaryLevelText[i].textContent = `Level: ${yUpgrade.secondary[i + 1].level}`
        ySecondaryCostText[i].textContent = `Cost: ${yUpgrade.secondary[i + 1].level * 5 + 10}y`
        if(yUpgrade.secondary[i + 1].level >= yUpgrade.secondary[i + 1].max)ySecondaryLevelText[i].textContent = `Level: ${yUpgrade.secondary[i + 1].level} (Max)`
    }

    if(yUpgrade.primary[8].bought) {
        yUpgrade.primary[8].enabled ? document.querySelector("#yUpgrade8Cost").textContent = "On" : document.querySelector("#yUpgrade8Cost").textContent = "Off"
    }
     

    upgradeEffectText[0].textContent = `+${format(game.upgrade1.effect, 2)} x/s`
    upgradeEffectText[1].textContent = `+${format(game.upgrade2.effect * 100, 1)}% x/s`
    upgradeEffectText[2].textContent = `+${format(game.upgrade3.effect, 2)} to upgrade 1`
    upgradeEffectText[3].textContent = `x${format(game.upgrade4.effect * 100, 2)}% x/s`
    upgradeEffectText[4].textContent = `Upgrade 3 raised to ${format(game.upgrade5.effect + 1, 3)}`
    upgradeEffectText[5].textContent = `Gain +${format(game.upgrade6.effect * 100)}% extra EXP`
    upgradeEffectText[6].textContent = `Upgrade scaling -${format(game.upgrade7.effect * 100, 2)}%`
    upgradeEffectText[7].textContent = `Mastery scaling -${format(game.upgrade8.effect * 100, 2)}%`
    upgradeEffectText[8].textContent = `All upgrades +${format(game.upgrade9.effect * 100, 2)}%`

    upgradeTotalEffectText[0].textContent = `+${format(game.upgrade1.totalEffect, 2)}x`
    upgradeTotalEffectText[1].textContent = `+${format((game.upgrade2.totalEffect - 1) * 100, 1)}%`
    upgradeTotalEffectText[2].textContent = `+${format(game.upgrade3.totalEffect, 2)}`
    upgradeTotalEffectText[3].textContent = `+${format((game.upgrade4.totalEffect - 1) * 100, 2)}%`
    upgradeTotalEffectText[4].textContent = `^${format(game.upgrade5.totalEffect, 3)}`
    upgradeTotalEffectText[5].textContent = `+${format((game.upgrade6.totalEffect - 1) * 100)}% EXP`
    upgradeTotalEffectText[6].textContent = `-${format(game.upgrade7.totalEffect * 100, 2)}% `
    upgradeTotalEffectText[7].textContent = `-${format(game.upgrade8.totalEffect * 100, 2)}% `
    upgradeTotalEffectText[8].textContent = `+${format((game.upgrade9.totalEffect - 1) * 100, 2)}% `

    //Mastery
    masteryEffectText[0].textContent = `+${Math.round(game.upgrade1.superChargedLevel * 33.3)}%`
    masteryEffectText[1].textContent = `+${format(game.upgrade2.superChargedLevel * 15)}%`
    masteryEffectText[2].textContent = `+${format(game.upgrade3.superChargedLevel * 0.05, 2)}`
    masteryEffectText[3].textContent = `+${game.upgrade4.superChargedLevel * 5}% Cap`
    masteryEffectText[4].textContent = `+${format(game.upgrade5.superChargedLevel * 0.025, 3)}`
    masteryEffectText[5].textContent = `+${format(game.upgrade6.superChargedLevel * 0.1 * 100)}%`
    masteryEffectText[6].textContent = `+${format(game.upgrade7.superChargedLevel * 0.3333, 2)}%`
    masteryEffectText[7].textContent = `+${format(game.upgrade8.superChargedLevel * 0.3333, 2)}%`
    masteryEffectText[8].textContent = `+${format(game.upgrade9.superChargedLevel * 0.3333, 2)}%`

    ySecondaryEffectText[0].textContent = `+${yUpgrade.secondary[1].level} upgrade level(s)`
    ySecondaryEffectText[1].textContent = `x${yUpgrade.secondary[2].level * 2} x/s`
    ySecondaryEffectText[2].textContent = `+${yUpgrade.secondary[3].level} mastery cap`
    ySecondaryEffectText[3].textContent = `+${yUpgrade.secondary[4].level * 30}% EXP`
    ySecondaryEffectText[4].textContent = `-${yUpgrade.secondary[5].level * 3}% base cost`
    ySecondaryEffectText[5].textContent = `-${yUpgrade.secondary[6].level * 3}% mastery base`

    game.x >= 1e6 ? yUpgrade.primary[3].bought ? document.querySelector("#yPrestigeGain").textContent = `Gain +${Math.floor(Math.floor(Math.log10(game.x) - 5) * 2 * yUpgrade.primary[9].multiplier)}y` : document.querySelector("#yPrestigeGain").textContent = `Gain +${Math.floor(Math.floor(Math.log10(game.x) - 5) * yUpgrade.primary[9].multiplier)}y`
    : document.querySelector("#yPrestigeGain").textContent = `Gain +0y`

    if(yUpgrade.primary[4].bought) document.querySelector("#yUpgrade4Effect").textContent = `x${format(Math.sqrt(game.y + 1), 2)}`
    if(yUpgrade.primary[9].bought) document.querySelector("#yUpgrade9Effect").textContent = `x${format(yUpgrade.primary[9].multiplier, 2)}`

    document.title = `Incremental X - ${format(game.x, 0)}x`
}

const updateSettingsUI = () => {
    setting.offlineProduction ?  document.querySelector("#offProd").textContent = `Offline production ON` : document.querySelector("#offProd").textContent = `Offline production OFF`
}

//Event listeners
document.addEventListener("keydown", e => {
    if(e.key == "q") openTab('main')
    if(e.key == "w") openTab('y')
    if(e.key == "e") openTab('mastery')
    if(game.currentTab == "main") {
        if(e.key == "1") buyUpgrade('1')
        if(e.key == "2") buyUpgrade('2')
        if(e.key == "3") buyUpgrade('3')
        if(e.key == "4") buyUpgrade('4')
        if(e.key == "5") buyUpgrade('5')
        if(e.key == "6") buyUpgrade('6')
        if(e.key == "7") buyUpgrade('7')
        if(e.key == "8") buyUpgrade('8')
        if(e.key == "9") buyUpgrade('9')
    }
    if(game.currentTab == "mastery") {
        if(e.key == "1") superCharge('1')
        if(e.key == "2") superCharge('2')
        if(e.key == "3") superCharge('3')
        if(e.key == "4") superCharge('4')
        if(e.key == "5") superCharge('5')
        if(e.key == "6") superCharge('6')
        if(e.key == "7") superCharge('7')
        if(e.key == "8") superCharge('8')
        if(e.key == "9") superCharge('9')
    }
    if(game.currentTab == "y") {
        if(e.key == "1") buyYUpgrade('1')
        if(e.key == "2") buyYUpgrade('2')
        if(e.key == "3") buyYUpgrade('3')
        if(e.key == "4") buyYUpgrade('4')
        if(e.key == "5") buyYUpgrade('5')
        if(e.key == "6") buyYUpgrade('6')
        if(e.key == "7") buyYUpgrade('7')
        if(e.key == "8") buyYUpgrade('8')
        if(e.key == "9") buyYUpgrade('9')
    }
})

document.querySelector(".version").textContent = game.version

setInterval(updateUI, 50)