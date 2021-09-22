function macro(calories, program) {
    if (program == "loss") {
        var carbs = (calories * 0.3) / 4;
        var protein = (calories * 0.25) / 4;
        var fats = (calories * 0.35) / 9;
    }
    if (program == "gain") {
        var carbs = (calories * 0.5) / 4;
        var protein = (calories * 0.3) / 4;
        var fats = (calories * 0.2) / 9;
    }
    if (program == "maintain") {
        var carbs = (calories * 0.4) / 4;
        var protein = (calories * 0.3) / 4;
        var fats = (calories * 0.3) / 9;
    }
    return { carbs, protein, fats }
}

module.exports = macro;