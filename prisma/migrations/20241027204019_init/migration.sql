-- CreateTable
CREATE TABLE "homeText" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "link" TEXT,
    "homeId" INTEGER NOT NULL,

    CONSTRAINT "homeText_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "home" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "home_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "homeText" ADD CONSTRAINT "homeText_homeId_fkey" FOREIGN KEY ("homeId") REFERENCES "home"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
