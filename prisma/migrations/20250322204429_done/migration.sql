/*
  Warnings:

  - You are about to drop the column `itemid` on the `Conditions` table. All the data in the column will be lost.
  - Added the required column `itemId` to the `Conditions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Conditions" DROP CONSTRAINT "Conditions_itemid_fkey";

-- AlterTable
ALTER TABLE "Conditions" DROP COLUMN "itemid",
ADD COLUMN     "itemId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ConditionForms" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "details" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConditionForms_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Conditions" ADD CONSTRAINT "Conditions_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConditionForms" ADD CONSTRAINT "ConditionForms_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
