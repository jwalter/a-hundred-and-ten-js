var chai = require('chai')
var expect = chai.expect
var Solver = require('../lib/solver')

describe('Solver', function () {
    it('run() should return 1 when 1 is the only location', function() {
        const locations = [[1]]
        expect(Solver.run(locations)).to.eql([1])
    }),
    it('run() should return 1,2 when 1 has 2 as only neighbour', function() {
        const locations = [[1, 2]]
        expect(Solver.run(locations)).to.eql([1, 2])
    })
})