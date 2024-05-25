import { test } from 'vitest'
import { events } from './demo_events'
import { cleanEvents } from '../utils/dates'

test('dates', () => {
  const cleaned = cleanEvents(events.slice(0, 4))
  console.log(cleaned)
})
