import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Create a shared rate limiter instance
export const rateLimiter = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '60 s'), // Changed to 5 requests per minute
  analytics: true,
  prefix: 'sendgrid_ratelimit',
}); 