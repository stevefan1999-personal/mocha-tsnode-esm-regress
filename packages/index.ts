export class Unit {
  protected big(n: number): boolean {
    return n > 100
  }

  // a fizzbuzz function
  protected fizzbuzz(n: number): string {
    // makes fizzbuzz
    return (n % 3 == 0 ? 'fizz' : '') + (n % 5 == 0 ? 'buzz' : '')
  }
}
