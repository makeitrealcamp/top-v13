const { duplicar } = require('../utils/transformaciones')

describe('Duplicar', () => {
  it('should return an array with the elements duplicated', () => {
    // Arrange
    const array = [2, 6]

    // Act
    const result = duplicar(array)

    // Assert
    expect(result[0]).toBe(4)
    expect(result[1]).toBe(12)
  })
})
