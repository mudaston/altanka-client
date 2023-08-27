import { NextRequest, NextResponse } from 'next/server'
import { userAgent } from 'next/server'

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: '/',
}

export function middleware(req: NextRequest) {
  const {
    device: { type },
  } = userAgent(req)
  const response = NextResponse.next()

  if (type === 'mobile' || type === 'tablet') {
    response.headers.set('mobile', 'true')
  }

  return response
}
