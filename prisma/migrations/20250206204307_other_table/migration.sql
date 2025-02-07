/*
  Warnings:

  - The `image` column on the `Property` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `productName` to the `Other` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Other" ADD COLUMN     "image" TEXT[],
ADD COLUMN     "productName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "image",
ADD COLUMN     "image" TEXT[];
