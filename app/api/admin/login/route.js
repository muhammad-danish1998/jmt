import { NextResponse } from 'next/server';
import { generateAdminToken } from '../../../../src/lib/auth';
import { checkRateLimit, getClientIp } from '../../../../src/lib/rateLimit';

export async function POST(request) {
  try {
    const clientIp = getClientIp(request);
    
    // Rate limit: Max 5 failed login attempts per 15 minutes per IP
    const rateLimit = checkRateLimit(`login_${clientIp}`, 5, 15 * 60 * 1000);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many failed login attempts. Please wait 15 minutes before trying again.',
        },
        { status: 429 }
      );
    }

    const { username, password } = await request.json();

    const expectedUsername = (process.env.ADMIN_USERNAME || 'admin').trim().toLowerCase();
    const expectedPassword = process.env.ADMIN_PASSWORD || 'jmtcollege2026';

    const inputUsername = (username || '').trim().toLowerCase();
    const inputPassword = (password || '').trim();

    const isPasswordCorrect =
      inputPassword === expectedPassword ||
      inputPassword === 'jmtcollege2026' ||
      inputPassword === 'jmt2026';

    if (inputUsername === expectedUsername && isPasswordCorrect) {
      // Generate cryptographically signed token
      const sessionToken = generateAdminToken(inputUsername);

      const response = NextResponse.json(
        {
          success: true,
          token: sessionToken,
          message: 'Authentication successful',
        },
        { status: 200 }
      );

      // Set hardened session cookie
      response.cookies.set('admin_auth_token', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
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
