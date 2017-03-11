exports.run = (locations) => {
    const head = locations[0][0]
    const tail = locations[0].slice(1)
    const path = [head]
    if (tail.length > 0) {
        path.push(randomFrom(tail))
    }
    return path
}

function randomFrom(values) {
    if (values && values.length > 0) {
        return values[0]
    }
}