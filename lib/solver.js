var Location = require('./location')

exports.findPath = (locations) => {
    return doFindPath(locations, 1, [])
}

function doFindPath(locations, locationId, path) {
    const location = locations[locationId - 1]
    path.push(location.id)

    const neighbours = location.neighbours
    if (neighbours.length > 0) {
        //for (var i = 0)
        const next = pickOneFrom(location.neighbours)
        if (path.indexOf(next) == -1) {
            return doFindPath(locations, next, path)
        }
    }
    return path
}

function pickOneFrom(values) {
    if (values && values.length > 0) {
        return values[values.length - 1]
    }
}