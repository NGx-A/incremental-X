let hardReset = false
let lastDate = 0
let timeOffline = 0

const loadGame = () => {
	let savedGame = JSON.parse(localStorage.getItem("gameSave"))
    if(typeof savedGame.lastDate !== "undefined") lastDate = savedGame.lastDate
	if(typeof savedGame.currentTab !== "undefined") game.currentTab = savedGame.currentTab
    if(typeof savedGame.x !== "undefined") game.x = savedGame.x 
    if(typeof savedGame.xPerSecond !== "undefined") game.xPerSecond = savedGame.xPerSecond

    if(typeof savedGame.masteryLevel !== "undefined") game.masteryLevel = savedGame.masteryLevel
    if(typeof savedGame.masteryExp !== "undefined") game.masteryExp = savedGame.masteryExp
    if(typeof savedGame.masteryReq !== "undefined") game.masteryReq = savedGame.masteryReq
    if(typeof savedGame.masteryMultiplier !== "undefined") game.masteryMultiplier = savedGame.masteryMultiplier
    if(typeof savedGame.masteryBonusExp !== "undefined") game.masteryBonusExp = savedGame.masteryBonusExp
    if(typeof savedGame.perksUsed !== "undefined") game.perksUsed = savedGame.perksUsed

    if(typeof savedGame.upgrade1_baseCost !== "undefined") game.upgrade1.baseCost = savedGame.upgrade1_baseCost
    if(typeof savedGame.upgrade1_Cost !== "undefined") game.upgrade1.cost = savedGame.upgrade1_Cost
    if(typeof savedGame.upgrade1_Level !== "undefined") game.upgrade1.level = savedGame.upgrade1_Level
    if(typeof savedGame.upgrade1_ExtraLevel !== "undefined") game.upgrade1.extraLevel = savedGame.upgrade1_ExtraLevel
    if(typeof savedGame.upgrade1_CostScaling !== "undefined") game.upgrade1.costScaling = savedGame.upgrade1_CostScaling
    if(typeof savedGame.upgrade1_Effect !== "undefined") game.upgrade1.effect = savedGame.upgrade1_Effect

    if(typeof savedGame.upgrade2_baseCost !== "undefined") game.upgrade2.baseCost = savedGame.upgrade2_baseCost
    if(typeof savedGame.upgrade2_Cost !== "undefined") game.upgrade2.cost = savedGame.upgrade2_Cost
    if(typeof savedGame.upgrade2_Level !== "undefined") game.upgrade2.level = savedGame.upgrade2_Level
    if(typeof savedGame.upgrade2_ExtraLevel !== "undefined") game.upgrade2.extraLevel = savedGame.upgrade2_ExtraLevel
    if(typeof savedGame.upgrade2_CostScaling !== "undefined") game.upgrade2.costScaling = savedGame.upgrade2_CostScaling
    if(typeof savedGame.upgrade2_Effect !== "undefined") game.upgrade2.effect = savedGame.upgrade2_Effect

    if(typeof savedGame.upgrade3_baseCost !== "undefined") game.upgrade3.baseCost = savedGame.upgrade3_baseCost
    if(typeof savedGame.upgrade3_Cost !== "undefined") game.upgrade3.cost = savedGame.upgrade3_Cost
    if(typeof savedGame.upgrade3_Level !== "undefined") game.upgrade3.level = savedGame.upgrade3_Level
    if(typeof savedGame.upgrade3_ExtraLevel !== "undefined") game.upgrade3.extraLevel = savedGame.upgrade3_ExtraLevel
    if(typeof savedGame.upgrade3_CostScaling !== "undefined") game.upgrade3.costScaling = savedGame.upgrade3_CostScaling
    if(typeof savedGame.upgrade3_Effect !== "undefined") game.upgrade3.effect = savedGame.upgrade3_Effect

    if(typeof savedGame.upgrade4_baseCost !== "undefined") game.upgrade4.baseCost = savedGame.upgrade4_baseCost
    if(typeof savedGame.upgrade4_Cost !== "undefined") game.upgrade4.cost = savedGame.upgrade4_Cost
    if(typeof savedGame.upgrade4_Level !== "undefined") game.upgrade4.level = savedGame.upgrade4_Level
    if(typeof savedGame.upgrade4_ExtraLevel !== "undefined") game.upgrade4.extraLevel = savedGame.upgrade4_ExtraLevel
    if(typeof savedGame.upgrade4_CostScaling !== "undefined") game.upgrade4.costScaling = savedGame.upgrade4_CostScaling
    if(typeof savedGame.upgrade4_Effect !== "undefined") game.upgrade4.effect = savedGame.upgrade4_Effect

    if(typeof savedGame.upgrade5_baseCost !== "undefined") game.upgrade5.baseCost = savedGame.upgrade5_baseCost
    if(typeof savedGame.upgrade5_Cost !== "undefined") game.upgrade5.cost = savedGame.upgrade5_Cost
    if(typeof savedGame.upgrade5_Level !== "undefined") game.upgrade5.level = savedGame.upgrade5_Level
    if(typeof savedGame.upgrade5_ExtraLevel !== "undefined") game.upgrade5.extraLevel = savedGame.upgrade5_ExtraLevel
    if(typeof savedGame.upgrade5_CostScaling !== "undefined") game.upgrade5.costScaling = savedGame.upgrade5_CostScaling
    if(typeof savedGame.upgrade5_Effect !== "undefined") game.upgrade5.effect = savedGame.upgrade5_Effect

    if(typeof savedGame.upgrade6_baseCost !== "undefined") game.upgrade6.baseCost = savedGame.upgrade6_baseCost
    if(typeof savedGame.upgrade6_Cost !== "undefined") game.upgrade6.cost = savedGame.upgrade6_Cost
    if(typeof savedGame.upgrade6_Level !== "undefined") game.upgrade6.level = savedGame.upgrade6_Level
    if(typeof savedGame.upgrade6_ExtraLevel !== "undefined") game.upgrade6.extraLevel = savedGame.upgrade6_ExtraLevel
    if(typeof savedGame.upgrade6_CostScaling !== "undefined") game.upgrade6.costScaling = savedGame.upgrade6_CostScaling
    if(typeof savedGame.upgrade6_Effect !== "undefined") game.upgrade6.effect = savedGame.upgrade6_Effect

    //Settings
    if(typeof savedGame.offlineProduction !== "undefined") setting.offlineProduction = savedGame.offlineProduction
}

