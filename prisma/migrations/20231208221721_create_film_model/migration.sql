-- CreateTable
CREATE TABLE "FilmsToCategory" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "filmsId" INTEGER,
    "categoryId" INTEGER,

    CONSTRAINT "FilmsToCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Films" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ratings" DOUBLE PRECISION NOT NULL,
    "slogan" TEXT NOT NULL,
    "releaseDate" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "quality" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "descriptions" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Films_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FilmsToCategory" ADD CONSTRAINT "FilmsToCategory_filmsId_fkey" FOREIGN KEY ("filmsId") REFERENCES "Films"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FilmsToCategory" ADD CONSTRAINT "FilmsToCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
