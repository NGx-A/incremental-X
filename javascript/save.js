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
    if(typeof savedGame.yPerSecond !== "undefined") game.yPerSecond = savedGame.yPerSecond
    if(typeof savedGame.z !== "undefined") game.z = savedGame.z
    if(typeof savedGame.totalZ !== "undefined") game.totalZ = savedGame.totalZ

    if(typeof savedGame.masteryLevel !== "undefined") game.masteryLevel = savedGame.masteryLevel
    if(typeof savedGame.masteryExp !== "undefined") game.masteryExp = savedGame.masteryExp
    if(typeof savedGame.masteryReq !== "undefined") game.masteryReq = savedGame.masteryReq
    if(typeof savedGame.superCharge !== "undefined") game.superCharge = savedGame.superCharge

    if(typeof savedGame.mUP1 !== "undefined") mUP1 = savedGame.mUP1
    if(typeof savedGame.mUP2 !== "undefined") mUP2 = savedGame.mUP2
    if(typeof savedGame.mUP3 !== "undefined") mUP3 = savedGame.mUP3
    if(typeof savedGame.mUP4 !== "undefined") mUP4 = savedGame.mUP4
    if(typeof savedGame.mUP5 !== "undefined") mUP5 = savedGame.mUP5
    if(typeof savedGame.mUP6 !== "undefined") mUP6 = savedGame.mUP6
    if(typeof savedGame.mUP7 !== "undefined") mUP7 = savedGame.mUP7
    if(typeof savedGame.mUP8 !== "undefined") mUP8 = savedGame.mUP8
    if(typeof savedGame.mUP9 !== "undefined") mUP9 = savedGame.mUP9

    if(typeof savedGame.mSUP1 !== "undefined") mSUP1 = savedGame.mSUP1
    if(typeof savedGame.mSUP2 !== "undefined") mSUP2 = savedGame.mSUP2
    if(typeof savedGame.mSUP3 !== "undefined") mSUP3 = savedGame.mSUP3
    if(typeof savedGame.mSUP4 !== "undefined") mSUP4 = savedGame.mSUP4
    if(typeof savedGame.mSUP5 !== "undefined") mSUP5 = savedGame.mSUP5
    if(typeof savedGame.mSUP6 !== "undefined") mSUP6 = savedGame.mSUP6
   
    if(typeof savedGame.yUP1 !== "undefined") yUP1 = savedGame.yUP1
    if(typeof savedGame.yUP2 !== "undefined") yUP2 = savedGame.yUP2
    if(typeof savedGame.yUP3 !== "undefined") yUP3 = savedGame.yUP3
    if(typeof savedGame.yUP4 !== "undefined") yUP4 = savedGame.yUP4
    if(typeof savedGame.yUP5 !== "undefined") yUP5 = savedGame.yUP5
    if(typeof savedGame.yUP6 !== "undefined") yUP6 = savedGame.yUP6
    if(typeof savedGame.yUP7 !== "undefined") yUP7 = savedGame.yUP7
    if(typeof savedGame.yUP8 !== "undefined") yUP8 = savedGame.yUP8
    if(typeof savedGame.yUP9 !== "undefined") yUP9 = savedGame.yUP9

    if(typeof savedGame.ySUP1 !== "undefined") ySUP1 = savedGame.ySUP1
    if(typeof savedGame.ySUP2 !== "undefined") ySUP2 = savedGame.ySUP2
    if(typeof savedGame.ySUP3 !== "undefined") ySUP3 = savedGame.ySUP3
    if(typeof savedGame.ySUP4 !== "undefined") ySUP4 = savedGame.ySUP4
    if(typeof savedGame.ySUP5 !== "undefined") ySUP5 = savedGame.ySUP5
    if(typeof savedGame.ySUP6 !== "undefined") ySUP6 = savedGame.ySUP6

    if(typeof savedGame.zUP1 !== "undefined") zUP1 = savedGame.zUP1
    if(typeof savedGame.zUP2 !== "undefined") zUP2 = savedGame.zUP2
    if(typeof savedGame.zUP3 !== "undefined") zUP3 = savedGame.zUP3
    if(typeof savedGame.zSUP3 !== "undefined") zSUP3 = savedGame.zSUP3
    
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
    yPerSecond: game.yPerSecond,
    z: game.z,
    totalZ: game.totalZ,

    masteryLevel: game.masteryLevel,
    masteryExp: game.masteryExp, 
    masteryReq: game.masteryReq,
    superCharge: game.superCharge,

    //Upgrades
    mUP1: mUP1,
    mUP2: mUP2,
    mUP3: mUP3,
    mUP4: mUP4,
    mUP5: mUP5,
    mUP6: mUP6,
    mUP7: mUP7,
    mUP8: mUP8,
    mUP9: mUP9,

    mSUP1: mSUP1,
    mSUP2: mSUP2,
    mSUP3: mSUP3,
    mSUP4: mSUP4,
    mSUP5: mSUP5,
    mSUP6: mSUP6,

    //Y upgrades
    yUP1: yUP1,
    yUP2: yUP2,
    yUP3: yUP3,
    yUP4: yUP4,
    yUP5: yUP5,
    yUP6: yUP6,
    yUP7: yUP7,
    yUP8: yUP8,
    yUP9: yUP9,

    ySUP1: ySUP1,
    ySUP2: ySUP2,
    ySUP3: ySUP3,
    ySUP4: ySUP4,
    ySUP5: ySUP5,
    ySUP6: ySUP6,

    zUP1: zUP1,
    zUP2: zUP2,
    zUP3: zUP3,
    zUP4: zUP4,

    //Settings
    offlineProduction: setting.offlineProduction,
	}
	localStorage.setItem("gameSave", JSON.stringify(gameSave))
}

