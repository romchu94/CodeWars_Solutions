function solution(text, markers) {
    const lines = text.split('\n')
    const cleanedLines = lines.map(line => {
        let minIndex = line.length
        markers.forEach(marker => {
            const index = line.indexOf(marker)
            if (index !== -1 && index < minIndex) {
                minIndex = index
            }
        })
        return line.slice(0, minIndex).trimEnd()
    })
    return cleanedLines.join('\n')
}

console.log(solution(`apples, pears # and bananas
grapes
bananas !apples` , ['#', '!']))