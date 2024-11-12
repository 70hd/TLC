-- CreateTable
CREATE TABLE "smallProductInfo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "smallProductCategoryId" INTEGER NOT NULL,

    CONSTRAINT "smallProductInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "smallProductCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "smallProductCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "smallProductInfo_name_key" ON "smallProductInfo"("name");

-- AddForeignKey
ALTER TABLE "smallProductInfo" ADD CONSTRAINT "smallProductInfo_smallProductCategoryId_fkey" FOREIGN KEY ("smallProductCategoryId") REFERENCES "smallProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
