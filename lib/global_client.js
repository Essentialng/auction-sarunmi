import { PrismaClient } from '@prisma/client';

// Singleton pattern to ensure only one Prisma client instance
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Declare prisma globally only in Node.js environment
let prisma;

if (process.env.NODE_ENV === 'production') {
  // In production, always use a new instance of PrismaClient
  prisma = prismaClientSingleton();
} else {
  // In development, reuse the Prisma client instance across hot reloads
  if (!globalThis.prisma) { // globalThis works in both Node.js and the browser
    globalThis.prisma = prismaClientSingleton();
  }
  prisma = globalThis.prisma;
}

export default prisma;
