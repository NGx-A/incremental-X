const domRoot = document.querySelector(":root")
let rootStyles = getComputedStyle(domRoot)

const updateUI = () => {
    document.querySelector(".x").textContent = `${format(game.x, 2)}x`
    document.querySelector(".x-s").textContent = `+${format(game.xPerSecond, 0)}x/s`
    document.querySelector(".y").textContent = `${format(game.y, 0)}y`

        //for(i = 0; i < 6; i++) {
            //document.querySelector("#upgrade" + (i + 1) + "Level").textContent = `Level: ${game['upgrade' + (i + 1)].level} + ${format(game['upgrade' + (i + 1)].extraLevel, 1)}`
            //document.querySelector("#upgrade" + (i + 1) + "Cost").textContent = `Cost: ${format(game['upgrade' + (i + 1)].cost, 2)}x`
        //}
    
    for(i = 0; i < 6; i++) {
        document.querySelector("#upgrade" + (i + 1) + "Level").textContent = `Level: ${game['upgrade' + (i + 1)].level}`
        document.querySelector("#upgrade" + (i + 1) + "Cost").textContent = `Cost: ${format(game['upgrade' + (i + 1)].cost, 2)}x`
    }

    document.querySelector("#upgrade1Effect").textContent = `+${format(game.upgrade1.effect, 1)} x/s`
    document.querySelector("#upgrade2Effect").textContent = `+${format(12.5 + game.upgrade2.superChargedLevel * 0.025, 1)}% x/s`
    document.querySelector("#upgrade3Effect").textContent = `+${format(20 + game.upgrade3.superChargedLevel * 5)}% to upgrade 1`
    //document.querySelector("#upgrade4Effect").textContent = `x/s raised to 0.05`¨

    document.querySelector("#mastery6").textContent = `Each mastery level grants +7% x/s [+${game.masteryLevel * 7}%]`

    if(yUpgrade[1].bought) document.querySelector("#yPrestigeGain").textContent = `Gain +${Math.floor(Math.log10(game.x) - 5) * 2}`
    else document.querySelector("#yPrestigeGain").textContent = `Gain +${Math.floor(Math.log10(game.x) - 5)}`
}

const updateSettingsUI = () => {
    if(setting.offlineProduction) document.querySelector("#offProd").textContent = `Offline production ON`
    else document.querySelector("#offProd").textContent = `Offline production OFF`
}

document.querySelector(".version").textContent = game.version

setInterval(updateUI, 50)