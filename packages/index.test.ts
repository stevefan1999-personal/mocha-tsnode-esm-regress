import { suite, test } from 'mocha-typescript'
import { Unit } from '@$'
import { assert } from 'chai'

function doWork(): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, 1000))
}

before('start server', async () => {
  // Run express?
  console.log('start server')
  await doWork()
  console.log('server started')
})
after('kill server', async () => {
  // Kill the server.
  console.log('kill server')
  await doWork()
  console.log('server killed')
})

describe('vanilla bdd', () => {
  it('test', async () => {
    await console.log('  vanilla bdd test')
  })
})

suite('vanilla tdd', () => {
  test('test', async () => {
    await console.log('  vanilla tdd test')
  })
})

@suite
class UnitTest extends Unit {
  @test
  'big is false with small number'(): void {
    console.log('  UnitTest big is false with small number')
    assert(!this.big(50))
  }

  @test
  'big is true with big number'(): void {
    console.log('  UnitTest big is true with big number')
    assert(this.big(200))
  }
}

suite('nested class suite', () => {
  @suite
  class NestedTest {
    @test
    'a test'(): void {
      console.log('  nested class suite NestedTest a test')
    }
  }
})