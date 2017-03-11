var chai = require('chai')
var expect = chai.expect
var Solver = require('../lib/solver')

describe('Solver', function () {
    it('run() should return 1 when 1 is the only location', function() {
        const locations = [1]
        expect(Solver.run()).to.equal(1)
    })
})