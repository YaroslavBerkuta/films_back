-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('u', 'a');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'u';
