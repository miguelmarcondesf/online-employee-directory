import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import Page from '../page'
import { describe } from 'node:test'

jest.mock('../../../actions/getEmployee', () => {
  return {
    __esModule: true,
    default: async () => {
      return {
        data: {
          id: 1,
          first_name: 'John',
          last_name: 'Doe',
          email: 'john@doe.com',
          avatar: 'https://reqres.in/img/faces/1-image.jpg'
        }
      }
    }
  }
})

const setupPage = () => {
  const params = { id: '1' }

  render(<Page params={params} />)
}

describe('Page', () => {
  describe('when Employee fetch is successful', () => {
    it('renders Employee details', async () => {
      setupPage()

      await waitFor(() => {
        expect(screen.getByText('Employee')).toBeInTheDocument()
        expect(screen.getByText('John Doe')).toBeInTheDocument()
      })
    })
  })
})
