(function () {
    const calories = document.getElementById("caloriesProgressBar").textContent;
    document.getElementById("caloriesProgressBar").style.width = calories;
    const carbs = document.getElementById("carbsProgressBar").textContent;
    document.getElementById("carbsProgressBar").style.width = carbs;
    const fats = document.getElementById("fatsProgressBar").textContent;
    document.getElementById("fatsProgressBar").style.width = fats;
    const protein = document.getElementById("proteinProgressBar").textContent;
    document.getElementById("proteinProgressBar").style.width = protein;
})();