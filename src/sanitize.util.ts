import DOMPurify from 'dompurify';

export function sanitizeInputObject(input: any): any {
  const sanitized: any = {};
  for (const key in input) {
    if (typeof input[key] === 'string') {
      sanitized[key] = DOMPurify.sanitize(input[key], { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
    } else {
      sanitized[key] = input[key];
    }
  }
  return sanitized;
}
