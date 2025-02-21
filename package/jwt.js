import { jwtVerify, SignJWT } from 'jose'; 

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;

export async function generateToken(user) {
  try {
    const token = await new SignJWT({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      state: user.state,
      phoneNumber: user.phoneNumber,
      profilePicture: user.profilePicture,
      nin: user.nin,
      type: user.type
    })
      .setProtectedHeader({ alg: 'HS256' })  
      .sign(new TextEncoder().encode(JWT_SECRET)); 

    return token;
  } catch (error) {
    console.error('Error generating token:', error);
    return null;
  }
}



export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    return payload; 
  } catch (error) {
    console.error('Error verifying token:', error); 
    return null;
  }
}