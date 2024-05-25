// app/api/fetch-events/route.ts
import { google } from 'googleapis'
import { NextResponse } from 'next/server'
import { cleanEvents } from '../../utils/dates'

export type date = string

export async function GET(): Promise<NextResponse> {
  try {
    // Load service account credentials
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!)

    const scopes = ['https://www.googleapis.com/auth/calendar.readonly']
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes
    })
    const calendar = google.calendar({ version: 'v3', auth })

    const response = await calendar.events.list({
      calendarId: 'ytreeide.feriehus@gmail.com',
      singleEvents: true,
      orderBy: 'startTime'
    })

    const events = response.data.items

    const dates = events ? cleanEvents(events) : []

    return NextResponse.json(dates)
  } catch (error) {
    console.error('Error fetching calendar events:', error)
    return NextResponse.json({ error: 'Error fetching calendar events' }, { status: 500 })
  }
}
