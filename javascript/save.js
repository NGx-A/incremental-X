let hardReset = false
let lastDate = 0
let timeOffline = 0

const loadGame = () => {
	let savedGame = JSON.parse(localStorage.getItem("gameSave"))
    if(typeof savedGame.lastDate !== "undefined") lastDate = savedGame.lastDate
	if(typeof savedGame.currentTab !== "undefined") game.currentTab = savedGame.currentTab
    if(typeof savedGame.x !== "undefined") game.x = savedGame.x 
    if(typeof savedGame.xPerSecond !== "undefined") game.xPerSecond = savedGame.xPerSecond
    if(typeof savedGame.y !== "undefined") game.y = savedGame.y
    if(typeof savedGame.totalY !== "undefined") game.totalY = savedGame.totalY

    if(typeof savedGame.masteryLevel !== "undefined") game.masteryLevel = savedGame.masteryLevel
    if(typeof savedGame.masteryExp !== "undefined") game.masteryExp = savedGame.masteryExp
    if(typeof savedGame.masteryReq !== "undefined") game.masteryReq = savedGame.masteryReq
    if(typeof savedGame.masteryMultiplier !== "undefined") game.masteryMultiplier = savedGame.masteryMultiplier
    if(typeof savedGame.masteryBonusExp !== "undefined") game.masteryBonusExp = savedGame.masteryBonusExp
    if(typeof savedGame.superCharge !== "undefined") game.superCharge = savedGame.superCharge

    if(typeof savedGame.upgrade1_baseCost !== "undefined") game.upgrade1.baseCost = savedGame.upgrade1_baseCost
    if(typeof savedGame.upgrade1_Cost !== "undefined") game.upgrade1.cost = savedGame.upgrade1_Cost
    if(typeof savedGame.upgrade1_Level !== "undefined") game.upgrade1.level = savedGame.upgrade1_Level
    if(typeof savedGame.upgrade1_ExtraLevel !== "undefined") game.upgrade1.extraLevel = savedGame.upgrade1_ExtraLevel
    if(typeof savedGame.upgrade1_CostScaling !== "undefined") game.upgrade1.costScaling = savedGame.upgrade1_CostScaling
    if(typeof savedGame.upgrade1_Effect !== "undefined") game.upgrade1.effect = savedGame.upgrade1_Effect
    if(typeof savedGame.upgrade1_TotalEffect !== "undefined") game.upgrade1.totalEffect = savedGame.upgrade1_TotalEffect
    if(typeof savedGame.upgrade1_BaseEffect !== "undefined") game.upgrade1.baseeffect = savedGame.upgrade1_BaseEffect
    if(typeof savedGame.upgrade1_SuperChargedLevel !== "undefined") game.upgrade1.superChargedLevel = savedGame.upgrade1_SuperChargedLevel

    if(typeof savedGame.upgrade2_baseCost !== "undefined") game.upgrade2.baseCost = savedGame.upgrade2_baseCost
    if(typeof savedGame.upgrade2_Cost !== "undefined") game.upgrade2.cost = savedGame.upgrade2_Cost
    if(typeof savedGame.upgrade2_Level !== "undefined") game.upgrade2.level = savedGame.upgrade2_Level
    if(typeof savedGame.upgrade2_ExtraLevel !== "undefined") game.upgrade2.extraLevel = savedGame.upgrade2_ExtraLevel
    if(typeof savedGame.upgrade2_CostScaling !== "undefined") game.upgrade2.costScaling = savedGame.upgrade2_CostScaling
    if(typeof savedGame.upgrade2_Effect !== "undefined") game.upgrade2.effect = savedGame.upgrade2_Effect
    if(typeof savedGame.upgrade2_TotalEffect !== "undefined") game.upgrade2.totalEffect = savedGame.upgrade2_TotalEffect
    if(typeof savedGame.upgrade2_BaseEffect !== "undefined") game.upgrade2.baseeffect = savedGame.upgrade2_BaseEffect
    if(typeof savedGame.upgrade2_SuperChargedLevel !== "undefined") game.upgrade2.superChargedLevel = savedGame.upgrade2_SuperChargedLevel

    if(typeof savedGame.upgrade3_baseCost !== "undefined") game.upgrade3.baseCost = savedGame.upgrade3_baseCost
    if(typeof savedGame.upgrade3_Cost !== "undefined") game.upgrade3.cost = savedGame.upgrade3_Cost
    if(typeof savedGame.upgrade3_Level !== "undefined") game.upgrade3.level = savedGame.upgrade3_Level
    if(typeof savedGame.upgrade3_ExtraLevel !== "undefined") game.upgrade3.extraLevel = savedGame.upgrade3_ExtraLevel
    if(typeof savedGame.upgrade3_CostScaling !== "undefined") game.upgrade3.costScaling = savedGame.upgrade3_CostScaling
    if(typeof savedGame.upgrade3_Effect !== "undefined") game.upgrade3.effect = savedGame.upgrade3_Effect
    if(typeof savedGame.upgrade3_TotalEffect !== "undefined") game.upgrade3.totalEffect = savedGame.upgrade3_TotalEffect
    if(typeof savedGame.upgrade3_BaseEffect !== "undefined") game.upgrade3.baseeffect = savedGame.upgrade3_BaseEffect
    if(typeof savedGame.upgrade3_SuperChargedLevel !== "undefined") game.upgrade3.superChargedLevel = savedGame.upgrade3_SuperChargedLevel

    if(typeof savedGame.upgrade4_baseCost !== "undefined") game.upgrade4.baseCost = savedGame.upgrade4_baseCost
    if(typeof savedGame.upgrade4_Cost !== "undefined") game.upgrade4.cost = savedGame.upgrade4_Cost
    if(typeof savedGame.upgrade4_Level !== "undefined") game.upgrade4.level = savedGame.upgrade4_Level
    if(typeof savedGame.upgrade4_ExtraLevel !== "undefined") game.upgrade4.extraLevel = savedGame.upgrade4_ExtraLevel
    if(typeof savedGame.upgrade4_CostScaling !== "undefined") game.upgrade4.costScaling = savedGame.upgrade4_CostScaling
    if(typeof savedGame.upgrade4_Effect !== "undefined") game.upgrade4.effect = savedGame.upgrade4_Effect
    if(typeof savedGame.upgrade4_TotalEffect !== "undefined") game.upgrade4.totalEffect = savedGame.upgrade4_TotalEffect
    if(typeof savedGame.upgrade4_BaseEffect !== "undefined") game.upgrade4.baseeffect = savedGame.upgrade4_BaseEffect
    if(typeof savedGame.upgrade4_SuperChargedLevel !== "undefined") game.upgrade4.superChargedLevel = savedGame.upgrade4_SuperChargedLevel

    if(typeof savedGame.upgrade5_baseCost !== "undefined") game.upgrade5.baseCost = savedGame.upgrade5_baseCost
    if(typeof savedGame.upgrade5_Cost !== "undefined") game.upgrade5.cost = savedGame.upgrade5_Cost
    if(typeof savedGame.upgrade5_Level !== "undefined") game.upgrade5.level = savedGame.upgrade5_Level
    if(typeof savedGame.upgrade5_ExtraLevel !== "undefined") game.upgrade5.extraLevel = savedGame.upgrade5_ExtraLevel
    if(typeof savedGame.upgrade5_CostScaling !== "undefined") game.upgrade5.costScaling = savedGame.upgrade5_CostScaling
    if(typeof savedGame.upgrade5_Effect !== "undefined") game.upgrade5.effect = savedGame.upgrade5_Effect
    if(typeof savedGame.upgrade5_TotalEffect !== "undefined") game.upgrade5.totalEffect = savedGame.upgrade5_TotalEffect
    if(typeof savedGame.upgrade5_BaseEffect !== "undefined") game.upgrade5.baseeffect = savedGame.upgrade5_BaseEffect
    if(typeof savedGame.upgrade5_SuperChargedLevel !== "undefined") game.upgrade5.superChargedLevel = savedGame.upgrade5_SuperChargedLevel

    if(typeof savedGame.upgrade6_baseCost !== "undefined") game.upgrade6.baseCost = savedGame.upgrade6_baseCost
    if(typeof savedGame.upgrade6_Cost !== "undefined") game.upgrade6.cost = savedGame.upgrade6_Cost
    if(typeof savedGame.upgrade6_Level !== "undefined") game.upgrade6.level = savedGame.upgrade6_Level
    if(typeof savedGame.upgrade6_ExtraLevel !== "undefined") game.upgrade6.extraLevel = savedGame.upgrade6_ExtraLevel
    if(typeof savedGame.upgrade6_CostScaling !== "undefined") game.upgrade6.costScaling = savedGame.upgrade6_CostScaling
    if(typeof savedGame.upgrade6_Effect !== "undefined") game.upgrade6.effect = savedGame.upgrade6_Effect
    if(typeof savedGame.upgrade6_TotalEffect !== "undefined") game.upgrade6.totalEffect = savedGame.upgrade6_TotalEffect
    if(typeof savedGame.upgrade6_BaseEffect !== "undefined") game.upgrade6.baseeffect = savedGame.upgrade6_BaseEffect
    if(typeof savedGame.upgrade6_SuperChargedLevel !== "undefined") game.upgrade6.superChargedLevel = savedGame.upgrade6_SuperChargedLevel

    if(typeof savedGame.upgrade7_baseCost !== "undefined") game.upgrade7.baseCost = savedGame.upgrade7_baseCost
    if(typeof savedGame.upgrade7_Cost !== "undefined") game.upgrade7.cost = savedGame.upgrade7_Cost
    if(typeof savedGame.upgrade7_Level !== "undefined") game.upgrade7.level = savedGame.upgrade7_Level
    if(typeof savedGame.upgrade7_ExtraLevel !== "undefined") game.upgrade7.extraLevel = savedGame.upgrade7_ExtraLevel
    if(typeof savedGame.upgrade7_CostScaling !== "undefined") game.upgrade7.costScaling = savedGame.upgrade7_CostScaling
    if(typeof savedGame.upgrade7_Effect !== "undefined") game.upgrade7.effect = savedGame.upgrade7_Effect
    if(typeof savedGame.upgrade7_TotalEffect !== "undefined") game.upgrade7.totalEffect = savedGame.upgrade7_TotalEffect
    if(typeof savedGame.upgrade7_BaseEffect !== "undefined") game.upgrade7.baseeffect = savedGame.upgrade7_BaseEffect
    if(typeof savedGame.upgrade7_SuperChargedLevel !== "undefined") game.upgrade7.superChargedLevel = savedGame.upgrade7_SuperChargedLevel

    if(typeof savedGame.upgrade8_baseCost !== "undefined") game.upgrade8.baseCost = savedGame.upgrade8_baseCost
    if(typeof savedGame.upgrade8_Cost !== "undefined") game.upgrade8.cost = savedGame.upgrade8_Cost
    if(typeof savedGame.upgrade8_Level !== "undefined") game.upgrade8.level = savedGame.upgrade8_Level
    if(typeof savedGame.upgrade8_ExtraLevel !== "undefined") game.upgrade8.extraLevel = savedGame.upgrade8_ExtraLevel
    if(typeof savedGame.upgrade8_CostScaling !== "undefined") game.upgrade8.costScaling = savedGame.upgrade8_CostScaling
    if(typeof savedGame.upgrade8_Effect !== "undefined") game.upgrade8.effect = savedGame.upgrade8_Effect
    if(typeof savedGame.upgrade8_TotalEffect !== "undefined") game.upgrade8.totalEffect = savedGame.upgrade8_TotalEffect
    if(typeof savedGame.upgrade8_BaseEffect !== "undefined") game.upgrade8.baseeffect = savedGame.upgrade8_BaseEffect
    if(typeof savedGame.upgrade8_SuperChargedLevel !== "undefined") game.upgrade8.superChargedLevel = savedGame.upgrade8_SuperChargedLevel
   
    if(typeof savedGame.yUpgrade1_Cost !== "undefined") yUpgrade[1].cost = savedGame.yUpgrade1_Cost
    if(typeof savedGame.yUpgrade1_Bought !== "undefined") yUpgrade[1].bought = savedGame.yUpgrade1_Bought
    if(typeof savedGame.yUpgrade2_Cost !== "undefined") yUpgrade[2].cost = savedGame.yUpgrade2_Cost
    if(typeof savedGame.yUpgrade2_Bought !== "undefined") yUpgrade[2].bought = savedGame.yUpgrade2_Bought
    if(typeof savedGame.yUpgrade3_Cost !== "undefined") yUpgrade[3].cost = savedGame.yUpgrade3_Cost
    if(typeof savedGame.yUpgrade3_Bought !== "undefined") yUpgrade[3].bought = savedGame.yUpgrade3_Bought
    if(typeof savedGame.yUpgrade4_Cost !== "undefined") yUpgrade[4].cost = savedGame.yUpgrade4_Cost
    if(typeof savedGame.yUpgrade4_Bought !== "undefined") yUpgrade[4].bought = savedGame.yUpgrade4_Bought
    if(typeof savedGame.yUpgrade4_Multiplier !== "undefined") yUpgrade[4].multiplier = savedGame.yUpgrade4_Multiplier
    if(typeof savedGame.yUpgrade5_Cost !== "undefined") yUpgrade[5].cost = savedGame.yUpgrade5_Cost
    if(typeof savedGame.yUpgrade5_Bought !== "undefined") yUpgrade[5].bought = savedGame.yUpgrade5_Bought
    if(typeof savedGame.yUpgrade6_Bought !== "undefined") yUpgrade[6].bought = savedGame.yUpgrade6_Bought
    if(typeof savedGame.yUpgrade6_Cost !== "undefined") yUpgrade[6].cost = savedGame.yUpgrade6_Cost
    if(typeof savedGame.yUpgrade7_Bought !== "undefined") yUpgrade[7].bought = savedGame.yUpgrade7_Bought
    if(typeof savedGame.yUpgrade7_Cost !== "undefined") yUpgrade[7].cost = savedGame.yUpgrade7_Cost
    

    if(typeof savedGame.prevX !== "undefined") prevX = savedGame.prevX
    
    //Settings
    if(typeof savedGame.offlineProduction !== "undefined") setting.offlineProduction = savedGame.offlineProduction
}

