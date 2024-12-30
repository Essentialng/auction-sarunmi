import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export function generateToken(user) {
  const token = jwt.sign(
    { 
        id: user.id, 
        firstName: user.firstName, 
        lastName: user.lastName, 
        email: user.email,
        state: user.state,
        phoneNumber: user.phoneNumber,
        profilePicture: user.profilePicture,
        nin: user.nin,
        type: user.type 
    },
    JWT_SECRET,
  );
  return token;
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}
