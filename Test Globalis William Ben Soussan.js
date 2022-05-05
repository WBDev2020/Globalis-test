function foo(array) {
    return array
    // Avoid tricky case [[15,20], [21,22], [20,21]] and sort result array
    .sort((a, b) => a[0] - b[0])
    .reduce(
        (acc, curr) => {
            // Check if there is an intersection in the acc array
            const idxFind = acc.findIndex(el => curr.some(currEl => currEl >= el[0] && currEl <= el[1]))
            // If there is an intersection in the array update with the new value
            if (idxFind !== -1) acc[idxFind] = [Math.min(acc[idxFind][0], curr[0]), Math.max(acc[idxFind][1], curr[1])]
            // Else just add the new element in the array
            else acc.push(curr)
            return acc
        }, []
    )
}

console.log(foo([[0, 3], [6, 10]]))
console.log(foo([[0, 5], [3, 10]]))
console.log(foo([[0, 5], [2, 4]]))
console.log(foo([[7, 8], [3, 6], [2, 4]]))
console.log(foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]]))
