function procent(total, part) {
    const x = parseInt(part) * 100 / parseInt(total)
    return parseInt(x);
}



module.exports = procent;