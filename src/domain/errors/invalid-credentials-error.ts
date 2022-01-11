export class InvalidCredentialsError extends Error {
  constructor() {
    super('Credenciais Inválida')
    this.name = 'InvalidCredentialsError'
  }
}
