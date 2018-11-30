import { suite, test } from 'mocha-typescript'
import { Unit } from '@$'
import { expect } from 'chai'

@suite
class UnitTest extends Unit {
  @test
  'big is false with small number'(): void {
    expect(this.big(50)).to.false
  }

  @test
  'big is true with big number'(): void {
    expect(this.big(200)).to.true
  }

  /*
   @test
   'should test 15'(): void {
   expect(this.fizzbuzz(15)).to.equal('fizzbuzz')
   }
   */

  @test
  'should test 3'(): void {
    expect(this.fizzbuzz(3)).to.equal('fizz')
  }

  @test
  'should test 5'(): void {
    expect(this.fizzbuzz(5)).to.equal('buzz')
  }
}
