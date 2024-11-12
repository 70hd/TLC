/*
  Warnings:

  - You are about to drop the column `name` on the `smallProductInfo` table. All the data in the column will be lost.
  - Added the required column `PropsPageId` to the `smallProductCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "smallProductInfo_name_key";

-- AlterTable
ALTER TABLE "smallProductCategory" ADD COLUMN     "PropsPageId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "smallProductInfo" DROP COLUMN "name";

-- CreateTable
CREATE TABLE "menuPropsPage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "menuPropsPage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "smallProductCategory" ADD CONSTRAINT "smallProductCategory_PropsPageId_fkey" FOREIGN KEY ("PropsPageId") REFERENCES "menuPropsPage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
