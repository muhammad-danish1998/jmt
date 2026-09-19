// In-memory sliding window rate limiter
const trackers = new Map();

// Periodic cleanup of expired rate limit entries (every 10 minutes)
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of trackers.entries()) {
      if (now > record.resetTime) {
        trackers.delete(key);
      }
    }
  }, 10 * 60 * 1000);
}

/**
 * Check if a request exceeds rate limits.
 * @param {string} identifier - Unique client identifier (e.g. IP address or key)
 * @param {number} limit - Maximum allowed requests in the window
 * @param {number} windowMs - Duration of the window in milliseconds
 * @returns {{ success: boolean, remaining: number, resetTime: number }}
 */
export function checkRateLimit(identifier, limit = 10, windowMs = 60 * 1000) {
  const now = Date.now();
  const record = trackers.get(identifier);

  if (!record || now > record.resetTime) {
    trackers.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true, remaining: limit - 1, resetTime: now + windowMs };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0, resetTime: record.resetTime };
  }

  record.count += 1;
  return { success: true, remaining: limit - record.count, resetTime: record.resetTime };
}

/**
 * Extract client IP from Next.js request headers
 */
export function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  return '127.0.0.1';
}
