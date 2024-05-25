import { google } from 'googleapis'
import { NextResponse } from 'next/server'
import { cleanEvents } from '@/app/utils/dates'

export const dynamic = 'force-dynamic'

export type date = string

export async function GET(request: Request): Promise<NextResponse<date[] | { error: string }>> {
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
    console.log(error)
    return NextResponse.json({ error: 'Failed to fetch events from server' }, { status: 500 })
  }
}
