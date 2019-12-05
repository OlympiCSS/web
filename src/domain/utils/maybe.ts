export class Maybe<T> {
  private constructor(private value: T | null) {}

  static from<T>(value: T | undefined | null): Maybe<T> {
    return this.isValid(value) ? new Maybe(value as T) : Maybe.none<T>()
  }

  static none<T>(): Maybe<T> {
    return new Maybe<T>(null)
  }

  private static isValid(value: unknown | null | undefined): boolean {
    return !!value || this.isNumberZero(value) || this.isFalse(value)
  }

  private static isNumberZero<R>(value: R): boolean {
    return typeof value === 'number' && value === 0
  }

  private static isFalse<R>(value: R): boolean {
    return typeof value === 'boolean' && !value
  }

  get(defaultValue: T): T {
    return this.value === null ? defaultValue : this.value
  }

  map<R>(f: (wrapped: T) => R): Maybe<R> {
    if (this.value === null) {
      return Maybe.none<R>()
    } else {
      return Maybe.from(f(this.value))
    }
  }

  flatMap<R>(f: (wrapped: T) => Maybe<R>): Maybe<R> {
    if (this.value === null) {
      return Maybe.none<R>()
    } else {
      return f(this.value)
    }
  }

  getOrThrow(error: Error): T {
    return this.value === null
      ? (() => {
          throw error
        })()
      : this.value
  }
}
