import { NextResponse } from 'next/server';

export const config = {
    matcher: ['/news/:path*', '/api/:path*'],
};

export function middleware(request) {
    console.log('Incoming request:', request.method, request.url);

    // ตัวอย่าง redirect (กรณีผู้ใช้ไม่ได้ login)
    // if (!request.cookies.get('auth')) {
    //   return NextResponse.redirect(new URL('/login', request.url));
    // }

    return NextResponse.next(); // อนุญาตให้ผ่านไปยัง route ปลายทาง
}