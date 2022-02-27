let setting = {
    offlineProduction: true
}

const changeSetting = (settingToChange) => {
    if(setting[settingToChange]) {
         setting[settingToChange] = false
    } else setting[settingToChange] = true
    
    updateSettingsUI()
}