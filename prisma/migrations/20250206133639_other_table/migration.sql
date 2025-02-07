/*
  Warnings:

  - Added the required column `status` to the `Other` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Other" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expireDate" TIMESTAMP(3),
ADD COLUMN     "status" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Other" ADD CONSTRAINT "Other_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
