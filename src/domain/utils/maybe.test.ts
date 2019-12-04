import { Maybe } from './maybe'

describe('Maybe', () => {
  it('should handle an undefined value', () => {
    const maybe = Maybe.from<string>(undefined)
    expect(maybe.get('test')).toBe('test')
  })

  it('should a false value', () => {
    const maybe = Maybe.from<boolean>(false)
    expect(maybe.get(true)).toBe(false)
  })

  it('should handle a string value', () => {
    const maybe = Maybe.from('test')
    expect(maybe.get('')).toBe('test')
  })

  it('should handle an empty string value', () => {
    const maybe = Maybe.from('')
    expect(maybe.get('test')).toBe('test')
  })

  it('should handle a null value', () => {
    const maybe = Maybe.from<string>(null)
    expect(maybe.get('test')).toBe('test')
  })

  it('should handle a numeric value', () => {
    const maybe = Maybe.from(42)
    expect(maybe.get(0)).toBe(42)
  })

  it('should handle the zero value as valid', () => {
    const maybe = Maybe.from(0)
    expect(maybe.get(1)).toBe(0)
  })

  it('should handle none value', () => {
    const maybe = Maybe.none()
    expect(maybe.get('test')).toBe('test')
  })

  it('should get or throw', () => {
    const maybe = Maybe.none()
    expect(() => {
      maybe.getOrThrow(new Error('foo'))
    }).toThrowError('foo')
  })

  it('should be able to map existing values', () => {
    const maybeMap = Maybe.from({ a: 'a' })
    expect(maybeMap.map(e => e.a).get('b')).toBe('a')
  })

  it('should be able to flat map existing values', () => {
    type Type = { foo: Maybe<{ bar: string }> }
    const maybeMap = Maybe.from<Type>({ foo: Maybe.from({ bar: 'qux' }) })
    expect(maybeMap.flatMap(x => x.foo).map(x => x.bar)).toEqual(Maybe.from('qux'))
  })

  it('should be able to flat map non existing values', () => {
    type Type = { foo: Maybe<{ bar: string }> }
    const maybeMap = Maybe.none<Type>()
    expect(maybeMap.flatMap(x => x.foo)).toEqual(Maybe.none())
  })
})
