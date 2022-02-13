const domRoot = document.querySelector(":root")
let rootStyles = getComputedStyle(domRoot)

const updateUI = () => {
    document.querySelector(".x").textContent = `${format(game.x, 2)}x`
    document.querySelector(".x-s").textContent = `+${format(game.xPerSecond, 0)}x/s`

    if(game.masteryLevel >= 6) {
        for(i = 0; i < 6; i++) {
            document.querySelector("#upgrade" + (i + 1) + "Level").textContent = `Level: ${game['upgrade' + (i + 1)].level} + ${format(game['upgrade' + (i + 1)].extraLevel, 1)}`
            document.querySelector("#upgrade" + (i + 1) + "Cost").textContent = `Cost: ${format(game['upgrade' + (i + 1)].cost, 2)}x`
        }
    }
    else for(i = 0; i < 6; i++) {
        document.querySelector("#upgrade" + (i + 1) + "Level").textContent = `Level: ${game['upgrade' + (i + 1)].level}`
        document.querySelector("#upgrade" + (i + 1) + "Cost").textContent = `Cost: ${format(game['upgrade' + (i + 1)].cost, 2)}x`
    }

    document.querySelector("#upgrade1Effect").textContent = `+${format(game.upgrade1.effect, 1)} x/s`
    //document.querySelector("#upgrade2Effect").textContent = `+12.5% x/s`
    //document.querySelector("#upgrade3Effect").textContent = `+20% to upgrade 1`
    //document.querySelector("#upgrade4Effect").textContent = `x/s raised to 0.05`
}

const updateSettingsUI = () => {
    if(setting.offlineProduction) document.querySelector("#offProd").textContent = `Offline production ON`
    else document.querySelector("#offProd").textContent = `Offline production OFF`
}

document.querySelector(".version").textContent = game.version

setInterval(updateUI, 50)