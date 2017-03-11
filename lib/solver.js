var Location = require('./location')

exports.findPath = (locations) => {
    return doFindPath(locations, 1, [])
}

function doFindPath(locations, locationId, path) {
    const location = locations[locationId - 1]
    path.push(location.id)

    const neighbours = location.neighbours
    while (neighbours.length > 0) {
        var next = pickOneFrom(neighbours)
        if (path.indexOf(next) == -1) {
            return doFindPath(locations, next, path)
        }
        const indexOfNext = neighbours.indexOf(next)
        neighbours.splice(indexOfNext, 1)
    }
    return path
}

function pickOneFrom(values) {
    if (values && values.length > 0) {
        return values[values.length - 1]
    }
}