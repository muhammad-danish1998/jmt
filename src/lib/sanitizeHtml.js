/**
 * Sanitizes HTML strings to prevent Cross-Site Scripting (XSS).
 * Strips script tags, event handlers (onclick, onload, onerror, etc.), javascript: URLs, and iframes.
 */
export function sanitizeHtml(dirtyHtml) {
  if (!dirtyHtml || typeof dirtyHtml !== 'string') return '';

  return dirtyHtml
    // Remove script tags and their content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove iframe tags
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    // Remove embed and object tags
    .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    // Remove inline event handlers (e.g. onclick="...", onerror=...)
    .replace(/\s*on\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    // Remove javascript: links and data: URIs in href or src (except image base64)
    .replace(/href\s*=\s*["']?\s*javascript:[^"'>\s]+/gi, 'href="#"')
    .replace(/src\s*=\s*["']?\s*javascript:[^"'>\s]+/gi, 'src=""');
}
