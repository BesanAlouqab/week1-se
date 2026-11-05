import { describe, it, expect } from 'vitest'
import { calculateGrade } from './grade'

describe('calculateGrade', () => {
  it('should return A for a score of 90%', () => {
    expect(calculateGrade(90, 100)).toEqual({
      percentage: 90,
      letter: 'A',
    })
  })

  it('should return F for a score below 60%', () => {
    expect(calculateGrade(50, 100)).toEqual({
      percentage: 50,
      letter: 'F',
    })
  })

  it('should return B for a score of 85%', () => {
    expect(calculateGrade(85, 100)).toEqual({
      percentage: 85,
      letter: 'B',
    })
  })
})