const saveGame = () => {
	let gameSave = {
    lastDate: lastDate,
	currentTab: game.currentTab,
    x: game.x,
    xPerSecond: game.xPerSecond,

    masteryLevel: game.masteryLevel,
    masteryExp: game.masteryExp, 
    masteryReq: game.masteryReq,
    masteryMultiplier: game.masteryMultiplier,
    masteryBonusExp: game.masteryBonusExp,
    perksUsed: game.perksUsed,

    //Upgrades
    upgrade1_baseCost: game.upgrade1.baseCost,
    upgrade1_Cost: game.upgrade1.cost,
    upgrade1_Level: game.upgrade1.level,
    upgrade1_ExtraLevel: game.upgrade1.extraLevel,
    upgrade1_CostScaling: game.upgrade1.costScaling,
    upgrade1_Effect: game.upgrade1.effect,

    upgrade2_baseCost: game.upgrade2.baseCost,
    upgrade2_Cost: game.upgrade2.cost,
    upgrade2_Level: game.upgrade2.level,
    upgrade2_ExtraLevel: game.upgrade2.extraLevel,
    upgrade2_CostScaling: game.upgrade2.costScaling,
    upgrade2_Effect: game.upgrade2.effect,

    upgrade3_baseCost: game.upgrade3.baseCost,
    upgrade3_Cost: game.upgrade3.cost,
    upgrade3_Level: game.upgrade3.level,
    upgrade3_ExtraLevel: game.upgrade3.extraLevel,
    upgrade3_CostScaling: game.upgrade3.costScaling,
    upgrade3_Effect: game.upgrade3.effect,

    upgrade4_baseCost: game.upgrade4.baseCost,
    upgrade4_Cost: game.upgrade4.cost,
    upgrade4_Level: game.upgrade4.level,
    upgrade4_ExtraLevel: game.upgrade4.extraLevel,
    upgrade4_CostScaling: game.upgrade4.costScaling,
    upgrade4_Effect: game.upgrade4.effect,

    upgrade5_baseCost: game.upgrade5.baseCost,
    upgrade5_Cost: game.upgrade5.cost,
    upgrade5_Level: game.upgrade5.level,
    upgrade5_ExtraLevel: game.upgrade5.extraLevel,
    upgrade5_CostScaling: game.upgrade5.costScaling,
    upgrade5_Effect: game.upgrade5.effect,

    upgrade6_baseCost: game.upgrade6.baseCost,
    upgrade6_Cost: game.upgrade6.cost,
    upgrade6_Level: game.upgrade6.level,
    upgrade6_ExtraLevel: game.upgrade6.extraLevel,
    upgrade6_CostScaling: game.upgrade6.costScaling,
    upgrade6_Effect: game.upgrade6.effect,

    //Settings
    offlineProduction: setting.offlineProduction,
	}
	localStorage.setItem("gameSave", JSON.stringify(gameSave))
}

window.onload = function() {
	loadGame()
    updateUI()
    updateSettingsUI()

    document.querySelector(`#${game.currentTab}`).style.display = "grid"
    if(game.currentTab == "mastery") document.querySelector(`#${game.currentTab}`).style.display = "flex"

    timeOffline = (Date.now() - lastDate) / 1000
    if(setting.offlineProduction) game.x += game.xPerSecond * timeOffline

    gainMastery(0)
    if(game.masteryLevel >= 1)  {
        for(i = 0; i < game.masteryLevel; i++) {
            document.querySelectorAll(".mastery-container")[i].style.display = "grid"
        }
    }    
}

window.onunload = function() {
    lastDate = Date.now()
    if(!hardReset) saveGame()
    if(hardReset) hardReset = false
}

const reset = () => {
	if(confirm("CONFIRM_TEXT")) {
	let gameSave = {}
	localStorage.setItem("gameSave", JSON.stringify(gameSave))
    hardReset = true
	location.reload()
	}
}

