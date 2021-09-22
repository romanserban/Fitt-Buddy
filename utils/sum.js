function totalSum(user, today) {
    var sumCalories = 0;
    var sumCarbs = 0;
    var sumFats = 0;
    var sumProteins = 0;
    for (let m of user.meal) {
        if (today.getDate() == m.day.getDate() && today.getMonth() == m.day.getMonth() && today.getFullYear() == m.day.getFullYear()) {
            sumCalories += m.calories;
            sumCarbs += m.carbs;
            sumFats += m.fats;
            sumProteins += m.protein;
        }
    }
    return {
        sumCalories,
        sumCarbs,
        sumFats,
        sumProteins
    }
}


module.exports = totalSum;