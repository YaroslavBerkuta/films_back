-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('m', 'a', 's', 'c');

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" "CategoryType" NOT NULL DEFAULT 'm',

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_title_key" ON "Category"("title");
