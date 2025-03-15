/*
  Warnings:

  - Added the required column `ownerId` to the `ItemSold` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemSold" ADD COLUMN     "ownerId" TEXT NOT NULL;
