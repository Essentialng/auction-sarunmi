/*
  Warnings:

  - Added the required column `location` to the `Other` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Other" ADD COLUMN     "location" TEXT NOT NULL;
