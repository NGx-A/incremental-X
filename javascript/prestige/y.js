const yprestige = () => {
    if(game.x >= 1e6) {
        game.y += Math.floor(Math.floor(Math.log10(game.x) - 5) * yUP3.multiplier * yUP9.multiplier)
        game.totalY += Math.floor(Math.floor(Math.log10(game.x) - 5) * yUP3.multiplier * yUP9.multiplier)

        if(game.totalY >= 50) document.querySelectorAll(".secondary-container")[1].style.display = "grid"

        if(zUP4.level >= 1) document.querySelector(".y-s").style.display = "inline"

        document.querySelector(".y").style.display = "inline"
        document.querySelectorAll(".navBtn")[3].style.display = "flex"
        document.querySelector(".yprestige").style.display = "none"
        document.querySelector(".zprestige").style.display = "none"

        
        for(i = 0; i < 9; i++) {
            i <= 7 ? mUP[i].cost = mUP[i].baseCost * (1 - ySUP5.level * 0.03) : mUP[i].cost = mUP[i].baseCost
            mUP[i].level = 0
            mUP[i].extraLevel = 0
            mUP[i].costScaling = mUP[i].baseCostScaling
            mUP[i].effect = mUP[i].baseEffect
            mUP[i].superChargedLevel = 0
        }
        for(i = 0; i < 6; i++) {
            mSUP[i].level = 0
            mSUP[i].multiplier = 1
            mSUP[i].cost = mSUP[i].baseCost
        }

        setYUpgradeStats()
        setUpgradeStats()

        game.xPerSecond = 0
        game.x = 5
        game.masteryLevel = 0
        game.masteryExp = 0
        game.masteryReq = 100 - ySUP6.multiplier
        yUP5.level >= 1 ? game.superCharge = 1 + zUP3.level : game.superCharge = 0
        gainMastery(0)
    }
}

class yUpgrade {
    constructor (cost, level, maxLevel, multiplier) {
        this.cost = cost
        this.level = level
        this.maxLevel = maxLevel
        this.multiplier = multiplier
    }
}

//Innit yupgrades
let yUP1 = new yUpgrade(1, 0, 1, 0) //Mastery
let yUP2 = new yUpgrade(1, 0, 1, 1) //Boost mUP1
let yUP3 = new yUpgrade(2, 0, 1, 1) //Boost y gain

let yUP4 = new yUpgrade(5, 0, 1, 1) //Boost x gain
let yUP5 = new yUpgrade(10, 0, 1, 0)  //
let yUP6 = new yUpgrade(10, 0, 1, 1)  // EXP gain

let yUP7 = new yUpgrade(15, 0, 1, 0)
let yUP8 = new yUpgrade(50, 0, 1, 0)
let yUP9 = new yUpgrade(100, 0, 1, 1)   // boost y gain

let ySUP1 = new yUpgrade(25, 0, 10, 0)  //Bonus levels
let ySUP2 = new yUpgrade(25, 0, 10, 1) // x multiplier
let ySUP3 = new yUpgrade(25, 0, 3, 0)   //Mastery cap
let ySUP4 = new yUpgrade(25, 0, 5, 1) // EXP multiplier
let ySUP5 = new yUpgrade(25, 0, 5, 0)  //base cost down
let ySUP6 = new yUpgrade(25, 0, 5, 0)   //mastery base down

let yUP = [yUP1, yUP2, yUP3, yUP4, yUP5, yUP6, yUP7, yUP8, yUP9]
let ySUP = [ySUP1, ySUP2, ySUP3, ySUP4, ySUP5, ySUP6]


//Y prestige related
const buyYUpgrade = (number) => {
    if(game.y < yUP[number - 1].cost || yUP[number - 1].level >= yUP[number - 1].maxLevel) return
    game.y -= yUP[number - 1].cost
    yUP[number - 1].level++
    document.querySelectorAll(".yUpgradeCost")[number - 1].textContent = `Max`

    if(yUP1.level >= 1) {
        document.querySelectorAll(".mastery-container")[0].style.display = "flex"
        document.querySelectorAll(".navBtn")[2].style.display = "flex"
        document.querySelectorAll(".upgrade")[5].style.display = "grid"
    }

    if(number == 5) game.superCharge += 1 + zUP1.level
    
    if(yUP7.level >= 1) {
        document.querySelectorAll(".upgrade")[6].style.display = "grid"
        document.querySelectorAll(".upgrade")[7].style.display = "grid"
        document.querySelectorAll(".upgrade")[8].style.display = "grid"

        document.querySelectorAll(".mastery")[7].style.display = "grid"
        document.querySelectorAll(".mastery")[8].style.display = "grid"
        document.querySelectorAll(".mastery")[9].style.display = "grid"
    }
    //TODO: ADD BACK UPGRADE 8
    setYUpgradeStats()
    setUpgradeStats()
}

