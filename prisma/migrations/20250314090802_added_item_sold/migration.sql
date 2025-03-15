-- CreateTable
CREATE TABLE "ItemSold" (
    "id" SERIAL NOT NULL,
    "bidId" INTEGER NOT NULL,
    "bidderId" TEXT NOT NULL,
    "soldPrice" INTEGER NOT NULL,
    "soldAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ItemSold_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ItemSold" ADD CONSTRAINT "ItemSold_bidId_fkey" FOREIGN KEY ("bidId") REFERENCES "Bid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemSold" ADD CONSTRAINT "ItemSold_bidderId_fkey" FOREIGN KEY ("bidderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
