import { NextResponse } from 'next/server';

function isAuthenticated(request) {
  const cookieToken = request.cookies.get('admin_auth_token')?.value;
  const headerToken = request.headers.get('x-admin-token');
  return (
    cookieToken === 'jmt_authenticated_session_token_2026' ||
    headerToken === 'jmt_authenticated_session_token_2026'
  );
}

export async function POST(request) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || typeof file === 'string') {
      return NextResponse.json({ success: false, error: 'No file provided.' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const base64Image = `data:${file.type || 'image/jpeg'};base64,${buffer.toString('base64')}`;

    return NextResponse.json({
      success: true,
      url: base64Image,
      fileName: file.name,
      fileSize: file.size,
    });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ success: false, error: 'Failed to process uploaded image.' }, { status: 500 });
  }
}
