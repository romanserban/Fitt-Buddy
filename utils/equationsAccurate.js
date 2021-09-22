

function physicalActivityAccurate(sleepH, job, jobLevel, light, moderate, sport, days) {
    if (sleepH + job + light + moderate + sport != 24) {
        var newLight = light + (24 - (sleepH + job + light + moderate + sport))
    }
    var sum = 0;
    sum = sleepH * 1;
    sum = sum + job * jobLevel;
    sum = sum + newLight * 1.8;
    sum = sum + moderate * 2.8;
    if (days == 0) {
        return sum;
    }
    else {
        sum = sum + sport / days;
        return sum
    }
}

function metropolitan(height, age, g) {
    var bmr = 0;
    if (g == 'male') {
        bmr = 50 + 0.75 * (height - 150) + (age - 20) / 4;
    }
    else {
        bmr = 50 + 0.75 * (height - 150) + (age - 20) / 4 * 0.9;
    }
    return bmr;
}

function mifftin(height, age, g) {
    var ree = 0;
    ree = 9.99 * metropolitan(height, age, g) + 6.25 * height - 4.92 * age - 161;
    if (g == "male") {
        ree += 166;
    }
    return parseInt(ree);
}

function tee(height, age, g, sleepH, job, jobLevel, light, moderate, sport, days) {
    const ree = parseInt(mifftin(height, age, g) / 24);
    const pa = physicalActivityAccurate(sleepH, job, jobLevel, light, moderate, sport, days)
    var total = parseInt(ree * pa);
    const tef = total * 10 / 100;
    total += tef;
    return parseInt(total);
}

module.exports = tee;


