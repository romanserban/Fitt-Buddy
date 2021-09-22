const UserInfo = require('../model/userInfo');
const User = require('../model/user');

const procent = require('../utils/procent');
const totalSum = require('../utils/sum');


module.exports.renterTraking = async (req, res) => {
    const userInfo = await UserInfo.findOne({ userId: res.locals.currentUser });
    const user = await User.findById(res.locals.currentUser).populate('meal');
    const today = new Date();
    const sum = totalSum(user, today);
    const calPro = procent(parseInt(userInfo.calories), sum.sumCalories);
    const carbsPro = procent(parseInt(userInfo.carbs), sum.sumCarbs);
    const fatsPro = procent(parseInt(userInfo.fats), sum.sumFats);
    const proteinPro = procent(parseInt(userInfo.protein), sum.sumProteins);
    res.render('trackingUser/tracking.ejs', { userInfo, user, calPro, carbsPro, fatsPro, proteinPro, today, sum })
}