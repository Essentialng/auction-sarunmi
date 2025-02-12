/*
  Warnings:

  - You are about to drop the column `productType` on the `Property` table. All the data in the column will be lost.
  - Added the required column `cOfONumber` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proofOfOwnership` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sizeAndLayout` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "productType",
ADD COLUMN     "cOfONumber" TEXT NOT NULL,
ADD COLUMN     "proofOfOwnership" TEXT NOT NULL,
ADD COLUMN     "sizeAndLayout" TEXT NOT NULL;
