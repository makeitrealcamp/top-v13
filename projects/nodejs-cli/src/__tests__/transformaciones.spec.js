const { duplicar } = require('../utils/transformaciones')

describe('Duplicar', () => {
  it('should return an array with the elements duplicated', () => {
    // Arrange
    const array = [2, 6]

    // Act
    const result = duplicar(array)

    // Assert
    expect(result).toEqual([4, 12])
    expect(result[0]).toBe(4)
    expect(result[1]).toBe(12)
  })

  it('should return a message if array is empty', () => {
    // Arrange
    const array = null

    // Act
    const result = duplicar(array)

    // Assert
    expect(result).toBe('No hay array')
  })
})
