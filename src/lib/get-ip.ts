import { headers } from 'next/headers';

export function getClientIP(): string {
  const headersList = headers();
  
  // Try different headers where IP might be present
  const ip = 
    headersList.get('x-real-ip') || 
    headersList.get('x-forwarded-for')?.split(',')[0] || 
    headersList.get('cf-connecting-ip') || // Cloudflare
    'anonymous';

  return ip;
} 