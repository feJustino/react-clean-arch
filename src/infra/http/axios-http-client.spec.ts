import { AxiosHttpClient } from './axios-http-client'
import faker from 'faker'

import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient', () => {
  test('should call axios with correct URL', async () => {
    const urlHaveBeenCalled = faker.internet.url()
    const sut = new AxiosHttpClient()
    sut.post({ url: urlHaveBeenCalled })
    expect(mockedAxios).toHaveBeenCalledWith(urlHaveBeenCalled)
  })
})
