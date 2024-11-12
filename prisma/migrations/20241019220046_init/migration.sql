/*
  Warnings:

  - You are about to drop the column `smallProductCategoryId` on the `miniProductInfo` table. All the data in the column will be lost.
  - Added the required column `miniProductCategoryId` to the `miniProductInfo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "miniProductInfo" DROP CONSTRAINT "miniProductInfo_smallProductCategoryId_fkey";

-- AlterTable
ALTER TABLE "miniProductInfo" DROP COLUMN "smallProductCategoryId",
ADD COLUMN     "miniProductCategoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "miniProductInfo" ADD CONSTRAINT "miniProductInfo_miniProductCategoryId_fkey" FOREIGN KEY ("miniProductCategoryId") REFERENCES "miniProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
