import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { hashPassword, generateToken, encrypt } from '@/lib/utils';
import { headers } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, firstName, lastName, phone } = body;
    const headersList = headers();
    const ip = headersList.get('x-forwarded-for') || 'unknown';

    // Validate input
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const passwordHash = await hashPassword(password);
    
    // Generate verification token
    const verificationToken = generateToken();
    
    // Encrypt sensitive data
    const encryptedFirstName = encrypt(firstName);
    const encryptedLastName = encrypt(lastName);
    const encryptedPhone = phone ? encrypt(phone) : null;

    // Create user
    const result = await query(
      `INSERT INTO users 
       (email, password_hash, first_name, last_name, phone, verification_token)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, email, created_at`,
      [
        email,
        passwordHash,
        encryptedFirstName,
        encryptedLastName,
        encryptedPhone,
        verificationToken
      ]
    );

    // Log registration attempt
    await query(
      `INSERT INTO login_attempts 
       (email, ip_address, success)
       VALUES ($1, $2, $3)`,
      [email, ip, true]
    );

    // TODO: Send verification email here

    return NextResponse.json({
      success: true,
      message: 'Registration successful. Please check your email for verification.',
      userId: result.rows[0].id
    });

  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}