const buyYSecondary = (number) => {
    if(game.y < ySUP[number - 1].cost || ySUP[number - 1].level >= ySUP[number - 1].maxLevel) return
    game.y -= ySUP[number - 1].cost
    ySUP[number - 1].level++
    ySUP[number - 1].cost = 25 + 25 * ySUP[number - 1].level

    setUpgradeStats()
    setYUpgradeStats()
}

const setYUpgradeStats = () => {
    if(zUP2.level != 1) {
        yUP2.level >= 1 ? yUP2.multiplier = 2 : yUP2.multiplier = 1
        yUP3.level >= 1 ? yUP3.multiplier = 2 : yUP3.multiplier = 1
        yUP4.level >= 1 ? yUP4.multiplier = Math.sqrt(game.y + 1) : yUP4.multiplier = 1
        yUP6.level >= 1 ? yUP6.multiplier = 2 : yUP6.multiplier = 1
        yUP9.level >= 1 ? yUP9.multiplier = Math.sqrt(game.superCharge + 1) : yUP9.multiplier = 1

        ySUP1.multiplier = 1
        ySUP2.multiplier = Math.pow(2, ySUP2.level)
        ySUP3.maxLevel = 3
        ySUP4.multiplier = 1 + ySUP4.level * 0.3
        ySUP5.multiplier = ySUP5.level * 0.03
        ySUP6.multiplier = ySUP6.level * 0.03
    } else {    
        yUP2.level >= 1 ? yUP2.multiplier = 3 : yUP2.multiplier = 1
        yUP3.level >= 1 ? yUP3.multiplier = 3 : yUP3.multiplier = 1
        yUP4.level >= 1 ? yUP4.multiplier = Math.pow(Math.sqrt(game.y + 1), 1.25) : yUP4.multiplier = 1
        yUP6.level >= 1 ? yUP4.multiplier = 3 : yUP6.multiplier = 1
        yUP9.level >= 1 ? yUP9.multiplier = Math.pow(Math.sqrt(game.superCharge + 1), 1.25) : yUP9.multiplier = 1

        ySUP1.multiplier = 2
        ySUP2.multiplier = Math.pow(3, ySUP2.level)
        ySUP3.maxLevel = 5
        ySUP4.multiplier = 1 + ySUP4.level * 0.5
        ySUP5.multiplier = ySUP5.level * 0.04
        ySUP6.multiplier = ySUP6.level * 0.04
    } 
    yUP8.level >= 1 ? document.querySelector(".autobuyer-container").style.display = "flex" : document.querySelector(".autobuyer-container").style.display = "none"
}

const updateYUpgradeUI = () => {
    if(zUP2.level != 1) {
        document.querySelectorAll(".yUpgradeEffect")[1].textContent = "x2 to upgrade 1"
        document.querySelectorAll(".yUpgradeEffect")[2].textContent = "x2 to y gain"
        document.querySelectorAll(".yUpgradeEffect")[4].textContent = "Start with a super charge"
        document.querySelectorAll(".yUpgradeEffect")[5].textContent = "x2 EXP gain"
    } else {
        document.querySelectorAll(".yUpgradeEffect")[1].textContent = "x3 to upgrade 1"
        document.querySelectorAll(".yUpgradeEffect")[2].textContent = "x3 to y gain"
        document.querySelectorAll(".yUpgradeEffect")[4].textContent = "Start with 2 super charges"
        document.querySelectorAll(".yUpgradeEffect")[5].textContent = "x3 EXP gain"
    }
}

//Autobuers
setInterval(() => {
   if(yUP8.level >= 1) {
       if(document.querySelector("#mainAutoBuy").checked) {
        buyUpgrade('1')
        buyUpgrade('2')
        buyUpgrade('3')
        buyUpgrade('4')
        buyUpgrade('5')
        buyUpgrade('6')
        buyUpgrade('7')
        buyUpgrade('8')
        buyUpgrade('9')
       }
   }
}, 500);

