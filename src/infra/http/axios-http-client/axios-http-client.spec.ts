import { AxiosHttpClient } from './axios-http-client'
import { mockPostRequest } from '@/data/test/mock-http-post'
import { mockAxios } from '@/infra/http/test'
import axios from 'axios'

jest.mock('axios')
type SutType = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}
const makeSut = (): SutType => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios,
  }
}

describe('AxiosHttpClient', () => {
  test('should call axios with correct Values', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('should return correct status code and body', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
