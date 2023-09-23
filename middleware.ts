import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/api/entries/')) {
    const id = req.nextUrl.pathname.replace('/api/entries/', '')
    const checkMongoIdRegExp = /^[0-9a-fA-F]{24}$/

    if (!checkMongoIdRegExp.test(id)) {
      const url = req.nextUrl.clone()
      url.pathname = '/api/bad-request'
      url.searchParams.set('message', 'Invalid ID')
      return NextResponse.rewrite(url)
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    // '/api/:path',
    '/api/entries/:path*'
  ]
}
