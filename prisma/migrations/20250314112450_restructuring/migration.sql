/*
  Warnings:

  - Added the required column `itemId` to the `ItemSold` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemSold" ADD COLUMN     "itemId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ItemSold" ADD CONSTRAINT "ItemSold_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
