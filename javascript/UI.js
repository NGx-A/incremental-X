const domRoot = document.querySelector(":root")
let rootStyles = getComputedStyle(domRoot)

const upgradeEffectText = document.querySelectorAll(".upgradeEffect")
const upgradeLevelText = document.querySelectorAll(".upgradeLevel")
const upgradeCostText = document.querySelectorAll(".upgradeCost")
const upgradeTotalEffectText = document.querySelectorAll(".upgradeTotalEffect")

const masteryLevelText = document.querySelectorAll(".masteryLevel")
const masteryEffectText = document.querySelectorAll(".masteryEffect")

const updateUI = () => {
    document.querySelector(".x").textContent = `${format(game.x, 2)}x`
    document.querySelector(".x-s").textContent = `+${format(game.xPerSecond, 1)}x/s`
    document.querySelector(".y").textContent = `${format(game.y, 0)}y`
    document.querySelector("#superCharges").textContent = `Unspent super charges: ${game.superCharge}`

            
    for(i = 0; i < 8; i++) {
        upgradeLevelText[i].textContent = `Level: ${game['upgrade' + (i + 1)].level}`
        upgradeCostText[i].textContent = `Cost: ${format(game['upgrade' + (i + 1)].cost, 2)}`
        masteryLevelText[i].textContent = `Level: ${format(game['upgrade' + (i + 1)].superChargedLevel)}`
        if(i >= 6 && game['upgrade' + (i + 1)].level >= 10) upgradeLevelText[i].textContent = `Level: ${game['upgrade' + (i + 1)].level} (Max)`
    }

    upgradeEffectText[0].textContent = `+${format(game.upgrade1.effect, 2)} x/s`
    upgradeEffectText[1].textContent = `+${format(game.upgrade2.effect * 100, 1)}% x/s`
    upgradeEffectText[2].textContent = `+${format(game.upgrade3.effect, 2)} to upgrade 1`
    upgradeEffectText[3].textContent = `x/s boost it self +${format(game.upgrade4.effect * 100, 2)}%`
    upgradeEffectText[4].textContent = `Upgrade 2 raised to ${format(game.upgrade5.effect + 1, 2)}`
    upgradeEffectText[5].textContent = `Gain ${format(game.upgrade6.effect * 100)}% extra EXP`
    upgradeEffectText[6].textContent = `Upgrade scaling -${format(game.upgrade7.effect * 100, 2)}%`
    upgradeEffectText[7].textContent = `Mastery scaling -${format(game.upgrade8.effect * 100, 2)}%`

    upgradeTotalEffectText[0].textContent = `+${format(game.upgrade1.totalEffect, 2)}x`
    upgradeTotalEffectText[1].textContent = `+${format((game.upgrade2.totalEffect - 1) * 100, 1)}%`
    upgradeTotalEffectText[2].textContent = `+${format(game.upgrade3.totalEffect, 2)}`
    upgradeTotalEffectText[3].textContent = `+${format((game.upgrade4.totalEffect - 1) * 100, 2)}%`
    upgradeTotalEffectText[4].textContent = `^${format(game.upgrade5.totalEffect, 2)}`
    upgradeTotalEffectText[5].textContent = `+${format((game.upgrade6.totalEffect - 1) * 100)}% EXP`
    upgradeTotalEffectText[6].textContent = `-${format(game.upgrade7.totalEffect * 100, 2)}% `
    upgradeTotalEffectText[7].textContent = `-${format(game.upgrade8.totalEffect * 100, 2)}% `

    //Mastery
    masteryEffectText[0].textContent = `+${game.upgrade1.superChargedLevel}`
    masteryEffectText[1].textContent = `+${format(game.upgrade2.superChargedLevel * 15)}%`
    masteryEffectText[2].textContent = `+${format(game.upgrade3.superChargedLevel * 0.05, 2)}`
    masteryEffectText[3].textContent = `+${game.upgrade4.superChargedLevel * 5}% Cap`
    masteryEffectText[4].textContent = `+${format(game.upgrade5.superChargedLevel * 0.025, 3)}`
    masteryEffectText[5].textContent = `+${format(game.upgrade6.superChargedLevel * 0.1 * 100)}%`
    masteryEffectText[6].textContent = `+${format(game.upgrade7.superChargedLevel * 0.33, 2)}%`
    masteryEffectText[7].textContent = `+${format(game.upgrade8.superChargedLevel * 0.33, 2)}%`

    game.x >= 1e6 ? yUpgrade[3].bought ? document.querySelector("#yPrestigeGain").textContent = `Gain +${Math.floor(Math.log10(game.x) - 5) * 2}y` : document.querySelector("#yPrestigeGain").textContent = `Gain +${Math.floor(Math.log10(game.x) - 5)}y`
    : document.querySelector("#yPrestigeGain").textContent = `Gain +0y`

    if(yUpgrade[4].bought) document.querySelector("#yUpgrade4Effect").textContent = `x${format(Math.sqrt(game.y + 1), 2)}`
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
        if(e.key == "4") buyUpgrade('4')
        if(e.key == "5") buyUpgrade('5')
        if(e.key == "6") buyUpgrade('6')
        if(e.key == "7") buyUpgrade('7')
        if(e.key == "8") buyUpgrade('8')
        //if(e.key == "9") buyUpgrade('9')
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
        //if(e.key == "9") superCharge('9')
    }
    if(game.currentTab == "y") {
        if(e.key == "1") buyYUpgrade('1')
        if(e.key == "2") buyYUpgrade('2')
        if(e.key == "3") buyYUpgrade('3')
        if(e.key == "4") buyYUpgrade('4')
        if(e.key == "5") buyYUpgrade('5')
        if(e.key == "6") buyYUpgrade('6')
        if(e.key == "7") buyYUpgrade('7')
    }
})

document.querySelector(".version").textContent = game.version

setInterval(updateUI, 50)