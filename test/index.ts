import { expect } from 'chai'
import { transition, extendCurves } from '../src/index'

describe('transition', () => {
  it(`transition('linear', 0, 100, 3)`, () => {
    expect(transition('linear', 0, 100, 3)).to.deep.equal([0, 50, 100])
  })

  it(`transition('linear', [0], [100], 3)`, () => {
    expect(transition('linear', [0], [100], 3)).to.deep.equal([[0], [50], [100]])
  })

  it(`transition('linear', { a: 0 }, { a: 100 }, 3)`, () => {
    expect(transition('linear', { a: 0 }, { a: 100 }, 3)).to.deep.equal([
      { a: 0 },
      { a: 50 },
      { a: 100 },
    ])
  })

  it(`transition('linear', { a: [0] }, { a: [100] }, 3)`, () => {
    expect(transition('linear', { a: [0] }, { a: [100] }, 3)).to.deep.equal([
      { a: [100] },
      { a: [100] },
      { a: [100] },
    ])
  })

  it(`transition('linear', { a: [0] }, { a: [100] }, 3, true)`, () => {
    expect(transition('linear', { a: [0] }, { a: [100] }, 3, true)).to.deep.equal([
      { a: [0] },
      { a: [50] },
      { a: [100] },
    ])
  })
})

describe('extendCurves', () => {
  it(`transition('test', 0, 100, 3)`, () => {
    expect(() => {
      transition('test', 0, 100, 3)
    }).to.throw('Transition: Invalid ease curve of')
  })

  it(`extendCurves('test', [[[0.000, 1.000]],[[1.000, 0.000]]])`, () => {
    extendCurves('test', [[[0.0, 1.0]], [[1.0, 0.0]]])

    expect(transition('test', 0, 100, 3)).to.be.an('array')
  })
})
