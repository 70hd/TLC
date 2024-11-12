-- CreateTable
CREATE TABLE "footerText" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "target" TEXT,
    "link" TEXT,
    "homeId" INTEGER NOT NULL,

    CONSTRAINT "footerText_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "footer" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "footer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "footerText" ADD CONSTRAINT "footerText_homeId_fkey" FOREIGN KEY ("homeId") REFERENCES "footer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
