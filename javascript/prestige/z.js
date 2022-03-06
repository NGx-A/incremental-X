const zprestige = () => {
    if(game.y >= 1e4) {
        game.z += Math.floor(game.y / 1e4)
        game.totalZ += Math.floor(game.y / 1e4)

        document.querySelector(".z").style.display = "inline"
        document.querySelector(".y").style.display = "inline"
        document.querySelectorAll(".navBtn")[4].style.display = "flex"
        document.querySelector(".yprestige").style.display = "none"
        document.querySelector(".zprestige").style.display = "none"

        game.x = 5
        game.y = 0
        game.totalY = 0

        for(i = 0; i < 9; i++) {
            mUP[i].cost = mUP[i].baseCost
            mUP[i].level = 0
            mUP[i].costScaling = mUP[i].baseCostScaling
            mUP[i].effect = mUP[i].baseEffect
            mUP[i].superChargedLevel = 0

            yUP[i].level = 0
            yUP[i].multiplier = 1
            if(i < 6) {
                ySUP[i].level = 0
                ySUP[i].cost = 25
                ySUP[i].multiplier = 1
            }
        }
        
        game.xPerSecond = 0
        game.masteryLevel = 0
        game.masteryExp = 0
        game.masteryReq = 100 
        game.masteryBonusExp = 0
        game.superCharge = 0
        setUpgradeStats()
        setYUpgradeStats()
        updateYUpgradeUI()
        gainMastery(0)

        document.querySelectorAll(".navBtn")[2].style.display = "none"
        document.querySelectorAll(".mastery-container")[0].style.display = "none"
        document.querySelectorAll(".upgrade")[5].style.display = "none"
        document.querySelectorAll(".upgrade")[6].style.display = "none"
        document.querySelectorAll(".upgrade")[7].style.display = "none"
        document.querySelectorAll(".upgrade")[8].style.display = "none"
        document.querySelectorAll(".mastery")[7].style.display = "none"
        document.querySelectorAll(".mastery")[8].style.display = "none"
        document.querySelectorAll(".mastery")[9].style.display = "none"
        document.querySelectorAll(".secondary-container")[0].style.display = "none"
    }
}

class zUpgrade {
    constructor(cost, level, maxLevel) {
        this.cost = cost
        this.level = level
        this.maxLevel = maxLevel
    }
}

//Innit zUpgrades
let zUP1 = new zUpgrade(1, 0, 1)
let zUP2 = new zUpgrade(1, 0, 1)
let zUP3 = new zUpgrade(2, 0, 1)
let zUP4 = new zUpgrade(3, 0, 1)
let zUP = [zUP1, zUP2, zUP3, zUP4]

const buyZUpgrade = (number) => {
    if(game.z < zUP[number - 1].cost || zUP[number - 1].level >= zUP[number - 1].maxLevel) return
    game.z -= zUP[number - 1].cost
    zUP[number - 1].level++
    document.querySelectorAll(".zUpgradeCost")[number - 1].textContent = "Max"
    updateYUpgradeUI()
    if(number == 1) document.querySelectorAll(".secondary-container")[0].style.display = "grid"
    if(number == 4) document.querySelector(".y-s").style.display = "inline"
}

