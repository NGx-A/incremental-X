const domRoot = document.querySelector(":root")
let rootStyles = getComputedStyle(domRoot)

const updateUI = () => {
    document.querySelector(".x").textContent = `${format(game.x, 2)}x`
    document.querySelector(".x-s").textContent = `+${format(game.xPerSecond, 1)}x/s`
    document.querySelector(".y").textContent = `${format(game.y, 0)}y`

        //for(i = 0; i < 6; i++) {
            //document.querySelector("#upgrade" + (i + 1) + "Level").textContent = `Level: ${game['upgrade' + (i + 1)].level} + ${format(game['upgrade' + (i + 1)].extraLevel, 1)}`
            //document.querySelector("#upgrade" + (i + 1) + "Cost").textContent = `Cost: ${format(game['upgrade' + (i + 1)].cost, 2)}x`
        //}
    
    for(i = 0; i < 9; i++) {
        if(game['upgrade' + (i + 1)].superChargedLevel >= 1) document.querySelector("#upgrade" + (i + 1) + "Level").textContent = `Level: ${game['upgrade' + (i + 1)].level} (${game['upgrade' + (i + 1)].superChargedLevel})`
        else document.querySelector("#upgrade" + (i + 1) + "Level").textContent = `Level: ${game['upgrade' + (i + 1)].level}`
        document.querySelector("#upgrade" + (i + 1) + "Cost").textContent = `Cost: ${format(game['upgrade' + (i + 1)].cost, 2)}x`
        //document.querySelector("#upgrade" + (i + 1) + "TotalEffect").textContent = `${format(game['upgrade' + (i + 1)].TotalEffect, 2)}x`
    }

    document.querySelector("#upgrade1Effect").textContent = `+${format(game.upgrade1.effect, 1)} x/s`
    document.querySelector("#upgrade2Effect").textContent = `+${format(12.5 + game.upgrade2.superChargedLevel * 2.5, 1)}% x/s`
    document.querySelector("#upgrade3Effect").textContent = `+${format(20 + game.upgrade3.superChargedLevel * 5)}% to upgrade 1`
    //document.querySelector("#upgrade4Effect").textContent = `x/s raised to 0.05`¨

    document.querySelector("#upgrade1TotalEffect").textContent = `+${format(game.upgrade1.totalEffect, 2)}x`
    document.querySelector("#upgrade2TotalEffect").textContent = `+${(format(game.upgrade2.totalEffect - 1) * 100, 1)}%`
    document.querySelector("#upgrade3TotalEffect").textContent = `+${format((game.upgrade3.totalEffect - 1) * 100, 0)}%`
    document.querySelector("#upgrade4TotalEffect").textContent = `^${format(game.upgrade4.totalEffect, 2)}`
    document.querySelector("#upgrade6TotalEffect").textContent = `+${format(game.upgrade6.totalEffect, 1)} EXP`
   

    document.querySelector("#mastery6").textContent = `Each mastery level grants +7% x/s [+${game.masteryLevel * 7}%]`

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
})

document.querySelector(".version").textContent = game.version

setInterval(updateUI, 50)