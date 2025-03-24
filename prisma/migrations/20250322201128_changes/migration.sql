-- CreateTable
CREATE TABLE "Conditions" (
    "id" SERIAL NOT NULL,
    "itemid" INTEGER NOT NULL,
    "condition" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Conditions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Conditions" ADD CONSTRAINT "Conditions_itemid_fkey" FOREIGN KEY ("itemid") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
