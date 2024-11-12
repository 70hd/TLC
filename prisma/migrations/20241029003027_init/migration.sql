/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `form` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "form_email_key" ON "form"("email");