const saveGame = () => {
	let gameSave = {
    lastDate: lastDate,
	currentTab: game.currentTab,
    x: game.x,
    xPerSecond: game.xPerSecond,
    y: game.y,
    totalY: game.totalY,

    masteryLevel: game.masteryLevel,
    masteryExp: game.masteryExp, 
    masteryReq: game.masteryReq,
    masteryMultiplier: game.masteryMultiplier,
    masteryBonusExp: game.masteryBonusExp,
    superCharge: game.superCharge,

    //Upgrades
    upgrade1_baseCost: game.upgrade1.baseCost,
    upgrade1_Cost: game.upgrade1.cost,
    upgrade1_Level: game.upgrade1.level,
    upgrade1_ExtraLevel: game.upgrade1.extraLevel,
    upgrade1_CostScaling: game.upgrade1.costScaling,
    upgrade1_Effect: game.upgrade1.effect,
    upgrade1_BaseEffect: game.upgrade1.baseEffect,
    upgrade1_TotalEffect: game.upgrade1.totalEffect,
    upgrade1_SuperChargedLevel: game.upgrade1.superChargedLevel,

    upgrade2_baseCost: game.upgrade2.baseCost,
    upgrade2_Cost: game.upgrade2.cost,
    upgrade2_Level: game.upgrade2.level,
    upgrade2_ExtraLevel: game.upgrade2.extraLevel,
    upgrade2_CostScaling: game.upgrade2.costScaling,
    upgrade2_Effect: game.upgrade2.effect,
    upgrade2_BaseEffect: game.upgrade2.baseEffect,
    upgrade2_TotalEffect: game.upgrade2.totalEffect,
    upgrade2_SuperChargedLevel: game.upgrade2.superChargedLevel,

    upgrade3_baseCost: game.upgrade3.baseCost,
    upgrade3_Cost: game.upgrade3.cost,
    upgrade3_Level: game.upgrade3.level,
    upgrade3_ExtraLevel: game.upgrade3.extraLevel,
    upgrade3_CostScaling: game.upgrade3.costScaling,
    upgrade3_Effect: game.upgrade3.effect,
    upgrade3_BaseEffect: game.upgrade3.baseEffect,
    upgrade3_TotalEffect: game.upgrade3.totalEffect,
    upgrade3_SuperChargedLevel: game.upgrade3.superChargedLevel,

    upgrade4_baseCost: game.upgrade4.baseCost,
    upgrade4_Cost: game.upgrade4.cost,
    upgrade4_Level: game.upgrade4.level,
    upgrade4_ExtraLevel: game.upgrade4.extraLevel,
    upgrade4_CostScaling: game.upgrade4.costScaling,
    upgrade4_Effect: game.upgrade4.effect,
    upgrade4_BaseEffect: game.upgrade4.baseEffect,
    upgrade4_TotalEffect: game.upgrade4.totalEffect,
    upgrade4_SuperChargedLevel: game.upgrade4.superChargedLevel,

    upgrade5_baseCost: game.upgrade5.baseCost,
    upgrade5_Cost: game.upgrade5.cost,
    upgrade5_Level: game.upgrade5.level,
    upgrade5_ExtraLevel: game.upgrade5.extraLevel,
    upgrade5_CostScaling: game.upgrade5.costScaling,
    upgrade5_Effect: game.upgrade5.effect,
    upgrade5_BaseEffect: game.upgrade5.baseEffect,
    upgrade5_TotalEffect: game.upgrade5.totalEffect,
    upgrade5_SuperChargedLevel: game.upgrade5.superChargedLevel,

    upgrade6_baseCost: game.upgrade6.baseCost,
    upgrade6_Cost: game.upgrade6.cost,
    upgrade6_Level: game.upgrade6.level,
    upgrade6_ExtraLevel: game.upgrade6.extraLevel,
    upgrade6_CostScaling: game.upgrade6.costScaling,
    upgrade6_Effect: game.upgrade6.effect,
    upgrade6_BaseEffect: game.upgrade6.baseEffect,
    upgrade6_TotalEffect: game.upgrade6.totalEffect,
    upgrade6_SuperChargedLevel: game.upgrade6.superChargedLevel,

    upgrade7_baseCost: game.upgrade7.baseCost,
    upgrade7_Cost: game.upgrade7.cost,
    upgrade7_Level: game.upgrade7.level,
    upgrade7_ExtraLevel: game.upgrade7.extraLevel,
    upgrade7_CostScaling: game.upgrade7.costScaling,
    upgrade7_Effect: game.upgrade7.effect,
    upgrade7_BaseEffect: game.upgrade7.baseEffect,
    upgrade7_TotalEffect: game.upgrade7.totalEffect,
    upgrade7_SuperChargedLevel: game.upgrade7.superChargedLevel,

    upgrade8_baseCost: game.upgrade8.baseCost,
    upgrade8_Cost: game.upgrade8.cost,
    upgrade8_Level: game.upgrade8.level,
    upgrade8_ExtraLevel: game.upgrade8.extraLevel,
    upgrade8_CostScaling: game.upgrade8.costScaling,
    upgrade8_Effect: game.upgrade8.effect,
    upgrade8_BaseEffect: game.upgrade8.baseEffect,
    upgrade8_TotalEffect: game.upgrade8.totalEffect,
    upgrade8_SuperChargedLevel: game.upgrade8.superChargedLevel,


    //Y upgrades
    yUpgrade1_Cost: yUpgrade[1].cost,
    yUpgrade1_Bought: yUpgrade[1].bought,
    yUpgrade2_Cost: yUpgrade[2].cost,
    yUpgrade2_Bought: yUpgrade[2].bought,
    yUpgrade3_Cost: yUpgrade[3].cost,
    yUpgrade3_Bought: yUpgrade[3].bought,
    yUpgrade4_Cost: yUpgrade[4].cost,
    yUpgrade4_Bought: yUpgrade[4].bought,
    yUpgrade4_Multiplier: yUpgrade[4].multiplier,
    yUpgrade5_Cost: yUpgrade[5].cost,
    yUpgrade5_Bought: yUpgrade[5].bought,
    yUpgrade6_Cost: yUpgrade[6].cost,
    yUpgrade6_Bought: yUpgrade[6].bought,
    yUpgrade7_Cost: yUpgrade[7].cost,
    yUpgrade7_Bought: yUpgrade[7].bought,

    prevX: prevX,

    //Settings
    offlineProduction: setting.offlineProduction,
	}
	localStorage.setItem("gameSave", JSON.stringify(gameSave))
}

window.onload = function() {
	loadGame()
    updateUI()
    updateSettingsUI()

    if(yUpgrade[1].bought) document.querySelectorAll(".navBtn")[2].style.display = "inline"
    if(game.totalY >= 1) {
        document.querySelector(".y").style.display = "inline"
        document.querySelectorAll(".navBtn")[3].style.display = "block"
    }

    for(i = 1; i <= 7; i++) {
        if(yUpgrade[i].bought) document.querySelector("#yUpgrade" + i + "Cost").textContent = `Maxed`
    }

    if(yUpgrade[7].bought) {
        document.querySelectorAll(".upgrade")[6].style.display = "grid"
        document.querySelectorAll(".upgrade")[7].style.display = "grid"
        //document.querySelectorAll(".upgrade")[8].style.display = "grid"
        document.querySelectorAll(".mastery")[7].style.display = "grid"
        document.querySelectorAll(".mastery")[8].style.display = "grid"
        //document.querySelectorAll(".mastery")[9].style.display = "grid"
    }
    
    document.querySelector(`#${game.currentTab}`).style.display = "grid"

    timeOffline = (Date.now() - lastDate) / 1000
    if(setting.offlineProduction) game.x += game.xPerSecond * timeOffline

    gainMastery(0)  
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

