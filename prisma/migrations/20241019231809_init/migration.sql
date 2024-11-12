/*
  Warnings:

  - Added the required column `miniTitle` to the `miniProductInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "miniProductInfo" ADD COLUMN     "miniTitle" TEXT NOT NULL;
