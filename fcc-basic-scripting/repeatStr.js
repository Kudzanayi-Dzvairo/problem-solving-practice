function repeatStringNumTimes(str, num) {
    // repeat after me
    let newStr = ''

    while (num > 0) {
        newStr += str
        num--
    }
    console.log(newStr)
    return newStr
}

repeatStringNumTimes('abc', 3)
