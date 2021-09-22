

function harrisonB(weight, height, age, g) {
    if (g == "male") {
        var a = 13.397 * weight;
        var b = 4.799 * height;
        var c = 5.677 * age;
        var kals = 88.362 + a + b - c;
        return kals;
    } else {
        var a = 9.247 * weight;
        var b = 3.098 * height;
        var c = 4.330 * age;
        var kals = 447.593 + a + b - c;
        return kals;
    }
}

function physicalA(weight, height, age, g, type) {

    const hb = harrisonB(weight, height, age, g);
    if (g == "male") {
        if (type == 'sedentary') {
            const kals = hb + (hb * 33 / 100);
            return kals;
        }
        if (type == 'light') {
            const kals = hb + (hb * 60 / 100);
            return kals;
        }
        if (type == 'moderate') {
            const kals = hb + (hb * 73 / 100);
            return kals;
        }
        if (type == 'intense') {
            const kals = hb + (hb * 105 / 100);
            return kals;
        }
        if (type == 'exceptional') {
            const kals = hb + (hb * 137 / 100);
            return kals;
        }

    } else {
        if (type == 'sedentary') {
            const kals = hb + (hb * 30 / 100);
            return kals;
        }
        if (type == 'light') {
            const kals = hb + (hb * 50 / 100);
            return kals;
        }
        if (type == 'moderate') {
            const kals = hb + (hb * 60 / 100);
            return kals;
        }
        if (type == 'intense') {
            const kals = hb + (hb * 90 / 100);
            return kals;
        }
        if (type == 'exceptional') {
            const kals = hb + (hb * 120 / 100);
            return kals;
        }

    }

}



function fastFinal(weight, height, age, g, type) {
    var kals = physicalA(weight, height, age, g, type);
    var ten = kals * 10 / 100;
    kals = kals + ten;
    return kals;
}


function sumCal(meal) {
    var sum = 0;
    for (let m of meal) {
        sum += m.calories;
    }
    return parseInt(sum);
}



module.exports = fastFinal;

