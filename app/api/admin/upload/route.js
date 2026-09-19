import { NextResponse } from 'next/server';
import { verifyAdminToken } from '../../../../src/lib/auth';

const ALLOWED_MIME_TYPES = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/avif',
]);

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export async function POST(request) {
  try {
    if (!verifyAdminToken(request)) {
      return NextResponse.json({ success: false, error: 'Unauthorized.' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || typeof file === 'string') {
      return NextResponse.json({ success: false, error: 'No file provided.' }, { status: 400 });
    }

    // 1. File size check
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, error: 'File size exceeds maximum limit of 5MB.' },
        { status: 400 }
      );
    }

    // 2. MIME type check
    const mimeType = (file.type || '').toLowerCase();
    if (!ALLOWED_MIME_TYPES.has(mimeType)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid file type. Only JPEG, PNG, WebP, GIF, and AVIF images are permitted.',
        },
        { status: 400 }
      );
    }

    // 3. File extension validation
    const fileName = (file.name || '').toLowerCase();
    const allowedExts = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'];
    const hasValidExt = allowedExts.some((ext) => fileName.endsWith(ext));

    if (!hasValidExt) {
      return NextResponse.json(
        { success: false, error: 'Invalid file extension.' },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const base64Image = `data:${mimeType};base64,${buffer.toString('base64')}`;

    return NextResponse.json({
      success: true,
      url: base64Image,
      fileName: file.name,
      fileSize: file.size,
    });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to process uploaded image.' },
      { status: 500 }
    );
  }
}
