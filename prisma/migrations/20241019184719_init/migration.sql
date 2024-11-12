/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `menuPropsPage` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `smallProductCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "menuPropsPage_name_key" ON "menuPropsPage"("name");

-- CreateIndex
CREATE UNIQUE INDEX "smallProductCategory_name_key" ON "smallProductCategory"("name");
