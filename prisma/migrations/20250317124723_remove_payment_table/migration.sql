/*
  Warnings:

  - You are about to drop the `ItemPayment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ItemPayment" DROP CONSTRAINT "ItemPayment_itemId_fkey";

-- DropForeignKey
ALTER TABLE "ItemPayment" DROP CONSTRAINT "ItemPayment_userId_fkey";

-- AlterTable
ALTER TABLE "ItemSold" ADD COLUMN     "paymentAmount" INTEGER,
ADD COLUMN     "paymentDate" TIMESTAMP(3),
ADD COLUMN     "paymentStatus" TEXT;

-- DropTable
DROP TABLE "ItemPayment";
