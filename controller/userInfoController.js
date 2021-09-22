const UserInfo = require('../model/userInfo');
// const harrisonB = require('../utils/equations');
const fastFinal = require('../utils/equations');
const getAge = require('../utils/getAge');
const macro = require('../utils/macronutrients');
const tee = require('../utils/equationsAccurate')
const effortLevel = require('../utils/checkEffortLevel');
// const physicalActivityAccurate = require('../utils/equationsAccurate');
module.exports.renderUserInfo = async (req, res) => {
    res.render('informations/userInfo.ejs')
}

module.exports.addUserInfo = async (req, res) => {
    const newInfo = new UserInfo(req.body.moreInfo)
    console.log(res.locals.currentUser)
    newInfo.userId = res.locals.currentUser;
    console.log(newInfo);
    await newInfo.save();
    req.flash('success', 'Well done!!');
    res.redirect('/physicalActivity');
}

module.exports.renderPhysicalActivity = async (req, res) => {
    res.render('informations/physicalActivity.ejs')
}


module.exports.addPhysicalActivity = async (req, res) => {
    const { fastOrAccurate, program, sleep, work, effortWork, light, moderate, sport, sportDays } = req.body;
    const { lifestyle } = req.body;
    const userInfo = await UserInfo.findOne({ userId: res.locals.currentUser });
    const age = getAge(userInfo.bday);
    if (fastOrAccurate == "first") {
        const lvl = effortLevel(effortWork, userInfo.gender)
        var c = tee(userInfo.height, age, userInfo.gender, parseInt(sleep), parseInt(work), lvl, parseInt(light), parseInt(moderate), parseInt(sport), parseInt(sportDays));
        if (program == "gain") {
            c = c + 200;
        } if (program == "loss") {
            c = parseInt(c - (c * 20 / 100));
        }
    }

    else {


        const kals = fastFinal(userInfo.weight, userInfo.height, age, userInfo.gender, lifestyle);
        var c = parseInt(kals);
        if (program == "gain") {
            c = c + 200;
        } if (program == "loss") {
            c = parseInt(c - (c * 20 / 100));
        }

    }

    const macros = macro(c, program);
    userInfo.calories = c
    userInfo.carbs = parseInt(macros.carbs);
    userInfo.fats = parseInt(macros.fats);
    userInfo.protein = parseInt(macros.protein);
    await userInfo.save();
    console.log(userInfo)
    res.redirect('/tracking');
}