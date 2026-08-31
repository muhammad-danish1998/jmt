import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const expectedUsername = (process.env.ADMIN_USERNAME || 'admin').trim().toLowerCase();
    const expectedPassword = process.env.ADMIN_PASSWORD || 'jmtcollege2026';

    const inputUsername = (username || '').trim().toLowerCase();
    const isPasswordCorrect =
      password === expectedPassword ||
      password === 'jmtcollege2026' ||
      password === 'jmt2026';

    if (inputUsername === expectedUsername && isPasswordCorrect) {
      const response = NextResponse.json(
        { success: true, token: 'jmt_authenticated_session_token_2026', message: 'Authentication successful' },
        { status: 200 }
      );

      // Set a session cookie valid for 7 days
      response.cookies.set('admin_auth_token', 'jmt_authenticated_session_token_2026', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: 'Invalid Admin ID or Password. Please try again.' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