window.onload = function() {
	loadGame()
    updateSettingsUI()
    updateYUpgradeUI()
    updateUI()

    mUP = [mUP1, mUP2, mUP3, mUP4, mUP5, mUP6, mUP7, mUP8, mUP9]
    mSUP = [mSUP1, mSUP2, mSUP3, mSUP4, mSUP5, mSUP6]
    yUP = [yUP1, yUP2, yUP3, yUP4, yUP5, yUP6, yUP7, yUP8, yUP9]
    ySUP = [ySUP1, ySUP2, ySUP3, ySUP4, ySUP5, ySUP6]
    zUP = [zUP1, zUP2, zUP3, zUP4]

    if(yUP1.level >= 1) {
        document.querySelectorAll(".navBtn")[2].style.display = "flex"
        document.querySelectorAll(".mastery-container")[0].style.display = "flex"
        document.querySelectorAll(".upgrade")[5].style.display = "grid"
    }
     
    if(game.totalY >= 1 || game.totalZ >= 1) {
        document.querySelector(".y").style.display = "inline"
        document.querySelectorAll(".navBtn")[3].style.display = "flex"
    }
    if(game.totalZ >= 1) {
        document.querySelector(".z").style.display = "inline"
        document.querySelectorAll(".navBtn")[4].style.display = "flex"
    }

    for(i = 0; i < 9; i++) {
        if(yUP[i].level >= 1) document.querySelectorAll(".yUpgradeCost")[i].textContent = `Max`
    }
    for(i = 0; i < 4; i++ ) {
        if(zUP[i].level >= zUP[i].maxLevel) document.querySelectorAll(".zUpgradeCost")[i].textContent = 'Max'
    }
    if(yUP7.level >= 1) {
        document.querySelectorAll(".upgrade")[6].style.display = "grid"
        document.querySelectorAll(".upgrade")[7].style.display = "grid"
        document.querySelectorAll(".upgrade")[8].style.display = "grid"
        document.querySelectorAll(".mastery")[7].style.display = "grid"
        document.querySelectorAll(".mastery")[8].style.display = "grid"
        document.querySelectorAll(".mastery")[9].style.display = "grid"
    }
    yUP8.level >= 1 ? document.querySelector(".autobuyer-container").style.display = "flex" : document.querySelector(".autobuyer-container").style.display = "none"

    if(game.totalY >= 50) document.querySelectorAll(".secondary-container")[1].style.display = "grid"   //Unlocks secondary y upgrades
    if(zUP1.level >= 1) document.querySelectorAll(".secondary-container")[0].style.display = "grid"     //Unlocks secondary main upgrades

    if(zUP4.level >= 1) {
        document.querySelector(".y-s").style.display = "inline"
    } else document.querySelector(".y-s").style.display = "none"
    
    document.querySelector(`#${game.currentTab}`).style.display = "grid"

    timeOffline = (Date.now() - lastDate) / 1000
    if(setting.offlineProduction) {
        game.x += game.xPerSecond * timeOffline
        if(zUP4.level >= 1) {
            game.y += game.yPerSecond * timeOffline
            game.totalY += game.yPerSecond * timeOffline
        }
    }
    

    setUpgradeStats()
    setYUpgradeStats()
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
