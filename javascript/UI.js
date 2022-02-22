const domRoot = document.querySelector(":root")
let rootStyles = getComputedStyle(domRoot)

const updateUI = () => {
    document.querySelector(".x").textContent = `${format(game.x, 2)}x`
    document.querySelector(".x-s").textContent = `+${format(game.xPerSecond, 1)}x/s`
    document.querySelector(".y").textContent = `${format(game.y, 0)}y`
    document.querySelector("#superCharges").textContent = `Unspent super charges: ${game.superCharge}`

            
    for(i = 0; i < 6; i++) {
        document.querySelector("#upgrade" + (i + 1) + "Level").textContent = `Level: ${game['upgrade' + (i + 1)].level}`
        document.querySelector("#upgrade" + (i + 1) + "Cost").textContent = `Cost: ${format(game['upgrade' + (i + 1)].cost, 2)}x`
        document.querySelector("#mastery" + (i + 1) + "Level").textContent = `Level: ${format(game['upgrade' + (i + 1)].superChargedLevel)}`
    }

    // + ${game['upgrade' + (i + 1)].extraLevel} [${game['upgrade' + (i + 1)].superChargedLevel}]`

    for(i = 6; i < 9; i++) {
        document.querySelector("#upgrade" + (i + 1) + "X").textContent = `x: ${format(game['upgrade' + (i + 1)].x)}`
        //document.querySelector("#upgrade" + (i + 1) + "TotalEffect").textContent = `${format(game['upgrade' + (i + 1)].effect)}`
    }

    document.querySelector("#upgrade1Effect").textContent = `+${format(game.upgrade1.effect, 2)} x/s`
    document.querySelector("#upgrade2Effect").textContent = `+${format(game.upgrade2.effect * 100, 1)}% x/s`
    document.querySelector("#upgrade3Effect").textContent = `+${format(game.upgrade3.effect, 2)} to upgrade 1`
    document.querySelector("#upgrade4Effect").textContent = `x/s boost it self +${format(game.upgrade4.effect * 100, 2)}%`
    document.querySelector("#upgrade5Effect").textContent = `Upgrade 2 raised to ${format(game.upgrade5.effect + 1, 2)}`
    document.querySelector("#upgrade6Effect").textContent = `Gain ${format(game.upgrade6.effect, 1)} extra EXP`

    document.querySelector("#upgrade1TotalEffect").textContent = `+${format(game.upgrade1.totalEffect, 2)}x`
    document.querySelector("#upgrade2TotalEffect").textContent = `+${format((game.upgrade2.totalEffect - 1) * 100, 1)}%`
    document.querySelector("#upgrade3TotalEffect").textContent = `+${format(game.upgrade3.totalEffect, 2)}`
    document.querySelector("#upgrade4TotalEffect").textContent = `+${format((game.upgrade4.totalEffect - 1) * 100, 2)}%`
    document.querySelector("#upgrade5TotalEffect").textContent = `^${format(game.upgrade5.totalEffect, 2)}`
    document.querySelector("#upgrade6TotalEffect").textContent = `+${format(game.upgrade6.totalEffect, 1)} EXP`
    document.querySelector("#upgrade7TotalEffect").textContent = `+${format(game.upgrade7.effect)} SOMETHING`

    //Mastery
    document.querySelector("#mastery1Effect").textContent = `+${game.upgrade1.superChargedLevel}`
    document.querySelector("#mastery2Effect").textContent = `+${format(game.upgrade2.superChargedLevel * 25)}%`
    document.querySelector("#mastery3Effect").textContent = `+${format(game.upgrade3.superChargedLevel * 0.05, 2)}`
    document.querySelector("#mastery4Effect").textContent = `+${game.upgrade4.superChargedLevel} (To its base)`
    document.querySelector("#mastery5Effect").textContent = `+${format(game.upgrade5.superChargedLevel * 0.025, 3)}`
    document.querySelector("#mastery6Effect").textContent = `+${format(game.upgrade6.superChargedLevel * 0.2, 1)}`

    //Y upgrade 
    document.querySelector("#yUpgrade5Level").textContent = `Level: ${yUpgrade[5].level}`
    document.querySelector("#yUpgrade5Cost").textContent = `Cost: ${format(yUpgrade[5].cost, 1)}`

    if(yUpgrade[3].bought) document.querySelector("#yPrestigeGain").textContent = `Gain +${Math.floor(Math.log10(game.x) - 5) * 2}`
    else document.querySelector("#yPrestigeGain").textContent = `Gain +${Math.floor(Math.log10(game.x) - 5)}`

    if(yUpgrade[4].bought) document.querySelector("#yUpgrade4Effect").textContent = `x${format(Math.sqrt(game.y + 1), 2)}`
}

const updateSettingsUI = () => {
    if(setting.offlineProduction) document.querySelector("#offProd").textContent = `Offline production ON`
    else document.querySelector("#offProd").textContent = `Offline production OFF`
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
})

document.querySelector(".version").textContent = game.version

setInterval(updateUI, 50)