function findLongestWordLength(str) {
    str = str.split(' ')
    let longest = 0
    str.forEach(word => {
        if (word.length > longest) {
            longest = word.length
        }
    })
    return longest
}
