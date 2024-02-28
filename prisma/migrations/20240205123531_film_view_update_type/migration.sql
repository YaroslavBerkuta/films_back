/*
  Warnings:

  - Changed the type of `views` on the `Films` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "FilmInfo" DROP CONSTRAINT "FilmInfo_filmId_fkey";

-- AlterTable
ALTER TABLE "FilmInfo" ALTER COLUMN "filmId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Films" DROP COLUMN "views",
ADD COLUMN     "views" INTEGER NOT NULL,
ALTER COLUMN "filmInfoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "FilmInfo" ADD CONSTRAINT "FilmInfo_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Films"("id") ON DELETE SET NULL ON UPDATE CASCADE;
