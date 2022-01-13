import { AxiosHttpClient } from './axios-http-client'
import faker from 'faker'

import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  test('should call axios with correct URL and verb', async () => {
    const urlHaveBeenCalled = faker.internet.url()
    const sut = makeSut()
    sut.post({ url: urlHaveBeenCalled })
    expect(mockedAxios.post).toHaveBeenCalledWith(urlHaveBeenCalled)
  })
})
