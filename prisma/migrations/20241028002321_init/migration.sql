/*
  Warnings:

  - Added the required column `name` to the `button` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "button" ADD COLUMN     "name" TEXT NOT NULL;
