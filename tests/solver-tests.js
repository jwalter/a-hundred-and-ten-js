var chai = require('chai')
var expect = chai.expect
var Solver = require('../lib/solver')
var Location = require('../lib/location')

describe('Solver', function () {
    it('run() should return 1 when 1 is the only location', function() {
        const locations = [new Location(1, [])]
        expect(Solver.findPath(locations)).to.eql([1])
    })
    it('run() should return 1,2 when 1 has 2 as only neighbour', function() {
        const locations = [
            new Location(1, [2]), 
            new Location(2, [1])
            ]
        expect(Solver.findPath(locations)).to.eql([1, 2])
    })
    
    it('run() should return 1 and 2 or 3 when 1 has 2 and 3 as neighbours but 2 and 3 are not neighbours', function() {
        const locations = [
            new Location(1, [2, 3]),
            new Location(2, [1]),
            new Location(3, [1])]
        expect(Solver.findPath(locations)).to.have.lengthOf(2)
    })
    
    it('run() should return 1 and 2 and 3 when 1 is neighbour of 2 and 2 is neighbour of 3', function() {
        const locations = [new Location(1, [2]), new Location(2, [1, 3]), new Location(3, [2])]
        expect(Solver.findPath(locations)).is.eql([1, 2, 3])
    })
    
    it('run() should return 1 and 2 and 3 when 1 is neighbour of 2 and 2 is neighbour of 3, disregarding order of neighbours', function() {
        const locations = [new Location(1, [2]), new Location(2, [3, 1]), new Location(3, [2])]
        expect(Solver.findPath(locations)).is.eql([1, 2, 3])
    })
})
