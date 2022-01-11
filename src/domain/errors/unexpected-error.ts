export class UnexpectedError extends Error {
  constructor() {
    super('Aconteceu algo inesperado. Tente novamente mais tarde')
    this.name = 'UnexpectedError'
  }
}
