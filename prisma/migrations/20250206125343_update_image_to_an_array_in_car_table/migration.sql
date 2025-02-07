/*
  Warnings:

  - You are about to drop the column `productName` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `productType` on the `Car` table. All the data in the column will be lost.
  - Added the required column `proofOfOwnership` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "productName",
DROP COLUMN "productType",
ADD COLUMN     "proofOfOwnership" TEXT NOT NULL;
