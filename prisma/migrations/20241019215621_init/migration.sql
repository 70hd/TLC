/*
  Warnings:

  - You are about to drop the column `PropsPageId` on the `smallProductCategory` table. All the data in the column will be lost.
  - You are about to drop the `menuPropsPage` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `smallProductCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "smallProductCategory" DROP CONSTRAINT "smallProductCategory_PropsPageId_fkey";

-- AlterTable
ALTER TABLE "smallProductCategory" DROP COLUMN "PropsPageId";

-- DropTable
DROP TABLE "menuPropsPage";

-- CreateTable
CREATE TABLE "miniProductInfo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "smallProductCategoryId" INTEGER NOT NULL,

    CONSTRAINT "miniProductInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "miniProductCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "miniProductCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "smallProductCategory_name_key" ON "smallProductCategory"("name");

-- AddForeignKey
ALTER TABLE "miniProductInfo" ADD CONSTRAINT "miniProductInfo_smallProductCategoryId_fkey" FOREIGN KEY ("smallProductCategoryId") REFERENCES "miniProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
