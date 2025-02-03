import { SignJWT,jwtVerify } from 'jose';

export const generateToken = async (username) => {
  const secret = new TextEncoder().encode('your-secret-key'); 

  const jwt = await new SignJWT({ username })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(secret);
  localStorage.setItem('token', jwt);
};

export const decodeToken = async (token) => {
    const secret = new TextEncoder().encode('your-secret-key');

    try {
      const { payload } = await jwtVerify(token, secret);
      return payload;
    } catch (error) {
      console.error('Invalid token:', error);
      return error?.message;
    }
  };

