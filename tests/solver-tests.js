var chai = require('chai')
var expect = chai.expect
var Solver = require('../lib/solver')

describe('Solver', function () {
    it('run() should return 1 when 1 is the only location', function() {
        const locations = [[1]]
        expect(Solver.run(locations)).to.eql([1])
    }),
    it('run() should return 1,2 when 1 has 2 as only neighbour', function() {
        const locations = [[1, 2], [2, 1]]
        expect(Solver.run(locations)).to.eql([1, 2])
    })
    it('run() should return 1 and 2 or 3 when 1 has 2 and 3 as neighbours but 2 and 3 are not neighbours', function() {
        const locations = [[1, 2, 3], [2, 1], [3, 1]]
        expect(Solver.run(locations)).to.have.lengthOf(2)
    })
})