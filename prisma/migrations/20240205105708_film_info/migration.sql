/*
  Warnings:

  - You are about to drop the column `country` on the `Films` table. All the data in the column will be lost.
  - You are about to drop the column `descriptions` on the `Films` table. All the data in the column will be lost.
  - You are about to drop the column `director` on the `Films` table. All the data in the column will be lost.
  - You are about to drop the column `quality` on the `Films` table. All the data in the column will be lost.
  - You are about to drop the column `ratings` on the `Films` table. All the data in the column will be lost.
  - You are about to drop the column `releaseDate` on the `Films` table. All the data in the column will be lost.
  - You are about to drop the column `slogan` on the `Films` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Films` table. All the data in the column will be lost.
  - Added the required column `filmInfoId` to the `Films` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Films" DROP COLUMN "country",
DROP COLUMN "descriptions",
DROP COLUMN "director",
DROP COLUMN "quality",
DROP COLUMN "ratings",
DROP COLUMN "releaseDate",
DROP COLUMN "slogan",
DROP COLUMN "time",
ADD COLUMN     "filmInfoId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "FilmInfo" (
    "id" SERIAL NOT NULL,
    "ratings" DOUBLE PRECISION NOT NULL,
    "slogan" TEXT NOT NULL,
    "releaseDate" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "quality" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "descriptions" TEXT NOT NULL,
    "filmId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FilmInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FilmInfo_filmId_key" ON "FilmInfo"("filmId");

-- AddForeignKey
ALTER TABLE "FilmInfo" ADD CONSTRAINT "FilmInfo_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Films"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
