/*
  Warnings:

  - The primary key for the `Bid` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Bid` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Watchlist` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Watchlist` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Bid" DROP CONSTRAINT "Bid_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Bid_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Watchlist" DROP CONSTRAINT "Watchlist_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Watchlist_pkey" PRIMARY KEY ("id");
