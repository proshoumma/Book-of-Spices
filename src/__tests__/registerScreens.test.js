/**
 * test for registerScreen function
 */
import registerScreens from '../registerScreens'
import routes from '../routes'

describe('registerScreens', () => {
  it('should call registerComponent function on every routes object', () => {
    // mock the registerComponent function
    const mockRegisterComponent = jest.fn()

    // call the function with routes
    registerScreens(mockRegisterComponent, routes)

    // function should be called routes.length times
    expect(mockRegisterComponent.mock.calls.length).toBe(routes.length)
  })
})