/*
  Warnings:

  - Changed the type of `itemId` on the `Watchlist` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Watchlist" DROP COLUMN "itemId",
ADD COLUMN     "itemId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
