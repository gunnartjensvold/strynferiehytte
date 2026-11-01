import { google, type calendar_v3 } from 'googleapis'
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

    // Google returns the oldest events first, a page at a time, so read every page to get the newest bookings
    const events: calendar_v3.Schema$Event[] = []
    let pageToken: string | undefined
    do {
      const response = await calendar.events.list({
        calendarId: 'ytreeide.feriehus@gmail.com',
        singleEvents: true,
        orderBy: 'startTime',
        maxResults: 2500,
        pageToken
      })
      events.push(...(response.data.items ?? []))
      pageToken = response.data.nextPageToken ?? undefined
    } while (pageToken)

    const dates = cleanEvents(events)

    return NextResponse.json(dates)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to fetch events from server' }, { status: 500 })
  }
}
