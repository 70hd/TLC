-- CreateTable
CREATE TABLE "button" (
    "id" SERIAL NOT NULL,
    "cta" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "filled" TEXT,
    "style" TEXT,

    CONSTRAINT "button_pkey" PRIMARY KEY ("id")
);
