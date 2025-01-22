import { request } from 'http'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: '/about',
}
// if(request.nextUrl.pathname === '/about'){
//   return NextResponse.redirect(new URL('/shop', request.url))
// }
// // const response = NextResponse.next();
// // const themePreference = request.cookies.get("theme");
// // if(!themePreference){
// //   response.cookies.set("theme", "dark");
// // }
// // return response;
// // }

