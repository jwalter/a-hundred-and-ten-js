var chai = require('chai')
var expect = chai.expect
var Solver = require('../lib/solver')

describe('Solver', function () {
    it('run() should return HelloWorld', function() {
        expect(Solver.run()).to.be.a('number')
    })
})