function effortLevel(effort, g) {
    if (g == "male") {
        if (effort == "low") {
            return 1.7
        }
        if (effort == "medium") {
            return 2.7
        }
        if (effort == "high") {
            return 3.8
        }
        if (effort == "veryHigh") {
            return 4.5
        }
    } else {
        if (effort == "low") {
            return 1.6
        }
        if (effort == "medium") {
            return 2.1
        }
        if (effort == "high") {
            return 2.7
        }
        if (effort == "veryHigh") {
            return 4
        }
    }
}

module.exports = effortLevel;