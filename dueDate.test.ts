import { describe, it, expect } from 'vitest'
import { isLate } from './dueDate'

describe('isLate', () => {
  it('should return true when submission is after due date', () => {
    expect(isLate(new Date('2026-11-05'), new Date('2026-11-04'))).toBe(true)
  })

  it('should return false when submission is before due date', () => {
    expect(isLate(new Date('2026-11-03'), new Date('2026-11-04'))).toBe(false)
  })

  it('should return false when submission is on due date', () => {
    expect(isLate(new Date('2026-11-04'), new Date('2026-11-04'))).toBe(false)
  })
})