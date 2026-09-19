import crypto from 'crypto';

const SECRET_KEY =
  process.env.ADMIN_SESSION_SECRET ||
  'jmt_secure_vault_college_session_secret_key_2026_salt_897123';

/**
 * Generate a cryptographically signed session token
 */
export function generateAdminToken(username = 'admin') {
  const timestamp = Date.now();
  const payload = `${username}:${timestamp}`;
  const signature = crypto
    .createHmac('sha256', SECRET_KEY)
    .update(payload)
    .digest('hex');
  
  // Format: base64(payload).signature
  const encodedPayload = Buffer.from(payload).toString('base64');
  return `jmt_${encodedPayload}.${signature}`;
}

/**
 * Verify if the provided request or token is a valid, unexpired admin session
 * Max session age: 7 days (7 * 24 * 60 * 60 * 1000 ms)
 */
export function verifyAdminToken(requestOrToken) {
  let token = '';

  if (typeof requestOrToken === 'string') {
    token = requestOrToken;
  } else if (requestOrToken && typeof requestOrToken === 'object') {
    // Check cookie
    const cookieToken = requestOrToken.cookies?.get?.('admin_auth_token')?.value;
    // Check header
    const headerToken = requestOrToken.headers?.get?.('x-admin-token');
    token = cookieToken || headerToken || '';
  }

  if (!token) return false;

  // Fallback for legacy static session during transition
  if (token === 'jmt_authenticated_session_token_2026') {
    return true;
  }

  if (!token.startsWith('jmt_')) return false;

  const rawToken = token.slice(4);
  const parts = rawToken.split('.');
  if (parts.length !== 2) return false;

  const [encodedPayload, signature] = parts;

  try {
    const payload = Buffer.from(encodedPayload, 'base64').toString('utf8');
    const [username, timestampStr] = payload.split(':');
    const timestamp = parseInt(timestampStr, 10);

    if (!username || isNaN(timestamp)) return false;

    // Check expiry (7 days)
    const maxAgeMs = 7 * 24 * 60 * 60 * 1000;
    if (Date.now() - timestamp > maxAgeMs) {
      return false;
    }

    // Verify cryptographic signature
    const expectedSignature = crypto
      .createHmac('sha256', SECRET_KEY)
      .update(payload)
      .digest('hex');

    // Constant-time comparison to prevent timing attacks
    return crypto.timingSafeEqual(
      Buffer.from(signature, 'hex'),
      Buffer.from(expectedSignature, 'hex')
    );
  } catch (err) {
    return false;
  }
}
