/*
  Warnings:

  - Added the required column `views` to the `Films` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Films" ADD COLUMN     "views" TEXT NOT NULL;
