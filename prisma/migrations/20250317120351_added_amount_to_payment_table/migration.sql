/*
  Warnings:

  - Added the required column `amount` to the `ItemPayment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemPayment" ADD COLUMN     "amount" INTEGER NOT NULL;
