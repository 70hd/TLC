/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `miniProductCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "miniProductCategory_name_key" ON "miniProductCategory"("name");
