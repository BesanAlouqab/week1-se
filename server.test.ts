import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import app from './src/server'

let server: ReturnType<typeof app.listen>
let baseUrl: string

beforeAll(async () => {
  await new Promise<void>((resolve) => {
    server = app.listen(0, resolve)
  })

  const address = server.address()

  if (address && typeof address !== 'string') {
    baseUrl = `http://localhost:${address.port}`
  }
})

afterAll(async () => {
  await new Promise<void>((resolve, reject) => {
    server.close((error) => {
      if (error) reject(error)
      else resolve()
    })
  })
})

describe('API Routes', () => {
  it('GET /courses should return the courses', async () => {
    const response = await fetch(`${baseUrl}/courses`)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toHaveLength(3)
    expect(data[0].name).toBe('Java')
  })

  it('POST /enrolments should create an enrolment', async () => {
    const response = await fetch(`${baseUrl}/enrolments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentId: 1, courseId: 2 }),
    })

    const data = await response.json()

    expect(response.status).toBe(201)
    expect(data.message).toBe('Enrolment created successfully')
  })

  it('POST /enrolments should reject invalid data', async () => {
    const response = await fetch(`${baseUrl}/enrolments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentId: -1, courseId: 2 }),
    })

    expect(response.status).toBe(400)
  })
})