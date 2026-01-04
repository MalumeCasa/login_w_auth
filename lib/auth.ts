import { cookies } from 'next/headers';
import { jwtVerify, SignJWT } from 'jose';
import { query } from './db';
import { generateToken } from './utils';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  is_verified: boolean;
}

export async function createSession(userId: string, deviceInfo?: string, ipAddress?: string) {
  const sessionToken = generateToken(32);
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7); // 7 days expiry
  
  await query(
    `INSERT INTO user_sessions (user_id, session_token, expires_at, device_info, ip_address)
     VALUES ($1, $2, $3, $4, $5)`,
    [userId, sessionToken, expiresAt, deviceInfo, ipAddress]
  );
  
  const token = await new SignJWT({ userId, sessionToken })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(JWT_SECRET);
    
  return { token, sessionToken };
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as { userId: string; sessionToken: string };
  } catch {
    return null;
  }
}

export async function getCurrentUser() {
  const cookieStore = cookies();
  const token = cookieStore.get('auth-token')?.value;
  
  if (!token) return null;
  
  const payload = await verifyToken(token);
  if (!payload) return null;
  
  // Verify session exists and is valid
  const result = await query(
    `SELECT u.* FROM users u
     JOIN user_sessions s ON u.id = s.user_id
     WHERE s.session_token = $1 AND s.expires_at > NOW()`,
    [payload.sessionToken]
  );
  
  if (result.rows.length === 0) return null;
  
  return result.rows[0] as User;
}

export async function logout() {
  const cookieStore = cookies();
  const token = cookieStore.get('auth-token')?.value;
  
  if (token) {
    const payload = await verifyToken(token);
    if (payload) {
      await query(
        'DELETE FROM user_sessions WHERE session_token = $1',
        [payload.sessionToken]
      );
    }
  }
  
  cookieStore.set('auth-token', '', {
    expires: new Date(0),
    path: '/',
  });
}